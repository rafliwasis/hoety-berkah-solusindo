# PRD — Landing Page Hoety Berkah Solusindo

**Version:** Draft v1
**Date:** 20 September 2026
**Type:** One Page Company Profile & Product Catalog Website

---

## 1. Latar Belakang

Hoety Berkah Solusindo bergerak di bidang penjualan spare part dan accessories compressor, serta menyediakan jasa service, preventive maintenance, dan instalasi untuk kebutuhan **cold storage, chiller, freezer, dan ABF (Air Blast Freezer)**.

Website ini akan menjadi company profile sekaligus product catalog yang membantu calon pelanggan memahami layanan, melihat produk dan harga, serta menghubungi Hoety Berkah Solusindo secara langsung melalui WhatsApp.

---

## 2. Tujuan Website

Website memiliki tujuan utama:

1. Membangun kredibilitas dan kepercayaan calon klien B2B maupun B2C.
2. Menampilkan produk beserta harga secara transparan.
3. Menjelaskan layanan service, maintenance, dan instalasi yang tersedia.
4. Mendorong calon pelanggan untuk menghubungi Hoety Berkah Solusindo melalui WhatsApp.
5. Meningkatkan visibilitas website di Google, khususnya untuk pencarian terkait layanan di wilayah Jabodetabek.

---

## 3. Target Audience

Website ditujukan untuk:

* Pemilik atau pengelola bisnis retail, F&B, dan distribusi yang membutuhkan cold storage, chiller, atau freezer.
* Minimarket, restoran, distributor daging, dan bisnis makanan beku.
* Kontraktor atau vendor yang membutuhkan spare part dan accessories compressor.
* Perusahaan yang membutuhkan instalasi cold storage atau ABF baru.
* Individu atau bisnis yang membutuhkan service dan maintenance unit pendingin.

### Area Utama

Jabodetabek:

* Jakarta
* Bekasi
* Tangerang
* Depok
* Bogor

---

## 4. Scope

### 4.1 In Scope

Website mencakup:

* One-page company profile website.
* Responsive layout untuk desktop dan mobile.
* Sticky navigation.
* Hero section dengan image carousel.
* Informational section mengenai Cold Storage dan ABF.
* Service catalog.
* Interactive product catalog.
* Product category filtering.
* Product detail modal.
* Client showcase.
* Company profile.
* Contact information dan Google Maps.
* WhatsApp CTA di berbagai bagian website.
* Basic on-page SEO dan local SEO.

### 4.2 Out of Scope — v1

Fitur berikut tidak termasuk dalam versi pertama:

* CMS atau admin dashboard.
* E-commerce checkout.
* Online payment.
* Shopping cart.
* Customer account/login.
* Multi-page website.
* Blog.
* Multi-language support.
* Backend contact form.

---

# 5. Struktur Halaman

Urutan section dalam landing page:

1. Navbar
2. Hero
3. Tentang Cold Storage & ABF
4. Layanan Kami
5. Produk Kami
6. Klien Kami
7. Profil Perusahaan
8. Contact Us / Footer

---

# 6. Functional Requirements

## 6.1 Navbar

Navbar harus:

* Menampilkan logo Hoety Berkah Solusindo.
* Menggunakan sticky navigation.
* Menyediakan navigasi ke setiap section melalui smooth scroll.
* Menampilkan menu:

  * Beranda
  * Layanan
  * Produk
  * Tentang
  * Klien
  * Kontak
* Menampilkan CTA **"Hubungi Kami"** yang mengarah langsung ke WhatsApp.

---

## 6.2 Hero Section

Hero menjadi section pertama dan harus langsung menjelaskan bisnis utama Hoety Berkah Solusindo.

### Content

**H1:**

> Jasa Service Cold Storage, Chiller & Compressor di Jabodetabek

Subheadline menjelaskan secara singkat bahwa Hoety Berkah Solusindo menyediakan:

* Spare part dan accessories compressor.
* Service cold storage, chiller, dan freezer.
* Preventive maintenance.
* Instalasi cold storage.
* Instalasi ABF.

### Visual

Hero menggunakan image carousel yang menampilkan visual yang relevan dengan bisnis, seperti:

* Ruangan cold storage.
* Compressor.
* Evaporator.
* Spare part.
* Peralatan atau aktivitas service.

### CTA

Hero memiliki dua CTA:

1. **Hubungi Kami** → WhatsApp.
2. **Lihat Layanan** → scroll ke section Layanan Kami.

---

## 6.3 Tentang Cold Storage & ABF

Section ini bertujuan memberikan edukasi singkat kepada calon pelanggan yang belum familiar dengan istilah cold storage dan ABF sekaligus mendukung SEO informational.

Section terdiri dari dua content block:

### Apa itu Cold Storage?

Menjelaskan secara singkat fungsi cold storage sebagai ruangan dengan sistem pendingin yang digunakan untuk menyimpan produk pada temperatur tertentu sesuai kebutuhan.

