<template>
  <div>
    <TheNavbar @toggle-modal="toggleModal" />
    <div class="container mx-auto py-8">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <!-- Product Card Start -->
        <div v-for="service in services">
          <ProductCard
            :name="service.name"
            :price="service.price"
            :description="service.description"
            :date="service.created_at"
            :image="getImageUrl(service.image)"
            seller="John Doe"
          />
        </div>
        <!-- Product Card End -->

        <!-- Repeat the above product card structure for each product -->
      </div>
      <CreateProduct />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import Footer from "../components/Footer.vue";
import ProductCard from "../components/ProductCard.vue";
import TheNavbar from "../components/TheNavbar.vue";
// import useServiceStore
import { useServiceStore } from "../store/servicesStore.js";
import { storeToRefs } from "pinia";
import CreateProduct from "../components/CreateProduct.vue";

const servicesOffered = useServiceStore();
const { services, loading, error } = storeToRefs(servicesOffered);
console.log(services);
const { fetchServices } = servicesOffered;

onBeforeMount(() => {
  fetchServices();
});

const getImageUrl = (image) => {
  return `http://localhost:5000/public/coverImages/${image}`;
};
</script>

<style lang="scss" scoped></style>
