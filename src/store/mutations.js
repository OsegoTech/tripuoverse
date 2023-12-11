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

export function setServices(state, service) {
  state.service = service;
}