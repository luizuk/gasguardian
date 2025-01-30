import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons
import { useTranslations } from "next-intl";
import { whatsAppLink } from "@/src/constants/links";

const ContactSection = () => {
  const t = useTranslations("contactSection");

  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {t("title")}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto text-center mb-12">
          {t("description")}
        </p>

        <div className="flex flex-col items-center space-y-6">
          {/* WhatsApp Link */}
          <Link
            href={whatsAppLink} // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            <FaWhatsapp className="w-6 h-6 mr-2" /> {/* WhatsApp icon */}
            {t("whatsappButton")}
          </Link>

          {/* Email Link */}
          <Link
            href="mailto:lupalabs@lupalabs.com.br"
            className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            <FaEnvelope className="w-6 h-6 mr-2" /> {/* Email icon */}
            {t("emailButton")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
