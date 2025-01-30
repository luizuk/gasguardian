// src/app/[locale]/login/page.tsx
"use client";

import Header from "@/src/components/Header/header";
import PageLogin from "@/src/components/Login/pageLogin";
import Footer from "@/src/components/SiteSections/footer";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const t = useTranslations("login");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (
    email: string,
    password: string
  ): Promise<void> => {
    // Add your login logic here
    if (email === "user@example.com" && password === "password") {
      router.push("/dashboard"); // Redirect to dashboard after successful login
    } else {
      setError(t("invalidCredentials"));
    }
  };

  return (
    <main className="flex w-full bg-gray-200 flex-col items-center min-h-screen">
      {/* Header */}
      <Header />

      <PageLogin handleLogin={handleLogin} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
