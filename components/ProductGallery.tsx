"use client";

import { useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface ProductGalleryProps {
  images: string[];
  alt: string;
  badge?: string | null;
}

export default function ProductGallery({
  images,
  alt,
  badge = null,
}: ProductGalleryProps) {
  const [index, setIndex] = useState(0);

  const go = (dir: -1 | 1) => {
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div>
      <div className="group relative aspect-[4/3] w-full overflow-hidden bg-white sm:aspect-[5/4] lg:aspect-[4/3]">
        <Image
          key={images[index]}
          src={images[index]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain p-3"
        />

        {badge && (
          <span className="absolute top-4 left-4 rounded-md bg-sun-500 px-2.5 py-1 text-xs font-black text-brand-onyx">
            {badge}
          </span>
        )}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute top-1/2 left-3 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-700 shadow transition hover:bg-white"
              aria-label="Foto sebelumnya"
            >
              <CaretLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute top-1/2 right-3 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-700 shadow transition hover:bg-white"
              aria-label="Foto berikutnya"
            >
              <CaretRight size={16} />
            </button>
            <span className="absolute right-4 bottom-4 rounded-full bg-slate-900/70 px-2.5 py-1 text-xs font-semibold text-white tabular-nums">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Lihat foto ${i + 1}`}
              aria-current={i === index}
              className={`relative aspect-square w-20 shrink-0 overflow-hidden border-2 bg-white transition-colors sm:w-24 ${
                i === index
                  ? "border-brand-ink"
                  : "border-transparent hover:border-slate-300"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="96px"
                className="object-contain p-0.5"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}