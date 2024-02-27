<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <RouterLink to="/app/dashboard">
            <v-list-item
              class="bg-primary"
              prepend-icon="mdi-home-city"
              title="Dashboard"
              value="Dashboard"
            ></v-list-item>
          </RouterLink>
          <v-list-item
            prepend-icon="mdi-account"
            title="My Account"
            value="account"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-account-group-outline"
            title="Users"
            value="users"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px; min-height: 100vh">
        <RouterView></RouterView>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup>
import { ref } from "vue";

const drawer = ref(true);
const rail = ref(true);
</script>

<style scoped>
v-list-item {
  cursor: pointer;
  background-color: aqua;
}
</style>
