<template>
  <div class="flex md:flex-col mx-4">
    <div v-if="loading">Fetching Services...</div>
    <div v-if="error">Error: {{ error }}</div>
    <div>
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
import { useServiceStore } from "../../store/index.js";
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
