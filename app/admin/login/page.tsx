"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, SignIn, Eye, EyeSlash } from "@phosphor-icons/react";
import { signInAdmin, useAdminSession } from "@/lib/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const { session, loading: sessionLoading } = useAdminSession();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!sessionLoading && session) {
      router.replace("/admin/produk");
    }
  }, [session, sessionLoading, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Username dan password wajib diisi.");
      return;
    }

    setSubmitting(true);
    const { error: signInError } = await signInAdmin(username, password);
    if (signInError) {
      setError("Username atau password salah.");
      setSubmitting(false);
      return;
    }

    router.replace("/admin/produk");
    router.refresh();
  };

  return (
    <main className="grid min-h-screen place-items-center bg-brand-canvas px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-brand-900/5 sm:p-8">
          <div className="flex items-center gap-2.5">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-slate-200 bg-white">
              <Image
                src="/hoety-logo.png"
                alt=""
                width={40}
                height={40}
                className="size-8 object-contain"
              />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-black tracking-tight text-brand-ink">
                Hoety Berkah
              </p>
              <p className="text-[11px] font-semibold tracking-[0.16em] text-brand-600 uppercase">
                Admin panel
              </p>
            </div>
          </div>

          <h1 className="mt-6 text-2xl font-black tracking-tight text-slate-900">
            Masuk ke admin
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Gunakan username dan password admin untuk mengelola katalog.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-xs font-bold text-slate-700"
              >
                Username
              </label>
              <input
                id="username"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
                placeholder="admin"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-bold text-slate-700"
              >
                Password
              </label>
              <div className="relative mt-1.5">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
                  placeholder="••••••••"
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

            {error && (
              <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm font-semibold text-red-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting || sessionLoading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sun-500 px-4 py-3 text-sm font-bold text-brand-onyx transition-colors hover:bg-sun-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <SignIn size={17} weight="bold" />
              {submitting ? "Memproses…" : "Masuk"}
            </button>
          </form>
        </div>

        <Link
          href="/"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 transition-colors hover:text-brand-700"
        >
          <ArrowLeft size={14} />
          Kembali ke situs
        </Link>
      </div>
    </main>
  );
}
