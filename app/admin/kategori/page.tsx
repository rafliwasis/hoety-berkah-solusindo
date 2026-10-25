"use client";

import { useState } from "react";
import {
  Plus,
  PencilSimple,
  Trash,
  Check,
  X,
  Tag,
} from "@phosphor-icons/react";
import {
  deleteCategory,
  newId,
  saveCategory,
  useCategories,
  useProducts,
} from "@/lib/store";

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100";

export default function AdminCategoriesPage() {
  const { categories, loading, refresh: refreshCategories } = useCategories();
  const { products, refresh: refreshProducts } = useProducts();

  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const usage = (id: string) =>
    products.filter((product) => product.category === id).length;

  const handleAdd = async (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Nama kategori wajib diisi.");
      return;
    }

    setSaving(true);
    try {
      await saveCategory({ id: newId(), name: trimmed });
      setName("");
      setError("");
      await refreshCategories();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menyimpan kategori.");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = async (id: string) => {
    const trimmed = editingName.trim();
    if (!trimmed) {
      setError("Nama kategori wajib diisi.");
      return;
    }

    setSaving(true);
    try {
      await saveCategory({ id, name: trimmed });
      setEditingId(null);
      setEditingName("");
      setError("");
      await refreshCategories();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal mengubah kategori.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, label: string) => {
    if (!window.confirm(`Hapus kategori "${label}"?`)) return;
    setSaving(true);
    try {
      await deleteCategory(id);
      setError("");
      await Promise.all([refreshCategories(), refreshProducts()]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menghapus kategori.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold tracking-[0.16em] text-brand-600 uppercase">
          Katalog
        </p>
        <h1 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Kategori
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
          Kelola kategori di sini. Kategori dipilih saat menambah atau mengubah
          produk.
        </p>
      </div>

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </p>
      )}

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.4fr]">
        <section className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-black tracking-tight text-slate-900">
            Tambah kategori
          </h2>
          <form onSubmit={handleAdd} className="mt-4 space-y-3">
            <div>
              <label htmlFor="category-name" className="block text-xs font-bold text-slate-700">
                Nama kategori
              </label>
              <input
                id="category-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={`mt-1.5 ${inputClass}`}
                placeholder="Contoh: Cold Room"
              />
            </div>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sun-500 px-4 py-2.5 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Plus size={16} weight="bold" />
              {saving ? "Menyimpan…" : "Tambah kategori"}
            </button>
          </form>
        </section>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
            <h2 className="text-base font-black tracking-tight text-slate-900">
              Daftar kategori
            </h2>
            <span className="text-xs font-semibold text-slate-500">
              {loading ? "Memuat…" : `${categories.length} kategori`}
            </span>
          </div>

          {categories.length === 0 ? (
            <p className="p-5 text-sm text-slate-500">
              Belum ada kategori. Tambahkan kategori pertama.
            </p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {categories.map((category) => {
                const used = usage(category.id);
                const isEditing = editingId === category.id;

                return (
                  <li
                    key={category.id}
                    className="flex flex-wrap items-center gap-3 px-5 py-3"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700">
                      <Tag size={16} weight="duotone" />
                    </span>

                    {isEditing ? (
                      <div className="flex min-w-0 flex-1 items-center gap-2">
                        <input
                          value={editingName}
                          onChange={(event) => setEditingName(event.target.value)}
                          className={inputClass}
                          aria-label="Nama kategori"
                        />
                        <button
                          type="button"
                          onClick={() => handleEdit(category.id)}
                          className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-ink text-white transition-colors hover:bg-brand-900"
                          aria-label="Simpan nama kategori"
                        >
                          <Check size={16} weight="bold" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setEditingId(null);
                            setEditingName("");
                          }}
                          className="grid size-9 shrink-0 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50"
                          aria-label="Batal edit"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-bold text-slate-900">
                            {category.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {used} produk · /{category.id}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingId(category.id);
                              setEditingName(category.name);
                              setError("");
                            }}
                            className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-50 hover:text-brand-700"
                            aria-label={`Edit ${category.name}`}
                          >
                            <PencilSimple size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleDelete(category.id, category.name)
                            }
                            disabled={used > 0}
                            title={
                              used > 0
                                ? "Pindahkan produk ke kategori lain dulu"
                                : `Hapus ${category.name}`
                            }
                            className="grid size-9 place-items-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent disabled:hover:text-slate-600"
                            aria-label={`Hapus ${category.name}`}
                          >
                            <Trash size={16} />
                          </button>
                        </div>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
