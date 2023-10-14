import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import HomePage from "../views/HomePage.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
