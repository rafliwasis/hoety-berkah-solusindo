"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Plus,
  Trash,
  FloppyDisk,
  ArrowSquareOut,
  UploadSimple,
} from "@phosphor-icons/react";
import { type Product } from "@/lib/data";
import {
  newId,
  saveProduct,
  uniqueSlug,
  useCategories,
  useProducts,
} from "@/lib/store";
import { optimizedImageUrl, uploadImage } from "@/lib/cloudinary";

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100";

const labelClass = "block text-xs font-bold text-slate-700";

function formatRupiahInput(value: string) {
  if (!value) return "";
  return new Intl.NumberFormat("id-ID").format(Number(value));
}

export default function ProductForm({ initial }: { initial?: Product }) {
  const router = useRouter();
  const { categories, loading: categoriesLoading } = useCategories();
  const { products } = useProducts();

  const [name, setName] = useState(initial?.name ?? "");
  const [category, setCategory] = useState(initial?.category ?? "");
  const [price, setPrice] = useState(
    initial ? String(initial.price) : "",
  );
  const [discountPrice, setDiscountPrice] = useState(
    initial?.discountPrice != null ? String(initial.discountPrice) : "",
  );
  const [shortDescription, setShortDescription] = useState(
    initial?.shortDescription ?? "",
  );
  const [description, setDescription] = useState(initial?.description ?? "");
  const [images, setImages] = useState<string[]>(
    initial?.images.length ? initial.images : [""],
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!categoriesLoading && !category && categories.length > 0) {
      setCategory(categories[0].id);
    }
  }, [categoriesLoading, categories, category]);

  const updateImage = (index: number, value: string) => {
    setImages((current) =>
      current.map((item, i) => (i === index ? value : item)),
    );
  };

  const removeImage = (index: number) => {
    setImages((current) => current.filter((_, i) => i !== index));
  };

  const handleFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    setUploading(true);
    setUploadError("");
    const uploaded: string[] = [];
    const failures: string[] = [];

    for (const file of Array.from(files)) {
      try {
        uploaded.push(await uploadImage(file));
      } catch (err) {
        failures.push(
          `${file.name}: ${
            err instanceof Error ? err.message : "gagal diunggah"
          }`,
        );
      }
    }

    if (uploaded.length > 0) {
      setImages((current) => [
        ...current.filter((item) => item.trim()),
        ...uploaded,
      ]);
    }
    if (failures.length > 0) setUploadError(failures.join(" "));

    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitError("");
    const nextErrors: Record<string, string> = {};

    if (!name.trim()) nextErrors.name = "Nama produk wajib diisi.";
    if (!category) nextErrors.category = "Pilih kategori produk.";

    const priceValue = Number(price);
    if (!price.trim() || Number.isNaN(priceValue) || priceValue <= 0) {
      nextErrors.price = "Harga harus lebih dari 0.";
    }

    let discountValue: number | undefined;
    if (discountPrice.trim()) {
      discountValue = Number(discountPrice);
      if (Number.isNaN(discountValue) || discountValue <= 0) {
        nextErrors.discountPrice = "Harga diskon harus lebih dari 0.";
      } else if (discountValue >= priceValue) {
        nextErrors.discountPrice =
          "Harga diskon harus lebih kecil dari harga asli.";
      }
    }

    if (!shortDescription.trim()) {
      nextErrors.shortDescription = "Deskripsi singkat wajib diisi.";
    }

    const cleanImages = images.map((item) => item.trim()).filter(Boolean);
    if (cleanImages.length === 0) {
      nextErrors.images = "Minimal satu gambar produk.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const id = initial?.id ?? newId();
    const product: Product = {
      id,
      slug: initial?.slug ?? uniqueSlug(name, products, id),
      name: name.trim(),
      category,
      price: priceValue,
      discountPrice: discountValue,
      shortDescription: shortDescription.trim(),
      description: description.trim(),
      images: cleanImages,
    };

    setSubmitting(true);
    try {
      await saveProduct(product);
      router.push("/admin/produk");
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Gagal menyimpan produk.",
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Link
            href="/admin/produk"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-900"
          >
            <ArrowLeft size={16} weight="bold" />
            Kembali ke produk
          </Link>
          <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            {initial ? "Edit produk" : "Tambah produk"}
          </h1>
        </div>
        {initial && (
          <Link
            href={`/katalog/${initial.slug}`}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            <ArrowSquareOut size={16} />
            Lihat di katalog
          </Link>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-black tracking-tight text-slate-900">
            Informasi produk
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className={labelClass}>
                Nama produk
              </label>
              <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={`mt-1.5 ${inputClass}`}
                placeholder="Contoh: Compressor Semi-Hermetic"
              />
              {errors.name && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="category" className={labelClass}>
                Kategori
              </label>
              <select
                id="category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className={`mt-1.5 ${inputClass}`}
              >
                <option value="" disabled>
                  Pilih kategori
                </option>
                {categories.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors.category}
                </p>
              )}
              {categories.length === 0 && (
                <p className="mt-1 text-xs font-semibold text-amber-600">
                  Belum ada kategori.{" "}
                  <Link href="/admin/kategori" className="underline">
                    Tambah kategori dulu
                  </Link>
                  .
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-black tracking-tight text-slate-900">
            Harga
          </h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="price" className={labelClass}>
                Harga asli
              </label>
              <div className="relative mt-1.5">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm font-semibold text-slate-500">
                  Rp
                </span>
                <input
                  id="price"
                  type="text"
                  inputMode="numeric"
                  value={formatRupiahInput(price)}
                  onChange={(event) =>
                    setPrice(event.target.value.replace(/\D/g, ""))
                  }
                  className={`${inputClass} pl-10`}
                  placeholder="15.000.000"
                />
              </div>
              {errors.price && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors.price}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="discountPrice" className={labelClass}>
                Harga setelah diskon{" "}
                <span className="font-medium text-slate-400">(opsional)</span>
              </label>
              <div className="relative mt-1.5">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm font-semibold text-slate-500">
                  Rp
                </span>
                <input
                  id="discountPrice"
                  type="text"
                  inputMode="numeric"
                  value={formatRupiahInput(discountPrice)}
                  onChange={(event) =>
                    setDiscountPrice(event.target.value.replace(/\D/g, ""))
                  }
                  className={`${inputClass} pl-10`}
                  placeholder="13.500.000"
                />
              </div>
              {errors.discountPrice && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors.discountPrice}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-black tracking-tight text-slate-900">
            Deskripsi
          </h2>

          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="shortDescription" className={labelClass}>
                Deskripsi singkat
              </label>
              <textarea
                id="shortDescription"
                rows={3}
                value={shortDescription}
                onChange={(event) => setShortDescription(event.target.value)}
                className={`mt-1.5 ${inputClass}`}
                placeholder="Ringkasan yang tampil di bawah harga."
              />
              {errors.shortDescription && (
                <p className="mt-1 text-xs font-semibold text-red-600">
                  {errors.shortDescription}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="description" className={labelClass}>
                Deskripsi lengkap{" "}
                <span className="font-medium text-slate-400">(opsional)</span>
              </label>
              <textarea
                id="description"
                rows={8}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className={`mt-1.5 ${inputClass}`}
                placeholder="Detail produk. Pisahkan paragraf dengan satu baris kosong."
              />
              <p className="mt-1 text-xs text-slate-500">
                Pisahkan paragraf dengan satu baris kosong.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-base font-black tracking-tight text-slate-900">
              Gambar
            </h2>
            <button
              type="button"
              onClick={() => setImages((current) => [...current, ""])}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50"
            >
              <Plus size={14} weight="bold" />
              Tambah URL
            </button>
          </div>

          <div className="mt-4 rounded-xl border border-dashed border-brand-300 bg-brand-50/60 p-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-ink px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-900 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <UploadSimple size={16} weight="bold" />
                {uploading ? "Mengunggah…" : "Upload gambar"}
              </button>
              <p className="text-xs leading-5 text-slate-500">
                JPG, PNG, WEBP · maks 10 MB · bisa pilih beberapa file
                sekaligus.
              </p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              hidden
              disabled={uploading}
              onChange={(event) => handleFiles(event.target.files)}
            />
            {uploadError && (
              <p className="mt-3 text-xs font-semibold text-red-600">
                {uploadError}
              </p>
            )}
          </div>

          <p className="mt-4 text-xs font-bold text-slate-700">
            Atau tempel URL gambar
          </p>
          <div className="mt-2 space-y-2">
            {images.map((image, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  value={image}
                  onChange={(event) => updateImage(index, event.target.value)}
                  className={inputClass}
                  placeholder="https://res.cloudinary.com/..."
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  disabled={images.length === 1}
                  className="grid size-10 shrink-0 place-items-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Hapus gambar"
                >
                  <Trash size={16} />
                </button>
              </div>
            ))}
          </div>

          {errors.images && (
            <p className="mt-1 text-xs font-semibold text-red-600">
              {errors.images}
            </p>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            {images
              .map((item) => item.trim())
              .filter(Boolean)
              .map((image) => (
                <div
                  key={image}
                  className="grid size-20 place-items-center overflow-hidden rounded-lg border border-slate-200 bg-white"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={optimizedImageUrl(image, 160)}
                    alt=""
                    className="size-full object-contain p-1"
                  />
                </div>
              ))}
          </div>
        </section>

        {submitError && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {submitError}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-lg bg-sun-500 px-5 py-3 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FloppyDisk size={17} weight="fill" />
            {submitting
              ? "Menyimpan…"
              : initial
                ? "Simpan perubahan"
                : "Simpan produk"}
          </button>
          <Link
            href="/admin/produk"
            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
          >
            Batal
          </Link>
        </div>
      </form>
    </div>
  );
}
