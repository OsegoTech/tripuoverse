<template>
  <div>
    <TheNavbar />

    <slot>
      <!-- This is where the content of the page will be rendered -->
    </slot>

    <TheFooter />
  </div>
</template>

<script setup>
import TheNavbar from "../components/TheNavbar.vue";
import Footer from "../components/Footer.vue";
import TheFooter from "../components/TheFooter.vue";
</script>

<style lang="scss" scoped></style>
