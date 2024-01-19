import { createRouter, createWebHistory } from "vue-router";
// import Login from "../views/Login.vue";
import HomePage from "../views/HomePage.vue";
import Register from "../views/Register.vue";
import UserNavigation from "../views/UserNavigation.vue";
import LoginRegister from "../views/LoginRegister.vue";
import CreateProduct from "../components/CreateProduct.vue";
import ProductView from "../views/ProductsView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactView from "../views/ContactView.vue";
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
    component: ProductView
  },
  {
    path: "/products/:id",
    name: "Product2",
    component: ProductView
  },
  {
    path: "/services",
    name: "Services",
    component: ServicesView
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView
  }
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("../views/NotFound.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(""),
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
