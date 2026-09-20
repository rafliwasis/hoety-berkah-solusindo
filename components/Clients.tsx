import Reveal from "@/components/Reveal";
import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <section id="klien" className="scroll-mt-20 border-y border-slate-200 bg-white py-20 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400">
            Dipercaya oleh perusahaan dan brand di wilayah Jabodetabek
          </p>
        </Reveal>
      </div>
      <Reveal className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-slate-950 sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-slate-950 sm:w-28" />
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={half === 1}>
              {clients.map((client, i) => (
                <span
                  key={`${half}-${client}-${i}`}
                  className="text-lg font-bold tracking-tight whitespace-nowrap text-slate-400 transition-colors hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-200"
                >
                  {client}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}