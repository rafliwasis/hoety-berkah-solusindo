import { Clock, MapPin, WhatsappLogo } from "@phosphor-icons/react/ssr";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  siteConfig,
  buildWhatsAppLink,
  formatWhatsAppNumber,
  mapEmbedUrl,
} from "@/lib/site";

export default function Contact() {
  return (
    <section id="kontak" className="scroll-mt-20 bg-brand-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <div className="flex h-full flex-col">
              <SectionHeading
                eyebrow="Kontak"
                title="Hubungi tim kami"
                description="Untuk pertanyaan teknis, kirim detail unit yang dipakai. Tim kami akan membalas pada jam kerja."
              />

              <div className="mt-8 grid gap-5">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sun-500 text-brand-onyx">
                    <WhatsappLogo size={20} weight="fill" />
                  </span>
                  <span>
                    <b className="block text-sm text-slate-900">WhatsApp</b>
                    <span className="text-sm text-slate-600 group-hover:text-brand-700">
                      {formatWhatsAppNumber()}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                    <Clock size={20} weight="bold" />
                  </span>
                  <span>
                    <b className="block text-sm text-slate-900">Jam operasional</b>
                    <span className="text-sm text-slate-600">{siteConfig.hours}</span>
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                    <MapPin size={20} weight="bold" />
                  </span>
                  <span>
                    <b className="block text-sm text-slate-900">Alamat</b>
                    <span className="text-sm text-slate-600">{siteConfig.address}</span>
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[13px] font-semibold text-slate-500 uppercase">
                  Area layanan
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {siteConfig.serviceArea.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-[13px] font-semibold text-brand-800"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sun-500 px-6 py-4 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300"
              >
                <WhatsappLogo size={20} weight="fill" />
                Chat via WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <iframe
                title="Lokasi Hoety Berkah Solusindo"
                src={mapEmbedUrl}
                className="h-full min-h-[420px] w-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}