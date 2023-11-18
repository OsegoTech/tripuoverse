<template>
  <div>
    <!-- top navigation -->
    <div class="flex justify-around bg-indigo-700 text-white py-4">
      <div>
        <h2>Welcome to Tripuo-Verse Marketplace</h2>
      </div>
      <div>
        <div class="flex gap-2">
          <p>Follow us:</p>
          <div class="flex justify-around gap-1 items-center">
            <i class="fa-brands fa-x-twitter fa-lg"></i>
            <i class="fa-brands fa-facebook-f fa-lg"></i>
            <i class="fa-brands fa-square-instagram fa-lg"></i>
            <i class="fa-brands fa-tiktok fa-lg"></i>
          </div>
          <div class="text-black">
            <select name="" id="lang">
              <option value="" selected>English</option>
              <option value="">Kiswahili</option>
              <option value="">French</option>
              <option value="">Spanish</option>
            </select>
          </div>
          <div class="text-black">
            <select name="" id="currency">
              <option value="" selected>KES</option>
              <option value="">USD</option>
              <option value="">EUR</option>
              <option value="">GBP</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <!-- middle navigation -->
    <div
      class="flex items-center justify-around py-3 bg-indigo-700 text-white border-t-2 border-blue-100"
    >
      <div>
        <h1 class="text-3xl">Tripuo-Verse</h1>
      </div>
      <div>
        <form action="">
          <div class="flex items-center gap-2">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for products and services"
              class="py-2 px-3 rounded-md w-full"
            />
            <button
              type="submit"
              class="bg-yellow-300 py-1 px-2 text-black rounded-md"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div class="flex gap-2">
        <div>
          <i class="fa-solid fa-shopping-cart fa-lg"></i>
        </div>
        <div>
          <i class="fa-solid fa-heart fa-beat fa-lg"></i>
        </div>
        <div>
          <i class="fa-solid fa-user fa-lg"></i>
        </div>
      </div>
    </div>
    <!-- bottom navigation -->
    <div class="flex justify-around py-2 border-b-2 border-gray-300">
      <div class="flex justify-around gap-4 items-center">
        <select
          name=""
          id="categories"
          class="bg-gray-200 px-3 py-1 rounded-sm"
        >
          <option value="" selected>Furniture</option>
          <option value="">Electronis</option>
          <option value="">Books</option>
          <option value="">Gas</option>
          <option value="">Jewels</option>
        </select>
        <span><i class="fa-solid fa-code-compare fa-lg"></i>Compare</span>
        <span><i class="fa-solid fa-shop fa-lg"></i>Sell</span>
        <span><i class="fa-solid fa-circle-question fa-lg"></i>Need Help</span>
      </div>
      <div class="flex items-center gap-2">
        <i class="fa-solid fa-phone fa-lg"></i>
        <span> +254746123456</span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
