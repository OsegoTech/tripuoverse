import {createStore} from "vuex"
import * as actions from "./actions"
import * as mutations from "./mutations"
import state from "./state.js"

const store = createStore({
    state,
    mutations,
    actions,
    getters: {
        isLoggedIn: state => !!state.user.token,    // !! converts to boolean
       currentUser: state => state.user.data,
    },
})

export default store