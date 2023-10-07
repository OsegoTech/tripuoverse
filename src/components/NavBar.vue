<template>
  <div class="bg-indigo-600">
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold text-gray-100 md:text-2xl hover:text-indigo-400"
        >
            <!-- <img src="../assets/logo.png" alt="logo" /> -->
            Tripuo-Verse
        </router-link>
        <!-- Mobile Menu -->
        <div @click="toggleNav" class="flex md:hidden">
          <button type="button" class="text-gray-100 hover:text-gray-400">
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
        :class="showMenu ? 'block' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-10 md:mt-0"
      >
        <li>
          <router-link
            to="/"
            class="font-medium text-gray-100 hover:text-indigo-400"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/services"
            class="font-medium text-gray-100 hover:text-indigo-400"
            >Services</router-link
          >
        </li>
        <li>
          <router-link
            to="/advertise"
            class="font-medium text-gray-100 hover:text-indigo-400"
            >Advertise</router-link
          >
        </li>
        <li>
          <router-link
            to="/about"
            class="font-medium text-gray-100 hover:text-indigo-400"
            >About us</router-link
          >
        </li>
        <li>
          <router-link
            to="/contact"
            class="font-medium text-gray-100 hover:text-indigo-400"
            >Contact</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from "vue";

let showMenu = ref(false);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>

<style lang="scss" scoped></style>
