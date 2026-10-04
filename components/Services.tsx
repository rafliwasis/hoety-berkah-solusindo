import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/lib/data";
import { buildWhatsAppLink, buildServiceMessage } from "@/lib/site";

export default function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-brand-50 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Yang kami kerjakan"
            title="Layanan lengkap, dari spare part sampai instalasi"
            description="Satu partner untuk menjaga sistem pendingin tetap jalan stabil dan efisien."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={0.05 * i}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-brand-hero">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                  <a
                    href={buildWhatsAppLink(buildServiceMessage(service.title))}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-brand-ink px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-900"
                  >
                    Konsultasi Disini
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}