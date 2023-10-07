import { defineStore, acceptHMRUpdate } from "pinia";

export const useServiceStore = defineStore({
  id: "service",
  state: () => ({
    services: [],
    service: {},
    loading: false,
    error: null,
  }),

  getters: {},

  actions: {
    async fetchServices() {
      try {
        this.services = [];
        this.loading = true;
        const res = await fetch("https://localhost:5000/api/services");
        const data = await res.json();
        this.services = data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = error.message;
      }
    },

    async fetchService(id) {
      try {
        this.loading = true;
        const res = await fetch(`https://localhost:5000/api/services/${id}`);
        const data = await res.json();
        this.service = data;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = error.message;
      }
    },
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useServiceStore, import.meta.hot));
