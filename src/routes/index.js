import { createRouter, createWebHistory } from "vue-router";
import Login from "../Views/Login.vue";
import HomePage from "../Views/HomePage.vue";
import Register from "../Views/Register.vue";
import UserNavigation from "../Views/UserNavigation.vue";
import LoginRegister from "../Views/LoginRegister.vue";
import CreateProduct from "../components/CreateProduct.vue";
import ProductView from "../Views/ProductsView.vue";
import ServicesView from "../Views/ServicesView.vue";
import ContactView from "../Views/ContactView.vue";
import store from "../store/index.js";

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
    path: "/user-navigation",
    name: "UserNavigation",
    component: UserNavigation,
  },
  {
    path: "/auth",
    name: "Auth",
    component: LoginRegister,
  },
  {
    path: "/create-product",
    name: "CreateProduct",
    component: CreateProduct,
  },
  {
    path: "/products",
    name: "Product",
    component: ProductView,
  },
  {
    path: "/products/:id",
    name: "Product2",
    component: ProductView,
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../Views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: "Login" });
  } else if (to.meta.requiresGuest && store.state.user.token) {
    console.log("user token", store.state.user.token);
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
