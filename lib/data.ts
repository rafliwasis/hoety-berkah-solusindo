/* PRODUCT DATA - Sumber gambar: public/produk/ */

export type ProductCategory =
  | "Compressor"
  | "Condensor"
  | "Evaporator"
  | "CDU Set"
  | "Axial Fan"
  | "Spare Part"
  | "Accessories";

export const categories: ProductCategory[] = [
  "Compressor",
  "Condensor",
  "Evaporator",
  "CDU Set",
  "Axial Fan",
  "Spare Part",
  "Accessories",
];

export const categoryLabels: Record<ProductCategory, string> = {
  Compressor: "Compressor",
  Condensor: "Condensor",
  Evaporator: "Evaporator",
  "CDU Set": "CDU Set",
  "Axial Fan": "Axial Fan",
  "Spare Part": "Spare Part",
  Accessories: "Accessories",
};

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  discountPrice?: number;
  description: string;
  warranty: string;
  images: string[];
}

export const products: Product[] = [
  {
    id: "cdu-set",
    slug: "cdu-set-compressor-condensor",
    name: "CDU Set Compressor & Condensor",
    category: "CDU Set",
    price: 24500000,
    discountPrice: 21500000,
    warranty: "12 bulan",
    description:
      "Condensing unit set lengkap yang sudah dirakit pada satu rangka baja: compressor semi-hermetic, condenser udara berpendingin dua kipas, suction accumulator di sisi kiri, liquid receiver horizontal di bawah, sampai filter drier berwarna hitam pada jalur liquid line. Tiga gauge tekanan dan kontrol tekanan sudah terpasang di panel, sehingga kondisi unit bisa langsung dibaca tanpa membuka rangka.\n\nKapasitas unit ini dipasangkan untuk cold storage menengah, freezer room, maupun instalasi industri yang butuh suhu medium sampai low temperature. Refrigeran yang didukung R-404A maupun R-507, tegangan 380 volt tiga fase, dan kompresor semi-hermetic body besi tuang yang tidak mudah bocor pada bagian las saat bekerja lama. Dimensi keseluruhan sekitar 2200 × 1200 × 1650 mm dengan bobot total di atas 800 kg, jadi pengiriman dilakukan dalam bentuk crating kayu dengan pallet.\n\nUnit dikirim sudah disegel dari pabrik dan tinggal dipasang di lokasi. Garansi berlaku 12 bulan. Tim kami dapat menyiapkan kapasitas sesuai volume ruangan, frekuensi buka-tutup pintu, dan beban produk yang masuk, termasuk membantu commissioning sampai suhu ruangan stabil.",
    images: ["/produk/cdu-set-compressor-condensor.jpg"],
  },
  {
    id: "compressor",
    slug: "compressor-semi-hermetic",
    name: "Compressor Semi-Hermetic",
    category: "Compressor",
    price: 14750000,
    warranty: "12 bulan",
    description:
      "Compressor semi-hermetic untuk sistem refrigerasi komersial maupun industri. Body terbuat dari besi tuang yang menghalangi kebocoran refrigeran pada bagian las, sehingga lebih aman dibanding jenis bolted ketika unit bekerja sepanjang hari operasional.\n\nUnit dikemas dalam peti kayu dengan pipa suction dan discharge yang sudah dibungkus isolasi hitam, sehingga sambungan aman selama pengiriman. Tersedia untuk dua arah tata pipa, dan electrical box pada bagian atas sudah berlabel peringatan keselamatan. Kapasitas yang paling banyak dicari mulai dari 3 HP sampai 10 HP, dengan dukungan refrigeran R-404A, R-507, R-22, maupun R-134a tergantung kebutuhan aplikasi.\n\nKomponen ini banyak dipakai untuk membangun CDU set baru, mengganti kompresor lama yang kapasitasnya sudah turun, maupun menambah kapasitas pendinginan pada sistem yang berjalan. Garansi berlaku 12 bulan. Karena kapasitas sangat menentukan, kirimkan volume ruangan dan target suhunya melalui WhatsApp agar tim kami bisa merekomendasikan ukuran yang pas.",
    images: ["/produk/compressor.png"],
  },
  {
    id: "condensor",
    slug: "condensor-air-cooled",
    name: "Condensor Air Cooled",
    category: "Condensor",
    price: 4350000,
    warranty: "6 bulan",
    description:
      "Condenser udara untuk membuang panas kondensasi dari sistem refrigerasi. Rangkanya berupa casing hijau yang tahan cuaca dengan dua unit kipas axial pada bagian depan, sehingga aliran udara melewati coil dan suhu refrigeran turun sebelum kembali ke kompresor.\n\nPipa masuk dan keluar berupa sambungan tembaga di sisi samping, mudah disambung ke jalur liquid maupun discharge line. Coil terbuat dari fin aluminium yang tidak berkarat di lingkungan lembap, dan casingnya dapat dipasang pada dinding luar, di atas plafon semi-outdoor, maupun di area terbuka dengan jarak sirkulasi udara yang cukup.\n\nKapasitas yang tersedia mulai dari unit dua kipas sampai unit dengan beberapa kipas berdiameter lebih besar. Garansi berlaku 6 bulan. Untuk menentukan ukuran yang tepat, tim kami perlu tahu kapasitas kompresor, jenis refrigeran, serta suhu ambient lokasi pemasangan.",
    images: ["/produk/condensor.webp"],
  },
  {
    id: "evaporator",
    slug: "evaporator-air-cooler",
    name: "Evaporator Air Cooler",
    category: "Evaporator",
    price: 6900000,
    discountPrice: 6200000,
    warranty: "6 bulan",
    description:
      "Evaporator berupa unit air cooler yang dipasang pada plafon ruangan pendingin. Casing putih dengan dua sampai tiga unit kipas axial di bagian depan, dan coil fin aluminium yang terlihat melalui sela kipas. Bagian bawah dilengkapi drip tray untuk menampung air defrost sehingga tidak menetes ke produk di bawahnya.\n\nTersedia dalam dua varian: tiga kipas untuk ruangan lebih besar, dan dua kipas untuk ruangan menengah. Model plafon ini membebaskan lantai ruangan sehingga rak, palet, dan jalur forklift tetap maksimal. Defrost dapat dilakukan secara otomatis, jadi teknisi tidak perlu membuka unit secara berkala untuk membersihkan salju beku pada coil.\n\nKapasitas yang didukung mulai dari medium temperature sampai low temperature, dengan refrigeran R-404A maupun R-507. Garansi berlaku 6 bulan. Saat commissioning kami kalibrasi laju aliran udara supaya suhu di sisi jauh ruangan tidak tertinggal jauh dari sisi dekat pintu.",
    images: ["/produk/evaporator.png"],
  },
  {
    id: "axial-fan",
    slug: "axial-fan-condenser",
    name: "Axial Fan Condenser",
    category: "Axial Fan",
    price: 1250000,
    warranty: "3 bulan",
    description:
      "Axial fan untuk kondenser maupun evaporator. Bilahnya terbuat dari baja galvanis yang melengkung ke arah tertentu untuk menghasilkan dorongan udara yang besar dengan kebisingan rendah, dan dilindungi wire guard berupa kawat konsentris yang melingkari seluruh diameter.\n\nBagian tengahnya terdiri dari housing motor yang tercast dari besi, dengan lubang pasang standar sehingga mudah diganti dengan ukuran yang sama. Fan ini cocok dipakai pada unit condenser udara, air cooler ruangan pendingin, maupun ventilasi gudang yang membutuhkan aliran udara konstan.\n\nKapasitas yang tersedia mulai dari diameter 300 mm sampai 500 mm, dengan daya motor dan putaran yang menyesuaikan. Garansi berlaku 3 bulan. Karena dimensi sangat menentukan, kirimkan foto fan lama beserta diameternya agar tim kami bisa mencarikan unit yang kompatibel.",
    images: ["/produk/fan.png"],
  },
  {
    id: "piston-set",
    slug: "piston-kit-reciprocating",
    name: "Piston Kit Compressor Reciprocating",
    category: "Spare Part",
    price: 1480000,
    warranty: "6 bulan",
    description:
      "Piston kit untuk kompresor reciprocating. Dalam satu paket sudah termasuk piston aluminium berkepala datar dengan alur ring, connecting rod berbahan aluminium yang di bagian ujung kecilnya sudah dipasangi bushing kuningan, piston pin berlubang, serta seal berupa O-ring untuk mencegah kebocoran oil.\n\nPart ini dibutuhkan saat kapasitas pendinginan kompresor menurun drastis akibat keausan segel pada dinding silinder. Karena seluruh bagian dirakit dalam satu toleransi yang sama, hasil penyusutan kembali kompresor tetap optimal setelah penggantian. Kondisi baru, bukan part bekas ulang, dan dikemas pada kardus pelindung agar permukaan piston tidak lecet selama pengiriman.\n\nTersedia untuk beberapa seri kompresor reciprocating yang umum beredar. Garansi berlaku 6 bulan. Jika tidak yakin dengan nomor rangka kompresor, kirimkan fotonya melalui WhatsApp dan tim kami akan cek kompatibilitasnya sebelum memesan.",
    images: ["/produk/piston-set.jpg"],
  },
  {
    id: "terminal-plate",
    slug: "compressor-terminal-plate",
    name: "Terminal Plate Compressor",
    category: "Accessories",
    price: 890000,
    warranty: "6 bulan",
    description:
      "Terminal plate untuk kelistrikan kompresor. Basisnya terbuat dari pelat baja berlapis yang dipres rapi, dengan tiga pasang busbar kuningan berulir di tengahnya untuk hubungan tiga fase listrik, serta seal berupa baut ulir berlapis baja pada setiap lubang pemasangan.\n\nKomponen ini menjadi bagian kritis dari kompresor, karena kebocoran refrigeran paling sering terjadi pada jalur listrik bila terminal plate aus atau seal-nya tidak rapat. Saat melakukan perbaikan, plate lama yang sudah berkarat atau terminalnya melengkung sebaiknya diganti sekalian, karena menahan biaya tambahan nanti bila harus membongkar kompresor lagi.\n\nTersedia untuk beberapa tipe kompresor semi-hermetic dan reciprocating. Garansi berlaku 6 bulan. Karena bentuknya sangat menentukan kecocokan, kirimkan nomor rangka kompresor Anda agar tim kami bisa memastikan spesifikasi yang benar.",
    images: ["/produk/terminal-plate.jpg"],
  },
  {
    id: "valve-plate-set",
    slug: "valve-plate-set-reciprocating",
    name: "Valve Plate Set Compressor Reciprocating",
    category: "Spare Part",
    price: 1950000,
    warranty: "6 bulan",
    description:
      "Valve plate set untuk kompresor reciprocating. Paketnya berisi pelat katup aluminium dengan pola lubang presisi yang tinggi, dilengkapi deretan katup reed berwarna merah untuk saluran suction maupun biru untuk saluran discharge, serta pegas pengunci pada tiap katup.\n\nBagian ini mengatur aliran refrigeran masuk dan keluar dari silinder kompresor. Bila katupnya aus, bengkok, atau tidak rata pada tempat duduknya, tekanan kompresor langsung turun dan suhu ruangan tidak pernah stabil meski kompresor tetap berbunyi. Karena itu setiap kali membongkar kompresor untuk perbaikan besar, valve plate sebaiknya diganti sekalian.\n\nPaket dikirim lengkap dengan seluruh katup dan pegasnya, sehingga teknisi tidak perlu memesan part satu per satu. Garansi berlaku 6 bulan. Tim kami dapat membantu memastikan kompatibilitas berdasarkan nomor rangka kompresor Anda sebelum pemesanan.",
    images: ["/produk/valve-plate-set.webp"],
  },
];

