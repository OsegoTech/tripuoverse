<template>
  <div>
    <div class="bg-gray-400 font-bold text-white flex items-center justify-between px-6 py-2">
      <p>🤑Sell on Osego</p>
      <p>Osego</p>
      <p>pay Safe</p>
    </div>
    <div class="flex items-center justify-between px-6 py-2">
      <h1 class="text-4xl text-blue-500 font-extrabold">Osego</h1>
      <!-- custom search component -->
      <div class="px-3 py-2 flex items-center gap-1">
        <InputText type="text" v-model="value" class="relative" placeholder="Search here....">
          <Search color="blue" class="absolute left-2" />
        </InputText>
        <Button label="Search" severity="info" />
      </div>
      <div class="flex items-center gap-1">
        <div class="flex items-center">
          <User />
          <span>Account</span>
          <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true"
            aria-controls="overlay_menu" />
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
        <div class="flex items-center gap-1">
          <HelpCircle />
          <span>Help</span>
          <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true"
            aria-controls="overlay_menu" />
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
        <div class="flex items-center gap-1">
          <ShoppingCart />
          <span>Cart</span>
        </div>
      </div>
    </div>
    <!-- <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <RouterLink
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
         
          <span
            class="self-center font-semibold whitespace-nowrap dark:text-white text-blue-700 font-mono text-2xl"
            >TripuoVerse</span
          >
        </RouterLink>

        <div
          class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
        >
          <button
            v-if="authorized"
            type="button"
            class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            
          </button>
        
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">{{
                name
              }}</span>
              <span
                class="block text-sm text-gray-500 truncate dark:text-gray-400"
                >{{ email }}</span
              >
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <RouterLink
                  to="/sellerview"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Dashboard</RouterLink
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Earnings</a
                >
              </li>
              <li>
                <RouterLink
                  to="/login"
                  @click="logout"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Sign out</RouterLink
                >
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <RouterLink
                to="/"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/products"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Products</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/services"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Services</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >About</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Contact</RouterLink
              >
            </li>
            <li v-if="!authorized">
              <RouterLink
                to="/login"
                class="block bg-blue-600 p-1 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Login</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
  </div>

</template>

<script setup>
import { Search, HelpCircle, ShoppingCart, User } from "lucide-vue-next"
import store from "../store/index.js";

import { ref } from "vue";
import { RouterLink } from "vue-router";

const items = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Export',
        icon: 'pi pi-upload'
      }
    ]
  }
])

const menu = ref()
const toggle = (event) => {
  menu.value.toggle(event);
};



// get the isloggedin getter from store
const user = store.getters.currentUser;
// const user = computed(() => store.getters.currentUser);
const authorized = store.getters.isLoggedIn;
console.log(authorized);
console.log(user);
const email = ref(user.email);

console.log(email);
const name = ref(user.firstName);
console.log(name);

const logout = () => {
  store.dispatch("logout");
};
</script>

<style lang="scss" scoped></style>
