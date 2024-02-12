<template>
  <div>
    <div
      class="relative flex w-70 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div
        class="relative mx-4 mt-4 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700"
      >
        <img :src="image" class="w-full h-full object-cover" />
      </div>
      <div class="p-3">
        <div class="mb-2 flex items-center justify-between">
          <p
            class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
          >
            <RouterLink
              :to="`/services/${id}`"
              class="block font-serif font-bold leading-relaxed text-blue-900 antialiased"
              >{{ name }}</RouterLink
            >
          </p>
          <p
            class="block font-serif  text-base font-medium leading-relaxed text-black antialiased py-1 px-2 rounded-md"
          >
            Kes {{ price }}
          </p>
        </div>
        <p
          class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"
        >
          {{ description }}
        </p>
      </div>
      <div class="p-3 mx-2 my-2 rounded-md bg-gray-100 flex justify-between items-center">
        <span class="font-bold text-black font-sans">{{ seller }}</span>

        <a
          :href="
            'https://wa.me/' +
            encodeURIComponent(whatsApp) +
            '?text=Hello%20' +
            encodeURIComponent(seller) +
            '%20I%20am%20interested%20in%20your%20' +
            encodeURIComponent(name) +
            ' Item%20'
          "
          class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          ><i class="fa-brands fa-whatsapp fa-2xl" style="color: #04d212"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  price: Number,
  image: String,
  seller: String,
  whatsApp: String,
  id: String,
});
</script>

<style lang="scss" scoped></style>
