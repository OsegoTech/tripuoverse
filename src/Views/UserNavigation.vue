<template>
  <div>
    <div class="bg-indigo-700 py-3 px-4 border-t-2 border-white rounded-lg">
      <p>
        <router-link to="/login">Sign in</router-link>
      </p>
      <div>
        <p>Profile</p>
        <p>Settings</p>
        <p @click="logout" class="text-red-500 cursor-pointer">Logout</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import store from "../store/index.js";
import router from "../routes/index.js";

const logout = () => {
  store.dispatch("logout");
  router.push("/login");
};
</script>

<style lang="scss" scoped></style>
