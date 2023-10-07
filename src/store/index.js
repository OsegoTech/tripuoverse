import { defineStore } from "pinia";

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
        this.loading = true;
        const res = await fetch("https://localhost:5000/api/services");
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
        const res = await fetch(`https://localhost:5000/api/services/${id}`);
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
