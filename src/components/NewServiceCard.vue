<template>
  <div class="">
    <div class="bg-white rounded-lg shadow-lg  border-2 border-blue-200">
      <div class="relative rounded-lg overflow-hidden">
        <img class="object-cover w-full rounded-lg h-full" :src="image" alt="Product" />
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="absolute -bottom-1  ">
          <RouterLink :to="`/services/${id}`"
            class="bg-blue-300 text-gray-900 py-2 px-6 rounded-tr-xl font-bold hover:bg-gray-300">
            View Service
          </RouterLink>
        </div>
      </div>
      <div class="p-3">
        <h3 class="text-sm  text-gray-900 mt-4">{{ name }}</h3>
        <p class="text-gray-500 text-sm mt-2">
          {{ description }}
        </p>
        <div class="flex items-center justify-between mt-4">
          <span class="text-gray-900  text-2xl">Kes {{ price }}</span>
          <a :href="'https://wa.me/' +
          encodeURIComponent(whatsApp) +
          '?text=Hello%20' +
          encodeURIComponent(seller) +
          '%20I%20am%20interested%20in%20your%20' +
          encodeURIComponent(name) +
          ' Item%20'" class="bg-blue-500 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-600">
            chat
          </a>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  price: Number,
  description: String,
  image: String,
  seller: String,
  date: String,
  id: String,
  whatsApp: String,
});
</script>

<style lang="scss" scoped></style>
