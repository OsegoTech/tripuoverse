import { createRouter, createWebHistory } from "vue-router";
import Login from "../Views/Login.vue";
import HomePage from "../Views/HomePage.vue";
import Register from "../Views/Register.vue";
import UserNavigation from "../Views/UserNavigation.vue";
import CreateProduct from "../components/CreateProduct.vue";
import ProductView from "../Views/ProductsView.vue";
import ServicesView from "../Views/ServicesView.vue";
import ContactView from "../Views/ContactView.vue";
import LoginView from "../Views/LoginView.vue";
import Dashboard from "../components/Dashboard/Dashboard.vue";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login-view",
    name: "login-view",
    meta: {
      requiresGuest: true,
    },
    component: Login,
  },
  {
    path: "/login",
    name: "login",
    meta: {
      requiresGuest: true,
    },
    component: LoginView,
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

  // dashboard
  {
    path: "/app",
    name: "app",
    meta: {
      requiresAuth: true,
    },
    component: Dashboard,
    children: [
      {
        path: "/dashboard",
        name: "app.dashboard",
        component: CreateProduct
      }
    ]
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
    next({ name: "login" });
  } else if (to.meta.requiresGuest && store.state.user.token) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
