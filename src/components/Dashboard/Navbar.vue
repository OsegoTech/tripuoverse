<template>
    <!-- <div class="bg-blue-700 flex flex-col md:flex-row md:justify-between rounded-md">
        <div class="py-6">
            <img  src="https://exitosys.com/demo/map_booking/public/logo/logo.jpg" alt="" class="w-[100px] md:w-[200px] md:px-3">
        </div>
        <div class="flex items-center bg-blue-700 gap-2 px-3 py-3 text-white">
            <img 
            class="w-[100px] rounded-md"
            width="100px"
            src="data:image/jpeg;base64,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" alt="">
            <div class="text-1xl">
                <span class="">Hello, Juma Tindwa</span>
                <div class="flex gap-1">
                    <span>Profile</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    </div> -->

    <!-- new -->
    

<nav class="bg-white  dark:bg-gray-900  border-b-2 border-blue-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
  </a>
  <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="user photo">
      </button>
      <!-- Dropdown menu -->
      <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
        <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
        </div>
        <ul class="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

</template>

<script setup>
import {initFlowbite} from 'flowbite'
import { onMounted } from 'vue';

onMounted(() => {
    initFlowbite();
})
</script>

<style lang="scss" scoped>

</style>