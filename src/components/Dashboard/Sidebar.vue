<template>
    <div class="bg-blue-700 text-white w-64 p-4 border-red-50 border-r-4">
      <div class="py-6">
        <h1 class="text-2xl font-bold">TripuoVerse</h1>
        <p class="text-sm"> Dashboard</p>
      </div>
      <ul>
        <li>
          <div
            class="flex gap-3 items-center py-5 px-2 border-t-2 first-line:mb-2"
          >
            <i class="fa-solid fa-screwdriver-wrench"></i>
            <router-link to="/dashboard">Dashboard</router-link>
          </div>
        </li>
        <li>
          <div
            class="flex gap-3 items-center py-5 px-2 border-t-2 first-line:mb-2"
          >
            <i class="fa-solid fa-user"></i>
            <router-link to="/users">Users</router-link>
          </div>
        </li>
        <li>
          <div
            class="flex gap-3 items-center py-5 px-2 border-t-2 first-line:mb-2"
          >
            <i class="fa-solid fa-gauge-high"></i>
            <router-link to="/quotes">Quotes</router-link>
          </div>
        </li>
        <li>
          <div
            class="flex gap-3 items-center py-5 px-2 border-t-2 first-line:mb-2"
          >
            <i class="fa-solid fa-map"></i>
            <router-link to="/map-booking">Map Booking</router-link>
          </div>
        </li>
        <li>
          <div
            class="flex gap-3 items-center py-5 px-2 border-t-2 first-line:mb-2"
          >
            <i class="fa-solid fa-chart-line"></i>
            <router-link to="/dashboard-view">Dashboard</router-link>
          </div>
        </li>
        <li>
          <div
            class="flex gap-3 items-center py-5 px-2 border-t-2 first-line:mb-2"
          >
            <i class="fa-solid fa-bookmark"></i>
            <router-link to="/bookings">Bookings</router-link>
          </div>
        </li>
        <li>
          <div
            class="flex gap-3 items-center py-5 px-2 border-t-2 first-line:mb-2"
          >
            <i class="fa-solid fa-file-invoice"></i>
            <router-link to="/accounts">Accounts</router-link>
          </div>
        </li>
        <li>
          <div
            class="flex gap-3 items-center py-5 px-2 border-t-2 first-line:mb-2"
          >
            <i class="fa-solid fa-flag"></i>
            <router-link to="/reports">Reports</router-link>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped></style>
  