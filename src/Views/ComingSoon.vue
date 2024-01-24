<template>
    <div>
      <MainLayout>
        <div
          class="min-h-screen flex flex-col justify-center items-center  pt-4"
        >
          <img
            src="../assets/images/coming-soon.png"
            alt="Logo"
            class="object-cover w-40 h-40 mb-8 rounded-full"
          />
          <h1 class="text-4xl font-bold mb-4">Coming Soon</h1>
          <p class="text-lg mb-8 px-4 md:px-0">
            We're working hard to bring you products listing. Stay tuned!
          </p>
          <div class="flex justify-center items-center space-x-4">
            <a
              href="#"
              class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >Learn More</a
            >
            <a
              href="#"
              class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
              >Contact Us</a
            >
          </div>
        </div>
      </MainLayout>
    </div>
  </template>
  
  <script setup>
  import MainLayout from "../Layout/MainLayout.vue";
  </script>
  
  <style lang="scss" scoped></style>
  