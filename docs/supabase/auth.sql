-- Auth untuk admin.
-- Jalankan setelah supabase/schema.sql.
-- Public tetap bisa membaca produk & kategori.
-- Hanya user login (authenticated) yang bisa menulis.

drop policy if exists "public write categories" on public.categories;
drop policy if exists "public write products" on public.products;
drop policy if exists "auth write categories" on public.categories;
drop policy if exists "auth write products" on public.products;

create policy "auth write categories"
  on public.categories
  for all
  to authenticated
  using (true)
  with check (true);

create policy "auth write products"
  on public.products
  for all
  to authenticated
  using (true)
  with check (true);
