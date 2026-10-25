const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

export const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

export function isCloudinaryUrl(url: string) {
  return url.includes("res.cloudinary.com/");
}

/**
 * Sisipkan transformasi Cloudinary supaya gambar dikirim dalam format &
 * ukuran optimal (hemat bandwidth).
 */
export function optimizedImageUrl(url: string, width: number) {
  if (!isCloudinaryUrl(url) || !url.includes("/upload/")) return url;
  return url.replace(
    "/upload/",
    `/upload/f_auto,q_auto,c_limit,w_${width}/`,
  );
}

export async function uploadImage(file: File): Promise<string> {
  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Konfigurasi Cloudinary belum lengkap. Periksa NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME dan NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET.",
    );
  }
  if (!file.type.startsWith("image/")) {
    throw new Error("File harus berupa gambar.");
  }
  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error("Ukuran gambar maksimal 10 MB.");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    { method: "POST", body: formData },
  );

  const result = (await response.json()) as {
    secure_url?: string;
    error?: { message?: string };
  };

  if (!response.ok || !result.secure_url) {
    throw new Error(result.error?.message ?? "Gagal mengunggah gambar.");
  }

  return result.secure_url;
}
