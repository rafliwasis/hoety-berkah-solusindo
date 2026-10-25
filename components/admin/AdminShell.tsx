"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Package,
  Tag,
  ArrowSquareOut,
  UserCircle,
  SignOut,
} from "@phosphor-icons/react";
import { displayUsername, signOutAdmin, useAdminSession } from "@/lib/auth";

const navItems = [
  { href: "/admin/produk", label: "Produk", icon: Package },
  { href: "/admin/kategori", label: "Kategori", icon: Tag },
  { href: "/admin/akun", label: "Akun", icon: UserCircle },
];

function isActive(pathname: string, href: string) {
  return pathname.startsWith(href);
}

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { session, loading } = useAdminSession();

  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) return;
    if (!loading && !session) router.replace("/admin/login");
  }, [isLoginPage, loading, session, router]);

  const handleLogout = async () => {
    await signOutAdmin();
    router.replace("/admin/login");
    router.refresh();
  };

  if (isLoginPage) return <>{children}</>;

  if (loading || !session) {
    return (
      <div className="grid min-h-screen place-items-center bg-brand-canvas">
        <p className="text-sm text-slate-500">Memeriksa sesi…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-canvas text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/10 bg-brand-hero text-white lg:flex">
        <Link
          href="/admin/produk"
          className="flex items-center gap-2.5 border-b border-white/10 px-5 py-5"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-white">
            <Image
              src="/hoety-logo.png"
              alt=""
              width={40}
              height={40}
              className="size-8 object-contain"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-black tracking-tight">
              Hoety Berkah
            </span>
            <span className="block text-[11px] font-semibold tracking-[0.16em] text-brand-200 uppercase">
              Admin panel
            </span>
          </span>
        </Link>

        <nav className="flex-1 space-y-1 px-3 py-5">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-sun-500 text-brand-onyx"
                    : "text-brand-100 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon size={18} weight={active ? "fill" : "regular"} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-white/10 p-3">
          <p className="px-3 pb-2 text-[11px] font-semibold tracking-wide text-brand-300">
            Masuk sebagai{" "}
            <span className="text-white">{displayUsername(session)}</span>
          </p>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-100 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ArrowSquareOut size={18} />
            Lihat situs
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-brand-100 transition-colors hover:bg-white/10 hover:text-white"
          >
            <SignOut size={18} />
            Keluar
          </button>
          <p className="mt-2 px-3 pb-1 text-[11px] leading-relaxed text-brand-300">
            Data tersimpan di Supabase project.
          </p>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/admin/produk" className="flex items-center gap-2">
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white">
                <Image
                  src="/hoety-logo.png"
                  alt=""
                  width={36}
                  height={36}
                  className="size-7 object-contain"
                />
              </span>
              <span className="text-sm font-black tracking-tight text-brand-ink">
                Admin Panel
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-xs font-bold text-brand-700"
                aria-label="Lihat situs"
              >
                Lihat situs
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="text-xs font-bold text-slate-500"
              >
                Keluar
              </button>
            </div>
          </div>
          <nav className="flex gap-1 overflow-x-auto px-3 pb-2 scrollbar-none">
            {navItems.map(({ href, label }) => {
              const active = isActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                    active
                      ? "bg-brand-ink text-white"
                      : "text-slate-600 hover:bg-brand-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
