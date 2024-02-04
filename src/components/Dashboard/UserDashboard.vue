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
          <button class="bg-blue-500 text-white py-2 px-3 rounded-md">
            New Product
          </button>
          <button class="bg-blue-500 text-white py-2 px-3 rounded-md">
            New Listing
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
    <TheFooter />
  </div>
</template>

<script setup>
import CreateProduct from "../CreateProduct.vue";
import TheFooter from "../TheFooter.vue";
import TheNavigate from "../TheNavigate.vue";

const sellername = "Jeff";
</script>

<style lang="scss" scoped></style>
