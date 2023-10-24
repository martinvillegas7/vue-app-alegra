<script setup>
import DefaultButton from './DefaultButton.vue'
</script>

<template>
    <div class="fixed w-full z-10">
        <div class="bg-custom-28b19d text-white flex items-center justify-center p-2">
            <p>Aplicación desarrollada unicamente con fines de aprendizaje</p>
        </div>
        <header class="h-16 flex bg-transparent">
            <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5 ml-10">
                <img class="" src="../assets/alegra.svg" alt="">
            </router-link>
            <div class="flex items-center justify-between w-full ml-3">
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
                    <DefaultButton class="text-white bg-custom-30aba9 hover:bg-custom-2a9795">Empieza gratis</DefaultButton>
                </div>
            </div>

        </header>
    </div>
</template>
