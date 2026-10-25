"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, WhatsappLogo, Package } from "@phosphor-icons/react";
import ProductGallery from "@/components/ProductGallery";
import { useCategories, useProducts } from "@/lib/store";
import { isCloudinaryUrl, optimizedImageUrl } from "@/lib/cloudinary";
import { buildWhatsAppLink, buildProductMessage } from "@/lib/site";

function formatPrice(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);
}

function PriceBlock({ price, discountPrice }: { price: number; discountPrice?: number }) {
  if (discountPrice == null) {
    return (
      <p className="text-3xl font-black text-brand-ink">{formatPrice(price)}</p>
    );
  }

  return (
    <div className="flex flex-wrap items-baseline gap-3">
      <span className="text-3xl font-black text-brand-ink">
        {formatPrice(discountPrice)}
      </span>
      <span className="text-base text-slate-400 line-through">
        {formatPrice(price)}
      </span>
    </div>
  );
}

function InfoRow({
  Icon,
  label,
  value,
}: {
  Icon: typeof Package;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3">
      <Icon size={18} weight="duotone" className="mt-0.5 shrink-0 text-brand-600" />
      <span className="text-sm">
        <span className="block text-slate-500">{label}</span>
        <span className="block font-semibold text-slate-900">{value}</span>
      </span>
    </div>
  );
}

export default function ProductDetail({ slug }: { slug: string }) {
  const { products, loading } = useProducts();
  const { categories } = useCategories();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    if (loading) {
      return (
        <main className="bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <p className="text-sm text-slate-500">Memuat produk…</p>
          </div>
        </main>
      );
    }

    return (
      <main className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-5 py-24 lg:px-8">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-600 uppercase">
            Produk tidak ditemukan
          </p>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">
            Produk ini sudah tidak tersedia
          </h1>
          <p className="max-w-xl leading-7 text-slate-600">
            Mungkin produk sudah dihapus atau tautannya berubah. Silakan kembali ke
            katalog untuk melihat produk lain.
          </p>
          <Link
            href="/#produk"
            className="mt-2 inline-flex items-center gap-2 rounded-lg bg-brand-ink px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-900"
          >
            <ArrowLeft size={16} weight="bold" />
            Kembali ke katalog
          </Link>
        </div>
      </main>
    );
  }

  const categoryName =
    categories.find((category) => category.id === product.category)?.name ??
    "Lainnya";
  const related = products
    .filter((item) => item.id !== product.id)
    .slice(0, 4);
  const paragraphs = product.description
    .split("\n\n")
    .map((text) => text.trim())
    .filter(Boolean);

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Link
          href="/#produk"
          className="inline-flex items-center gap-1.5 py-5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
        >
          <ArrowLeft size={16} weight="bold" />
          Kembali ke katalog
        </Link>

        <div className="grid gap-10 pb-14 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <ProductGallery images={product.images} alt={product.name} />

          <div className="lg:pt-2">
            <p className="text-xs font-bold tracking-[0.16em] text-brand-600 uppercase">
              {categoryName}
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 lg:text-4xl">
              {product.name}
            </h1>

            <div className="mt-5 border-y border-slate-200 py-5">
              <PriceBlock
                price={product.price}
                discountPrice={product.discountPrice}
              />
            </div>

            {product.shortDescription && (
              <p className="mt-5 leading-7 text-slate-600">
                {product.shortDescription}
              </p>
            )}

            <a
              href={buildWhatsAppLink(buildProductMessage(product.name))}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sun-500 px-5 py-3.5 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300"
            >
              <WhatsappLogo size={18} weight="fill" />
              Tanya via WhatsApp
            </a>

            <div className="mt-7 border-y border-slate-200">
              <InfoRow
                Icon={Package}
                label="Ketersediaan"
                value="Ready stock, kirim secepatnya"
              />
            </div>
          </div>
        </div>

        {paragraphs.length > 0 && (
          <section className="border-t border-slate-200 py-12">
            <h2 className="text-xl font-black tracking-tight text-slate-900">
              Deskripsi
            </h2>
            <div className="mt-4 max-w-3xl space-y-4">
              {paragraphs.map((text, i) => (
                <p key={i} className="leading-8 text-slate-600">
                  {text}
                </p>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="border-t border-slate-200 py-12">
            <h2 className="text-xl font-black tracking-tight text-slate-900">
              Produk lainnya
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => {
                const itemCategory =
                  categories.find((category) => category.id === item.category)
                    ?.name ?? "Lainnya";
                return (
                  <Link
                    key={item.id}
                    href={`/katalog/${item.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-white">
                      <Image
                        src={optimizedImageUrl(item.images[0], 600)}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 300px"
                        className="object-contain p-3 transition duration-500 group-hover:scale-105"
                        unoptimized={isCloudinaryUrl(item.images[0])}
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <p className="text-[11px] font-bold tracking-wider text-brand-600 uppercase">
                        {itemCategory}
                      </p>
                      <h3 className="mt-1.5 line-clamp-2 min-h-10 text-sm font-semibold text-slate-900 group-hover:text-brand-700">
                        {item.name}
                      </h3>
                      <div className="mt-auto pt-3">
                        <p className="text-base font-black text-brand-ink">
                          {formatPrice(item.discountPrice ?? item.price)}
                        </p>
                        {item.discountPrice != null && (
                          <p className="text-xs text-slate-400 line-through">
                            {formatPrice(item.price)}
                          </p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
