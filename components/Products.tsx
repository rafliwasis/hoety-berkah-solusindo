"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { WhatsappLogo, X, CaretDown } from "@phosphor-icons/react";
import Reveal from "@/components/Reveal";
import { products, categories, type ProductCategory, type Product } from "@/lib/data";
import { buildWhatsAppLink, buildProductMessage } from "@/lib/site";

const VISIBLE_COUNT = 8;

function formatPrice(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);
}

function ProductCard({
  product,
  onDetail,
}: {
  product: Product;
  onDetail: (p: Product) => void;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-16px_rgba(15,23,42,0.12)] dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.5)]">
      <div className="relative aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <Image
            src={`https://picsum.photos/seed/${product.id}/600/600`}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            loading="lazy"
          />
        </div>
        {product.discountPrice != null && (
          <span className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-[11px] font-bold text-white">
            Promo
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[12px] font-medium text-amber-600 dark:text-amber-400">
          {product.category}
        </p>
        <h3 className="mt-1 text-[15px] font-bold leading-snug tracking-tight text-slate-900 line-clamp-2 dark:text-white">
          {product.name}
        </h3>
        <div className="mt-2">
          {product.discountPrice != null ? (
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-red-500">
                {formatPrice(product.discountPrice)}
              </span>
              <span className="text-sm text-slate-400 line-through">
                {formatPrice(product.price)}
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-slate-900 dark:text-white">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
        <div className="mt-auto flex gap-2 pt-4">
          <button
            type="button"
            onClick={() => onDetail(product)}
            className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-slate-800 transition-colors hover:bg-slate-50 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            Lihat Detail
          </button>
          <a
            href={buildWhatsAppLink(buildProductMessage(product.name))}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 text-slate-950 transition-colors hover:bg-amber-400 active:scale-[0.98]"
            aria-label={`Beli ${product.name} via WhatsApp`}
          >
            <WhatsappLogo size={18} weight="fill" />
          </a>
        </div>
      </div>
    </article>
  );
}

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <motion.div
        className="relative z-10 flex max-h-[90dvh] w-full max-w-[720px] flex-col overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 30, stiffness: 350 }}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow transition-colors hover:bg-white dark:bg-slate-800/90 dark:text-slate-300"
          aria-label="Tutup detail produk"
        >
          <X size={18} />
        </button>
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src={`https://picsum.photos/seed/${product.id}/800/450`}
            alt={product.name}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="flex-1 p-6 sm:p-8">
          <p className="text-[12px] font-medium text-amber-600 dark:text-amber-400">
            {product.category}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {product.name}
          </h2>
          <div className="mt-3">
            {product.discountPrice != null ? (
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-red-500">
                  {formatPrice(product.discountPrice)}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  {formatPrice(product.price)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {product.description}
          </p>
          {product.specs && product.specs.length > 0 && (
            <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Spesifikasi
              </h3>
              <dl className="mt-3 grid grid-cols-2 gap-3">
                {product.specs.map((s) => (
                  <div key={s.label}>
                    <dt className="text-[12px] font-medium text-slate-500 dark:text-slate-400">
                      {s.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-slate-900 dark:text-white">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          <a
            href={buildWhatsAppLink(buildProductMessage(product.name))}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-shadow hover:shadow-[0_12px_28px_-8px_rgba(245,158,11,0.5)] active:scale-[0.98]"
          >
            <WhatsappLogo size={18} weight="fill" />
            Hubungi Kami
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products() {
  const [active, setActive] = useState<ProductCategory | "Semua">("Semua");
  const [expanded, setExpanded] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const reduce = useReducedMotion();

  const filtered =
    active === "Semua" ? products : products.filter((p) => p.category === active);
  const visible = expanded ? filtered : filtered.slice(0, VISIBLE_COUNT);

  const openModal = useCallback((p: Product) => setModalProduct(p), []);
  const closeModal = useCallback(() => setModalProduct(null), []);

  return (
    <section id="produk" className="scroll-mt-20 bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Produk Refrigerasi &amp; Kompresor
          </h2>
          <p className="mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-400">
            Harga dapat berubah sewaktu-waktu. Hubungi kami untuk ketersediaan dan penawaran terbaru.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              type="button"
              onClick={() => {
                setActive("Semua");
                setExpanded(false);
              }}
              className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                active === "Semua"
                  ? "border-amber-500 bg-amber-500 text-slate-950 dark:border-amber-400 dark:bg-amber-500 dark:text-slate-950"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              }`}
            >
              Semua
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActive(cat);
                  setExpanded(false);
                }}
                className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
                  active === cat
                    ? "border-amber-500 bg-amber-500 text-slate-950 dark:border-amber-400 dark:bg-amber-500 dark:text-slate-950"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {filtered.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Belum ada produk pada kategori ini. Hubungi kami untuk informasi ketersediaan.
              </p>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400"
              >
                <WhatsappLogo size={18} weight="fill" />
                Hubungi Kami
              </a>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {visible.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={reduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProductCard product={product} onDetail={openModal} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {!expanded && filtered.length > VISIBLE_COUNT && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                Lihat Semua Produk
                <CaretDown size={16} />
              </button>
            </div>
          )}
        </Reveal>
      </div>

      <AnimatePresence>
        {modalProduct && (
          <ProductModal product={modalProduct} onClose={closeModal} />
        )}
      </AnimatePresence>
    </section>
  );
}