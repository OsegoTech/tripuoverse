import { defineStore, acceptHMRUpdate } from "pinia";

export const useServiceStore = defineStore({
  id: "service",
  state: () => ({
    user: null,
    services: [],
    service: {},
    loading: false,
    error: null,
  }),

  getters: {},

  actions: {
    async fetchServices() {
      try {
        this.loading = true;
        const res = await fetch("https://tripuoverse.azurewebsites.net/api/services");
        // const res = await fetch("http://localhost:8080/api/services");
        // const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/services`);
      
        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await res.json();
        this.services = data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },

    async fetchService(id) {
      try {
        this.loading = true;
        const res = await fetch(`https://tripuoverse.azurewebsites.net/api/services/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await res.json();
        this.service = data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useServiceStore, import.meta.hot));
}
