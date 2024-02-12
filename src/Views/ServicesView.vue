<template>
  <div>
    <TheNavigate />
    <div>
      <div class="flex justify-center">
        <div
          class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:py-3 px-3 lg:max-w-[1200px]"
        >
          <div v-for="service in services">
            <ServiceCard
              :name="service.name"
              :price="service.price"
              :description="service.description.substring(0, 30) + '...'"
              :image="service.image"
              :seller="service.provider.firstName"
              :whatsApp="service.provider.whatsApp"
            />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import {  onBeforeMount } from "vue";
import ServiceCard from "../components/ServiceCard.vue";
import { useServiceStore } from "../store/servicesStore.js";
import { storeToRefs } from "pinia";
import store from "../store/index.js";
import TheFooter from "../components/TheFooter.vue";
import TheNavigate from "../components/TheNavigate.vue";
import axiosClient from "../axios.js";
const servicesOffered = useServiceStore();
const { services, loading, error } = storeToRefs(servicesOffered);
console.log(services);
const { fetchServices } = servicesOffered;

const fetchSeller = (sellerId) => {
    axiosClient
      .get(`/users/${sellerId}`)
      .then((response) => {
        console.log(response.data);
        const seller = response.data.firstName;
        console.log(seller);
        return seller;
      })
      .catch((error) => {
        console.error(error);
      });
};

onBeforeMount(() => {
  fetchServices();
});



</script>

<style lang="scss" scoped></style>
