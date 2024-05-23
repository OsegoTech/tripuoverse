<template>
    <div>
        <div class="rounded-sm px-2">
            <router-link :to="route" class="">{{ title }}</router-link>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    route: {
        type: String,
        required: true
    },
    

})
</script>

<style lang="scss" scoped></style>