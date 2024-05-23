<template>
  <div class="h-[100vh] bg-gray-200">
    <div class=" topbar py-5 px-10 shadow-xl grid grid-cols-12  items-center gap-2 mb-8">
      <div class="flex col-span-2 flex-1 items-center gap-2">
        <Axe />
        <h1 class="text-2xl text-blue-500 font-bold">Osego</h1>
      </div>
      <div class="flex col-span-8 flex-3">
        <AlignJustify class="font-bold self-start" color="#093da5" />
      </div>
      <div class="flex items-center gap-4 justify-end col-span-2">
        <Settings color="#093da5" class="font-bold" />
        <Button color="#093da5" class="font-bold" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu"
          type="button">
          <UserRound color="#093da5" />
        </Button>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
      </div>
    </div>
    <div class="grid grid-cols-12">
      <div class="col-span-2">
        <Sidebar />
      </div>
      <div class="col-span-10 bg-white drop-shadow-xl mr-5 p-2 rounded-xl overflow-y-scroll">
        <RouterView></RouterView>
      </div>
    </div>

  </div>
</template>

<script setup>
import { Axe, AlignJustify, UserRound, Settings } from 'lucide-vue-next';
import Sidebar from './Sidebar.vue';
import { ref } from 'vue';

const menu = ref()
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
]);

const toggle = (event) => {
  menu.value.toggle(event)
}


</script>

<style lang="scss" scoped></style>