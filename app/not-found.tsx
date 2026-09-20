import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[100dvh] items-center justify-center bg-slate-50 px-4 py-24 dark:bg-slate-950">
      <div className="max-w-md text-center">
        <p className="text-[56px] font-bold tracking-tight text-slate-900 dark:text-white">404</p>
        <h1 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
          Halaman tidak ditemukan
        </h1>
        <a
          href="#beranda"
          className="mt-6 inline-flex items-center rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 active:scale-[0.98]"
        >
          Kembali ke Beranda
        </a>
      </div>
    </section>
  );
}