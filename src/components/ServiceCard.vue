<template>
  <div>
    <div
      class="relative flex w-70 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div
        class="relative mx-4 mt-4 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700"
      >
        <img
          class="w-full h-full object-cover"
          :src="image"
          alt="product image"
        />
      </div>
      <div class="p-3">
        <div class="mb-2 flex items-center justify-between">
          <p
          class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
          >
            {{ name }}
          </p>
        </div>
        <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <p>Provider:</p>
          </div>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3"
            >{{ seller }}</span
          >
        </div>
        <div class="flex items-center justify-between">
          <span class="text-1xl font-bold text-gray-900 dark:text-white"
            >Kes{{ price }}</span
          >
          <a
            :href="
              'https://wa.me/254753957908?text=I%20am%20interested%20in%20your%20service%20' +
              encodeURIComponent(name)
            "
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Chat</a
          >
        </div>
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
});
</script>

<style lang="scss" scoped></style>
