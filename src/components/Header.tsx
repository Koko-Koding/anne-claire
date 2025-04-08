import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  const t = useTranslations('navigation');

  const navigationItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'services', label: t('services') },
    { id: 'contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-lg font-semibold">Logo</span>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <HamburgerMenu navigationItems={navigationItems} />
          </div>
        </div>
      </div>
    </header>
  );
};