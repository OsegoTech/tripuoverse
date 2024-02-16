import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../Views/HomePage.vue";
import UserNavigation from "../Views/UserNavigation.vue";
import CreateProduct from "../components/CreateProduct.vue";
import ProductView from "../Views/ProductsView.vue";
import ServicesView from "../Views/ServicesView.vue";
import ContactView from "../Views/ContactView.vue";
import Dashboard from "../components/Dashboard/Dashboard.vue";
import UserDashboard from "../components/Dashboard/UserDashboard.vue";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      requiresAuth: false,
    },
  },

  {
    path: "/login",
    name: "login",
    meta: {
      requiresGuest: true,
    },
    component: () => import("../Views/SignupForm/Login.vue"),
  },

  {
    path: "/register",
    name: "Register",
    meta: {
      requiresGuest: true,
    },
    component: () => import("../Views/SignupForm/PersonalDetails.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../Views/ForgotPassword.vue"),
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () => import("../Views/ResetPassword.vue"),
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
    path: "/products/:productId",
    name: "ProductDetails",
    component: () => import("../Views/ProductDetail.vue"),
  },

  {
    path: "/services",
    name: "Services",
    component: ServicesView,
  },
  {
    path: "/services/:serviceId",
    name: "ServiceDetails",
    component: () => import("../Views/ServiceDetail.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../Views/AboutView.vue"),
  },
  {
    path: "/sellerview",
    name: "seller-view",
    component: UserDashboard,
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
        component: CreateProduct,
      },
    ],
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
