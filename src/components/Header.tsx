import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { HamburgerMenu } from "./HamburgerMenu";

export const Header = () => {
  const t = useTranslations("navigation");

  const navigationItems = [
    { id: "introduction", label: t("introduction") },
    { id: "fivePrinciples", label: t("fivePrinciples") },
    { id: "aboutAnneClaire", label: t("aboutAnneClaire") },
    { id: "tariffs", label: t("tariffs") },
    { id: "contact", label: t("contact") },
  ];

  return (
    <header className="bg-beige/50 bg-cover" style={{ backgroundImage: "url('/temp/images/header-bg.jpg')" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center py-4">
          <LanguageSwitcher />
          <HamburgerMenu navigationItems={navigationItems} />
        </div>
        <div className="w-56 h-56 rounded-full mx-auto bg-white/50"></div>
      </div>
    </header>
  );
};
