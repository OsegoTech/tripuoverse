<template>
  <div>
    <TheNavigate />
    <div class="py-2 px-3 bg-slate-200 rounded-md mx-2 my-2">
      <div
        class="flex flex-col justify-between items-center px-4 md:flex md:flex-row"
      >
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
          <h1 class="text-4xl">{{ products.length }}</h1>
          <h1 class="text-3xl font-serif">Products</h1>
        </div>
        <div
          class="bg-blue-500 text-white flex flex-col items-center justify-between rounded-lg py-3"
        >
          <h1 class="text-4xl">{{ services.length }}</h1>
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
          <h1 class="text-2xl font-bold mt-4">Recent Products</h1>
          <div class="flex justify-between items-center">
            <button class="bg-blue-500 rounded-md mx-3">
              <router-link to="/create-service" class="text-white py-3 px-3"
                >All Products</router-link
              >
            </button>
          </div>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 py-2 px-4 mt-2"
        >
          <div v-for="product in products" key="product.id">
            <ProductCard
              :name="product.title.substring(0, 17) + '...'"
              :price="product.price"
              :description="product.description.substring(0, 17) + '...'"
              :image="product.image"
              seller="John Doe"
              :date="product.date"
            />
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-between items-center px-4">
          <h1 class="text-2xl font-bold mt-4">Recent Services</h1>
          <div class="flex justify-between items-center">
            <button class="bg-blue-500 rounded-md mx-3">
              <router-link to="/create-service" class="text-white py-3 px-3"
                >All services</router-link
              >
            </button>
          </div>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 py-2 px-4 mt-2"
        >
          <div v-for="service in services" :key="service.id">
            <ServiceCard
              :name="service.name.substring(0, 17) + '...'"
              :price="service.price"
              :description="service.description.substring(0, 17) + '...'"
              :image="service.image"
              seller="John Doe"
              :date="service.date"
            />
          </div>
        </div>
      </div>
    </div>
    <CreateService />
    <CreateProduct />
    <TheFooter />
  </div>
</template>

<script setup>
import CreateService from "../CreateService.vue";
import CreateProduct from "../CreateProduct.vue";
import TheFooter from "../TheFooter.vue";
import TheNavigate from "../TheNavigate.vue";
import { computed, onMounted, ref } from "vue";
import { initModals } from "flowbite";
import store from "../../store/index.js";
import ProductCard from "../ProductCard.vue";
import ServiceCard from "../ServiceCard.vue";

const sellername = "Jeff";
const products = computed(() => store.state.productsByUser);
console.log(products.value);
const services = computed(() => store.state.servicesByUser);
console.log(services.value);

onMounted(() => {
  initModals();
  store.dispatch("getProductsByUser");
  store.dispatch("getServicesByUser");
});

const showCreateService = ref(false);

const toggleCreateService = () => {
  showCreateService.value = true;
};
</script>

<style lang="scss" scoped></style>
