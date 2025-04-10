---
layout: base.njk
sections:
  hero:
    title: Anne-Claire van Putten
    subtitle: BATC complementair therapeut
  keywords: 
    content: orthomoleculaire geneeskunde ⸱ natuurgeneeskunde ⸱ reflexzone ⸱ elektro-acupunctuur gespecialiseerd in versterken immuun systeem, verbeteren darmconditie en huidproblemen
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
    title: De vijf natuurgerichte principes
  about:
    title: Over Anne-Claire van Putten (1960)
    content: "Na mijn studie Communicatiewetenschappen aan de Universiteit van Amsterdam, heb ik lang als non-fictieredacteur gewerkt voor diverse uitgeverijen. Uiteindelijk voelde ik de behoefte om echt van richting te veranderen. Mijn langdurige interesse in natuurgeneeskunde – gecombineerd met de ervaring dat het mogelijk is de energie van organen en stelsels te kunnen meten – motiveerde me te zoeken naar wat het lichaam maar ook de geest nodig hebben. Daardoor ben ik op een holistische manier naar ziektes en energetische processen gaan kijken. En ik besloot me verder te verdiepen in verschillende richtingen: natuurgeneeskunde, oosterse geneeswijzen, psychologie en spiritualiteit. Het was ook een reis waarin ik diepgaande inzichten kreeg in fysiologische processen, menselijk gedrag en trauma. Later studeerde ik aan de Hogeschool voor Natuurgeneeswijzen in Arnhem, waar ik gefascineerd raakte door de medicinale kracht van planten en andere natuurlijke elementen, zoals mineralen die zich in de aarde bevinden. Nog steeds blijf ik me verbazen over de ingenieuze manier waarop organen samenwerken in het menselijk lichaam én de effecten van natuurlijke middelen die het lichaam organisch kunnen ondersteunen en genezen. Herstel en welzijn zijn diepe persoonlijke processen, zo heb ik geleerd, waarbij het mogelijk is een behandeling helemaal op de persoon af te stemmen. Dr. Annelies Tak, Hilje de Meester-Wagenvoorde en Madelon Hooykaas ben ik diep dankbaar voor alle kennis, wijsheid en support. Anne-Claire"
  tariffs:
    title: Tarieven behandelingen en vergoedingen
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
        <a href="#" title="Nederlands" class="flex justify-center items-center w-10 h-10 font-light text-xl uppercase text-dark-gray rounded-full bg-white">
          <span>NL</span>
        </a>
        <a href="/en/" title="English" class="flex justify-center items-center w-10 h-10 font-light text-xl uppercase text-dark-gray transition-colors hover:bg-white/50 rounded-full">
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
    <div class="text-center font-light">
      <h1 class="uppercase text-2xl mb-2">
        {{ sections.hero.title }}
      </h1>
      <p class="text-md text-gray-600">
        {{ sections.hero.subtitle }}
      </p>
    </div>
  </section>

  <section>
    <div class="py-8 relative flex items-center justify-center bg-white text-dark-gray">
      <div class="mx-auto left-0 right-0 absolute -translate-y-1/2 top-0 z-10 rounded-full w-6 h-6 bg-blue-900"></div>
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

Sinds 2013 ben ik lid van de BATC (Anne-Claire van Putten – AGB code 90048965). De reden dat ik voor deze beroepsorganisatie heb gekozen, is dat de BATC het concept van de vijf natuurgerichte principes heeft ontwikkeld. Deze principes maken deel uit van mijn holistische visie op gezondheid.

<br>

**Energie** is de basis van ons leven; alles in en om ons heen bestaat uit energie. Denken in termen van energie vormt de basis van mijn werk. Het is belangrijk ervoor te zorgen dat iemand over voldoende energie gaat beschikken, dat er een meer evenwichtig stromen van de energie gaat plaatsvinden, en dat eventuele blokkades worden opgeheven.

<br>

**Prikkeloverdracht** komt tot stand via het zenuwstelsel en is het communicatienetwerk van het lichaam. De prikkeloverdracht zorgt er ook voor dat bepaalde signalen – bijvoorbeeld wat iemand nodig hebt voor herstel – aan het lichaam worden doorgegeven. Een goede prikkeloverdracht is essentieel om goed te kunnen functioneren en te herstellen.

