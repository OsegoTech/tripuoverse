<template>
  <div>
    <!-- <TheNavbar /> -->
    <TheNavigate />
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
// import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
import TheNavigate from "../components/TheNavigate.vue";
import { initFlowbite } from 'flowbite'
import { onMounted } from "vue";

onMounted(() => {
    initFlowbite();
})
</script>

<style lang="scss" scoped>
</style>
