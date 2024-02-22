<template>
  <!-- https://play.tailwindcss.com/MIwj5Sp9pw -->
  <div class="py-16">
    <div
      class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
    >
      <div class="hidden lg:block lg:w-1/2 bg-cover">
        <img
          src="../../assets/images/signup.jpeg"
          alt=""
          class="object-cover w-full h-full"
        />
      </div>
      <div class="w-full p-8 lg:w-1/2">
        <h2 class="text-2xl font-semibold text-blue-700 text-center">
          TripuoVerse
        </h2>
        <p class="text-xl text-blue-700 text-center">Welcome Back!</p>

        <form class="w-full max-w-lg" @submit.prevent="login">
          <div class="flex flex-wrap -mx-3 mb-6"></div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-white text-blue-700 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                v-model="user.email"
                placeholder="superadmin@gmail.com"
              />
              <div v-if="v$.email?.$pending" class="text-xs text-blue-700">Checking email...</div>
              <div v-if="!v$.email?.$pending && v$.email?.$error" class="text-xs text-red-500">{{ v$.email.$errors[0] }}</div>
            </div>
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-white text-blue-700 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                v-model="user.password"
                placeholder="test1234"
              />
             
              <div v-if="v$.password?.$pending" class="text-xs text-blue-700">Checking password...</div>
              <div v-if="!v$.password?.$pending && v$.password?.$error" class="text-xs text-red-500">{{ v$.password.$errors[0] }}</div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button
              :disabled="loading || v$.$pending || v$.$error"
              class="bg-blue-700 w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {{ loading ? "Loading..." : "Login" }}
            </button>
          </div>
          <div v-if="errorMsg">
            <p class="text-red-500 text-lg italic">{{ errorMsg }}</p>
          </div>
          <!-- already registered -->
          <div class="text-center mt-4">
            <p class="text-blue-700">
              Don't have an account?
              <router-link to="/register" class="text-blue-700 hover:underline"
                >Register</router-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../../store/index.js";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

let loading = ref(false);
let errorMsg = ref("");

const user = {
  email: "",
  password: "",
};

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const v$ = useVuelidate(rules, user);

const login = async () => {
  loading.value = true;
  errorMsg.value = "";

  try {
    await store.dispatch("login", user);
  } catch (error) {
    // console.log(error);
    if (error.response) {
      errorMsg.value = error.response.data.message;
    } else {
      errorMsg.value = "Wrong email or password. Please try again.";
    }
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
