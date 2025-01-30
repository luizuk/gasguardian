import { useState } from "react";
import { useTranslations } from "next-intl";

const FAQSection = () => {
  const t = useTranslations("faqSection");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Fetch FAQ data from translations
  const faqs = t.raw("faqs");

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-150 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {t("title")}
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map(
            (faq: { question: string; answer: string }, index: number) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 focus:outline-none"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    <span className="text-gray-600">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </div>
                </button>
                {activeIndex === index && (
                  <div className="mt-2 p-6 bg-gray-100 rounded-lg">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
