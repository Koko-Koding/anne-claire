---
layout: base.njk
sections:
  hero:
    title: Anne-Claire van Putten
    subtitle: BATC Complementary Therapist
  keywords: 
    content: orthomolecular medicine ⸱ medicine ⸱ naturopathy ⸱ reflex zone ⸱ electro acupuncture specialised in strengthening the immune system, improving the digestion system and skin problems
  testimonials:
    else:
      content: Anne-Claire is an exceptionally professional naturopath and a highly skilled reflex zone therapist. Her knowledge of natural medicine is extensive, and she explores a broad spectrum of remedies, maintaining a large collection for testing. Above all, her advice is precise and tailor-made, and based on thorough measurements. She strongly believes in prevention and natural solutions for the body. Beyond her qualifications, she is a warm and intelligent woman with a genuine and profound interest in people.
    name: Else
    nathalie:
      content: Anne-Claire van Putten is the most knowledgeable person I have ever met when it comes to natural medicine, herbs, and vitamins. She assesses my overall well-being and evaluates my organs by testing pressure points in my body. Initially, I consulted her for help with improving my sleep, but to my astonishment, she accurately outlined my entire medical history simply by analysing my organs. I was truly blown away.
      name: Nathalie
    eugene:
      content: Due to frequent travel to Asia as part of my professional life, my digestive system became irregular. Anne-Claire helped me with reflexology and provided orthomolecular advice. She is a highly comprehensive naturopath who takes the time to explain the underlying causes of skin problems, the connections between organs and various complaints, and the intricate relationship between body and mind. It is always a pleasure to speak with her.
      name: Eugène
    ariane:
      content: Our six-year-old son suffered from severe breathing problems, sometimes even at night. A col- league recommended Anne-Claire van Putten, so we decided to visit her. She found a way to relax our child’s lungs—even during the night—while simultaneously strengthening his immune system. Over time, his body was finally able to fight off the microorganisms affecting his lungs. After six consultations, we now have a happy and healthy son.
      name: ARIANE AND KEES
  fivePrinciples:
    title: THE FIVE NATURE-ORIENTED PRINCIPLES
  about:
    title: About Anne-Claire van Putten (1960)
    content: "After graduating from the University of Amsterdam with a degree in Communication Science, I worked as a non-fi ction editor for many years. However, I eventually felt the need for a change in direction. My long-standing interest in natural medicine, combined with my fi rsthand experience of measuring the energy of meridians, led me to pursue various forms of education: naturopathy, Eas- tern medicine, psychology and spirituality. Through this journey, I gained deep insights into physiological proces- ses, human behaviour, and trauma. I studied at the Hogeschool voor Natuurgeneeswij zen (College for Naturopathy) in Arnhem, where my curiosity was immediately drawn to the healing power of herbs and, later, other natural elements such as minerals found in the Earth. I continue to be amazed by the intricate ways in which organs work together within the human body and the profound effects of natural remedies in supporting these functions organically. In my view, recovery and well-being are deeply personal processes. The best approach is one that is tailored to the individual, focusing on personalised solutions that meet their unique needs. Thank you, dr. Annelies Tak, Hilje de Meester- Wagenvoorde and Madelon Hooykaas for your knowledge, wisdom and support. With gratitude, Anne-Claire"
  tariffs:
    title: Tariffs and reimbursement
  contact:
    title: Contact
  footer:
    design:
      name: Website design by Nicola Dehmer, dehmer.nl
      siteUrl: https://dehmer.nl
    development:
      name: Website development Koko Koding, kokokoding.nl
      siteUrl: https://kokokoding.nl
    textAndPhotos:
      name: Text and photos by Anne-Claire van Putten
      siteUrl: https://anneclairevanputten.nl
  tags: [orthomolecular medicine, medicine, naturopathy, reflex zone, electro acupuncture]
author: Anne-Claire van Putten
date: 2025-04-01
language : nl
---

