<template>
  <div>
    <div class="bg-blue-500  text-xs  text-white  px-6 py-1">
      <div class="container px-4 mx-auto flex items-center justify-between">
        <p>🤑Sell on Osego</p>
        <p>Osego</p>

          <a href="https://intasef.com/" target="_blank">
            pay Safe
          </a>

      </div>
    </div>
<!--    start of primevue navbar-->
    <Menubar :model="items" class="flex items-center justify-around">
      <template #start>
        <RouterLink to="/">
        <img src="../assets/images/logo.svg" width="150px"/>
        </RouterLink>
      </template>



      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span :class="item.icon" />
          <RouterLink :to="item.route">
            <span class="ml-2">{{ item.label }}</span>
          </RouterLink>

          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
          <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <InputText placeholder="Search" type="text" class="w-[8rem] sm:w-auto" />
          <Avatar image="https://avatar.iran.liara.run/public" shape="circle" />
        </div>
      </template>
    </Menubar>
<!--    end of primevue navbar-->
    <div class="flex items-center justify-between px-6 py-2">




    </div>
    
  </div>

</template>

<script setup>
import { Search, HelpCircle, ShoppingCart, User } from "lucide-vue-next"
import store from "../store/index.js";

import { ref } from "vue";


const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Products',
    icon: 'pi pi-shopping-bag',
    route: '/products'
  },
  {
    label: 'Services',
    icon: 'pi pi-briefcase',
    route: '/services'
  },
  // {
  //   label: 'Projects',
  //   icon: 'pi pi-search',
  //   items: [
  //     {
  //       label: 'Core',
  //       icon: 'pi pi-bolt',
  //       shortcut: '⌘+S'
  //     },
  //     {
  //       label: 'Blocks',
  //       icon: 'pi pi-server',
  //       shortcut: '⌘+B'
  //     },
  //     {
  //       label: 'UI Kit',
  //       icon: 'pi pi-pencil',
  //       shortcut: '⌘+U'
  //     },
  //     {
  //       separator: true
  //     },
  //     {
  //       label: 'Templates',
  //       icon: 'pi pi-palette',
  //       items: [
  //         {
  //           label: 'Apollo',
  //           icon: 'pi pi-palette',
  //           badge: 2
  //         },
  //         {
  //           label: 'Ultima',
  //           icon: 'pi pi-palette',
  //           badge: 3
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    route: '/contact',
    badge: 3
  }
]);




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