export function promoPercent(product: Product): number | null {
  if (product.discountPrice == null) return null;
  return Math.round((1 - product.discountPrice / product.price) * 100);
}

export function relatedProducts(currentId: string, count = 4): Product[] {
  const pool = products.filter((p) => p.id !== currentId);

  let seed = 0;
  for (let i = 0; i < currentId.length; i++) {
    seed = (seed * 31 + currentId.charCodeAt(i)) >>> 0;
  }
  const rand = () => {
    seed = (seed + 0x6d2b79f5) >>> 0;
    let t = seed;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };

  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const img = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Spare Part & Accessories Compressor",
    description:
      "Komponen original dan pengganti untuk menjaga performa sistem pendingin tetap optimal.",
    image: "/produk/compressor.png",
  },
  {
    id: "svc-2",
    title: "Service Cold Storage",
    description:
      "Diagnosa, perbaikan, dan optimasi unit cold storage segala kapasitas.",
    image: img("photo-1581092160562-40aa08e78837"),
  },
  {
    id: "svc-3",
    title: "Service Chiller & Freezer",
    description:
      "Teknisi berpengalaman untuk chiller dan freezer komersial maupun industri.",
    image: img("photo-1621905252507-b35492cc74b4"),
  },
  {
    id: "svc-4",
    title: "Preventive Maintenance Unit",
    description:
      "Perawatan berkala untuk mengurangi downtime dan memperpanjang usia unit.",
    image: img("photo-1531297484001-80022131f5a1"),
  },
  {
    id: "svc-5",
    title: "Instalasi Ruangan Cold Storage",
    description:
      "Rancang dan bangun ruang penyimpanan dingin sesuai kebutuhan bisnis Anda.",
    image: img("photo-1605810230434-7631ac76ec81"),
  },
  {
    id: "svc-6",
    title: "Instalasi ABF",
    description:
      "Instalasi Air Blast Freezer untuk pembekuan produk yang cepat dan merata.",
    image: img("photo-1586528116311-ad8dd3c8310d"),
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
    src: img("photo-1581091226825-a6a2a5aee158", 1400),
    alt: "Teknisi sedang melakukan service pada unit elektronik industri",
  },
  {
    src: img("photo-1587293852726-70cdb56c2866", 1400),
    alt: "Gudang penyimpanan dengan rak industri untuk spare part",
  },
  {
    src: img("photo-1553413077-190dd305871c", 1400),
    alt: "Ruang gudang industri dengan sistem penyimpanan terorganisir",
  },
  {
    src: img("photo-1581092918056-0c4c3acd3789", 1400),
    alt: "Technician melakukan pemeriksaan pada komponen mesin",
  },
];

export const aboutImage = img("photo-1586528116311-ad8dd3c8310d", 900);
