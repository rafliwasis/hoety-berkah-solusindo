import { Snowflake, Wind } from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function InfoSection() {
  return (
    <section id="tentang" className="scroll-mt-20 bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Dasar-dasar"
            title="Dua hal yang paling sering ditanyakan"
            description="Sebelum bicara soal harga, biasanya pelanggan kami mulai dari dua pertanyaan ini."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Reveal delay={0.1}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-6 grid size-12 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <Snowflake size={26} weight="duotone" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Apa itu cold storage?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Ruangan bersuhu rendah untuk menyimpan produk agar tetap segar dan
                aman. Biasa dipakai untuk makanan beku, daging, sayuran, produk
                dairy, farmasi, sampai bahan baku industri.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.2}>
            <article className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-6 grid size-12 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <Wind size={26} weight="duotone" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Apa itu ABF (Air Blast Freezer)?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Sistem pembekuan cepat dengan udara dingin berkecepatan tinggi.
                Produk membeku lebih singkat dan merata, sehingga tekstur dan
                rasanya tidak rusak.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}