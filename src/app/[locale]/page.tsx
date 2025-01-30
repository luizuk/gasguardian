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

      {/* <Hero
        button2Href={whatsAppLink}
        button2Text={heroT("cta")}
        ctaButtonLink={`/${locale}/login`}  
        ctaButtonText={t("login")}
        description={heroT("subtitle")}
        title={heroT("title")}
        topCtaText={heroT("topCtaText")}
      />

      <AISolutionsSection />

      <CloudSection />

      <ContactSection />

      <FAQSection />

      <LeadFormSection />

      <Footer /> */}

      {/* <WebsitesSection /> */}
    </main>
  );
}
