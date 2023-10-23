import axios from "axios";
import store from "./store";
import router from "./router/index.js";
// import {loadConfigFromFile} from "vite";

// const axiosClient = axios.create({
//     baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
// })

// axiosClient.interceptors.request.use(config=>{
//     config.headers.Authorization = `Bearer ${store.state.user.token}`
//     return config;
// })

// axiosClient.interceptors.response.use(response => {
//     return response
// }, error => {
//     // debugger;
//     if (error.response.status === 401){
//         store.commit('setToken', null)
//         // sessionStorage.removeItem('TOKEN')
//         router.push({name: 'login'})
//     }
//     throw error;
// })

// export default axiosClient

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

const axiosClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosClient.defaults.headers.common['Content-Type'] = 'application/json';
