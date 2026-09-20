import Image from "next/image";
import Reveal from "@/components/Reveal";
import { aboutImage } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const focusPoints = [
  "Spare part dan accessories compressor",
  "Service cold storage, chiller dan freezer",
  "Preventive maintenance unit",
  "Instalasi cold storage dan ABF",
];

export default function About() {
  return (
    <section id="tentang" className="scroll-mt-20 bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src={aboutImage}
                alt="Gudang industri penyimpanan spare part dan peralatan refrigerasi Hoety Berkah Solusindo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <p className="text-[12px] font-semibold tracking-[0.16em] text-amber-600 uppercase dark:text-amber-400">
                Tentang Kami
              </p>
              <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Profil Perusahaan
              </h2>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                <p>
                  Hoety Berkah Solusindo bergerak di bidang penyediaan spare part dan accessories
                  compressor, serta jasa service, preventive maintenance, dan instalasi untuk
                  kebutuhan cold storage, chiller, freezer, dan ABF (Air Blast Freezer).
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-[12px] font-semibold tracking-wide text-amber-400 uppercase dark:text-amber-400">
                    Tahun Berdiri
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">
                    {siteConfig.establishedYear}
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-[12px] font-semibold tracking-wide text-amber-400 uppercase dark:text-amber-400">
                    Area Layanan
                  </p>
                  <p className="mt-1 text-2xl font-bold text-white">
                    Jabodetabek
                  </p>
                </div>
              </div>
              <ul className="mt-8 space-y-2.5">
                {focusPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[14px] text-slate-600 dark:text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}