<template>
  <widget />
  <navigation />
  <featured-product />
</template>

<script setup>
import { computed, ref } from "vue";
import router from "../routes/index.js";
import store from "../store/index.js";
import Widget from "./Header/Widget.vue";
import Navigation from "./Header/Navigation.vue";
import FeaturedProduct from "./Header/FeaturedProduct.vue";

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
