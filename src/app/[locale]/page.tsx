import BulletBall from "@/components/BulletBall";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("sections");

  return (
    <>
      <section
        id="home"
        className="py-8 relative flex items-center justify-center bg-light-beige"
      >
        <BulletBall color="bg-white" />
        <div className="text-center">
          <h1 className="uppercase text-2xl mb-2">{t("hero.title")}</h1>
          <p className="text-md text-gray-600">{t("hero.subtitle")}</p>
        </div>
      </section>

      <section>
        <div className="py-8 relative flex items-center justify-center bg-white">
          <BulletBall color="bg-blue-900" />
          <div className="text-center">
            <p className="lowercase text-lg">{t("keywords.content")}</p>
          </div>
        </div>
      </section>

      <section
        id="introduction"
        className="bg-gray-50 py-8"
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-black mb-8">
            {t("introduction.description")}
          </p>
        </div>
      </section>

      <section
        id="fivePrinciples"
        className="bg-light-beige py-8"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="uppercase text-3xl mb-6 text-blue-900">
            {t("fivePrinciples.title")}
          </h2>
          <p className="text-sm text-black mb-8">
            {t("fivePrinciples.description")}
          </p>
        </div>
      </section>

      <section
        className="bg-beige py-8 relative w-full"
      >
        <BulletBall color="bg-dark-gray" />
        <BulletBall color="bg-white" absolute={false} className="mt-2" />
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-blac mb-8">
            {t("fivePrinciples.description")}
          </p>
        </div>
      </section>

      <section
        id="about"
        className="flex items-center justify-center bg-white py-8"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">{t("about.title")}</h2>
          <p className="text-lg text-black">{t("about.description")}</p>
          {/* Add more content about the therapist */}
        </div>
      </section>

      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-gray-50 py-8"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">{t("services.title")}</h2>
          <p className="text-lg text-black mb-8">
            {t("services.description")}
          </p>
          {/* Add service cards or list */}
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{t("contact.title")}</h2>
          <p className="text-lg text-black mb-8">
            {t("contact.description")}
          </p>
          {/* Add contact form or contact information */}
        </div>
      </section>
    </>
  );
}
