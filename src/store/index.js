import {createStore} from "vuex"
import * as actions from "./actions"
import * as mutations from "./mutations"
import state from "./state.js"

const store = createStore({
    state,
    mutations,
    actions,
    getters: {
       authenticatedUser: (state) => 
           state.user.data.firstName
       
    },
})

export default store