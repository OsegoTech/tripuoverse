import axiosClient from "../axios.js";

export function login({commit}, data){
    return axiosClient.post("/users/login", data)
    .then(({data}) => {
        commit("setUser", data.user)
        commit("setToken", data.token)
    })
}

export function register({commit}, data){
    return axiosClient.post("/users/signup", data)
    .then(({data}) => {
        console.log('user data', data);
        commit("setUser", data.user)
        commit("setToken", data.token)
    })
}

export function logout({commit}){
    commit("setUser", {})
    commit("setToken", null)
}

export function getServices({commit}){
    return axiosClient.get("/services")
    .then(({data}) => {
        commit("setProducts", data)
    })
}


export function createService({commit}, data){
    return axiosClient.post("/services", data)
    .then(({data}) => {
        commit("setServices", data)
    })
}