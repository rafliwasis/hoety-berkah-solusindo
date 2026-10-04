"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { WhatsappLogo, CaretDown, CaretUp } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { products, categories, categoryLabels } from "@/lib/data";
import { buildWhatsAppLink, buildProductMessage } from "@/lib/site";

const VISIBLE_COUNT = 6;

const filterCategories = categories.map((c) => categoryLabels[c]);

function formatPrice(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 w-full overflow-hidden bg-white">
        <div className="absolute inset-0 p-3 transition-transform duration-500 group-hover:scale-105">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain"
            loading="lazy"
          />
        </div>
        {product.discountPrice != null && (
          <span className="absolute top-3 left-3 rounded-md bg-sun-500 px-2.5 py-1 text-[11px] font-black text-brand-onyx">
            PROMO
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-[11px] font-bold tracking-wider text-brand-600 uppercase">
          {categoryLabels[product.category]}
        </p>
        <h3 className="mt-1.5 min-h-10 text-sm leading-snug font-bold text-slate-900">
          {product.name}
        </h3>
        <div className="mt-2 min-h-6">
          {product.discountPrice != null ? (
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-base font-black text-brand-ink">
                {formatPrice(product.discountPrice)}
              </span>
              <span className="text-xs text-slate-400 line-through">
                {formatPrice(product.price)}
              </span>
            </div>
          ) : (
            <span className="text-base font-black text-brand-ink">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
        <div className="mt-auto grid grid-cols-2 gap-2 pt-3">
          <Link
            href={`/katalog/${product.slug}`}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-[13px] font-bold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Lihat Detail
          </Link>
          <a
            href={buildWhatsAppLink(buildProductMessage(product.name))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1 rounded-lg bg-sun-500 px-3 py-2 text-[13px] font-bold text-brand-onyx transition-colors hover:bg-sun-300"
            aria-label={`Konsultasi ${product.name} via WhatsApp`}
          >
            <WhatsappLogo size={15} weight="fill" />
            WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  const [active, setActive] = useState<string>("Semua");
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const pendingScrollToGrid = useRef(false);

  const filtered =
    active === "Semua"
      ? products
      : products.filter((p) => categoryLabels[p.category] === active);
  const visible = expanded ? filtered : filtered.slice(0, VISIBLE_COUNT);

  const handleToggle = () => {
    if (expanded) pendingScrollToGrid.current = true;
    setExpanded((v) => !v);
  };

  useEffect(() => {
    if (!pendingScrollToGrid.current) return;
    pendingScrollToGrid.current = false;
    const id = window.setTimeout(() => {
      const el = gridRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const y = Math.max(0, rect.bottom + window.scrollY - window.innerHeight + 32);
      window.scrollTo({
        top: y,
        behavior: reduce ? "auto" : "smooth",
      });
    }, 320);
    return () => window.clearTimeout(id);
  }, [expanded, reduce]);

  return (
    <section id="produk" className="scroll-mt-20 bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Katalog pilihan"
            title="Produk dan spare part"
            description="Komponen berkualitas supaya sistem pendingin Anda tetap bekerja optimal."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-7 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {["Semua", ...filterCategories].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActive(cat);
                  setExpanded(false);
                }}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-semibold whitespace-nowrap transition-colors ${
                  active === cat
                    ? "border-brand-ink bg-brand-ink text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {filtered.length === 0 ? (
            <div className="mt-7 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="text-sm font-medium text-slate-600">
                Belum ada produk pada kategori ini. Hubungi kami untuk informasi
                ketersediaan.
              </p>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sun-500 px-5 py-2.5 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300"
              >
                <WhatsappLogo size={16} weight="fill" />
                Hubungi Kami
              </a>
            </div>
          ) : (
            <div ref={gridRef} className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {visible.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {filtered.length > VISIBLE_COUNT && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={handleToggle}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-ink px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-900"
              >
                {expanded ? "Tampilkan Lebih Sedikit" : "Lihat Semua Produk"}
                {expanded ? <CaretUp size={16} /> : <CaretDown size={16} />}
              </button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}