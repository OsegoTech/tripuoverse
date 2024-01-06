<template>
  <div>
    <TheNavbar class="mb-12 lg:mb-8"/>

    <slot>
        <!-- This is where the content of the page will be rendered -->
    </slot>

    <Footer />
  </div>
</template>

<script setup>
import TheNavbar from "../components/TheNavbar.vue";
import Footer from "../components/Footer.vue";
</script>

<style lang="scss" scoped></style>
