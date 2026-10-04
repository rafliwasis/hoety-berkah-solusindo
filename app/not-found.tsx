import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <section className="flex min-h-[100dvh] items-center justify-center bg-brand-canvas px-4 py-24">
      <div className="max-w-md text-center">
        <p className="text-[56px] font-black tracking-tight text-brand-ink">404</p>
        <h1 className="mt-2 text-xl font-bold text-slate-900">
          Halaman tidak ditemukan
        </h1>
        <a
          href="#beranda"
          className="mt-6 inline-flex items-center rounded-lg bg-sun-500 px-6 py-3 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300"
        >
          Kembali ke Beranda
        </a>
      </div>
    </section>
  );
}
