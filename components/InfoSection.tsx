"use client";

import { Snowflake, Wind } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";

export default function InfoSection() {
  return (
    <section className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Tentang Cold Storage &amp; ABF
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <Reveal delay={0.1}>
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-[0_24px_60px_-16px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.5)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500 text-slate-950 transition-colors group-hover:bg-amber-400">
                <Snowflake size={26} weight="duotone" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Apa itu Cold Storage?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                Cold storage adalah ruangan dengan sistem pendingin khusus yang digunakan untuk menyimpan
                produk pada suhu tertentu sesuai kebutuhan. Cocok untuk penyimpanan makanan beku,
                daging, sayuran, produk dairy, farmasi, hingga bahan baku industri.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.2}>
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-[0_24px_60px_-16px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.5)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500 text-slate-950 transition-colors group-hover:bg-amber-400">
                <Wind size={26} weight="duotone" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Apa itu ABF (Air Blast Freezer)?
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                Air Blast Freezer adalah sistem pembekuan cepat menggunakan aliran udara bersuhu rendah.
                Proses ini menjaga kualitas tekstur dan rasa produk makanan saat pembekuan, sehingga
                sangat dibutuhkan di industri pengolahan makanan beku.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}