import axios from "axios";
import store from "./store";
import router from "./routes/index.js";

const url = `${import.meta.env.VITE_API_BASE_URL}/api`;
console.log(url);

const axiosClient = axios.create({
    baseURL: "https://tripuoverse.azurewebsites.net/api",
    // baseURL: "http://localhost:8080/api",
});
console.log(url);


axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${store.state.user.token}`;
    return config;
});

axiosClient.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status ===401) {
        store.commit('setToken', null);
        router.push({name: 'Login'});
    }
    throw error;
});

export default axiosClient;