"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-200 text-gray-800 rounded flex items-center"
      >
        {locale === "pt" && "🇧🇷 Português"}
        {locale === "en" && "🇺🇸 English"}
        {locale === "es" && "🇪🇸 Español"}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
          <button
            onClick={() => changeLanguage("en")}
            className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
          >
            🇺🇸 English
          </button>
          <button
            onClick={() => changeLanguage("pt")}
            className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
          >
            🇧🇷 Português
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="w-full px-4 py-2 text-gray-800 hover:bg-gray-100 flex items-center"
          >
            🇪🇸 Español
          </button>
        </div>
      )}
    </div>
  );
}
