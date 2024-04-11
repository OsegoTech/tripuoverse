<template>
    <div class=" w-[250px] h-screen py-4 px-6 border border-r border-2 border-gray-400">
        <div>
            <h1>OSEGO</h1>
        </div>
        <div class="flex flex-col gap-6">
            <SidebarLinks v-for="(sideBarLink, index) in sideBarLinks" :key="index" :title="sideBarLink.title"
                :route="sideBarLink.route"  class="w-full"/>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import SidebarLinks from '../core/SidebarLinks.vue';
const sideBarLinks = ref([
    { title: 'Dashboard', route: '/app/dashboard' },
    { title: 'Products', route: '/app/products' },
    { title: 'Services', route: '/app/services' },
    { title: 'Categories', route: '/app/categories' },
    { title: 'Orders', route: '/app/orders' },
    { title: 'Users', route: '/app/users' },
    { title: 'Settings', route: '/app/settings' },
    
  
]);
</script>

<style lang="scss" scoped></style>