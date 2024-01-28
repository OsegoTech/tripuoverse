<template>
  <div>
    <TheNavbar />
    <div>
      <div class="flex justify-center">
        <div
          class="grid grid-12 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:py-3 px-3 lg:max-w-[1200px]"
        >
          <div v-for="service in services">
            <ServiceCard
              :name="service.name"
              :price="service.price"
              :description="service.description.substring(0, 100) + '...'"
              :image="service.image"
              seller="John Doe"
            />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import ServiceCard from "../components/ServiceCard.vue";
import { useServiceStore } from "../store/servicesStore.js";
import { storeToRefs } from "pinia";
import TheNavbar from "../components/TheNavbar.vue";
import TheFooter from "../components/TheFooter.vue";
const servicesOffered = useServiceStore();
const { services, loading, error } = storeToRefs(servicesOffered);
console.log(services);
const { fetchServices } = servicesOffered;

onBeforeMount(() => {
  fetchServices();
});


</script>

<style lang="scss" scoped></style>
