/* PLACEHOLDER PRODUCT DATA - Replace with real Hoety product catalog */

export type ProductCategory =
  | "Compressor"
  | "Condensor"
  | "Evaporator"
  | "Spare Part Compressor"
  | "Accessories Compressor"
  | "CDU Set Compressor"
  | "Ruangan Cold Storage"
  | "Ruangan ABF";

export const categories: ProductCategory[] = [
  "Compressor",
  "Condensor",
  "Evaporator",
  "Spare Part Compressor",
  "Accessories Compressor",
  "CDU Set Compressor",
  "Ruangan Cold Storage",
  "Ruangan ABF",
];

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  discountPrice?: number;
  description: string;
  specs?: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: "comp-01",
    name: "Compressor Semi-Hermetic 5 HP",
    category: "Compressor",
    price: 8750000,
    description:
      "Compressor semi-hermetic untuk sistem refrigerasi komersial. Cocok untuk cold storage skala menengah.",
    specs: [
      { label: "Tipe", value: "Semi-Hermetic" },
      { label: "Daya", value: "5 HP" },
      { label: "Refrigerant", value: "R-404A / R-22" },
    ],
  },
  {
    id: "comp-02",
    name: "Compressor Scroll 3 HP",
    category: "Compressor",
    price: 6350000,
    discountPrice: 5750000,
    description: "Compressor scroll dengan operasi rendah noise untuk aplikasi chiller.",
    specs: [
      { label: "Tipe", value: "Scroll" },
      { label: "Daya", value: "3 HP" },
      { label: "Refrigerant", value: "R-410A" },
    ],
  },
  {
    id: "cond-01",
    name: "Condenser Air Cooled 10 HP",
    category: "Condensor",
    price: 4200000,
    description: "Condenser pendingin udara untuk sistem luar ruangan, daya tahan tinggi terhadap korosi.",
  },
  {
    id: "evap-01",
    name: "Evaporator Ceiling Mount 5 PK",
    category: "Evaporator",
    price: 5800000,
    description:
      "Evaporator model ceiling mount untuk distribusi udara dingin merata di ruangan cold storage.",
  },
  {
    id: "sp-01",
    name: "Piston Kit Compressor 4FES",
    category: "Spare Part Compressor",
    price: 875000,
    description: "Piston kit lengkap untuk kompresor reciprocating seri 4FES.",
  },
  {
    id: "sp-02",
    name: "Valve Plate Assembly",
    category: "Spare Part Compressor",
    price: 620000,
    description: "Valve plate assembly original untuk perbaikan compressor reciprocating.",
  },
  {
    id: "acc-01",
    name: "Sight Glass Refrigerant",
    category: "Accessories Compressor",
    price: 185000,
    description: "Sight glass kaca pengaman untuk memantau kondisi refrigerant dalam sistem.",
  },
  {
    id: "acc-02",
    name: "Filter Drier 3/8 inch",
    category: "Accessories Compressor",
    price: 135000,
    discountPrice: 120000,
    description: "Filter drier untuk menghilangkan kelembapan dan kotoran dari sistem refrigerasi.",
  },
  {
    id: "cdu-01",
    name: "CDU Set 10 HP Complete",
    category: "CDU Set Compressor",
    price: 18500000,
    description:
      "Condensing unit set lengkap termasuk compressor, kondenser, dan panel kontrol untuk instalasi langsung.",
  },
  {
    id: "cs-01",
    name: "Cold Storage 20m2 Pendingin",
    category: "Ruangan Cold Storage",
    price: 95000000,
    description:
      "Ruangan cold storage siap pakai ukuran 20m2 dengan insulasi panel polyurethane dan sistem refrigerasi.",
  },
  {
    id: "cs-02",
    name: "Cold Storage 10m2 Blast",
    category: "Ruangan Cold Storage",
    price: 62000000,
    description:
      "Cold storage compact untuk kebutuhan blast chill kapasitas kecil hingga menengah.",
  },
  {
    id: "abf-01",
    name: "ABF Room 15m2",
    category: "Ruangan ABF",
    price: 120000000,
    description:
      "Air blast freezer room untuk pembekuan cepat produk makanan dengan suhu rendah stabil.",
  },
];

export const services = [
  {
    id: "svc-1",
    title: "Spare Part & Accessories Compressor",
    description:
      "Penyediaan spare part original dan accessories compressor untuk berbagai tipe dan merek sistem pendingin.",
  },
  {
    id: "svc-2",
    title: "Service Cold Storage",
    description:
      "Perbaikan dan perawatan sistem cold storage untuk menjaga suhu dan performa penyimpanan produk.",
  },
  {
    id: "svc-3",
    title: "Service Chiller & Freezer",
    description:
      "Layanan service untuk unit chiller dan freezer di restoran, minimarket, hingga industri makanan.",
  },
  {
    id: "svc-4",
    title: "Preventive Maintenance Unit",
    description:
      "Program perawatan berkala untuk mencegah kerusakan dan memperpanjang umur unit pendingin Anda.",
  },
  {
    id: "svc-5",
    title: "Instalasi Ruangan Cold Storage",
    description:
      "Instalasi cold storage dari desain hingga commissioning untuk kebutuhan gudang pendingin bisnis Anda.",
  },
  {
    id: "svc-6",
    title: "Instalasi ABF",
    description:
      "Instalasi Air Blast Freezer untuk proses pembekuan cepat produk makanan dan bahan baku.",
  },
];

export const clients = [
  "Alfamart",
  "DBesto",
  "Lazzato",
  "Pertamina LPG",
  "Daging Harvey",
  "Es Teler Sultan",
  "JIExpo",
];

export const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80",
    alt: "Teknisi sedang melakukan service pada unit elektronik industri",
  },
  {
    src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1400&q=80",
    alt: "Gudang penyimpanan dengan rak industri untuk spare part",
  },
  {
    src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80",
    alt: "Ruang gudang industri dengan sistem penyimpanan terorganisir",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&q=80",
    alt: "Technician melakukan pemeriksaan pada komponen mesin",
  },
];

export const aboutImage =
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80";