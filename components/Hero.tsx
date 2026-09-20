"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowRight, PhoneIncoming } from "@phosphor-icons/react";
import { heroImages } from "@/lib/data";
import { buildWhatsAppLink } from "@/lib/site";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

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

  return (
    <section
      id="beranda"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-slate-950 pt-24"
      aria-label="Hoety Berkah Solusindo"
    >
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 1 }}
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
        <div className="hero-gradient absolute inset-0" />
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-4 py-28 sm:px-6 lg:py-32">
        <motion.div
          className="max-w-2xl"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[12px] font-medium tracking-wide text-amber-300 backdrop-blur">
            Spare Part, Service & Instalasi Refrigerasi
          </p>
          <h1 className="text-balance text-[34px] leading-[1.1] font-bold tracking-tight text-white sm:text-[40px] lg:text-[44px]">
            Jasa Service Cold Storage, Chiller &amp; Compressor di Jabodetabek
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Spare part dan accessories compressor, service cold storage, chiller, freezer,
            preventive maintenance, instalasi cold storage dan ABF.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-amber-400 active:scale-[0.98]"
            >
              <PhoneIncoming size={18} weight="fill" />
              Hubungi Kami
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15 active:scale-[0.98]"
            >
              Lihat Layanan
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute right-4 bottom-6 left-4 z-10 flex items-center justify-between sm:right-6 sm:left-6">
        <div className="flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-amber-400" : "w-3 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur transition-colors hover:bg-white/15"
            aria-label="Slide sebelumnya"
          >
            <ArrowRight size={16} className="rotate-180" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur transition-colors hover:bg-white/15"
            aria-label="Slide berikutnya"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}