import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import HomePage from "../views/HomePage.vue";
import Register from "../views/Register.vue";
import UserNavigation from "../views/UserNavigation.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      requiresGuest: true,
    },
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      requiresGuest: true,
    },
    component: Register,
  },
  {
    path: '/user-navigation',
    name: 'UserNavigation',
    component: UserNavigation
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (to.meta.requiresGuest && store.state.user.token) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
