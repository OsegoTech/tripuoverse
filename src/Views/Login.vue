<template>
  <div
    class="relative flex flex-col justify-center min-h-screen overflow-hidden"
  >
    <div
      class="w-full p-6 m-auto bg-white border-t border-indigo-600 rounded shadow-lg shadow-indigo-800/50 lg:max-w-md"
    >
      <h1 class="text-3xl font-semibold text-center text-indigo-700">
        Tripuo-Verse
      </h1>
      <h6 class="text-2xl font-semibold text-center text-indigo-700">
        Sign In
      </h6>

      <Form
        @submit="onSubmit"
        class="mt-6"
        :validation-schema="schema"
        v-slot="{ errors, isSubmitting }"
      >
        <div>
          <label for="email" class="block text-sm text-gray-800">Email</label>
          <Field
            type="email"
            name="email"
            :class="{ 'is-invalid': errors.email }"
            class="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div class="invalid-feedback">
            {{ errors.email }}
          </div>
        </div>
        <div class="mt-4">
          <div>
            <label for="password" class="block text-sm text-gray-800"
              >Password</label
            >
            <Field
              type="password"
              name="password"
              :class="{ 'is-invalid': errors.password }"
              class="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <div class="invalid-feedback">
              {{ errors.password }}
            </div>
          </div>
          <router-link
            to="/forgot-password"
            class="text-xs text-gray-600 hover:underline"
            >Forget Password?</router-link
          >
          <div class="mt-6">
            <button
              disabled="isSubmitting"
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-600"
            >
              Login
            </button>
          </div>
          <div v-if="errors.apiError">
            {{ errors.apiError }}
          </div>
        </div>
      </Form>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        Don't have an account?
        <router-link
          to="/register"
          class="font-medium text-indigo-600 hover:underline"
          >Sign up</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const user = ref({
  email: "",
  password: "",
});
</script>

<style lang="scss" scoped></style>
