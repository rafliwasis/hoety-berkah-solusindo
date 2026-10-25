/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Plus,
  MagnifyingGlass,
  PencilSimple,
  Trash,
} from "@phosphor-icons/react";
import { deleteProduct, useCategories, useProducts } from "@/lib/store";
import { optimizedImageUrl } from "@/lib/cloudinary";

function formatPrice(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(n);
}

export default function AdminProductsPage() {
  const { products, loading, error, refresh } = useProducts();
  const { categories } = useCategories();
  const [query, setQuery] = useState("");
  const [actionError, setActionError] = useState("");

  const categoryName = (id: string) =>
    categories.find((category) => category.id === id)?.name ?? "Tanpa kategori";

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold tracking-[0.16em] text-brand-600 uppercase">
            Katalog
          </p>
          <h1 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Produk
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            {loading ? "Memuat produk…" : `${products.length} produk tersimpan.`}
          </p>
        </div>
        <Link
          href="/admin/produk/baru"
          className="inline-flex items-center gap-2 rounded-lg bg-sun-500 px-4 py-2.5 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300"
        >
          <Plus size={16} weight="bold" />
          Tambah produk
        </Link>
      </div>

      {(actionError || error) && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {actionError || error}
        </p>
      )}

      <div className="relative max-w-sm">
        <MagnifyingGlass
          size={16}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cari produk…"
          className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pr-3 pl-9 text-sm text-slate-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {filtered.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-sm text-slate-500">
              {products.length === 0
                ? "Belum ada produk. Tambahkan produk pertama untuk mulai."
                : "Tidak ada produk yang cocok dengan pencarian."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                <tr>
                  <th className="px-4 py-3 font-bold">Produk</th>
                  <th className="px-4 py-3 font-bold">Kategori</th>
                  <th className="px-4 py-3 font-bold">Harga</th>
                  <th className="px-4 py-3 text-right font-bold">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((product) => (
                  <tr key={product.id} className="align-middle">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-slate-200 bg-white">
                          {product.images[0] ? (
                            <img
                              src={optimizedImageUrl(product.images[0], 120)}
                              alt=""
                              className="size-full object-contain p-1"
                            />
                          ) : (
                            <span className="text-[10px] text-slate-400">
                              No img
                            </span>
                          )}
                        </span>
                        <div className="min-w-0">
                          <p className="max-w-[260px] truncate font-bold text-slate-900">
                            {product.name}
                          </p>
                          <p className="max-w-[260px] truncate text-xs text-slate-500">
                            /katalog/{product.slug}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {categoryName(product.category)}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-slate-900">
                        {formatPrice(product.discountPrice ?? product.price)}
                      </p>
                      {product.discountPrice != null && (
                        <p className="text-xs text-slate-400 line-through">
                          {formatPrice(product.price)}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Link
                          href={`/admin/produk/${product.id}`}
                          className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-700"
                          aria-label={`Edit ${product.name}`}
                        >
                          <PencilSimple size={16} />
                        </Link>
                        <button
                          type="button"
                          onClick={async () => {
                            if (
                              !window.confirm(
                                `Hapus produk "${product.name}"? Tindakan ini tidak bisa dibatalkan.`,
                              )
                            ) {
                              return;
                            }
                            setActionError("");
                            try {
                              await deleteProduct(product.id);
                              await refresh();
                            } catch (err) {
                              setActionError(
                                err instanceof Error
                                  ? err.message
                                  : "Gagal menghapus produk.",
                              );
                            }
                          }}
                          className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                          aria-label={`Hapus ${product.name}`}
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
