<template>
  <div>
    <div
      class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img class="rounded-t-lg" :src="image" alt="product image" />
      </a>
      <div class="px-5 pb-5">
        <a href="#">
          <h5
            class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            {{ name }}
          </h5>
        </a>
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
