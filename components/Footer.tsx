"use client";

import { WhatsappLogo, MapPin, Phone, Envelope } from "@phosphor-icons/react";
import { siteConfig, buildWhatsAppLink } from "@/lib/site";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Produk", href: "#produk" },
  { label: "Tentang", href: "#tentang" },
  { label: "Klien", href: "#klien" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-slate-950">
                HB
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-base font-bold tracking-tight text-white">
                  Hoety Berkah
                </span>
                <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
                  Solusindo
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-slate-400">
              {siteConfig.tagline}. Melayani kebutuhan refrigerasi industri di wilayah Jabodetabek.
            </p>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
              Navigasi
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] font-medium text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
              Area Layanan
            </h4>
            <ul className="mt-4 space-y-2">
              {siteConfig.serviceArea.map((city) => (
                <li key={city} className="flex items-center gap-2 text-[14px] font-medium text-slate-400">
                  <MapPin size={14} weight="bold" className="text-amber-500" />
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
              Hubungi Kami
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-medium text-slate-400 transition-colors hover:text-amber-400"
                >
                  <WhatsappLogo size={16} weight="fill" className="text-amber-500" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2 text-[14px] text-slate-400">
                <Phone size={14} weight="bold" className="text-amber-500" />
                {siteConfig.phone}
              </li>
              <li className="flex items-center gap-2 text-[14px] text-slate-400">
                <Envelope size={14} weight="bold" className="text-amber-500" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-slate-800 pt-6 text-center">
          <p className="text-[13px] text-slate-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}