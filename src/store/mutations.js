export function SET_LOADING(state, status) {
  state.loading = status;
}

export function setUser(state, user) {
  state.user.data = user;
  if (user) {
    localStorage.setItem("USER", JSON.stringify(user));
  } else {
    localStorage.removeItem("USER");
  }
}

export function setToken(state, token) {
  state.user.token = token;
  if (token) {
    localStorage.setItem("TOKEN", token);
  } else {
    localStorage.removeItem("TOKEN");
  }
}

export function SET_SERVICES(state, services) {
  state.services = services;
}

export function SET_LATEST_SERVICES(state, services) {
  state.latestServices = services;
}

export function SET_SERVICE(state, service) {
  state.service = service;
}

// PRODUCT MUTATIONS
export function SET_PRODUCTS(state, products) {
  state.products = products;
}

export function SET_PRODUCT(state, product) {
  state.product = product;

}

// export function ADD_PRODUCT(state, product) {
//   state.product.push(product);
// }

export function setCategories(state, category) {
  state.category = category;
}

// PRODUCTS
export function SET_LATEST_PRODUCTS(state, products) {
  state.latestproducts = products;
}