<div>
  <header
    class="bg-light-beige relative"
    style="background-image: url('/public/temp/images/header-bg.jpg'); background-size: cover; background-position: center;"
  >
    <div class="absolute w-full top-0 flex justify-end items-center gap-4 p-4">
      <div class="flex items-center space-x-0.5">
        <a href="/" title="Nederlands" class="flex justify-center items-center w-10 h-10 font-light text-xl uppercase text-dark-gray rounded-full transition-colors hover:bg-white/50">
          <span>NL</span>
        </a>
        <a href="#" title="English" class="flex justify-center items-center w-10 h-10 font-light text-xl uppercase text-dark-gray bg-white rounded-full">
          <span>EN</span>
        </a>
      </div>
      <!-- hamburger button with 4 lines -->
      <button class="flex flex-col items-center justify-center w-10 h-10 space-y-1.5 cursor-pointer">
        <span class="block w-8 h-0.5 bg-white"></span>
        <span class="block w-8 h-0.5 bg-white"></span>
        <span class="block w-8 h-0.5 bg-white"></span>
        <span class="block w-8 h-0.5 bg-white"></span>
      </button>
    </div>
    <div class="w-58 h-58 rounded-full bg-white/33 mx-auto"></div>  
  </header>
  <section
    id="home"
    class="py-8 relative flex items-center justify-center bg-light-beige text-dark-gray"
  >
    <div class="mx-auto left-0 right-0 absolute -translate-y-1/2 top-0 z-10 rounded-full w-6 h-6 bg-white"></div>
    <div class="text-center">
      <h1 class="uppercase text-2xl mb-2">
        {{ sections.hero.title }}
      </h1>
      <p class="text-md text-gray-600">
        {{ sections.hero.subtitle }}
      </p>
    </div>
  </section>

  <section>
    <div class="py-8 px-4 relative flex items-center justify-center bg-white">
      <div class="mx-auto left-0 right-0 absolute -translate-y-1/2 top-0 z-10 rounded-full w-6 h-6 bg-blue-900 text-dark-gray"></div>
      <div class="text-center max-w-4xl mx-auto">
        <p class="lowercase text-lg">
          {{ sections.keywords.content }}
        </p>
      </div>
    </div>
  </section>

  <section
    id="introduction"
    class="bg-gray-50 py-12"
    style="
      background-image: url('/public/temp/images/testimonials-else-bg.jpg');
      background-size: cover;
      background-position: bottom;
    "
  >
    <div class="max-w-4xl mx-auto px-4">
      <p class="text-lg text-dark-gray">{{ sections.testimonials.else.content }}</p>
      <p class="text-md text-dark-gray mt-3 font-extralight uppercase">
        {{ sections.testimonials.else.name }}
      </p>
    </div>
  </section>

  <section id="fivePrinciples" class="bg-light-beige py-16">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="uppercase text-3xl mb-6 text-blue-900">
        {{ sections.fivePrinciples.title }}
      </h2>
      <div class="text-sm text-dark-gray mb-8">

Since 2013 I am a registered member of the BATC (Anne-Claire van Putten with AGB code 90048965). The reason I chose this professional organisation is because the BATC developed the concept of the fi ve nature-oriented principles. In my working methods, I incorporate these important principles: energy, stimulus transition, drainage, food and mental well-being. This is part of my holistic view on health matters.

<br>

**Energy** is seen as the basis of life worldwide. Everything in and around us consists of energy. And energy also forms the basis of my
treatments and my thinking. It is a priority to ensure that there is a balanced fl ow of energy and that blockages can be removed.

<br>

**Stimulus** transmission takes place via the nervous system which is the communication network of the body. The stimulus transfer also ensures that certain signals, for example about what you need for recovery, are passed on to the body. Good stimulus transfer is essential for being able to function and recover well.

<br>

**Drainage** is important when there are too many waste products in the body, e.g. in our intestines, nutrients can no longer be absorbed properly. Under favourable conditions, our body is able to excrete most waste products without problems via our excretory organs. But our body itself can create an overload of waste products because, for example, our lymphatic system or blood circulation does not function optimally. It can be desirable to support and stimulate the body in this.

<br>

**Food** maintains your cells and provides them with fuel. Our daily diet is one of the most important components for a fi t and healthy body and a sharp mind. Certain foods are not tolerated equally well by everyone. This can be a temporary issue. Through nutritional advice and taking in special natural supplements this can change in a positive way.

<br>

