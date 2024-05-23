<template>
    <div class="bg-white rounded-lg shadow-lg  border-2 border-blue-200">
      <div class="relative rounded-lg overflow-hidden">
        <img class="object-cover w-full h-full rounded-lg" :src="image" alt="Product" />
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="absolute -bottom-1">
          <RouterLink :to="`/products/${id}`"
            class="bg-blue-300 text-gray-900 py-1.5 px-2 rounded-tr-xl text-xs  hover:bg-gray-300">
            View
          </RouterLink>
        </div>
      </div>
      <div class="px-0.5 py-0.5 md:px-3 md:py-2">
      <h3 class="text-xs  text-gray-900 mt-1">{{ name }}</h3>
      <p class="text-gray-500 hidden md:block text-xs mt-2">
        {{ description }}
      </p>
      <div class="flex items-center justify-between mt-4">
        <span class="text-gray-900 text-xs">Kes {{ price }}</span>
        <a :href="'https://wa.me/' +
          encodeURIComponent(whatsApp) +
          '?text=Hello%20' +
          encodeURIComponent(seller) +
          '%20I%20am%20interested%20in%20your%20' +
          encodeURIComponent(name) +
          ' Item%20'
          " class="bg-blue-500 text-white px-1 py-1 text-xs rounded-lg  hover:bg-blue-600">
          chat
        </a>

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
