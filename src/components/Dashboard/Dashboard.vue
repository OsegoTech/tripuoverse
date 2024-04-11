<template>
  <div class="flex gap-2">
    <Sidebar />
    <div class="flex-1 h-[100vh] mr-2  ">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue';




</script>

<style lang="scss" scoped></style>