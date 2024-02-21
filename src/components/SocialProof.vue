<template>
  <div>
    <section class="bg-white dark:bg-gray-900">
      <div
        class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
      >
        <dl
          class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white"
        >
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ userCount }}</dt>
            <dd class="font-light text-gray-500 dark:text-gray-400">Users</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ servicesCount }}</dt>
            <dd class="font-light text-gray-500 dark:text-gray-400">Services</dd>
          </div>
          <div class="flex flex-col items-center justify-center">
            <dt class="mb-2 text-3xl md:text-4xl font-extrabold">{{ productCount }}</dt>
            <dd class="font-light text-gray-500 dark:text-gray-400">
              Products
            </dd>
          </div>
        </dl>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import store from "../store/index.js";

const userCount = computed(() => store.state.usersCount);  
const productCount = computed(() => store.state.productsCount);
const servicesCount = computed(() => store.state.servicesCount);


onMounted(() => {
  document.title = "TripuoVerse | Home ";
  store.dispatch("getUsersCount");
  store.dispatch("getProductsCount");
  store.dispatch("getServices");
});
</script>

<style lang="scss" scoped></style>
