<template>
  <div>
    <!-- <TheNavbar /> -->
    <TheNavigate />
    <HeroSection class="pt-10 md:pt-8" />
    <div>
      <div class="bg-gray-900 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-white mb-8">Featured Products</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <NewProductCard
              v-for="product in products"
              :key="product.id"
              :name="product.title.substring(0, 17) + '...'"
              :price="product.price"
              :description="product.description.substring(0, 17) + '...'"
              :image="product.image"
              seller="John Doe"
              :date="product.date"
            />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="bg-gray-900 py-16">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center">
            <h2 class="text-3xl font-bold text-white mb-8">Latest Services</h2>
            <RouterLink to="/services" class="text-3xl font-bold text-white mb-8"> All services</RouterLink>

          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <NewProductCard
              v-for="service in services"
              :key="service.id"
              :name="service.name.substring(0, 17) + '...'"
              :price="service.price"
              :description="service.description.substring(0, 17) + '...'"
              :image="service.image"
              seller="John Doe"
              :date="service.date"
            />
          </div>
        </div>
      </div>
    </div>
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
import { initFlowbite } from "flowbite";
import NewProductCard from "../components/NewProductCard.vue";
import store from "../store/index.js";
import { onMounted, computed } from "vue";

const products = computed(() => store.state.latestproducts);
const loading = computed(() => store.state.loading);
const services = computed(() => store.state.latestServices);
console.log(`services: ${services.value}`);
const productsCount = products.value.length;
console.log(`productsCount: ${productsCount}`);
console.log(products.value);

onMounted(async () => {
  store.dispatch("latestProducts");
});

onMounted(async () => {
  store.dispatch("latestServices");
});

onMounted(() => {
  initFlowbite();
});
</script>

<style lang="scss" scoped></style>
