"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react";
import ProductForm from "@/components/admin/ProductForm";
import { useProducts } from "@/lib/store";

export default function AdminEditProductPage() {
  const params = useParams<{ id: string }>();
  const { products, loading } = useProducts();

  const product = products.find((item) => item.id === params.id);

  if (!product) {
    if (loading) {
      return <p className="text-sm text-slate-500">Memuat produk…</p>;
    }

    return (
      <div className="flex flex-col items-start gap-3">
        <p className="text-sm font-semibold text-red-600">
          Produk tidak ditemukan.
        </p>
        <Link
          href="/admin/produk"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
        >
          <ArrowLeft size={16} weight="bold" />
          Kembali ke daftar produk
        </Link>
      </div>
    );
  }

  return <ProductForm initial={product} />;
}
