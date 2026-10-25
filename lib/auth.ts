"use client";

import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

const USERNAME_DOMAIN = "hoety.local";

export function adminEmailForUsername(username: string) {
  return `${username.trim().toLowerCase()}@${USERNAME_DOMAIN}`;
}

export function usernameFromEmail(email?: string | null) {
  if (!email) return "";
  return email.split("@")[0] ?? "";
}

export function displayUsername(session: Session | null) {
  if (!session) return "";
  const metadataUsername = session.user.user_metadata?.username;
  if (typeof metadataUsername === "string" && metadataUsername.trim()) {
    return metadataUsername;
  }
  return usernameFromEmail(session.user.email);
}

export async function signInAdmin(username: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({
    email: adminEmailForUsername(username),
    password,
  });
  return { error: error?.message ?? null };
}

export async function signOutAdmin() {
  await supabase.auth.signOut();
}

export async function changeAdminPassword(password: string) {
  const { error } = await supabase.auth.updateUser({ password });
  return { error: error?.message ?? null };
}

export function useAdminSession() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      setLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange(
      (_event, nextSession) => {
        if (!active) return;
        setSession(nextSession);
        setLoading(false);
      },
    );

    return () => {
      active = false;
      subscription.subscription.unsubscribe();
    };
  }, []);

  return { session, loading };
}
