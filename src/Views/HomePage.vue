<template>
  <div>
    <TheNavbar />
    <HeroSection class="pt-10 md:pt-8" />
    <FeatureSection />
    <SocialProof />
    <TestimonialSection />
    <NewsletterSection />
    <TheFooter />
  </div>
</template>

<script setup>
import HeroSection from "../components/HeroSection.vue";
import FeatureSection from "../components/FeatureSection.vue";
import SocialProof from "../components/SocialProof.vue";

import TestimonialSection from "../components/TestimonialSection.vue";
import NewsletterSection from "../components/NewsletterSection.vue";
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<style lang="scss" scoped></style>
