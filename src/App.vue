<script setup></script>

<template>
  <div class="">
    <RouterView v-slot="{Component}">
      <Transition name="page" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>
.page-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
.page-leave-active {
  transition: all 0.4s ease-in;
}
.page-enter-from {
  opacity: 0;
  transform: translateX(50px);
}
.page-enter-active {
  transition: all 0.4s ease-out;
}
</style>
