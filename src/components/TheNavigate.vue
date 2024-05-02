<template>
  <div>
    <div class="bg-gray-400 font-bold text-white flex items-center justify-between px-6 py-2">
      <p>🤑Sell on Osego</p>
      <p>Osego</p>
      <p>pay Safe</p>
    </div>
    <div class="flex items-center justify-between px-6 py-2">
      <h1 class="text-4xl text-blue-500 font-extrabold">Osego</h1>
      <!-- custom search component -->
      <div class="px-3 py-2 flex items-center gap-1">
        <InputText type="text" v-model="value" class="relative" placeholder="Search here....">
          <Search color="blue" class="absolute left-2" />
        </InputText>
        <Button label="Search" severity="info" />
      </div>
      <div class="flex items-center gap-1">
        <div class="flex items-center">
          <User />
          <span>Account</span>
          <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true"
            aria-controls="overlay_menu" />
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
        <div class="flex items-center gap-1">
          <HelpCircle />
          <span>Help</span>
          <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true"
            aria-controls="overlay_menu" />
          <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
        </div>
        <div class="flex items-center gap-1">
          <ShoppingCart />
          <span>Cart</span>
        </div>
      </div>
    </div>
    
  </div>

</template>

<script setup>
import { Search, HelpCircle, ShoppingCart, User } from "lucide-vue-next"
import store from "../store/index.js";

import { ref } from "vue";
import { RouterLink } from "vue-router";

const items = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Export',
        icon: 'pi pi-upload'
      }
    ]
  }
])

const menu = ref()
const toggle = (event) => {
  menu.value.toggle(event);
};



// get the isloggedin getter from store
const user = store.getters.currentUser;
// const user = computed(() => store.getters.currentUser);
const authorized = store.getters.isLoggedIn;
console.log(authorized);
console.log(user);
const email = ref(user.email);

console.log(email);
const name = ref(user.firstName);
console.log(name);

const logout = () => {
  store.dispatch("logout");
};
</script>

<style lang="scss" scoped></style>
