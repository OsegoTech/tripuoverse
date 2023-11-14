import {defineStore} from "pinia"
import axios from "axios"

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    loading: false,
    error: null
  }),
  actions: {
    registerUser(user) {
      try {
        this.loading = true
        axios.post("http://localhost:5000/api/users/signup", user)
          .then(res => {
            this.user = res.data
          })
      } catch (error) {
        this.error = error.message
      } finally {
        this.loading = false
      }
    }
  },
})