<br>

**Drainage** is het stimuleren van het verwerken van afvalstoffen. Onder gunstige omstandigheden is het lichaam in staat de meeste afvalstoffen af te breken en via de uitscheidingsorganen af te voeren. Daarnaast kan er in het lichaam een teveel aan afvalstoffen ontstaan doordat bijvoorbeeld het lymfesysteem of bloedcirculatie niet optimaal functioneren. Wanneer zich te veel afvalstoffen ophopen, bijvoorbeeld in de darmen, kunnen voedingsstoffen ook niet goed meer worden opgenomen.

<br>

**Voeding** onderhoudt de cellen en voorziet deze van brandstof. Dagelijkse voeding is een van de belangrijkste componenten voor een gezond lichaam én een scherpe geest. Maar bepaalde voedingsmiddelen worden niet door iedereen even goed verdragen. Dit kan een tijdelijk probleem zijn, en door gerichte voedingsadviezen in combinatie met natuurlijke supplementen kan dit in gunstige zin veranderen.

<br>

**Geestelijk welzijn** is van wezenlijk belang. Emotionele, mentale en spirituele aspecten beïnvloeden de gezondheid en het welzijn. Door zorgen of andere geestelijke spanningen kunnen veel klachten ontstaan. Bewustzijn over denk- en gedragspatronen is buitengewoon belangrijk. Dit geldt voor het geestelijke, maar ook voor het fysieke welzijn.

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
    class="grid lg:grid grid-cols-2 grid-rows-2 items-start justify-center bg-white gap-x-12"
  >
    <img
      src="/public/temp/images/about-bg.jpg"
      alt="Anne-Claire"
      width="800"
      height="600"
      class="w-auto h-full object-cover col-span-1 row-span-1"
    />
    <div class="relative h-full bg-blue-500 col-start-1 row-start-2 col-span-1 row-span-1">
      <div class="h-full w-full overflow-hidden relative">
        <div class="absolute right-0 translate-x-1/2 aspect-square h-full rounded-full bg-white/50">
        </div>
      </div>
      <!-- bullet ball in the middle of the circle-->
      <div class="mx-auto top-1/2 right-0 translate-x-1/2 -translate-y-1/2 absolute z-10 rounded-full w-6 h-6 bg-blue-900"></div>
    </div>
    <div class="py-8 col-span-1 row-span-2">
      <h2 class="max-w-sm text-3xl text-blue-900 font-light">{{ sections.about.title }}</h2>
      <div class="text-sm text-dark-gray mt-5 max-w-xs font-extralight">
Na mijn studie Communicatiewetenschappen aan de Universiteit van Amsterdam, heb ik lang als non-fictieredacteur gewerkt voor diverse uitgeverijen.

<br>
<br>

Uiteindelijk voelde ik de behoefte om echt van richting te veranderen. Mijn langdurige interesse in natuurgeneeskunde – gecombineerd met de ervaring dat het mogelijk is de energie van organen en stelsels te kunnen meten – motiveerde me te zoeken naar wat het lichaam maar ook de geest nodig hebben. Daardoor ben ik op een holistische manier naar ziektes en energetische processen gaan kijken. En ik besloot me verder te verdiepen in verschillende richtingen: natuurgeneeskunde, oosterse geneeswijzen, psychologie en spiritualiteit. Het was ook een reis waarin ik diepgaande inzichten kreeg in fysiologische processen, menselijk gedrag en trauma.

<br>

Later studeerde ik aan de Hogeschool voor Natuurgeneeswijzen in Arnhem, waar ik gefascineerd raakte door de medicinale kracht van planten en andere natuurlijke elementen, zoals mineralen die zich in de aarde bevinden.
Nog steeds blijf ik me verbazen over de ingenieuze manier waarop organen samenwerken in het menselijk lichaam én de effecten van natuurlijke middelen die het lichaam organisch kunnen ondersteunen en genezen.

<br>

