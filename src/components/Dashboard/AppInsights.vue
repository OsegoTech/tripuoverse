<template>
    <div class="p-6">
        <div class="grid grid-cols-4 gap-10 my-4">
            <div class="shadow-xl flex gap-7 p-5  rounded-lg">
                <div>
                    <p class="font-bold text-gray-400">Orders</p>
                    <h1>152</h1>
                    <p><span class="text-green-500">24 new</span> Since last viewed</p>
                </div>
                <div>
                    <ShoppingBag color="blue" />
                </div>
            </div>
            <div class="shadow-xl flex gap-7 p-5  rounded-lg">
                <div>
                    <p class="font-bold text-gray-400">Customers</p>
                    <h1>1262</h1>
                    <p><span class="text-green-500">520 newly </span> registered</p>
                </div>
                <div>
                    <UserRound color="blue" />
                </div>
            </div>
            <div class="shadow-xl flex gap-7 p-5  rounded-lg">
                <div>
                    <p class="font-bold text-gray-400">Products</p>
                    <h1>1262</h1>
                    <p><span class="text-green-500">520 newly </span> Listed</p>
                </div>
                <div>
                    <ShoppingCart color="blue" />
                </div>
            </div>
            <div class="shadow-xl flex gap-7 p-5  rounded-lg">
                <div>
                    <p class="font-bold text-gray-400">Services</p>
                    <h1>1262</h1>
                    <p><span class="text-green-500">520 newly </span> Listed</p>
                </div>
                <div>
                    <Users color="blue" />
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-10">
            <div class="col-span-1 bg-white shadow-xl">
                <div class="card rounded-lg">
                    <DataTable :value="products" tableStyle="min-width: 50rem" paginator :rows="5">
                        <template #header>
                            <div class="flex flex-wrap items-center justify-between gap-2">
                                <span class="text-xl text-900 font-bold text-blue-500">Products</span>
                                <ShoppingBasket color="blue" />
                            </div>
                        </template>
                        <Column field="title" header="Name"></Column>
                        <Column header="Image">
                            <template #body="slotProps">
                                <img :src="slotProps.data.image" :alt="slotProps.data.image"
                                    class="w-[50px] border-round" />
                            </template>
                        </Column>
                        <Column field="price" header="Price">
                            <template #body="slotProps">
                                kes {{ slotProps.data.price }}
                            </template>
                        </Column>
                        <Column header="Seller">
                            <template #body="slotProps">
                                <Tag :value="slotProps.data.seller.firstName" />
                            </template>
                        </Column>
                        <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
                    </DataTable>
                </div>
            </div>
            <div class="col-span-1 bg-white">
                <h1>Graphs</h1>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ShoppingBag, UserRound, ShoppingCart, Users, ShoppingBasket } from "lucide-vue-next";
import { ref, computed, onMounted } from 'vue'
import store from '../../store/index.js'
import axios from "axios"

const products = ref([])
const searchTerm = ref("")

const fetchProducts = () => {
    console.log(`${import.meta.env.VITE_API_URL}`);
    axios.get(`${import.meta.env.VITE_API_URL}/products${searchTerm.value ? `?qSearch=${searchTerm.value}` : ""}`)
        .then((response) => {
            console.log(response.data);
            products.value = response.data
        })
}

onMounted(() => {
    fetchProducts()
})

</script>

<style lang="scss" scoped></style>