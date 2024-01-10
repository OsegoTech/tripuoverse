<template>
  <div>
    <MainLayout>
      <div class="flex justify-center">
        <div
          class="grid grid-12 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:py-3 px-3 lg:max-w-[1200px]"
        >
          <div v-for="service in services">
            <ServiceCard
              :name="service.name"
              :price="service.price"
              :description="service.description"
              :image="getImageUrl(service.image)"
              seller="John Doe"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import MainLayout from "../Layout/MainLayout.vue";
import ServiceCard from "../components/ServiceCard.vue";
import { useServiceStore } from "../store/servicesStore.js";
import { storeToRefs } from "pinia";
const servicesOffered = useServiceStore();
const { services, loading, error } = storeToRefs(servicesOffered);
console.log(services);
const { fetchServices } = servicesOffered;

onBeforeMount(() => {
  fetchServices();
});

const getImageUrl = (image) => {
  return `http://localhost:5000/public/serviceImages/${image}`;
};
</script>

<style lang="scss" scoped></style>
