import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Ubuntu } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

// Load the Ubuntu font
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

// Metadata
export const metadata: Metadata = {
  title: "GasGuardian",
  description: "ETH Gas Optimization Tool.",
};

// RootLayout component
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Await params before accessing its properties
  // const resolvedParams = await Promise.resolve(params);
  const locale = params.locale;

  // Validate the locale
  if (!["pt", "en", "es"].includes(locale)) {
    notFound();
  }

  // Load messages
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={ubuntu.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
