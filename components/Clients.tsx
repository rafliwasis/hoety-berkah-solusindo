import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <section
      id="klien"
      className="scroll-mt-20 overflow-hidden bg-brand-onyx py-14"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-center text-sm font-bold tracking-[0.18em] text-brand-100 uppercase">
          Dipercaya oleh berbagai bisnis
        </p>
      </div>

      <div className="group relative mt-9 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-brand-onyx to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-brand-onyx to-transparent sm:w-28" />
        <div className="flex w-max animate-marquee will-change-transform">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1}
            >
              {clients.map((client) => (
                <li
                  key={`${copy}-${client}`}
                  className="mx-6 text-lg font-black whitespace-nowrap text-brand-100 transition-colors hover:text-sun-500 sm:mx-8"
                >
                  {client}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}