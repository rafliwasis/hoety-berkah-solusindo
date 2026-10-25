-- Hoety Berkah Solusindo — skema database (Supabase / PostgreSQL)
-- Jalankan di Supabase Dashboard → SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category_id uuid references public.categories (id) on delete restrict,
  price bigint not null check (price > 0),
  discount_price bigint check (discount_price > 0),
  short_description text not null default '',
  description text not null default '',
  images jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists products_category_id_idx
  on public.products (category_id);

-- updated_at otomatis
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
before update on public.products
for each row execute function public.set_updated_at();

-- ============================================================
-- RLS (MVP: admin belum pakai auth, jadi akses dibuka)
-- PENTING: ganti policy ini setelah Supabase Auth diaktifkan.
-- ============================================================
alter table public.categories enable row level security;
alter table public.products enable row level security;

drop policy if exists "public read categories" on public.categories;
drop policy if exists "public write categories" on public.categories;
create policy "public read categories"
  on public.categories for select using (true);
create policy "public write categories"
  on public.categories for all using (true) with check (true);

drop policy if exists "public read products" on public.products;
drop policy if exists "public write products" on public.products;
create policy "public read products"
  on public.products for select using (true);
create policy "public write products"
  on public.products for all using (true) with check (true);
