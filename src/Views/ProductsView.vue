<template>
  <div>
    <TheNavigate />
    <div>
      <div>
        <div
          class="bg-gray-100 mx-auto max-w-[1200px] px-3 py-3 mb-3 rounded-md gap-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"
        >
          <div v-if="loading">Fetching products...</div>
          <!-- <div v-else-if="productsCount == 0">No products</div> -->
          <div v-else v-for="product in products" :key="product.id">
            <ItemCard
              :name="product.title.substring(0, 17) + '...'"
              :price="product.price"
              :description="product.description.substring(0, 25) + '...'"
              :image="product.image"
              :seller="product.seller.firstName"
              :whatsApp="product.seller.whatsApp"
              :date="product.date"
              :id="product._id"
            />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import { computed, onBeforeMount, onMounted } from "vue";
import ProductCardVue from "../components/ProductCard.vue";
import store from "../store/index.js";
import TheFooter from "../components/TheFooter.vue";
import TheNavigate from "../components/TheNavigate.vue";
import ItemCard from "../components/core/ItemCard.vue";

const products = computed(() => store.state.products);
const loading = computed(() => store.state.loading);
const productsCount = products.value.length;
console.log(`productsCount: ${productsCount}`);
console.log(products.value);

// fetch products when component is mounted
onBeforeMount(async () => {
  store.dispatch("fetchProducts");
});




// const getImageUrl = (image) => {
//   return `http://localhost:5000/public/productImages/${image}`;
// };
</script>

<style scoped></style>