### Apa itu ABF (Air Blast Freezer)?

Menjelaskan secara singkat fungsi ABF sebagai sistem pembekuan cepat menggunakan aliran udara dingin untuk membantu proses pembekuan produk.

Content harus singkat, mudah dipahami, dan tidak menggunakan istilah teknis secara berlebihan.

---

# 6.4 Layanan Kami

Section menampilkan enam layanan utama dalam bentuk card:

1. **Spare Part & Accessories Compressor**
2. **Service Cold Storage**
3. **Service Chiller & Freezer**
4. **Preventive Maintenance Unit**
5. **Instalasi Ruangan Cold Storage**
6. **Instalasi ABF**

Setiap service card harus memiliki:

* Icon/visual.
* Nama layanan.
* Deskripsi singkat.
* CTA WhatsApp.

CTA dari masing-masing card menggunakan konteks layanan yang dipilih.

Contoh:

> Hubungi Kami → pesan WhatsApp menyebutkan layanan yang dipilih.

Keyword lokasi dapat digunakan secara natural dalam content, tanpa keyword stuffing.

---

# 6.5 Produk Kami

Product catalog merupakan salah satu fitur utama website.

Produk ditampilkan dalam bentuk grid card.

### Kategori Produk

Kategori awal:

1. Compressor
2. Condensor
3. Evaporator
4. Spare Part Compressor
5. Accessories Compressor
6. CDU Set Compressor
7. Ruangan Cold Storage
8. Ruangan ABF

### Category Filter

User dapat melakukan filter berdasarkan kategori produk.

Default state menampilkan **semua produk**.

Category filter menyediakan pilihan:

* Semua
* Compressor
* Condensor
* Evaporator
* Spare Part Compressor
* Accessories Compressor
* CDU Set Compressor
* Ruangan Cold Storage
* Ruangan ABF

### Lihat Semua

Jika jumlah produk yang ditampilkan dibatasi pada initial view, tersedia tombol:

> **Lihat Semua Produk**

Tombol tersebut digunakan untuk menampilkan seluruh produk yang tersedia tanpa harus berpindah halaman.

---

## 6.5.1 Product Card

Setiap product card minimal memiliki:

* Foto produk.
* Nama produk.
* Harga.
* Harga diskon, jika produk sedang mendapatkan diskon.
* Harga asli apabila terdapat diskon.
* Tombol **Lihat Detail**.
* CTA WhatsApp.

Harga produk harus ditampilkan langsung pada card.

Website tidak menggunakan teks seperti:

> Hubungi Kami untuk Harga

sebagai pengganti harga produk.

### Discount

Produk dapat memiliki harga diskon.

Jika terdapat diskon, card harus dapat menampilkan:

* Harga normal.
* Harga setelah diskon.
* Indikator bahwa produk sedang mendapatkan diskon.

Jika tidak ada diskon, hanya harga normal yang ditampilkan.

---

# 6.5.2 Product Detail Modal

Tombol **Lihat Detail** membuka modal yang menampilkan informasi produk secara lebih lengkap.

Modal minimal berisi:

* Foto produk.
* Nama produk.
* Harga.
* Harga normal jika terdapat diskon.
* Deskripsi singkat.
* Informasi tambahan atau spesifikasi apabila tersedia.
* CTA WhatsApp.

Jika tersedia lebih dari satu foto, modal dapat menampilkan beberapa foto produk.

### WhatsApp CTA

CTA WhatsApp pada modal menggunakan pesan yang mengacu pada nama produk yang sedang dilihat.

---

# 6.5.3 Product Data

Setiap produk minimal memiliki:

* Nama produk.
* Kategori.
* Harga.
* Status diskon, jika ada.
* Foto produk.
* Deskripsi singkat.

Informasi tambahan seperti spesifikasi, brand, kompatibilitas, atau kegunaan dapat ditampilkan apabila datanya tersedia.

Website tidak boleh membuat atau mengasumsikan spesifikasi produk yang tidak diberikan oleh pihak Hoety Berkah Solusindo.

---

# 6.6 Klien Kami

Section menampilkan daftar perusahaan atau organisasi yang pernah menjadi klien Hoety Berkah Solusindo.

### Client Display

Setiap client ditampilkan menggunakan:

* Logo.
* Nama perusahaan/brand.

Client showcase menggunakan format horizontal/scrolling showcase atau marquee.

### Daftar Awal

Client yang akan ditampilkan antara lain:

* Alfamart
* DBesto
* Lazzato
* Pertamina LPG
* Daging Harvey
* Es Teler Sultan
* JIExpo
* dan client lain yang telah dikonfirmasi.

Logo dan nama client hanya ditampilkan setelah data/logo dikonfirmasi oleh pihak Hoety Berkah Solusindo.

---

# 6.7 Profil Perusahaan

Section ini memberikan informasi singkat mengenai Hoety Berkah Solusindo.

