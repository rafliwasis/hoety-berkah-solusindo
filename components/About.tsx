import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { aboutImage } from "@/lib/data";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Profil perusahaan"
              title="Bekerja dengan sistem pendingin sejak 2014"
              description="Mulai dari penyediaan spare part compressor, service cold storage dan chiller, preventive maintenance, sampai instalasi unit baru."
            />
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Sebagian besar klien kami bergerak di industri makanan, minuman, retail,
              dan distribusi. Kami dipanggil untuk perbaikan mendadak, perawatan
              berkala, maupun bangun ruang pendingin dari nol.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-brand-ink shadow-2xl shadow-brand-200">
              <Image
                src={aboutImage}
                alt="Gudang penyimpanan spare part dan peralatan refrigerasi Hoety Berkah Solusindo"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}