import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"; // Social media icons
import { useLocale, useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const locale = useLocale(); // Get the current locale (e.g., "en", "pt", "es")

  // Function to generate href with the current locale

  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">{t("aboutTitle")}</h3>
            <p className="text-gray-400">{t("aboutDescription")}</p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">
              {t("quickLinksTitle")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`${locale}/ai-agents`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  🤖 {t("aiAgentsLink")}
                </Link>
              </li>
              <li>
                <Link
                  href={`${locale}/cloud-solutions`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  ☁️ {t("cloudSolutionsLink")}
                </Link>
              </li>
              {/* <li>
                <Link
                  href={`${locale}/enterprise-websites`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  🌐 {t("enterpriseWebsitesLink")}
                </Link>
              </li>
              <li>
                <Link
                  href={`${locale}/privacy-policy`}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {t("privacyPolicyLink")}
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">{t("contactTitle")}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">lupalabs@lupalabs.com.br</li>
              <li className="text-gray-400">+55 (31) 97553-0383</li>
              <li className="text-gray-400">Belo Horizonte - MG 🇧🇷</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("followUsTitle")}</h3>
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/company/lupalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com/lupalabs_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/lupalabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {t("companyName")}.{" "}
            {t("rightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
