import axiosClient from "../axios.js";
import { useToast } from "vue-toastification";
import router from "../routes/index.js";
const toast = useToast();

//     AUTHENTICATION
export function login({ commit }, data) {
  return axiosClient.post("/auth/login", data).then(({ data }) => {
    // console.log("user data", data);
    // console.log("user data", data.data.user);
    commit("setUser", data.data.user);
    // console.log("user token", data.token);
    commit("setToken", data.token);
    toast.success("Logged in successfully");
    router.push("/");
  });
}

export function register({ commit }, data) {
  return axiosClient.post("/auth/signup", data).then(({ data }) => {
    console.log("user data", data);
    console.log("user data", data.data);
    commit("setUser", data.data.user);
    commit("setToken", data.token);
  });
}

export function logout({ commit }) {
  commit("setUser", null);
  commit("setToken", null);
  toast.success("Logged out successfully");
}

export function getCurrentUser({ commit }) {
  return axiosClient.get("/user").then((response) => {
    commit("setUser", response.data);
    return response;
  });
}

export function getUsersCount({ commit }) {
  return axiosClient.get("/users").then((response) => {
    console.log(response.data.results);
    commit("SET_USERS_COUNT", response.data.results);
  });
}

export function getUser({ commit }) {
  return axiosClient.get(`/user/${id}`).then(({ data }) => {
    commit("setUser", data);
  });
}

//    SERVICES
export function getServices({ commit }) {
  return axiosClient.get("/services").then(({ data }) => {
    commit("SET_SERVICES", data);
    commit("SET_SERVICES_COUNT", data.length);
  });
}

export function getService({ commit }, id) {
  return axiosClient.get(`/services/${id}`).then(({ data }) => {
    commit("SET_SERVICE", data);
  });
}

export function createService({ commit }, data) {
  return axiosClient.post("/services", data).then(({ data }) => {
    commit("SET_SERVICE", data);
  });
}

export function updateService({ commit }, data) {
  return axiosClient.put(`/services/${data.id}`, data).then(({ data }) => {
    commit("SET_SERVICE", data);
  });
}

export function deleteService({ commit }, id) {
  return axiosClient.delete(`/services/${id}`).then(({ data }) => {
    commit("SET_SERVICE", data);
  });
}

export function latestServices({ commit }) {
  return axiosClient.get("/services/latest-services").then(({ data }) => {
    console.log("latest services", data);
    commit("SET_LATEST_SERVICES", data);
  });
}

// products
export async function fetchProducts({ commit }) {
  commit("SET_LOADING", true);
  try {
    const response = await axiosClient.get("/products");
    let products = response.data;
    console.log("response", products);
    commit("SET_PRODUCTS", products);
  } catch (error) {
    console.log("Error fetching products", error);
  } finally {
    commit("SET_LOADING", false);
  }
}

export async function latestProducts({ commit }) {
  commit("SET_LOADING", true);
  try {
    const response = await axiosClient.get("/products/latest-products");
    let products = response.data;
    console.log("response", products);
    commit("SET_LATEST_PRODUCTS", products);
  } catch (error) {
    console.log("Error fetching products", error);
  } finally {
    commit("SET_LOADING", false);
  }
}

export function createProduct({ commit }, data) {
  return axiosClient.post("/products", data).then(({ data }) => {
    console.log(data);
    commit("SET_PRODUCTS", data);
    toast.success("Product  Added");
  });
}

export function updateProduct({ commit }, data) {
  return axiosClient.put(`/products/${data.id}`, data).then(({ data }) => {
    commit("setProducts", data);
  });
}

export function deleteProduct({ commit }, id) {
  return axiosClient.delete(`/products/${id}`).then(({ data }) => {
    commit("setProducts", data);
  });
}

export function fetchProduct({ commit }, id) {
  return axiosClient.get(`/products/${id}`).then(({ data }) => {
    console.log("product data", data);
    commit("SET_PRODUCT", data);
  });
}

export function getProductsCount({ commit }) {
  return axiosClient.get("/products/get-products-count").then((response) => {
    console.log(response.data.results);
    commit("SET_PRODUCTS_COUNT", response.data.results);
  });
}

// CATEGORIES
export function getCategories({ commit }) {
  return axiosClient.get("/categories").then(({ data }) => {
    commit("setCategories", data);
  });
}

export function createCategory({ commit }, data) {
  return axiosClient.post("/categories", data).then(({ data }) => {
    commit("setCategories", data);
  });
}
