import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  WhatsappLogo,
  ShieldCheck,
  Package,
} from "@phosphor-icons/react/ssr";
import ProductGallery from "@/components/ProductGallery";
import {
  products,
  categoryLabels,
  promoPercent,
  relatedProducts,
  type Product,
} from "@/lib/data";
import { buildWhatsAppLink, buildProductMessage, siteConfig } from "@/lib/site";

function formatPrice(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Produk Tidak Ditemukan" };

  return {
    title: product.name,
    description: product.description.split("\n\n")[0],
    openGraph: {
      title: `${product.name} | ${siteConfig.name}`,
      description: product.description.split("\n\n")[0],
      images: [{ url: product.images[0] }],
    },
  };
}

function PriceBlock({ product }: { product: Product }) {
  const percent = promoPercent(product);

  if (percent == null) {
    return (
      <p className="text-3xl font-black text-brand-ink">
        {formatPrice(product.price)}
      </p>
    );
  }

  const finalPrice = product.discountPrice!;
  return (
    <div>
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="text-3xl font-black text-brand-ink">
          {formatPrice(finalPrice)}
        </span>
        <span className="text-base text-slate-400 line-through">
          {formatPrice(product.price)}
        </span>
      </div>
      <p className="mt-1.5 text-sm font-semibold text-brand-700">
        Hemat {formatPrice(product.price - finalPrice)} · Potongan {percent}%
      </p>
    </div>
  );
}

function InfoRow({
  Icon,
  label,
  value,
}: {
  Icon: typeof ShieldCheck;
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

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product: Product | undefined = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const percent = promoPercent(product);
  const paragraphs = product.description.split("\n\n");
  const related = relatedProducts(product.id, 4);

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
          <ProductGallery
            images={product.images}
            alt={product.name}
            badge={percent != null ? `PROMO ${percent}%` : null}
          />

          <div className="lg:pt-2">
            <p className="text-xs font-bold tracking-[0.16em] text-brand-600 uppercase">
              {categoryLabels[product.category]}
            </p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 lg:text-4xl">
              {product.name}
            </h1>

            <div className="mt-5 border-y border-slate-200 py-5">
              <PriceBlock product={product} />
            </div>

            <p className="mt-5 leading-7 text-slate-600">{paragraphs[0]}</p>

            <a
              href={buildWhatsAppLink(buildProductMessage(product.name))}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sun-500 px-5 py-3.5 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300"
            >
              <WhatsappLogo size={18} weight="fill" />
              Tanya via WhatsApp
            </a>

            <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
              <InfoRow
                Icon={Package}
                label="Ketersediaan"
                value="Ready stock, kirim secepatnya"
              />
              <InfoRow
                Icon={ShieldCheck}
                label="Garansi"
                value={product.warranty}
              />
            </div>
          </div>
        </div>

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

        <section className="border-t border-slate-200 py-12">
          <h2 className="text-xl font-black tracking-tight text-slate-900">
            Produk lainnya
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.id}
                href={`/katalog/${item.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-white">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 300px"
                    className="object-contain p-3 transition duration-500 group-hover:scale-105"
                  />
                  {promoPercent(item) != null && (
                    <span className="absolute top-2 left-2 rounded bg-sun-500 px-2 py-0.5 text-[10px] font-black text-brand-onyx">
                      PROMO
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[11px] font-bold tracking-wider text-brand-600 uppercase">
                    {categoryLabels[item.category]}
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
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}