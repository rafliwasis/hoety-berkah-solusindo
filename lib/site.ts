export const siteConfig = {
  name: "Hoety Berkah Solusindo",
  shortName: "Hoety",
  tagline: "Spare Part & Service Refrigerasi",

  // TODO: Ganti dengan data asli dari pihak Hoety Berkah Solusindo.
  whatsappNumber: "6281234567890",
  whatsappMessageDefault:
    "Halo Hoety Berkah Solusindo, saya ingin mendapatkan informasi lebih lanjut.",
  phone: "021-0000-0000",
  email: "halo@hoetyberkah.com",
  address: "Jl. Industri Raya No. 00, Bekasi, Jawa Barat",
  hours: "Senin - Sabtu, 08.00 - 17.00 WIB",

  // TODO: Tahun berdiri perusahaan (perlu konfirmasi dari pihak Hoety).
  establishedYear: "20xx",

  serviceArea: ["Jakarta", "Bekasi", "Tangerang", "Depok", "Bogor"],
} as const;

export const mapEmbedUrl =
  "https://www.google.com/maps?q=Bekasi%2C%20Jawa%20Barat&z=11&output=embed";

export function buildWhatsAppLink(
  message: string = siteConfig.whatsappMessageDefault,
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function buildProductMessage(productName: string): string {
  return `Halo Hoety Berkah Solusindo, saya tertarik dengan produk ${productName}.`;
}

export function buildServiceMessage(serviceName: string): string {
  return `Halo Hoety Berkah Solusindo, saya tertarik dengan layanan ${serviceName}.`;
}