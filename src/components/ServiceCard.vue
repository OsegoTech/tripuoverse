<template>
  <div>
    <div
      class="relative flex w-70 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div
        class="relative  overflow-hidden rounded-lg bg-white  text-gray-700"
      >
        <img :src="image" class="w-full h-full object-cover" />
      </div>
      <div class="p-1.5">
        <div class="flex flex-col  justify-between">
          <p
          >
            <RouterLink
              :to="`/services/${id}`"
              class="text-xs text-blue-900"
              >{{ name }}</RouterLink
            >
          </p>
          <p
            class="text-black text-xs  rounded-md"
          >
            Kes {{ price }}
          </p>
        </div>
        <p
          class="text-xs text-gray-700 hidden md:block"
        >
          {{ description }}
        </p>
      </div>
      <div class="p-1 mx-1 my-1 rounded-md bg-gray-100 flex justify-between items-center">
        <span class="text-xs">{{ seller }}</span>

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
          class="text-white hover:bg-blue-800 font-medium rounded-lg text-sm p-1 text-center"
          ><i class="fa-brands fa-whatsapp" style="color: #04d212"></i
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
