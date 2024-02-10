<template>
  <div>
    <TheNavigate />
    <div>
      <div class="flex justify-center">
        <div
          class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:py-3 px-3 lg:max-w-[1200px]"
        >
          <div v-for="service in services">
            <ServiceCard
              :name="service.name"
              :price="service.price"
              :description="service.description.substring(0, 30) + '...'"
              :image="service.image"
              seller="John Doe"
            />
          </div>
        </div>
      </div>
      <div class="bg-gray-900 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-white mb-8">
            Introducing Our Latest Product
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="relative overflow-hidden">
                <img
                  class="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                />
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <button
                    class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300"
                  >
                    View Product
                  </button>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
              <p class="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-gray-900 font-bold text-lg">$29.99</span>
                <button
                  class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="relative overflow-hidden">
                <img
                  class="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                />
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <button
                    class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300"
                  >
                    View Product
                  </button>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
              <p class="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-gray-900 font-bold text-lg">$29.99</span>
                <button
                  class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-8">
              <div class="relative overflow-hidden">
                <img
                  class="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Product"
                />
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <button
                    class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300"
                  >
                    View Product
                  </button>
                </div>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
              <p class="text-gray-500 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Integer euismod libero id mauris malesuada
                tincidunt.
              </p>
              <div class="flex items-center justify-between mt-4">
                <span class="text-gray-900 font-bold text-lg">$29.99</span>
                <button
                  class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
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
import TheNavigate from "../components/TheNavigate.vue";
const servicesOffered = useServiceStore();
const { services, loading, error } = storeToRefs(servicesOffered);
console.log(services);
const { fetchServices } = servicesOffered;

onBeforeMount(() => {
  fetchServices();
});
</script>

<style lang="scss" scoped></style>
