"use client";

import { useState } from "react";
import { Eye, EyeSlash, Key } from "@phosphor-icons/react";
import {
  changeAdminPassword,
  displayUsername,
  useAdminSession,
} from "@/lib/auth";

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100";

export default function AdminAccountPage() {
  const { session } = useAdminSession();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password minimal 6 karakter.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Konfirmasi password tidak sama.");
      return;
    }

    setSubmitting(true);
    const { error: updateError } = await changeAdminPassword(password);
    if (updateError) {
      setError(updateError);
      setSubmitting(false);
      return;
    }

    setPassword("");
    setConfirmPassword("");
    setSuccess("Password berhasil diubah. Gunakan password baru saat login berikutnya.");
    setSubmitting(false);
  };

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-bold tracking-[0.16em] text-brand-600 uppercase">
          Akun
        </p>
        <h1 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
          Pengaturan akun
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
          Kelola akses admin. Public site tetap bisa diakses tanpa login.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.4fr]">
        <section className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-black tracking-tight text-slate-900">
            Informasi akun
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-xs font-bold text-slate-500">Username</dt>
              <dd className="mt-0.5 font-semibold text-slate-900">
                {displayUsername(session) || "—"}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold text-slate-500">Email internal</dt>
              <dd className="mt-0.5 break-all font-semibold text-slate-900">
                {session?.user.email ?? "—"}
              </dd>
            </div>
          </dl>
          <p className="mt-4 text-xs leading-5 text-slate-500">
            Username dipakai untuk login. Untuk menambah admin lain, buat user
            baru di Supabase Authentication.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-base font-black tracking-tight text-slate-900">
            Ganti password
          </h2>

          <form onSubmit={handleSubmit} className="mt-4 max-w-md space-y-4">
            <div>
              <label
                htmlFor="new-password"
                className="block text-xs font-bold text-slate-700"
              >
                Password baru
              </label>
              <div className="relative mt-1.5">
                <input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className={inputClass}
                  placeholder="Minimal 6 karakter"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  className="absolute inset-y-0 right-2 grid w-8 place-items-center text-slate-400 transition-colors hover:text-slate-600"
                  aria-label={
                    showPassword ? "Sembunyikan password" : "Tampilkan password"
                  }
                >
                  {showPassword ? <EyeSlash size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-xs font-bold text-slate-700"
              >
                Ulangi password baru
              </label>
              <input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
                placeholder="Ketik ulang password baru"
              />
            </div>

            {error && (
              <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}
            {success && (
              <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-sm font-semibold text-emerald-700">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-lg bg-sun-500 px-5 py-3 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Key size={17} weight="fill" />
              {submitting ? "Menyimpan…" : "Simpan password"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
