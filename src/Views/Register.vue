<template>
  <div
    class="relative flex flex-col justify-center min-h-screen overflow-hidden"
  >
    <div
      class="w-full p-6 m-auto bg-white border-t border-indigo-600 rounded shadow-lg shadow-indigo-800/50 lg:max-w-md"
    >
      <h3 class="text-3xl font-semibold text-center text-indigo-700">
        Tripuo-Verse
      </h3>
      <h6 class="text-2xl font-semibold text-center text-indigo-700">
        Register
      </h6>

      <Form
        class="mt-4"
        @submit="onSubmit"
        :validation-schema="schema"
        v-slot="{ errors }"
      >
        <div>
          <label for="firstName" class="block text-sm text-gray-800"
            >First Name</label
          >
          <Field
            name="firstName"
            :class="{ 'is-invalid': errors.firstName }"
            type="text"
            class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div class="invalid-feedback">
            {{ errors.firstName }}
          </div>
        </div>
        <div>
          <label for="lastName" class="block text-sm text-gray-800"
            >Last Name</label
          >
          <Field
            name="lastName"
            :class="{ 'is-invalid': errors.lastName }"
            type="text"
            class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div class="invalid-feedback">
            {{ errors.lastName }}
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm text-gray-800">Email</label>
          <Field
            name="email"
            :class="{ 'is-invalid': errors.email }"
            type="email"
            class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div class="invalid-feedback">
            {{ errors.email }}
          </div>
        </div>

        <div>
          <label for="phone" class="block text-sm text-gray-800"
            >Telephone</label
          >
          <Field
            name="phone"
            :class="{ 'is-invalid': errors.phone }"
            type="text"
            class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div class="invalid-feedback">
            {{ errors.phone }}
          </div>
        </div>
        <div>
          <label for="whatsapp" class="block text-sm text-gray-800"
            >Whatsapp</label
          >
          <Field
            name="whatsapp"
            :class="{ 'is-invalid': errors.whatsapp }"
            type="text"
            class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div class="invalid-feedback">
            {{ errors.whatsapp }}
          </div>
        </div>
        <div class="mt-1">
          <div>
            <label for="password" class="block text-sm text-gray-800"
              >Password</label
            >
            <Field
              name="password"
              :class="{ 'is-invalid': errors.password }"
              type="password"
              class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <div class="invalid-feedback">
              {{ errors.password }}
            </div>
          </div>
          <div>
            <label for="passwordConfirm" class="block text-sm text-gray-800"
              >Confirm Password</label
            >
            <Field
              name="passwordConfirm"
              :class="{ 'is-invalid': errors.passwordConfirm }"
              type="password"
              class="block w-full px-4 py-1 mt-1 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            <div class="invalid-feedback">
              {{ errors.passwordConfirm }}
            </div>
          </div>
          <router-link
            to="/forgot-password"
            class="text-xs text-gray-600 hover:underline"
            >Forget Password?</router-link
          >
          <div class="mt-6">
            <button
              class="w-full px-4 py-1 tracking-wide text-white transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-600"
            >
              Register
            </button>
          </div>
        </div>
        <p class="mt-8 text-xs font-light text-center text-gray-700">
        Already have an account?
        <router-link
          to="/login"
          class="font-medium text-indigo-600 hover:underline"
          >Login</router-link
        >
      </p>
      </Form>
      
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import * as Yup from "yup";
const newUser = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  whatsapp: "",
  password: "",
});

const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  whatsapp: Yup.string().required("Whatsapp is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
</script>

<style lang="scss" scoped></style>
