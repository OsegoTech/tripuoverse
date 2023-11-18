<template>
  <widget />
  <navigation />
  <div class="w-full md:w-[80%] mx-auto">
    <featured-product />
    <features />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import router from "../routes/index.js";
import store from "../store/index.js";
import Widget from "./Header/Widget.vue";
import Navigation from "./Header/Navigation.vue";
import FeaturedProduct from "./Header/FeaturedProduct.vue";
import Features from "./Header/Features.vue";

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);

function logout() {
  store.dispatch("logout").then(() => {
    router.push({ name: "Login" });
  });
}

const currentUser = computed(() => store.state.user.data);
console.log(currentUser.firstName);
</script>

<style lang="scss" scoped></style>
