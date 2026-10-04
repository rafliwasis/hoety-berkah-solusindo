"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "motion/react";
import { Snowflake, WhatsappLogo, List, X } from "@phosphor-icons/react";
import { buildWhatsAppLink } from "@/lib/site";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Produk", href: "#produk" },
  { label: "Tentang", href: "#tentang" },
  { label: "Klien", href: "#klien" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const onHome = pathname === "/";
  const resolve = (href: string) => (onHome ? href : `/${href}`);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_rgba(36,16,63,0.06)] backdrop-blur"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:h-[72px] lg:px-8">
        <a
          href={resolve("#beranda")}
          className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-brand-ink"
          aria-label="Hoety Berkah Solusindo - Beranda"
        >
          <span className="grid size-9 place-items-center rounded-lg bg-sun-500 text-brand-ink">
            <Snowflake size={20} weight="fill" />
          </span>
          <span className="text-base leading-none">
            Hoety Berkah <span className="text-brand-700">Solusindo</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={resolve(link.href)}
                className="text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-sun-500 px-5 py-2.5 text-sm font-semibold text-brand-onyx transition-shadow hover:bg-sun-300 active:scale-[0.98] sm:inline-flex"
          >
            <WhatsappLogo size={18} weight="fill" />
            Hubungi Kami
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-brand-ink transition-colors hover:bg-slate-50 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={resolve(link.href)}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[15px] font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sun-500 px-5 py-3 text-sm font-semibold text-brand-onyx"
              >
                <WhatsappLogo size={18} weight="fill" />
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
