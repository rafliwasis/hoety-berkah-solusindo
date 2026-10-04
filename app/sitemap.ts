import type { MetadataRoute } from "next";
import { products } from "@/lib/data";

const baseUrl = "https://hoetyberkah.id";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...products.map((product) => ({
      url: `${baseUrl}/katalog/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}