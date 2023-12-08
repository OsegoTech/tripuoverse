<template>
  <div>
    <!-- component -->
    <div
      class="relative flex w-70 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div
        class="relative mx-4 mt-4 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700"
      >
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
          class=" w-full h-full object-cover"
        />
      </div>
      <div class="p-3">
        <div class="mb-2 flex items-center justify-between">
          <p
            class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
          >
            {{ name }}
          </p>
          <p
            class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased"
          >
            Kes{{ price }}
          </p>
        </div>
        <p
          class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75"
        >
          {{ description }}
        </p>
      </div>
      <div class="p-3 pt-0">
        <button
          class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Contact Seller
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  price: Number,
  description: String,
  image: String,
  seller: String,
  date: String,
});
</script>

<style lang="scss" scoped></style>
