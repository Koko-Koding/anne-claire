---
layout: base.njk
title: Anne-Claire van Putten | BATC Complementary Therapist
description: This is a test of the Eleventy static site generator.
# orthomolecular medicine ⸱ medicine ⸱ naturopathy ⸱ reflex zone ⸱ electro acupuncture specialised in strengthening the immune system, improving the digestion system and skin problems
tags: [orthomolecular medicine, medicine, naturopathy, reflex zone, electro acupuncture]
author: Anne-Claire van Putten
date: 2025-04-01
language : en
---

<div>
  <section
    id="home"
    class="py-8 relative flex items-center justify-center bg-light-beige"
  >
    <!-- <BulletBall color="bg-white" /> -->
    <div class="text-center">
      <h1 class="uppercase text-2xl mb-2">
        {{ title }}
      </h1>
      <p class="text-md text-gray-600">
        {{ description }}
      </p>
    </div>
  </section>

  <section>
    <div class="py-8 relative flex items-center justify-center bg-white">
      <!-- <BulletBall color="bg-blue-900" /> -->
      <div class="text-center max-w-4xl mx-auto">
        <p class="lowercase text-lg">
          {{ keywords.content}}
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
      <p class="text-lg text-black">{{ testimonials.else.content }}</p>
      <p class="text-md text-black mt-3 font-extralight uppercase">
        {{ testimonials.else.name }}
      </p>
    </div>
  </section>

  <section id="fivePrinciples" class="bg-light-beige py-16">
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="uppercase text-3xl mb-6 text-blue-900">
        {{ fivePrinciples.title }}
      </h2>
      <p class="text-sm text-black mb-8">
        {{ fivePrinciples.content }}
      </p>
    </div>
  </section>

  <section
    class="bg-beige py-8 relative w-full"
    style="
      background-image: url('/public/temp/images/testimonials-nathalie-bg.jpg');
      background-size: cover;
      background-position: bottom;
    "
  >
    <!-- <BulletBall color="bg-dark-gray" />
    <BulletBall color="bg-white" absolute={false} class="mt-2" /> -->
    <div class="max-w-4xl mx-auto px-4">
      <p class="text-lg text-black">
        {{ testimonials.nathalie.content }}
      </p>
      <p class="text-md text-black mt-3 font-extralight uppercase">
        {{ testimonials.nathalie.name }}
      </p>
    </div>
  </section>

  <section
    id="about"
    class="grid lg:grid-cols-2 items-start justify-center bg-white gap-6"
  >
    <div class="w-full aspect-video object-cover">
      <img src="/temp/images/about-bg.jpg" alt="Anne-Claire"
        width="800"
        height="600"
        class="w-full h-full object-cover"
        />
      <div class="bg-blue-500 overflow-hidden">
        <div class="translate-x-1/2 w-96 h-96 rounded-full ml-auto bg-white/50"></div>
      </div>
    </div>

    <div class="max-w-lg mx-auto px-4 py-8">
      <h2 class="text-2xl text-blue-900">{{ about.title }}</h2>
      <p class="text-sm text-black mt-5 font-extralight">
        {{ about.content }}
      </p>
    </div>
  </section>

  <section
    id="services"
    class="min-h-screen flex items-center justify-center bg-gray-50 py-8"
  >
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-2xl font-bold mb-6">{{ services.title }}</h2>
      <p class="text-lg text-black mb-8">{{ services.description }}</p>
      {/* Add service cards or list */}
    </div>
  </section>

  <section
    id="contact"
    class="min-h-screen flex items-center justify-center bg-white"
  >
    <div class="max-w-4xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-6">{{ contact.title }}</h2>
      <p class="text-lg text-black mb-8">{{ contact.description }}</p>
      {/* Add contact form or contact information */}
    </div>
  </section>

</div>