<template>
    <div class="sticky top-0 w-full z-10 shadow-md">
        <div v-show="isOpen" class="bg-custom-28b19d text-white flex items-center justify-center p-2 text-xs lg:text-lg">
            <p>Aplicación desarrollada unicamente con fines de aprendizaje</p>
        </div>

        <TopBarLg class="" />
        <TopBarSm :isOpen="isOpen" :toggleMenu="toggleMenu" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import TopBarLg from './TopBarLg.vue'
import TopBarSm from './TopBarSm.vue'

const isOpen = ref(true)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

</script>
