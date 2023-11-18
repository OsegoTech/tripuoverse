<template>
  <div
    class="flex flex-col lg:flex-row lg:justify-around w-full text-white bg-black bg-no-repeat bg-cover bg-center items-center py-1"
  >
    <div class="flex items-center gap-2">
      <div class="bg-yellow-300 px-3 py-1 text-black rounded-md">Black</div>
      <h4>Friday</h4>
    </div>
    <div class="flex items-center gap-2">
      <small>up to</small>
      <h3 class="text-yellow-300">59%</h3>
      <h5>Off</h5>
    </div>
    <div class="flex items-center gap-2">
      <button
        class="bg-yellow-300 px-3 py-1 text-black rounded-md flex gap-1 items-center"
      >
        Shop Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div class="flex items-center gap-2 px-3 py-1 rounded-md">
        <span>Close</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-6 h-6 text-yellow-300"
      >
        <path
          fill-rule="evenodd"
          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
