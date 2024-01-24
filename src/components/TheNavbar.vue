<template>
  <div >
    <div class="bg-blue-100 z-10 fixed w-full block">
      <nav
        class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
            >{{ appName }}
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <RouterLink
            to="/"
            class="text-sm font-bold text-gray-800 hover:text-blue-400"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/products"
            class="text-sm font-bold text-gray-800 hover:text-blue-400"
          >
            Products
          </RouterLink>
          <RouterLink
            to="/services"
            class="text-sm font-bold text-gray-800 hover:text-blue-400"
          >
            Services
          </RouterLink>
          <RouterLink
            to="/contact"
            class="text-sm font-bold text-gray-800 hover:text-blue-400"
          >
            Contact Us
          </RouterLink>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const appName = import.meta.env.VITE_APP_NAME;
console.log(appName);
let showMenu = ref(false);
</script>

<style lang="scss" scoped></style>
