<template>
    <a :href="href" class="px-3 py-2 rounded-xl border-2 transition-colors hover:cursor-pointer">
        <slot></slot>
    </a>
</template>

<script setup>



const props = defineProps({
    href: String,
})
</script>