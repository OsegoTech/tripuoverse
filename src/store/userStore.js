import { createPinia, acceptHMRUpdate } from "pinia";

export const useUserStore = createPinia({
  id: "userStore",
  state: () => ({
    user: {
      name: "张三",
      age: 18,
    },
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  actions: {
    setUser(user) {
      this.user = user;
    },
  },
});
