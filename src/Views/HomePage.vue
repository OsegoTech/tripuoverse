<template>
  <div>
    <MainLayout>
      <slot>
        <HeroSection  class="pt-10 md:pt-8"/>
        <FeatureSection />
        <SocialProof />
        <TestimonialSection />
        <NewsletterSection />
        >
      </slot>
    </MainLayout>
  </div>
</template>

<script setup>
import MainLayout from "../Layout/MainLayout.vue";
import HeroSection from "../components/HeroSection.vue";
import FeatureSection from "../components/FeatureSection.vue";
import SocialProof from "../components/SocialProof.vue";

import TestimonialSection from "../components/TestimonialSection.vue";
import NewsletterSection from "../components/NewsletterSection.vue";
</script>

<style lang="scss" scoped></style>
