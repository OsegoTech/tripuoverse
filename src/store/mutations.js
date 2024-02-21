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

export function SET_USERS_COUNT(state, count) {
  state.usersCount = count;
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

export function SET_SERVICES_COUNT(state, count) {
  state.servicesCount = count;
}

export function SET_SERVICES_BY_USER(state, services) {
  state.servicesByUser = services;
}

// PRODUCT MUTATIONS
export function SET_PRODUCTS(state, products) {
  state.products = products;
}

export function SET_PRODUCT(state, product) {
  state.product = product;
}

export function SET_PRODUCTS_BY_USER(state, products) {
  state.productsByUser = products;
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

export function SET_PRODUCTS_COUNT(state, count) {
  state.productsCount = count;
}