**Mental well-being** is important for proper functioning of the body. Emotional, mental and spiritual aspects infl uence your health. Awareness of your thoughts and behavioural patterns are obviously important. This applies for mental, but also physical well-being.

      </div>
    </div>
  </section>

  <section
    class="bg-beige py-8 pb-16 relative w-full"
    style="
      background-image: url('/public/temp/images/testimonials-nathalie-bg.jpg');
      background-size: cover;
      background-position: bottom;
    "
  >
    <div class="mx-auto left-0 right-0 absolute -translate-y-1/2 top-0 z-10 rounded-full w-6 h-6 bg-dark-gray"></div>
    <div class="mx-auto z-10 rounded-full w-6 h-6 bg-white"></div>
    <div class="max-w-4xl mx-auto px-4 mt-4">
      <p class="text-lg text-dark-gray font-light leading-relaxed">
        {{ sections.testimonials.nathalie.content }}
      </p>
      <p class="text-md text-dark-gray mt-3 font-extralight uppercase">
        {{ sections.testimonials.nathalie.name }}
      </p>
    </div>
  </section>

  <section
    id="about"
    class="flex flex-col-reverse lg:grid grid-cols-2 grid-rows-2 items-start justify-center bg-white"
  >
    <img
      src="/public/temp/images/about-bg.jpg"
      alt="Anne-Claire"
      width="800"
      height="600"
      class="w-full h-full object-cover col-span-1 row-span-1 bg-green-900"
    />
    <div class="relative h-full bg-blue-500 col-start-1 row-start-2 col-span-1 row-span-1">
      <div class="h-full w-full overflow-hidden relative">
        <div class="absolute right-0 translate-x-1/2 aspect-square h-full rounded-full bg-white/50">
        </div>
      </div>
      <!-- bullet ball in the middle of the circle-->
      <div class="mx-auto top-1/2 right-0 translate-x-1/2 -translate-y-1/2 absolute z-10 rounded-full w-6 h-6 bg-blue-900"></div>
    </div>
    <div class="p-8 px-4 lg:px-12 col-span-1 row-span-2 flex flex-col justify-center lg:block">
      <h2 class="max-w-sm text-3xl text-blue-900 font-light">{{ sections.about.title }}</h2>
      <div class="text-sm text-dark-gray mt-5 max-w-xs font-extralight">
After graduating from the University of Amsterdam with a degree in Communication Science, I worked as a non-fi ction editor for many years. However, I eventually felt the need for a change in direction. My long-standing interest in natural medicine, combined with my fi rsthand experience of measuring the energy of meridians, led me to pursue various forms of education: naturopathy, Eastern medicine, psychology and spirituality. Through this journey, I gained deep insights into physiological proces- ses, human behaviour, and trauma.

<br>

I studied at the Hogeschool voor Natuurgeneeswijzen (College for Naturopathy) in Arnhem, where my curiosity was immediately drawn to the healing power of herbs and, later, other natural elements such as minerals found in the Earth. I continue to be amazed by the intricate ways in which organs work together within the human body and the profound effects of natural remedies in supporting these functions organically.

<br>

In my view, recovery and well-being are deeply personal processes. The best approach is one that is tailored to the individual, focusing on personalised solutions that meet their unique needs.

<br>

Thank you, dr. Annelies Tak, Hilje de Meester-Wagenvoorde and Madelon Hooykaas for your knowledge, wisdom and support.

<br>

With gratitude, Anne-Claire
      </div> </div></section>
  <section
    id="testimonialEugene"
    class="bg-light-beige py-16 relative w-full"
    style="
      background-image: url('/public/images/a-c.quote3.png');
      background-size: cover;
      background-position: bottom;
    "
  >
    <div class="max-w-4xl mx-auto px-4">
      <p class="text-lg text-dark-gray font-light leading-relaxed">
        {{ sections.testimonials.eugene.content }}
      </p>
      <p class="text-md text-dark-gray mt-3 font-extralight uppercase">
        {{ sections.testimonials.eugene.name }}
      </p>
    </div>
  </section>
  <section
    id="tariffs"
    class="flex items-center justify-center bg-white py-16 lg:pb-24 text-dark-gray relative"
  >
    <div class="mx-auto left-0 right-0 absolute -translate-y-1/2 top-0 z-10 rounded-full w-6 h-6 bg-dark-gray"></div>
    <div class="max-w-4xl w-full mx-auto px-4">
      <h2 class="text-3xl mb-6 text-blue-900 font-light">{{ sections.tariffs.title }}</h2>
      <ul class="max-w-3xl -ml-5 list-disc pl-6 mt-4 text-sm list-outside">
      To make an appointment please send an <a href="mailto:info@example.com" target="_blank" class="underline">email</a> with your mobile number and I will phone you as soon as possible.
        <li class="mt-4">
<span class="font-semibold">Introductory telephone interview (15 - 20 minutes)</span><br>
free
</li>
        <li class="mt-4">
<span class="font-semibold">Orthomolecular medicine consultation</span><br>
from € 40 per 30 minutes (reimbursed with code 24000)
</li>
        <li class="mt-4">
<span class="font-semibold">Reflex zone therapy</span><br>
from € 40 per 30 minutes (reimbursed with code 24009)
</li>
        <li class="mt-4">
<span class="font-semibold">Integral naturopathic consultation</span><br>
from € 90 per hour
</li>
        <li class="mt-4">
<span class="font-semibold">Psychosocial care provision</span><br>
from € 90 per hour
</li>
<br>
<span class="font-semibold">My consultations are (partly) reimbursed by:</span>

