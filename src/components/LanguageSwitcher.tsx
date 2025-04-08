import Link from 'next/link';
import { useLocale } from 'next-intl';

export const LanguageSwitcher = () => {
  const locale = useLocale();
  
  return (
    <div className="flex gap-2">
      <Link 
        href="/" 
        locale="nl" 
        className={`${locale === 'nl' ? 'font-bold' : ''}`}
      >
        NL
      </Link>
      <Link 
        href="/en" 
        locale="en"
        className={`${locale === 'en' ? 'font-bold' : ''}`}
      >
        EN
      </Link>
    </div>
  );
};