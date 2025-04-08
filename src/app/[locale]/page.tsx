import BulletBall from "@/components/BulletBall";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
          <div className="text-center max-w-4xl mx-auto">
            <p className="lowercase text-lg">{t("keywords.content")}</p>
          </div>
        </div>
      </section>

      <section
        id="introduction"
        className="bg-gray-50 py-12"
        style={{
          backgroundImage: "url('/temp/images/testimonials-else-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-black">{t("testimonials.else.content")}</p>
          <p className="text-md text-black mt-3 font-extralight uppercase">
            {t("testimonials.else.name")}
          </p>
        </div>
      </section>

      <section id="fivePrinciples" className="bg-light-beige py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="uppercase text-3xl mb-6 text-blue-900">
            {t("fivePrinciples.title")}
          </h2>
          <p className="text-sm text-black mb-8">
            {t("fivePrinciples.content")}
          </p>
        </div>
      </section>

      <section
        className="bg-beige py-8 relative w-full"
        style={{
          backgroundImage: "url('/temp/images/testimonials-nathalie-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        <BulletBall color="bg-dark-gray" />
        <BulletBall color="bg-white" absolute={false} className="mt-2" />
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-black">
            {t("testimonials.nathalie.content")}
          </p>
          <p className="text-md text-black mt-3 font-extralight uppercase">
            {t("testimonials.nathalie.name")}
          </p>
        </div>
      </section>

      <section
        id="about"
        className="grid lg:grid-cols-2 items-start justify-center bg-white gap-6"
      >
        <div className="w-full aspect-video object-cover">
          <Image src="/temp/images/about-bg.jpg" alt="Anne-Claire"
            width={800}
            height={600}
            className="w-full h-full object-cover"

           />
          <div className="bg-blue-500 overflow-hidden">
            <div className="translate-x-1/2 w-96 h-96 rounded-full ml-auto bg-white/50"></div>
          </div>
        </div>

        <div className="max-w-lg mx-auto px-4 py-8">
          <h2 className="text-2xl text-blue-900">{t("about.title")}</h2>
          <p className="text-sm text-black mt-5 font-extralight">
            {t("about.content")}
          </p>
        </div>
      </section>

      <section
        id="services"
        className="min-h-screen flex items-center justify-center bg-gray-50 py-8"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">{t("services.title")}</h2>
          <p className="text-lg text-black mb-8">{t("services.description")}</p>
          {/* Add service cards or list */}
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center bg-white"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{t("contact.title")}</h2>
          <p className="text-lg text-black mb-8">{t("contact.description")}</p>
          {/* Add contact form or contact information */}
        </div>
      </section>
    </>
  );
}
