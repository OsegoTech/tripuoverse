<template>
  <div>
    <TheNavigate />
    <div>
      <div >
        <div
        class="bg-gray-100 mx-auto max-w-[1200px] px-3 py-3 mb-3 rounded-md gap-3 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
        >
        <div v-if="loading">Fetching Services...</div>
          <div v-else v-for="service in services">
            <ServiceCard
              :name="service.name.substring(0, 10) + '...'"
              :price="service.price"
              :description="service.description.substring(0, 25) + '...'"
              :image="service.image"
              :seller="service.provider.firstName"
              :whatsApp="service.provider.whatsApp"
              :id="service._id"
            />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import {  onBeforeMount, onMounted } from "vue";
import ServiceCard from "../components/ServiceCard.vue";
import { useServiceStore } from "../store/servicesStore.js";
import { storeToRefs } from "pinia";
import TheFooter from "../components/TheFooter.vue";
import TheNavigate from "../components/TheNavigate.vue";
const servicesOffered = useServiceStore();
const { services  } = storeToRefs(servicesOffered);
console.log(services);
const { fetchServices } = servicesOffered;



onBeforeMount(() => {
  fetchServices();
});

onMounted(() => {
  console.log(services);
});





</script>

<style lang="scss" scoped></style>
