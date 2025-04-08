import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('sections');

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl text-gray-600">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{t('about.title')}</h2>
          <p className="text-lg text-gray-700">{t('about.description')}</p>
          {/* Add more content about the therapist */}
        </div>
      </section>

      <section id="services" className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{t('services.title')}</h2>
          <p className="text-lg text-gray-700 mb-8">{t('services.description')}</p>
          {/* Add service cards or list */}
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{t('contact.title')}</h2>
          <p className="text-lg text-gray-700 mb-8">{t('contact.description')}</p>
          {/* Add contact form or contact information */}
        </div>
      </section>
    </>
  );
}