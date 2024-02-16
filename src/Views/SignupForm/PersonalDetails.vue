<template>
  <!-- https://play.tailwindcss.com/MIwj5Sp9pw -->
  <div class="py-16">
    <div
      class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
    >
      <div class="hidden lg:block lg:w-1/2 bg-cover">
        <img
          src="../../assets/images/signup.jpeg"
          alt=""
          class="object-cover w-full h-full"
        />
      </div>
      <div class="w-full p-8 lg:w-1/2">
        <h2 class="text-2xl font-semibold text-blue-700 text-center">
          TripuoVerse
        </h2>
        <p class="text-xl text-blue-700 text-center">Welcome !</p>

        <form class="w-full max-w-lg" @submit.prevent="register">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-white text-black border border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                v-model="newUser.firstName"
                placeholder="Osego"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-white text-blue-700 border border-blue-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                v-model="newUser.lastName"
                placeholder="Baba"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-white text-black border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                v-model="newUser.email"
                placeholder="osego@gmail.com"
              />
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Whatsapp Number
              </label>
              <input
                class="appearance-none block w-full bg-white text-black border border-blue-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="phone"
                v-model="newUser.whatsApp"
                placeholder="254743168819"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-white text-blue-700 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                v-model="newUser.password"
                placeholder="******************"
              />
            </div>
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-blue-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Confirm Password
              </label>
              <input
                class="appearance-none block w-full bg-white text-blue-700 border border-blue-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                v-model="newUser.passwordConfirm"
                placeholder="******************"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button
              :disabled="loading"
              class="bg-blue-700 w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {{ loading ? "Loading..." : "Register" }}
            </button>
          </div>
          <!-- already registered -->
          <div class="text-center mt-4">
            <p class="text-blue-700">
              Already have an account?
              <router-link to="/login" class="text-blue-700 hover:underline"
                >Login</router-link
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../../store/index.js";
import router from "../../routes/index.js";
import { useToast } from "vue-toastification";

const toast = useToast();

const loading = ref(false);
const errorMsg = ref("");

const newUser = {
  firstName: "",
  lastName: "",
  email: "",
  whatsApp: "",
  password: "",
  passwordConfirm: "",
};

const register = async () => {
  loading.value = true;
  errorMsg.value = "";
  try {
    await store.dispatch("register", newUser);
    toast.info("Registered successfully", {
      timeout: 2000,
      position: "top-center",
      containerClasses: ["bg-primary-600", "text-white"],
    });
    router.push({ name: "Home" });
  } catch (error) {
    errorMsg.value = error.response.data.message;
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss" scoped></style>
