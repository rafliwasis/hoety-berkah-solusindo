"use client";

import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { WhatsappLogo, List, X } from "@phosphor-icons/react";
import { siteConfig, buildWhatsAppLink } from "@/lib/site";

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
  const { scrollY } = useScroll();

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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-[0_1px_0_rgba(15,23,42,0.06)] backdrop-blur dark:bg-slate-950/90"
          : "bg-white dark:bg-slate-950"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:h-[72px]">
        <a href="#beranda" className="flex items-center gap-2.5" aria-label="Hoety Berkah Solusindo - Beranda">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-amber-400 dark:bg-slate-800">
            HB
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
              Hoety Berkah
            </span>
            <span className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:text-slate-400">
              Solusindo
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
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
            className="hidden items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-shadow hover:shadow-[0_8px_20px_-8px_rgba(245,158,11,0.6)] active:scale-[0.98] sm:inline-flex"
          >
            <WhatsappLogo size={18} weight="fill" />
            Hubungi Kami
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden dark:text-slate-200 dark:hover:bg-slate-800"
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <ul className="mx-auto flex max-w-[1200px] flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[15px] font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
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
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950"
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