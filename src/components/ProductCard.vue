<template>
  <div>
    <!-- component -->
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
        <Button  label="Contact Seller"> </Button>
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
