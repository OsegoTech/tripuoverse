<template>
  <div class="">
    <div v-if="loading">Fetching Services...</div>
    <div v-if="error">Error: {{ error }}</div>
    <div class="md:flex gap-2 mx-3 my-3">
      <TransitionGroup v-for="service in services" :key="service.id" tag="div" name="flow">
          <ServiceCard
            :service-description="service.description"
            :service-name="service.name"
          />
        </TransitionGroup>
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

<style scoped>
.flow-enter-active,
.flow-leave-active {
  transition: all 3s ease;
}

.flow-enter-from,
.flow-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.flow-enter-to,
.flow-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

</style>