Herstel en welzijn zijn diepe persoonlijke processen, zo heb ik geleerd, waarbij het mogelijk is een behandeling helemaal op de persoon af te stemmen.

<br>

Dr. Annelies Tak, Hilje de Meester-Wagenvoorde en Madelon Hooykaas ben ik diep dankbaar voor alle kennis, wijsheid en support.

<br>

Anne-Claire
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
    class="flex items-center justify-center bg-white py-16 pb-24 text-dark-gray relative"
  >
    <div class="mx-auto left-0 right-0 absolute -translate-y-1/2 top-0 z-10 rounded-full w-6 h-6 bg-dark-gray"></div>
    <div class="max-w-4xl w-full mx-auto px-4">
      <h2 class="text-3xl mb-6 text-blue-900 font-light">{{ sections.tariffs.title }}</h2>
      <ul class="max-w-3xl -ml-5 list-disc pl-6 mt-4 text-sm list-outside">
      Voor informatie of het maken van een afspraak graag een e-mail met je mobiele nummer en ik bel zo spoedig mogelijk.
        <li class="mt-4">
<span class="font-semibold">Telefonisch kennismakingsgesprek (15 -20 minuten)</span><br>
kosteloos
</li>
        <li class="mt-4">
<span class="font-semibold">Orthomoleculaire geneeskunde</span><br>
vanaf € 40 per 30 minuten (vergoeding onder code 24000)
</li>
        <li class="mt-4">
<span class="font-semibold">Reflexzone therapie</span><br>
vanaf € 40 per 30 minuten (vergoeding onder code 24009)
</li>
        <li class="mt-4">
<span class="font-semibold">Integraal natuurgeneeskundig consult</span><br>
vanaf € 90 per uur
</li>
        <li class="mt-4">
<span class="font-semibold">Psychosociale zorgverlening</span><br>
vanaf € 90 per uur
</li>
<br>
<span class="font-semibold">Mijn consulten worden (gedeeltelijk) vergoed door:</span>

Zilveren Kruis Achmea, CZ, Nationale Nederlanden, Ohra, De Friesland, ONVZ, PNO, Menzis, VGZ, IZZ, IZA, Univé, UMC en United Consumers.
<br><br>
Bij verhindering graag twee werkdagen van tevoren afzeggen.
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
    class="flex lg:flex items-start justify-center bg-white gap-12"
  >
    <div class="h-full w-1/2 object-cover">
      <img
        src="/public/images/a-c.helft3.png"
        alt="Haarlemmerdijk 142-III kaart"
        width="800"
        height="600"
        class="w-auto h-full object-cover"
      />
      <div class="bg-blue-900 overflow-hidden h-full flex-grow">
        <div class="translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full ml-auto bg-white/50"></div>
      </div>
    </div>
    <div class="w-1/2 py-8">
      <h2 class="max-w-sm text-3xl text-blue-900">{{ sections.contact.title }}</h2>
      <div class="text-sm text-dark-gray mt-5 max-w-sm font-extralight">
Anne-Claire van Putten<br>
Haarlemmerdijk 142-III<br>
1013JJ Amsterdam<br>
en op locatie<br>
<br>
e-mail: anneclairevanputten@xs4all.nl<br>
tel. + (31)20-6272482
<br>
<br>
KvK 3438448<br>
AGB code 90048965<br>
<br>
<b class="font-medium">De praktijk is bereikbaar met openbaar vervoer:</b>
<br>
bus 18, 21 en 22:<br>
halte Buiten Oranjestraat of<br>
halte Haarlemmerplein<br>
tram 5:<br>
halte Haarlemmerplein<br>
<br>
<b class="font-medium">Parkeren vlakbij het Haarlemmerplein:</b>
<br>
Parkeergarage Willemspoort, Haarlemmerhouttuinen 549<br>
<br>
<b class="font-medium">Kwalificaties Vektis:</b> <br>
natuurgeneeskunde en psychosociaal zorgverlener<br>
(BATC beroepsvereniging sinds 2013,<br>
en sinds 2025 NAP registertherapeut)

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
    <p class="text-sm text-center text-dark-gray">
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
