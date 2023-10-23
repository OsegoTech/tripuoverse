import { useUserStore } from "../store/userStore";


export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

function request(method) {
  return (url, body) => {
    const requestOptions = {
      method,
      headers: { "Content-Type": "application/json" },
    };

    if (body) {
      requestOptions.headers["Content-Type"] = "application/json";
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(url, requestOptions).then(handleResponse);
  };
}

// helper functions
function authHeader(url) {
  // return authorization header with jwt token if user is logged in and request is to the api url
  const user = useUserStore();
  const isLoggedIn = !!user?.token;
  const isApiUrl = url.startsWith(process.env.VITE_API_URL);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const { user, logout } = useUserStore();
      if ([401, 403].includes(response.status) && user) {
        logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
