import { useState } from "react";
import { whatsAppLink } from "@/src/constants/links";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import { LogoText } from "../Logo/logoText";
import Dropdown from "../Dropdown/dropdown";
import MetamaskLogo from "../Logo/metamaskLogo";

const MenuButton = ({ onClick }: { onClick: () => void }) => (
  <button className="focus:outline-none" onClick={onClick}>
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      ></path>
    </svg>
  </button>
);

const CloseButton = ({ onClick }: { onClick: () => void }) => (
  <button className="" onClick={onClick}>
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  </button>
);

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a href={href} className="text-gray-800 hover:font-bold">
    {children}
  </a>
);

const ActionButton = ({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) => (
  <button
    className={`px-4 py-2 rounded font-bold ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

type NavLinkItem = {
  key: string;
  label: string;
} & (
  | {
      dropdown: true;
      items: { key: string; label: string; href: string; emoji: string }[];
    }
  | {
      dropdown: false;
      href: string;
    }
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("header");
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.split("/")[1] || "en";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Add emojis to the products
  const products = [
    {
      key: "gastrends",
      label: t("gastrends"), // "AI-Powered Business Solutions"
      href: `/${locale}`,
      emoji: "⛽",
    },
    {
      key: "automatedtransactions",
      label: t("automatedtransactions"), // "Enterprise Cloud Solutions"
      href: `/${locale}`,
      emoji: "🤖",
    },
  ];

  const navLinks: NavLinkItem[] = [
    {
      key: "products",
      label: t("products"),
      dropdown: true,
      items: products,
    },
    // Temporarily remove the blog link
    // {
    //   key: "blog",
    //   label: t("blog"),
    //   dropdown: false,
    //   href: `/${locale}/blog`,
    // },
  ];

  const actionButtons = [
    {
      key: "connect",
      label: t("connectWallet"),
      onClick: () => router.push(`/${locale}/login`),
      className: "bg-blue-800 text-white hover:bg-blue-600",
    },
  ];

  return (
    <header className="bg-gray-100 shadow-md w-full fixed top-0 z-50">
      <div className="container min-w-full mx-auto px-4 py-4 flex justify-between items-center">
        <a className="font-bold text-lg" href={`/${locale}`}>
          GuardianGas
        </a>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center space-x-4">
          <LanguageSwitcher />
          <MenuButton onClick={toggleMenu} />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <Dropdown key={link.key} label={link.label} items={link.items} />
            ) : (
              <NavLink key={link.key} href={link.href}>
                {link.label}
              </NavLink>
            )
          )}
          <LanguageSwitcher />
          {actionButtons.map((button) => (
            <ActionButton
              key={button.key}
              onClick={button.onClick}
              className={button.className}
            >
              <div className="flex items-center justify-between">
                {button.label}
                <div className="ml-4">
                  <MetamaskLogo />
                </div>
              </div>
            </ActionButton>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden">
          <div className="fixed top-0 right-0 h-full w-10/12 bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-between p-4">
              <LogoText />
              <CloseButton onClick={toggleMenu} />
            </div>

            <div className="container mx-auto px-4 py-4 flex flex-col space-y-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.key} className="flex flex-col space-y-4">
                    <span className="text-gray-800 font-bold">
                      {link.label}
                    </span>
                    {link.items.map((item) => (
                      <NavLink key={item.key} href={item.href}>
                        {item.emoji && (
                          <span className="mr-2">{item.emoji}</span>
                        )}
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink key={link.key} href={link.href}>
                    {link.label}
                  </NavLink>
                )
              )}
              {actionButtons.map((button) => (
                <ActionButton
                  key={button.key}
                  onClick={button.onClick}
                  className={button.className}
                >
                  {button.label}
                </ActionButton>
              ))}
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
