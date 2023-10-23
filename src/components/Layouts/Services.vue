<template>
  <div class="">
    <div v-if="loading">Fetching Services...</div>
    <div v-if="error">Error: {{ error }}</div>
    <div class="md:flex gap-2 mx-3 my-3">
      <div v-for="service in services" :key="service.id">
        <ServiceCard
          :service-description="service.description"
          :service-name="service.name"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ServiceCard from "../ServiceCard.vue";
import { useServiceStore } from "../../store/servicesStore.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const servicesOfferd = useServiceStore();
const { services, service, loading, error } = storeToRefs(servicesOfferd);
const { fetchServices } = servicesOfferd;
console.log(services);

onMounted(() => {
  fetchServices();
});

</script>

<style lang="scss" scoped></style>
