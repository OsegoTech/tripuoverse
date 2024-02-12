<template>
  <div>
    <TheNavigate />
    <div class="bg-gray-100 dark:bg-gray-800 py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                class="w-full h-full object-cover"
                :src="product.image"
                :alt="product.title"
              />
            </div>
            <div class="flex -mx-2 mb-4 justify-between items-center">
              <div>
                <RouterLink
                  to="/products"
                  class="w-full bg-blue-600 dark:bg-blue-700 text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-blue-900 dark:hover:bg-gray-600"
                >
                  Back to Products
                </RouterLink>
              </div>
              <div>
                <a
                  :href="
                    'https://wa.me/' +
                    encodeURIComponent(product.seller.whatsApp) +
                    '?text=Hello%20' +
                    encodeURIComponent(seller) +
                    '%20I%20am%20interested%20in%20your%20' +
                    encodeURIComponent(product.title) +
                    ' Item%20'
                  "
                  class="w-full bg-blue-600 dark:bg-blue-700 text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-blue-900 dark:hover:bg-gray-600"
                >
                  Contact Seller
                </a>
              </div>
            </div>
          </div>
          <div class="md:flex-1 px-4">
            <h2
              class="w-full bg-blue-600 dark:bg-blue-700 text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-blue-900 dark:hover:bg-gray-600"
            >
              {{ product.title }}
            </h2>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{}}</p>
            <div class="flex mb-4">
              <div class="mr-4">
                <span class="font-bold text-gray-700 dark:text-gray-300"
                  >Price:</span
                >
                <span class="text-gray-600 dark:text-gray-300"
                  >Kes {{ product.price }}</span
                >
              </div>
              <div>
                <span class="font-bold text-gray-700 dark:text-gray-300"
                  >Availability:</span
                >
                <span class="text-gray-600 dark:text-gray-300">In Stock</span>
              </div>
            </div>

            <div>
              <span class="font-bold text-gray-700 dark:text-gray-300"
                >Product Description:</span
              >
              <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {{ product.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import { computed, onBeforeMount, ref } from "vue";
import TheFooter from "../components/TheFooter.vue";
import TheNavigate from "../components/TheNavigate.vue";
import store from "../store/index.js";
import { RouterLink, useRoute } from "vue-router";

const route = useRoute();

const productId = ref(route.params.productId);
console.log(productId.value);

onBeforeMount(() => {
  store.dispatch("fetchProduct", productId.value);
});

const product = computed(() => store.state.product);
console.log(product.value);

const seller = computed(() => store.state.product.seller.firstName);
</script>

<style lang="scss" scoped></style>
