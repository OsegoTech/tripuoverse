<template>
  <div
    class="relative flex flex-col justify-center min-h-screen overflow-hidden"
  >
    <div
      class="w-full p-6 m-auto bg-white border-t border-indigo-600 rounded shadow-lg shadow-indigo-800/50 lg:max-w-md"
    >
      <h3 class="text-3xl font-semibold text-center text-indigo-700">
        Tripuo-Verse
      </h3>
      <h6 class="text-2xl font-semibold text-center text-indigo-700">
        Register
      </h6>

      <form  @submit.prevent="register">
        <div class="flex flex-col space-y-4">
          <div class="flex flex-col space-y-1">
            <label for="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              v-model="newUser.firstName"
              class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              v-model="newUser.lastName"
              class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="newUser.email"
              class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              v-model="newUser.phone"
              class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="whatsapp">Whatsapp</label>
            <input
              type="tel"
              id="whatsapp"
              v-model="newUser.whatsApp"
              class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="newUser.password"
              class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <label for="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="newUser.passwordConfirm"
              class="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div class="flex flex-col space-y-1">
            <button
              type="submit"
              class="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../store/index.js";
import router from "../routes/index.js";

const loading = ref(false);
const errorMsg = ref("");

const newUser = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  whatsApp: "",
  password: "",
  passwordConfirm: "",
};

function register() {
  loading.value = true;
  store
    .dispatch("register", newUser)
    .then(() => {
      loading.value = false;
      router.push({ name: "Home" });
    })
    .catch((err) => {
      loading.value = false;
      errorMsg.value = err.response.data.message;
    });
}
</script>

<style lang="scss" scoped></style>
