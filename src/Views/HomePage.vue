<template>
  <div>
    <TheNavigate />
    <div class="hidden md:block">
      <div class="grid grid-cols-6 px-6 py-3 bg-blue-500 gap-2 ">
        <div class="col-span-1 p-2 rounded-lg border-2 bg-white border-blue-500 ">
          <div class="flex items-center gap-1 rounded-md my-1 hover:bg-blue-100 px-3 py-3">
            <CircuitBoard color="#0f73d2" />
            <p>Electronics</p>
          </div>
          <div class="flex items-center gap-1 rounded-md my-1 hover:bg-blue-100 px-3 py-3">
            <Armchair color="#0f73d2" />
            <p>Furniture</p>
          </div>
          <div class="flex items-center gap-1 rounded-md my-1 hover:bg-blue-100 px-3 py-3">
            <VenetianMask color="#0f73d2" />
            <p>Beauty</p>
          </div>
          <div class="flex items-center gap-1 rounded-md my-1 hover:bg-blue-100 px-3 py-3">
            <VenetianMask color="#0f73d2" />
            <p>Perfumes</p>
          </div>
          <div class="flex items-center gap-1 rounded-md my-1 hover:bg-blue-100 px-3 py-3">
            <VenetianMask color="#0f73d2" />
            <p>Photography</p>
          </div>
          <div class="flex items-center gap-1 rounded-md my-1 hover:bg-blue-100 px-3 py-3">
            <VenetianMask color="#0f73d2" />
            <p>Events</p>
          </div>


        </div>
        <div class="col-span-4 border-2 border-blue-500 bg-white p-3 rounded-xl">
          <Carousel :value="products" :numVisible="4" :numScroll="1" :responsiveOptions="responsiveOptions" circular
            :autoplayInterval="5000">
            <template #item="slotProps">
              <div class="border-1 surface-border border-round m-2  p-3">
                <div class="mb-3">
                  <div class="relative mx-auto">
                    <img :src="slotProps.data.image" :alt="slotProps.data.title" class="w-full rounded-lg " />
                    <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)"
                      class="absolute" style="left:5px; top: 5px" />
                  </div>
                </div>
                <div class="mb-3 font-medium">{{ slotProps.data.title }}</div>
                <div class="flex justify-content-between align-items-center">
                  <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                  <span>
                    <Button icon="pi pi-heart" severity="secondary" outlined />
                    <Button icon="pi pi-shopping-cart" class="ml-2" />
                  </span>
                </div>
              </div>
            </template>
          </Carousel>
        </div>
        <div class="col-span-1 flex flex-col gap-5">
          <div class="flex flex-col gap-2 border-2 bg-white border-blue-500 p-3 rounded-xl">
            <div class="flex items-center gap-3">
              <MessageCircleQuestion color="#0f73d2" />
              <div class="flex flex-col">
                <h1>HELP CENTER</h1>
                <p>Guide To Customer Care</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <Recycle color="#0f73d2" />
              <div class="flex flex-col">
                <h1>EASY RETURN</h1>
                <p>Quick refund</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <BadgeDollarSign color="#0f73d2" />
              <div class="flex flex-col">
                <h1>SELL ON OSEGO</h1>
                <p>Thousands of Visitors</p>
              </div>
            </div>
          </div>
          <div class="border-2 border-blue-500 bg-white p-3 rounded-xl">
            <p>Call or WhatsApp</p>
            <h1 class="text-3xl">0743168819</h1>
            <p>To order</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class=" py-16">
        <div class="container mx-auto px-4">
          <div class="flex justify-between bg-blue-600 px-6 mb-3 py-2 rounded-sm items-center">
            <h2 class="text-2xl font-bold text-white ">
              Featured Products
            </h2>
            <RouterLink to="/services" class="text-2xl font-bold text-white">
              All Products</RouterLink>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <NewProductCard v-for="product in products" :key="product.id" :name="product.title.substring(0, 17) + '...'"
              :price="product.price" :description="product.description.substring(0, 17) + '...'" :image="product.image"
              :seller="product.seller.firstName" :date="product.date" :id="product._id"
              :whatsApp="product.seller.whatsApp" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class=" py-16">
        <div class="container mx-auto px-4">
          <div class="flex justify-between bg-blue-600 px-6 mb-3 py-2 rounded-sm items-center">
            <h2 class="text-2xl font-bold text-white">Latest Services</h2>
            <RouterLink to="/services" class="text-2xl font-bold text-white">
              All services</RouterLink>
          </div>
          <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <NewServiceCard v-for="service in services" :key="service._id" :name="service.name.substring(0, 25) + '...'"
              :price="service.price" :description="service.description.substring(0, 17) + '...'" :image="service.image"
              :date="service.date" :id="service._id" :seller="service.provider.firstName"
              :whatsApp="service.provider?.whatsApp" />
          </div>
        </div>
      </div>
    </div>
    <FeatureSection />

    <SocialProof />
    <!-- <TestimonialSection /> -->
    <!-- <NewsletterSection /> -->
    <TheFooter />
  </div>
</template>

<script setup>
import { MessageCircleQuestion, VenetianMask, BadgeDollarSign, Recycle, CircuitBoard, Armchair } from "lucide-vue-next";
import { ref } from "vue"

import FeatureSection from "../components/FeatureSection.vue";
import SocialProof from "../components/SocialProof.vue";
import TheFooter from "../components/TheFooter.vue";
import TheNavigate from "../components/TheNavigate.vue";

import NewProductCard from "../components/NewProductCard.vue";
import store from "../store/index.js";
import { onMounted, computed } from "vue";
import NewServiceCard from "../components/NewServiceCard.vue";

const products = computed(() => store.state.latestproducts);
const loading = computed(() => store.state.loading);
const services = computed(() => store.state.latestServices);
console.log(`services: ${services.value}`);
const productsCount = products.value.length;
console.log(`productsCount: ${productsCount}`);
console.log(products.value);

onMounted(async () => {
  store.dispatch("latestProducts");
  store.dispatch("latestServices");

});

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

const getSeverity = (status) => {
  switch (status) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warning';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};
</script>

<style lang="scss" scoped></style>
