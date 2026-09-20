"use client";

import {
  Wrench,
  Snowflake,
  ThermometerSimple,
  ShieldCheck,
  Warehouse,
  Wind,
  ArrowRight,
} from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";
import { buildWhatsAppLink, buildServiceMessage } from "@/lib/site";

const serviceIcons = [Wrench, Snowflake, ThermometerSimple, ShieldCheck, Warehouse, Wind];

export default function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-slate-900 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <p className="text-[12px] font-semibold tracking-[0.16em] text-amber-300 uppercase">
            Layanan Kami
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Solusi Refrigerasi untuk Kebutuhan Bisnis Anda
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={service.id} delay={0.05 * i}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-7 transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.4)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-amber-300 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
                    <Icon size={24} weight="duotone" />
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
                    {service.description}
                  </p>
                  <a
                    href={buildWhatsAppLink(buildServiceMessage(service.title))}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200"
                  >
                    Hubungi Kami
                    <ArrowRight size={16} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}