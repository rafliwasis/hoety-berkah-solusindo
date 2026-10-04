"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  SealCheck,
  CheckCircle,
  ArrowRight,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { heroImages } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/site";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const touchStart = useRef<number | null>(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroImages.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, reduce]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(dx) < 45) return;
    if (dx < 0) next();
    else prev();
  };

  return (
    <section
      id="beranda"
      className="relative flex min-h-[720px] items-center overflow-hidden bg-brand-hero text-white"
      aria-label="Hoety Berkah Solusindo"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={heroImages[index].src}
              alt={heroImages[index].alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-r from-brand-hero via-brand-hero/75 to-brand-hero/15" />
        <div className="absolute inset-0 bg-brand-hero/20" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <motion.div
          className="max-w-2xl"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-ink px-3 py-1.5 text-xs font-bold tracking-wide text-brand-100">
            <SealCheck size={16} weight="fill" className="text-sun-500" />
            Solusi pendingin untuk bisnis modern
          </p>
          <h1 className="text-balance text-4xl leading-[1.02] font-black tracking-[-0.04em] text-white md:text-6xl">
            Solusi Dingin untuk{" "}
            <span className="text-sun-500">Bisnis yang Tumbuh</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-brand-100">
            Jasa service cold storage, chiller, compressor, penjualan spare part,
            hingga instalasi sistem pendingin untuk kebutuhan industri dan komersial.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-sun-500 px-5 py-3.5 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300 active:scale-[0.98]"
            >
              <WhatsappLogo size={18} weight="fill" />
              Hubungi Kami
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 active:scale-[0.98]"
            >
              Lihat Layanan
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-brand-100">
            <span className="flex items-center gap-2">
              <CheckCircle size={16} weight="fill" className="text-sun-500" />
              Teknisi berpengalaman
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={16} weight="fill" className="text-sun-500" />
              Respon cepat
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-5 bottom-6 z-10 flex items-center gap-2 lg:right-8">
        {heroImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-7 bg-sun-500" : "w-3 bg-white/45 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}