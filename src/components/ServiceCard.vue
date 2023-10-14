<template>
  <div
    class="w-[350px] p-1 flex flex-col justify-center items-center border-2 border-indigo-600 rounded-lg"
  >
    <div class="text-center">
      <h3>{{ serviceName }}</h3>
    </div>
    <div class="w-[300px]">
      <img src="../assets/Logo-design-service.jpg" alt="Logo Design" />
    </div>
    <p class="w-[300px]">
      {{serviceDescription}}
    </p>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue';
const props = defineProps({
    serviceDescription: String,
    serviceName: String
})
</script>

<style lang="scss" scoped></style>
