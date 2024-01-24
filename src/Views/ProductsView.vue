<template>
  <div>
    <MainLayout>
      <div>
        <div
          class="bg-gray-100 mx-auto max-w-[1200px] px-3 py-3 mb-3  rounded-md gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
        >
          <div v-if="loading">Fetching products...</div>
          <!-- <div v-else-if="productsCount == 0">No products</div> -->
          <div v-else v-for="product in products" :key="product.id">
            <ProductCardVue
              :name="product.name"
              :price="product.price"
              :description="product.description"
              :image="getImageUrl(product.image)"
              seller="John Doe"
              :date="product.date"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import MainLayout from "../Layout/MainLayout.vue";
import ProductCardVue from "../components/ProductCard.vue";
import store from "../store/index.js";

const products = computed(() => store.state.products);
const loading = computed(() => store.state.loading);
const productsCount =  products.value.length
console.log(`productsCount: ${productsCount}`);
console.log(products.value);

// fetch products when component is mounted
onMounted(async () => {
  store.dispatch("fetchProducts");
});

const getImageUrl = (image) => {
  return `http://localhost:5000/public/productImages/${image}`;
};
</script>

<style scoped></style>
