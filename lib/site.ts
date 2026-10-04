export const siteConfig = {
  name: "Hoety Berkah Solusindo",

  whatsappNumber: "6287706091992",
  whatsappMessageDefault:
    "Halo Hoety Berkah Solusindo, saya ingin mendapatkan informasi lebih lanjut.",
  email: "hoetyberkahsolusindo@gmail.com",
  address:
    "Villa Mas Garden, Blok F No.91 RT 07 RW 09, Perwira, Bekasi Utara, Kota Bekasi 17122",
  hours: "Senin - Sabtu, 08.00 - 21.00",

  tokopediaName: "Hoety Berkah Solusindo",
  tokopediaUrl: "https://www.tokopedia.com/hoetyberkahsolusindo",

  serviceArea: ["Jakarta", "Bekasi", "Tangerang", "Depok", "Bogor"],
} as const;

export const mapEmbedUrl =
  "https://www.google.com/maps?q=Villa%20Mas%20Garden%2C%20Blok%20F%20No.91%20RT%2007%20RW%2009%2C%20Perwira%2C%20Bekasi%20Utara%2C%20Kota%20Bekasi%2017122&z=16&output=embed";

export function formatWhatsAppNumber(raw: string = siteConfig.whatsappNumber) {
  return `+${raw.slice(0, 2)} ${raw.slice(2, 5)}-${raw.slice(5, 9)}-${raw.slice(9)}`;
}

export function buildWhatsAppLink(
  message: string = siteConfig.whatsappMessageDefault,
): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export function buildProductMessage(productName: string): string {
  return `Halo Hoety Berkah Solusindo, saya ingin berkonsultasi soal produk ${productName}.`;
}

export function buildServiceMessage(serviceName: string): string {
  return `Halo Hoety Berkah Solusindo, saya ingin berkonsultasi tentang layanan ${serviceName}.`;
}