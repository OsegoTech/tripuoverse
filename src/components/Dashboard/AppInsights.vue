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
                <div class="card">
                    <Chart type="bar" :data="chartData" :options="chartOptions" class="" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ShoppingBag, UserRound, ShoppingCart, Users, ShoppingBasket } from "lucide-vue-next";
import { ref, computed, onMounted } from 'vue'
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
    chartData.value = setChartData()
    chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref()

const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement)
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Products',
                backgroundColor: documentStyle.getPropertyValue('--green-500'),
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: 'Services',
                backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                borderColor: documentStyle.getPropertyValue('--gray-500'),
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    }
}

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement)
    const textColor = documentStyle.getPropertyValue('--text-color')
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    }
                }
            },
            y: {
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                },
                ticks: {
                    color: textColorSecondary
                }
            }
        }
    }

}

</script>

<style lang="scss" scoped></style>