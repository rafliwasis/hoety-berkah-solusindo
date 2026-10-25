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
              eyebrow="Tentang kami"
              title="Partner cold storage dan refrigerasi sejak 2019"
              description="PT Hoety Berkah Solusindo melayani penjualan, instalasi, service, dan maintenance cold storage serta sistem refrigerasi untuk kebutuhan industri dan usaha."
            />
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Sejak 2019, teknisi berpengalaman kami mendampingi mulai dari perencanaan, pemasangan, hingga perawatan berkala—agar produk tetap berkualitas dan operasional bisnis berjalan lancar.
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