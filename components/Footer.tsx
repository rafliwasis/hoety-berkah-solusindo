import { Snowflake } from "@phosphor-icons/react/ssr";
import { categories, categoryLabels } from "@/lib/data";
import {
  siteConfig,
  buildWhatsAppLink,
  formatWhatsAppNumber,
} from "@/lib/site";

const layananLinks = [
  "Spare Part Compressor",
  "Service Cold Storage",
  "Service Chiller & Freezer",
  "Preventive Maintenance",
  "Instalasi Cold Storage",
  "Instalasi ABF",
];

const produkLinks = categories.slice(0, 6).map((c) => categoryLabels[c]);

const contacts = [
  { label: "WhatsApp", value: formatWhatsAppNumber(), href: buildWhatsAppLink() },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    label: "Tokopedia",
    value: siteConfig.tokopediaName,
    href: siteConfig.tokopediaUrl,
  },
];

function FooterColumn({
  title,
  href,
  links,
}: {
  title: string;
  href: string;
  links: string[];
}) {
  return (
    <nav>
      <h2 className="text-[11px] font-bold tracking-[0.16em] text-brand-200 uppercase">
        {title}
      </h2>
      <ul className="mt-3.5 space-y-2">
        {links.map((label) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-brand-100 transition-colors hover:text-sun-500"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-onyx py-10 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-8 sm:grid-cols-2 lg:grid-cols-[1.9fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#beranda"
              className="flex items-center gap-2.5 text-lg font-black tracking-tight"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-sun-500 text-brand-onyx">
                <Snowflake size={18} weight="fill" />
              </span>
              <span className="text-white">
                Hoety Berkah <span className="text-sun-500">Solusindo</span>
              </span>
            </a>
            <p className="mt-3.5 text-sm leading-relaxed text-brand-100">
              Spare part dan service refrigerasi untuk industri, komersial, dan
              distribusi di seluruh Jabodetabek.
            </p>
          </div>

          <FooterColumn title="Layanan" href="#layanan" links={layananLinks} />
          <FooterColumn title="Produk" href="#produk" links={produkLinks} />

          <div>
            <h2 className="text-[11px] font-bold tracking-[0.16em] text-brand-200 uppercase">
              Hubungi Kami
            </h2>
            <ul className="mt-3.5 space-y-3">
              {contacts.map(({ label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block text-sm"
                  >
                    <span className="block font-semibold text-white transition-colors group-hover:text-sun-500">
                      {label}
                    </span>
                    <span className="block break-words text-brand-100">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-brand-900 pt-5 text-xs text-brand-200">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span>Spare part &amp; service refrigerasi Jabodetabek</span>
        </div>
      </div>
    </footer>
  );
}