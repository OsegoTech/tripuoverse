import axiosClient from "../axios.js";

export function login({ commit }, data) {
  return axiosClient.post("/users/login", data).then(({ data }) => {
    commit("setUser", data.user);
    commit("setToken", data.token);
  });
}

export function register({ commit }, data) {
  return axiosClient.post("/users/signup", data).then(({ data }) => {
    console.log("user data", data);
    commit("setUser", data.user);
    commit("setToken", data.token);
  });
}

export function logout({ commit }) {
  commit("setUser", {});
  commit("setToken", null);
}

export function getServices({ commit }) {
  return axiosClient.get("/services").then(({ data }) => {
    commit("setProducts", data);
  });
}

export function createService({ commit }, data) {
  return axiosClient.post("/services", data).then(({ data }) => {
    commit("setServices", data);
  });
}

export function updateService({ commit }, data) {
  return axiosClient.put(`/services/${data.id}`, data).then(({ data }) => {
    commit("setServices", data);
  });
}

export function deleteService({ commit }, id) {
  return axiosClient.delete(`/services/${id}`).then(({ data }) => {
    commit("setServices", data);
  });
}

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
//   return axiosClient.get("/products").then(({ data }) => {
//     commit("setProducts", data);
//   });
}

export function createProduct({ commit }, data) {
  return axiosClient.post("/products", data).then(({ data }) => {
    commit("setProducts", data);
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