Content minimal mencakup:

* Tahun berdiri.
* Fokus bisnis.
* Area layanan.

Area layanan mencakup:

* Jakarta
* Bekasi
* Tangerang
* Depok
* Bogor

Section dapat menggunakan foto tim, workshop, atau aktivitas pekerjaan apabila aset tersedia.

---

# 6.8 Contact Us

Section Contact Us menjadi titik utama untuk mengarahkan user melakukan kontak langsung.

Informasi yang ditampilkan:

* Alamat lengkap.
* Nomor telepon/WhatsApp.
* Email.
* Google Maps.
* Jam operasional.
* Area layanan.
* Social media apabila tersedia.

### Area Layanan

Area layanan ditampilkan secara eksplisit:

> Jakarta · Bekasi · Tangerang · Depok · Bogor

### WhatsApp

Nomor WhatsApp dapat diklik dan langsung membuka percakapan WhatsApp.

---

# 6.9 Footer

Footer minimal berisi:

* Logo Hoety Berkah Solusindo.
* Navigasi utama.
* WhatsApp/contact information.
* Alamat.
* Area layanan.
* Social media apabila tersedia.
* Copyright.

---

# 7. WhatsApp CTA Requirements

WhatsApp merupakan primary conversion channel website.

CTA WhatsApp wajib tersedia pada:

1. Navbar.
2. Hero.
3. Setiap service card.
4. Setiap product card.
5. Product detail modal.
6. Contact section.
7. Footer apabila diperlukan.

### Message Behavior

Semua CTA menggunakan satu format pesan WhatsApp yang konsisten.

Untuk CTA yang berasal dari produk atau layanan, nama produk/layanan dapat dimasukkan secara otomatis ke dalam pesan.

Contoh:

> Halo Hoety Berkah Solusindo, saya ingin mendapatkan informasi lebih lanjut.

CTA dari product card dapat menambahkan nama produk pada pesan:

> Halo Hoety Berkah Solusindo, saya tertarik dengan produk [Nama Produk].

---

# 8. SEO Requirements

Website harus menerapkan basic on-page SEO dan local SEO.

### 8.1 Title & Meta Description

Title dan meta description harus:

* Relevan dengan layanan utama.
* Mengandung keyword utama secara natural.
* Menyebutkan area layanan Jabodetabek jika relevan.

### 8.2 Heading Structure

Heading menggunakan struktur yang jelas:

* 1 H1 utama pada Hero.
* H2 untuk section utama.
* H3 untuk subsection atau content card apabila diperlukan.

### 8.3 Main Keywords

Keyword utama dan turunannya dapat mencakup:

* Jasa service cold storage.
* Service cold storage Jabodetabek.
* Service chiller.
* Service freezer.
* Service compressor.
* Spare part compressor.
* Instalasi cold storage.
* Instalasi ABF.
* Preventive maintenance cold storage.

Keyword harus digunakan secara natural dan tidak berlebihan.

### 8.4 Local SEO

Area layanan utama harus disebutkan secara natural pada beberapa bagian website.

Area tersebut meliputi:

* Jakarta
* Bekasi
* Tangerang
* Depok
* Bogor
* Jabodetabek

### 8.5 Image SEO

Setiap gambar harus memiliki alt text yang deskriptif dan relevan dengan gambar.

Untuk product images, alt text dapat mencantumkan nama produk dan brand apabila tersedia.

---

# 9. Responsive Requirements

Website harus responsive dan memberikan pengalaman yang baik pada:

* Desktop.
* Tablet.
* Mobile.

Desktop dan mobile memiliki tingkat kepentingan yang sama.

Semua fitur utama harus tetap dapat digunakan pada mobile, termasuk:

* Navigation.
* Hero CTA.
* Service cards.
* Product filtering.
* Product cards.
* Product detail modal.
* WhatsApp CTA.
* Client showcase.
* Google Maps.

---

# 10. Design Direction

Visual website harus merepresentasikan Hoety Berkah Solusindo sebagai bisnis yang:

* Profesional.
* Industrial.
* Terpercaya.
* B2B-oriented.

Brand direction menggunakan:

* **Navy / dark blue** sebagai warna utama.
* **Yellow** sebagai accent dan CTA.

Detail visual seperti:

* Color palette.
* Typography.
* Spacing.
* Component styling.
* Animation.
* Hover state.
* Responsive layout.
* Modal behavior.

akan didefinisikan secara terpisah dalam `design.md`.

---

# 11. Technical Constraints

Website menggunakan:

* **Language:** TypeScript
* **Framework:** Next.js
* **Architecture:** App Router
* **Rendering:** SSR/SSG sesuai kebutuhan halaman dan SEO
* **Deployment:** Vercel atau hosting yang mendukung Next.js

Website tidak membutuhkan backend atau database untuk fitur transaksi pada v1.

Product dan company content dapat dikelola sebagai static content/data selama belum tersedia CMS.

---
