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
        Register
      </h6>

      <form class="mt-4">
        <div>
          <label for="email" class="block text-sm text-gray-800"
            >First Name</label
          >
          <input
            type="text"
            class="block w-full px-4 py-2 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label for="email" class="block text-sm text-gray-800"
            >Last Name</label
          >
          <input
            type="text"
            class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label for="email" class="block text-sm text-gray-800">Email</label>
          <input
            type="email"
            class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label for="phone" class="block text-sm text-gray-800"
            >Telephone</label
          >
          <input
            type="text"
            class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div>
          <label for="whatsapp" class="block text-sm text-gray-800"
            >Whatsapp</label
          >
          <input
            type="text"
            class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div class="mt-1">
          <div>
            <label for="password" class="block text-sm text-gray-800"
              >Password</label
            >
            <input
              type="password"
              class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <router-link
            to="/forgot-password"
            class="text-xs text-gray-600 hover:underline"
            >Forget Password?</router-link
          >
          <div class="mt-6">
            <button
              class="w-full px-4 py-1 tracking-wide text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-600"
            >
              Register
            </button>
          </div>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        Already have an account?
        <router-link
          to="/login"
          class="font-medium text-indigo-600 hover:underline"
          >Login</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const newUser = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  whatsapp: "",
  password: "",
});


</script>

<style lang="scss" scoped></style>
