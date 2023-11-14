import axios from "axios";
import store from "./store";
import router from "./routes/index.js";

const url = `${import.meta.env.VITE_API_BASE_URL}`;
console.log(url);

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`
});

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