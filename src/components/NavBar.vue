<template>
    <div class="fixed w-full z-10">
        <div class="bg-custom-28b19d text-white flex items-center justify-center p-2 text-xs md:text-lg">
            <p>Aplicación desarrollada unicamente con fines de aprendizaje</p>
        </div>
        <header class="h-12 flex bg-transparent  justify-between px-2 relative md:px-5">
            <router-link :to="{ name: 'home' }" class="py-1">
                <img  src="../assets/alegra.svg" alt="" class="h-full object-cover">
            </router-link>
            <div class="items-center justify-between w-full ml-3 absolute top-12" v-if="isOpen">
                <div class="">
                    <router-link to="/"
                        class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9">
                        Inicio
                    </router-link>
                    <router-link to="/"
                        class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9">
                        Soluciones
                    </router-link>
                    <router-link to="/"
                        class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9">
                        Planes
                    </router-link>
                    <router-link to="/"
                        class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9">
                        Contacto
                    </router-link>
                </div>
                <div class="flex justify-between mr-10">
                    <DefaultButton class="mr-2 hover:bg-slate-100">Ingresa</DefaultButton>
                    <DefaultButton class="text-white bg-custom-30aba9 hover:bg-custom-2a9795 hidden md:block">Empieza gratis</DefaultButton>
                </div>
            </div>
            <span class="h-full flex items-center justify-center gap-4 md:hidden">
                <DefaultButton class="text-white bg-custom-30aba9 hover:bg-custom-2a9795 text-sm" @click="toggleMenu" >Empieza gratis</DefaultButton>
                <v-icon @click="toggleMenu" name="co-hamburger-menu" scale="1.8"  />
            </span>
        </header>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import DefaultButton from './DefaultButton.vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
