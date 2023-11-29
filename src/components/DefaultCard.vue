<template>
    <div class=" h-[100%] w-[50%] lg:w-[25%]  shadow-lg bg-white black m-4 p-4 rounded-md">
        <img :src="imageSrc" alt="" class="h-20 w-20">
        <!-- <v-icon :name="iconName" class="w-3 h-4 fill-black"></v-icon> -->
        <h3 class="font-bold lexe">
            <slot name="title"></slot>
        </h3>
        <p>
            <slot name="text"></slot>
        </p>
    </div>
</template>


<script setup>
const props = defineProps(['imageSrc'])
</script>

