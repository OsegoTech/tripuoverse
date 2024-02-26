<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="align-end text-white" height="200" :src="image" cover>
    </v-img>
    <v-card-title>{{ name }}</v-card-title>

    <!-- <v-card-subtitle class="pt-1"> {{ price }} </v-card-subtitle> -->

    <v-card-text>
      <div>{{ description }}</div>
      <div color="primary">{{ seller }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary">Kes. {{ price }} </v-btn>
      <v-spacer></v-spacer>
      <v-btn color=" bg-primary"> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const props = defineProps({
  name: String,
  price: Number,
  description: String,
  image: String,
  seller: String,
  date: String,
  whatsApp: String,
  id: String,
});
</script>
