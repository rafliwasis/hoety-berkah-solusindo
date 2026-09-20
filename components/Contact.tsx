"use client";

import {
  MapPin,
  Phone,
  Envelope,
  Clock,
  WhatsappLogo,
} from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import { siteConfig, buildWhatsAppLink, mapEmbedUrl } from "@/lib/site";

export default function Contact() {
  return (
    <section id="kontak" className="scroll-mt-20 bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Hubungi Kami
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-400">
            Konsultasikan kebutuhan refrigerasi bisnis Anda. Kami siap membantu kapan saja.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal delay={0.1}>
            <div>
              <ul className="divide-y divide-slate-200">
                <li className="flex items-start gap-4 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400 shadow-sm">
                    <MapPin size={20} weight="bold" />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-500 uppercase dark:text-slate-400">Alamat</p>
                    <p className="mt-0.5 text-[15px] font-medium text-slate-900 dark:text-white">
                      {siteConfig.address}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400 shadow-sm">
                    <Phone size={20} weight="bold" />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-500 uppercase dark:text-slate-400">Telepon / WhatsApp</p>
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-0.5 inline-flex text-[15px] font-medium text-slate-900 transition-colors hover:text-amber-600 dark:text-white dark:hover:text-amber-400"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400 shadow-sm">
                    <Envelope size={20} weight="bold" />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-500 uppercase dark:text-slate-400">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="mt-0.5 inline-flex text-[15px] font-medium text-slate-900 transition-colors hover:text-amber-600 dark:text-white dark:hover:text-amber-400"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-amber-400 shadow-sm">
                    <Clock size={20} weight="bold" />
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-slate-500 uppercase dark:text-slate-400">Jam Operasional</p>
                    <p className="mt-0.5 text-[15px] font-medium text-slate-900 dark:text-white">
                      {siteConfig.hours}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-6">
                <p className="text-[13px] font-semibold text-slate-500 uppercase dark:text-slate-400">Area Layanan</p>
                <p className="mt-2 text-[15px] font-medium text-slate-900 dark:text-white">
                  Jakarta, Bekasi, Tangerang, Depok, Bogor
                </p>
              </div>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-shadow hover:shadow-[0_12px_28px_-8px_rgba(245,158,11,0.5)] active:scale-[0.98]"
              >
                <WhatsappLogo size={18} weight="fill" />
                Hubungi Kami
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
              <iframe
                src={mapEmbedUrl}
                title="Lokasi Hoety Berkah Solusindo di Bekasi, Jawa Barat"
                className="h-full min-h-[400px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}