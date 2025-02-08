"use client";
import Header from "@/src/components/Header/header";
import { useLocale, useTranslations } from "next-intl";

export default function App() {
  const t = useTranslations("header");
  const heroT = useTranslations("hero");
  const locale = useLocale();

  return (
    <main className="flex w-full bg-gray-200 flex-col items-center min-h-screen pt-32">
      <Header />
    </main>
  );
}
