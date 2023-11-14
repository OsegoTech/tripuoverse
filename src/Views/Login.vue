<template>
  <div
    class="relative flex flex-col justify-center min-h-screen overflow-hidden"
  >
    <div
      class="w-full p-6 m-auto bg-white border-t border-indigo-600 rounded shadow-lg shadow-indigo-800/50 lg:max-w-md"
    >
      <h1 class="text-3xl font-semibold text-center text-indigo-700">
        Tripuo-Verse
      </h1>
      <h6 class="text-2xl font-semibold text-center text-indigo-700">
        Sign In
      </h6>
      <form @submit.prevent="login" method="POST">
        <div>
          <label for="email" class="block text-sm text-gray-800">Email</label>
          <input
            type="email"
            autocomplete="email"
            placeholder="Enter your email"
            name="email"
            v-model="user.email"
            class="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label for="password" class="block text-sm text-gray-800"
            >Password</label
          >
          <input
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="Enter your password"
            v-model="user.password"
            class="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div class="mt-3">
          <button
            type="submit"
            :disabled="loading"
            class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-600"
          >
            Login
          </button>
        </div>
      </form>

      <p class="mt-8 text-xs font-light text-center text-gray-700">
        Don't have an account?
        <router-link
          to="/register"
          class="font-medium text-indigo-600 hover:underline"
          >Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../store/index.js";
import router from "../routes/index.js";

let loading = ref(false);
let errorMsg = ref("");

const user = {
  email: "",
  password: "",
};

function login() {
  loading.value = true;
  store
    .dispatch("login", user)
    .then(() => {
      loading.value = false;
      router.push({ name: "Home" });
    })
    .catch(({ response }) => {
      loading.value = false;
      console.log(response);
      errorMsg.value = response.data.message;
    });
}
</script>

<style lang="scss" scoped></style>
