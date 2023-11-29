<template>
    <div class=" h-[223px] w-[250px] lg:h-[260px] lg:w-[300px]  shadow-lg bg-white black m-4 p-4 pb-0 rounded-md">
        <div class="h-10 w-10 mb-4">
            <slot name="imageSrc" class="h-full bg-red-800"></slot>

        </div>
        <h3 class="font-bold lexe mb-3">
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

