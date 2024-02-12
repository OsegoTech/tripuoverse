<template>
  <div>
    <TheNavigate />
    <div class="sm:flex items-center max-w-screen-xl">
      <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" />
        </div>
      </div>
      <div class="sm:w-1/2 p-5">
        <div class="text">
          <span class="text-gray-500 border-b-2 border-indigo-600 uppercase"
            >About us</span
          >
          <h2 class="my-4 font-bold text-3xl sm:text-4xl">
            About <span class="text-indigo-600">Our Company</span>
          </h2>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
            commodi doloremque, fugiat illum magni minus nisi nulla numquam
            obcaecati placeat quia, repellat tempore voluptatum.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-4">About Us</h1>
        <p class="text-lg mb-6">
          Welcome to
          <span class="text-indigo-600 font-semibold">GiveMony</span
          >, a platform that connects service and product providers with
          interested clients.
        </p>

        <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
        <p class="text-lg mb-6">
          At
          <span class="text-indigo-600 font-semibold">GiveMony</span
          >, our mission is to create a seamless experience for individuals and
          businesses to showcase their services and products. We aim to bridge
          the gap between providers and clients, fostering connections and
          facilitating direct communication.
        </p>

        <h2 class="text-2xl font-bold mb-4">How It Works</h2>
        <p class="text-lg mb-6">
          Service and product providers can easily list their offerings on our
          platform, providing detailed information to attract potential clients.
          Interested clients can browse through the listings, find what they
          need, and communicate directly with providers to inquire or make
          arrangements.
        </p>

        <h2 class="text-2xl font-bold mb-4">Why Choose GiveMony</h2>
        <ul class="list-disc pl-8 text-lg mb-6">
          <li>
            Effortless Listing: Easily showcase your services and products with
            our user-friendly listing process.
          </li>
          <li>
            Direct Communication: Connect directly with clients or providers to
            discuss details and requirements.
          </li>
          <li>
            Wide Range of Offerings: Discover a diverse range of services and
            products from various providers.
          </li>
          <!-- Add more points as needed -->
        </ul>

        <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
        <p class="text-lg mb-6">
          Have questions or suggestions? We'd love to hear from you! Contact our
          team at
          <span class="text-indigo-600 font-semibold"
            ><a href="mailto:cliffoganda22@gmail.com">Admin</a></span
          >
          or through our
          <router-link to="/contact" class="text-indigo-600 font-semibold"
            >Contact Page</router-link
          >.
        </p>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from "../components/TheFooter.vue";
import TheNavigate from "../components/TheNavigate.vue";
</script>

<style scoped></style>
