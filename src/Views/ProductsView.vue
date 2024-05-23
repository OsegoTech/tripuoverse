<template>
  <div>
    <TheNavigate />
    <div class="rounded-lg my-3 mx-6">
      <FloatLabel>
        <InputText id="username" v-model="searchTerm" />
        <label for="username">Search product</label>
      </FloatLabel>
    </div>
    <div>
      <div>
        <div
          class="bg-gray-100 mx-auto max-w-[1200px] px-3 py-3 mb-3 rounded-md gap-3 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          <div v-if="loading">Fetching products...</div>
          <!-- <div v-else-if="productsCount == 0">No products</div> -->
          <div v-else v-for="product in products" :key="product.id">
            <ProductCardVue :name="product.title.substring(0, 10) + '...'" :price="product.price"
              :description="product.description.substring(0, 25) + '...'" :image="product.image"
              :seller="product.seller.firstName" :whatsApp="product.seller.whatsApp" :date="product.date"
              :id="product._id" />
          </div>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import ProductCardVue from "../components/ProductCard.vue";
import TheFooter from "../components/TheFooter.vue";
import TheNavigate from "../components/TheNavigate.vue";

const searchTerm = ref("")
const products = ref([])
const loading = ref(false)



const fetchProducts = () => {
  console.log(`${import.meta.env.VITE_API_URL}`);
  axios.get(`${import.meta.env.VITE_API_URL}/products${searchTerm.value ? `?qSearch=${searchTerm.value}` : ""}`)
    .then((response) => {
      console.log(response.data);
      products.value = response.data
    })
}

onMounted(() => {
  fetchProducts()
})

watch(searchTerm, () => {
  fetchProducts()
}, { immediate: false })

</script>
