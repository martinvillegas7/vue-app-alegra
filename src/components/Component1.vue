<template>
    <div class="flex flex-col lg:flex-row w-[100%] mt-10">
        <div class="flex flex-col items-center justify-items-center">
            <div class="text-center mb-4 text-3xl font-bold">
                <slot name="title"></slot>
            </div>
            <div class="mb-6 text-center text-gray-500">
                <slot name="text1"></slot>
            </div>
            <div class="mb-8">
                <slot name="button"></slot>
            </div>
            <div class="flex flex-row text-gray-500 items-center gap-2">
                <slot name="text2"></slot>
            </div>
            <div class="mb-8">
                <slot name="text3"></slot>
            </div>
            <div class="flex flex-row items-center justify-center h-[20px] w-[70px]">
                <slot name="icon1"></slot>
                <slot name="icon2"></slot>
                <slot name="icon3"></slot>
            </div>
        </div>
        <div class="h-full w-full p-16">
            <slot name="imageComponent1"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['imageComponent1'])
</script>