<template>
  <div>
    <div class="flex ">
      <Sidebar />
      <div class="w-full lg:ml-2">
        <Navbar />
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
</script>

<style lang="scss" scoped></style>
