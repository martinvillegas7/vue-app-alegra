<template>
    <div class="flex flex-col lg:flex-row w-[100%] mt-10">
        <div class="flex flex-col items-center justify-items-center lg:z-1 lg:relative lg:p-16 ">
            <div class="text-center  mb-4 text-3xl font-bold lg:text-start">
                <slot name="title"></slot>
            </div>
            <div class="mb-6 text-center text-gray-500 lg:text-start lg:ml-4">
                <slot name="text1"></slot>
            </div>
            <div class="mb-8 lg:-ml-32">
                <slot name="button" class="content-start"></slot>
            </div>
            <div class="flex flex-col text-gray-500 items-center lg:flex-row lg:gap-24 lg:items-start">
                <div class="flex flex-row items-center mb-6 gap-1   ">

                    <slot name="text2"></slot>
                </div>
                <div class="flex flex-row items-center justify-center h-[25px] w-[70px] gap-2">
                    <slot name="icon1"></slot>
                    <slot name="icon2"></slot>
                    <slot name="icon3"></slot>
                </div>
            </div>

        </div>
        <div class="h-full w-full p-16 lg:absolute lg:h-[100px] lg:top-14 lg:p-0 lg:-z-10">
            <slot name="imageComponent1"></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['imageComponent1'])
</script>