Zilveren Kruis Achmea, CZ, Nationale Nederlanden, Ohra, De Friesland, ONVZ, PNO, Menzis, VGZ, IZZ, IZA, Univé, UMC and United Consumers.
<br><br>
Rescheduling or cancelling an appointment needs to be done 2 working days in advance.
</ul>
    </div>
  </section>

  <section
    id="testimonialAriane"
    class="bg-light-beige py-16 relative w-full"
    style="
      background-image: url('/public/images/a-c.quote4.png');
      background-size: cover;
      background-position: bottom;
    "
  >
    <div class="max-w-4xl mx-auto px-4">
      <p class="text-lg text-dark-gray font-light leading-relaxed">
        {{ sections.testimonials.ariane.content }}
      </p>
      <p class="text-md text-dark-gray mt-3 font-extralight uppercase">
        {{ sections.testimonials.ariane.name }}
      </p>
    </div>
  </section>

  <section
    id="contact"
    class="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:grid-rows-2 bg-white relative"
  >
    <div class="col-span-1 row-span-1 relative">
      <img
        src="/public/images/a-c.helft3.png"
        alt="Haarlemmerdijk 142-III kaart"
        width="800"
        height="600"
        class="w-auto h-full object-cover"
      />
      <div class="mx-auto top-0 right-0 translate-x-1/2 -translate-y-1/2 absolute z-10 rounded-full w-6 h-6 bg-blue-900"></div>
    </div>
    <div class="hidden lg:block bg-blue-900 relative h-full col-start-1 row-start-2 col-span-1 row-span-1">
      <div class="h-full w-full overflow-hidden relative">
        <div class="translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full ml-auto bg-white/50"></div>
      </div>
      <!-- bullet ball in the middle of the circle-->
      <div class="mx-auto top-0 right-0 translate-x-1/2 -translate-y-1/2 absolute z-10 rounded-full w-6 h-6 bg-dark-gray"></div>
    </div>
    <div class="w-1/2 py-8 px-4 lg:px-12 col-span-1 row-span-2 lg:flex lg:flex-col lg:justify-between">
      <div>
      <h2 class="max-w-sm text-3xl text-blue-900 font-light">{{ sections.contact.title }}</h2>
      <div class="text-sm text-dark-gray mt-5 max-w-sm font-extralight">
Anne-Claire van Putten<br>
Haarlemmerdijk 142-III<br>
1013JJ Amsterdam<br>
and on location<br>
<br>
email: anneclairevanputten@xs4all.nl<br>
tel. + (31)20-6272482
<br>
<br>
KvK 3438448<br>
AGB code 90048965<br>
<br>
<b class="font-medium">The practice is accessible by public transport:</b>
<br>
bus 18, 21 and 22:<br>
stop Buiten Oranjestraat or<br>
Haarlemmerplein<br>
tram 5:<br>
stop Haarlemmerplein<br>
<br>
<b class="font-medium">Parking near Haarlemmerplein:</b>
<br>
Parkeergarage Willemspoort, Haarlemmerhouttuinen 549<br>
<br>
<b class="font-medium">Qualifications Vektis:</b> <br>
naturopathy and psychosocial caretaker<br>
(BATC professional organisation since 2013,<br>
and since 2025 NAP registered therapist)

  </div>
  </div>
  
  <div class="flex mt-32 gap-4">
    <img
      src="/public/images/logo-batc.png"
      alt="Logo BATC"
      width="180"
      height="48"
      class="w-auto h-12"
    />
    <img
      src="/public/images/logo-koepel-nap.jpg"
      alt="Logo NAP"
      width="180"
      height="48"
      class="w-auto h-12"
    />
    <img
      src="/public/images/logo-cam-coop.png"
      alt="Logo CAM Coop"
      width="180"
      height="48"
      class="w-auto h-12"
    />
  </div>
  </div>
</section>

<footer class="bg-beige py-8">
  <div class="max-w-4xl mx-auto px-4">
    <p class="text-sm text-center">
      <a href="{{ sections.footer.design.siteUrl }}" class="font-medium hover:underline">
        {{ sections.footer.design.name }}
      </a>
      <br>
      <a href="{{ sections.footer.development.siteUrl }}" class="font-medium hover:underline">
        {{ sections.footer.development.name }}
      </a>
      <br>
      <a href="{{ sections.footer.textAndPhotos.siteUrl }}" class="font-medium hover:underline">
        {{ sections.footer.textAndPhotos.name }} {{ sections.date | date: "%Y" }}
      </a>
      <br>
    </p>
  </div>
</footer>

</div>
