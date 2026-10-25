"use client";

import { useCallback, useEffect, useState } from "react";
import {
  categories as seedCategories,
  products as seedProducts,
  slugify,
  type Category,
  type Product,
} from "@/lib/data";
import { supabase } from "@/lib/supabase";

interface ProductRow {
  id: string;
  slug: string;
  name: string;
  category_id: string | null;
  price: number | string;
  discount_price: number | string | null;
  short_description: string;
  description: string | null;
  images: unknown;
}

interface CategoryRow {
  id: string;
  name: string;
  slug: string;
}

function mapProduct(row: ProductRow): Product {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    category: row.category_id ?? "",
    price: Number(row.price),
    discountPrice:
      row.discount_price == null ? undefined : Number(row.discount_price),
    shortDescription: row.short_description,
    description: row.description ?? "",
    images: Array.isArray(row.images) ? (row.images as string[]) : [],
  };
}

function mapCategory(row: CategoryRow): Category {
  return { id: row.id, name: row.name, slug: row.slug };
}

function errorMessage(error: { message: string } | null, fallback: string) {
  if (!error) return fallback;
  if (error.message.includes("duplicate key")) {
    return "Data dengan nama yang sama sudah ada.";
  }
  return error.message || fallback;
}

export function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function uniqueSlug(
  value: string,
  list: { id: string; slug: string }[],
  ignoreId?: string,
): string {
  const base = slugify(value) || "produk";
  let candidate = base;
  let i = 2;
  while (list.some((item) => item.slug === candidate && item.id !== ignoreId)) {
    candidate = `${base}-${i}`;
    i += 1;
  }
  return candidate;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(seedProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const { data, error: queryError } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (queryError) {
      setError(queryError.message);
    } else {
      setProducts((data as ProductRow[]).map(mapProduct));
      setError(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { products, loading, error, refresh };
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>(seedCategories);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    const { data, error: queryError } = await supabase
      .from("categories")
      .select("*")
      .order("name", { ascending: true });

    if (queryError) {
      setError(queryError.message);
    } else {
      setCategories((data as CategoryRow[]).map(mapCategory));
      setError(null);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { categories, loading, error, refresh };
}

function productPayload(product: Product) {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    category_id: product.category,
    price: product.price,
    discount_price: product.discountPrice ?? null,
    short_description: product.shortDescription,
    description: product.description,
    images: product.images,
  };
}

export async function saveProduct(product: Product): Promise<void> {
  const { error } = await supabase.from("products").upsert(productPayload(product));
  if (error) throw new Error(errorMessage(error, "Gagal menyimpan produk."));
}

export async function deleteProduct(id: string): Promise<void> {
  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) throw new Error(errorMessage(error, "Gagal menghapus produk."));
}

export async function saveCategory(category: Category): Promise<Category> {
  const slug = slugify(category.name) || "kategori";
  const { error } = await supabase.from("categories").upsert({
    id: category.id,
    name: category.name,
    slug,
  });

  if (error) throw new Error(errorMessage(error, "Gagal menyimpan kategori."));
  return category;
}

export async function deleteCategory(id: string): Promise<void> {
  const { count, error: countError } = await supabase
    .from("products")
    .select("id", { count: "exact", head: true })
    .eq("category_id", id);

  if (countError) {
    throw new Error(errorMessage(countError, "Gagal memeriksa kategori."));
  }
  if ((count ?? 0) > 0) {
    throw new Error(
      `Kategori ini dipakai oleh ${count} produk. Pindahkan produk ke kategori lain dulu.`,
    );
  }

  const { error } = await supabase.from("categories").delete().eq("id", id);
  if (error) throw new Error(errorMessage(error, "Gagal menghapus kategori."));
}
