<template>
  <div>
    <slot>
      <!-- This is where the content of the page will be rendered -->
    </slot>

    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from "../components/TheFooter.vue";
</script>

<style lang="scss" scoped></style>
