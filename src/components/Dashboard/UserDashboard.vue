<template>
  <div>
    <TheNavigate />
    <div class="py-2 px-3 bg-slate-200 rounded-md mx-2 my-2">
      <div class="flex justify-between items-center px-4">
        <h1 class="text-2xl font-bold">
          Hello <span class="text-blue-500">{{ sellername }}</span
          >, Welcome to your Dashbord
        </h1>
        <div class="flex gap-1">
          <button
            data-modal-target="create-product-modal"
            data-modal-toggle="create-product-modal"
            class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            New Product
          </button>
          <!-- Modal toggle -->
          <button
            data-modal-target="crud-modal"
            data-modal-toggle="crud-modal"
            class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            New Service
          </button>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 py-2 px-4 mt-2">
        <div
          class="bg-blue-500 text-white flex flex-col items-center justify-between rounded-lg py-3"
        >
          <h1 class="text-4xl">56</h1>
          <h1 class="text-3xl font-serif">Products</h1>
        </div>
        <div
          class="bg-blue-500 text-white flex flex-col items-center justify-between rounded-lg py-3"
        >
          <h1 class="text-4xl">56</h1>
          <h1 class="text-3xl font-serif">Services</h1>
        </div>
        <div
          class="bg-blue-500 text-white flex flex-col items-center justify-between rounded-lg py-3"
        >
          <h1 class="text-4xl">56</h1>
          <h1 class="text-3xl font-serif">Clicks</h1>
        </div>
      </div>

      <div>
        <div class="flex justify-between items-center px-4">
          <h1 class="text-2xl font-bold mt-4">Recent Services</h1>
          <div class="flex justify-between items-center">
            <button class="bg-blue-500 rounded-md mx-3">
              <router-link to="/create-service" class="text-white py-3 px-3"
                >New Service</router-link
              >
            </button>
            <button class="bg-blue-500 rounded-md mx-3">
              <router-link to="/create-service" class="text-white py-3 px-3"
                >All services</router-link
              >
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-2 px-4 mt-2">
          <div class="bg-white rounded-lg p-4">
            <h1 class="text-xl font-bold">Service Name</h1>
            <p class="text-gray-500">Category</p>
            <p class="text-gray-500">Price</p>
          </div>
          <div class="bg-white rounded-lg p-4">
            <h1 class="text-xl font-bold">Service Name</h1>
            <p class="text-gray-500">Category</p>
            <p class="text-gray-500">Price</p>
          </div>
          <div class="bg-white rounded-lg p-4">
            <h1 class="text-xl font-bold">Service Name</h1>
            <p class="text-gray-500">Category</p>
            <p class="text-gray-500">Price</p>
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-between items-center px-4">
          <h1 class="text-2xl font-bold mt-4">Recent Services</h1>
          <div class="flex justify-between items-center">
            <button class="bg-blue-500 rounded-md mx-3">
              <router-link to="/create-service" class="text-white py-3 px-3"
                >New Service</router-link
              >
            </button>
            <button class="bg-blue-500 rounded-md mx-3">
              <router-link to="/create-service" class="text-white py-3 px-3"
                >All services</router-link
              >
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-2 px-4 mt-2">
          <div class="bg-white rounded-lg p-4">
            <h1 class="text-xl font-bold">Service Name</h1>
            <p class="text-gray-500">Category</p>
            <p class="text-gray-500">Price</p>
          </div>
          <div class="bg-white rounded-lg p-4">
            <h1 class="text-xl font-bold">Service Name</h1>
            <p class="text-gray-500">Category</p>
            <p class="text-gray-500">Price</p>
          </div>
          <div class="bg-white rounded-lg p-4">
            <h1 class="text-xl font-bold">Service Name</h1>
            <p class="text-gray-500">Category</p>
            <p class="text-gray-500">Price</p>
          </div>
        </div>
      </div>
    </div>
    <CreateProduct />
    <CreateService />
    <TheFooter />
  </div>
</template>

<script setup>
import CreateProduct from "../CreateProduct.vue";
import CreateService from "../CreateService.vue";
import TheFooter from "../TheFooter.vue";
import TheNavigate from "../TheNavigate.vue";
import { onMounted, ref } from "vue";
import { initModals } from "flowbite";

const sellername = "Jeff";
onMounted(() => {
  initModals();
});

const showCreateService = ref(false);

const toggleCreateService = () => {
  showCreateService.value = true;
};
</script>

<style lang="scss" scoped></style>
