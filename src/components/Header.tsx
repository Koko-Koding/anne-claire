import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';
import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  const t = useTranslations('navigation');

  const navigationItems = [
    { id: 'introduction', label: t('introduction') },
    { id: 'fivePrinciples', label: t('fivePrinciples') },
    { id: 'aboutAnneClaire', label: t('aboutAnneClaire') },
    { id: 'tariffs', label: t('tariffs') },
    { id: 'contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
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