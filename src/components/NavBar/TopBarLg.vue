<template>
    <header class="h-14 bg-transparent  justify-between text-lg px-5 hidden lg:flex container mt-2 mx-auto py-2">
        <router-link :to="{ name: 'home' }" class="py-1">
            <img src="../../assets/alegra.svg" alt="" class="h-full object-cover">
        </router-link>
        <div class="flex items-center justify-between ml-3">
            <div>
                <router-link to="/"
                    class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9">
                    Inicio
                </router-link>
                <router-link to="/" @mouseover="isHover = true" @mouseleave="isHover = false"
                    class="inline-flex items-center justify-center transition-colors- px-2 h-full  relative">
                    Soluciones
                    <v-icon name="fa-chevron-down" class="mt-1" scale="1" />

                    <div class="absolute top-7 w-[390px] left-[50%] bg-white z-50 translate-x-[-50%] p-5 shadow-md  rounded-md"
                        :style="{
                            display: isHover ? 'block' : 'none'
                        }">
                        <div class="top text-gray-500 text-sm ">
                            <v-icon name="ri-grid-fill" class="mt-1 mr-3" scale="1" />
                            Más soluciones para tu negocio
                        </div>

                        <hr class="my-3">

                        <div class="items flex flex-col gap-3 px-3">
                            <div class="item flex gap-1 justify-between items-center">
                                <div class="flex gap-2 items-center">
                                    <div class="left">
                                        <img src="../../assets/alegra-new-brand-icon-invoicing.webp" alt=""
                                            class="h-12 object-cover mr-2">
                                    </div>
                                    <div class="middle flex flex-col text-sm">
                                        Facturación
                                        <span class="text-xs text-gray-500">Factura electronicamente con un click</span>
                                    </div>
                                </div>

                                <div class="right">
                                    <v-icon name="fa-chevron-right" class="mt-1 text-gray-500" scale="1" />
                                </div>
                            </div>

                            <div class="item flex gap-1 justify-between items-center">
                                <div class="flex gap-2 items-center">
                                    <div class="left">
                                        <img src="../../assets/alegra-new-brand-icon-accounting.webp" alt=""
                                            class="h-12 object-cover mr-2">
                                    </div>
                                    <div class="middle flex flex-col text-sm">
                                        Contabilidad
                                        <span class="text-xs text-gray-500">Contabiliza, factura y controla tu stock</span>
                                    </div>
                                </div>

                                <div class="right">
                                    <v-icon name="fa-chevron-right" class="mt-1 text-gray-500" scale="1" />
                                </div>
                            </div>

                            <div class="item flex gap-1 justify-between items-center">
                                <div class="flex gap-2 items-center">
                                    <div class="left">
                                        <img src="../../assets/alegra-new-brand-icon-pos (1).webp" alt=""
                                            class="h-12 object-cover mr-2">
                                    </div>
                                    <div class="middle flex flex-col text-sm">
                                        POS
                                        <span class="text-xs text-gray-500">Vende y factura electronicamente.</span>
                                    </div>
                                </div>

                                <div class="right">
                                    <v-icon name="fa-chevron-right" class="mt-1 text-gray-500" scale="1" />
                                </div>
                            </div>

                            <div class="item flex gap-1 justify-between items-center">
                                <div class="flex gap-2 items-center">
                                    <div class="left">
                                        <img src="../../assets/alegra-new-brand-icon-shop.webp" alt=""
                                            class="h-12 object-cover mr-2">
                                    </div>
                                    <div class="middle flex flex-col text-sm">
                                        Tienda
                                        <span class="text-xs text-gray-500">Crea tu primera tienda online en 4 clics</span>
                                    </div>
                                </div>

                                <div class="right">
                                    <v-icon name="fa-chevron-right" class="mt-1 text-gray-500" scale="1" />
                                </div>

                            </div>

                            <div class="item flex gap-1 justify-between items-center">
                                <div class="flex gap-2 items-center">
                                    <div class="left">
                                        <img src="../../assets/alegra-new-brand-icon-payroll.webp" alt=""
                                            class="h-12 object-cover mr-2">
                                    </div>
                                    <div class="middle flex flex-col text-sm">
                                        Nomina
                                        <span class="text-xs text-gray-500">Emite fácil nómina de tu equipo</span>
                                    </div>
                                </div>

                                <div class="right">
                                    <v-icon name="fa-chevron-right" class="mt-1 text-gray-500" scale="1" />
                                </div>

                            </div>

                        </div>

                        <hr class="my-3">

                        <div class="bottom text-gray-500 text-sm">
                            <v-icon name="ri-grid-fill" class="mt-1 mr-3" scale="1" />
                            Más soluciones para tu negocio
                        </div>

                        <hr class="my-3">

                        <div class="item flex gap-1 justify-between items-center">
                            <div class="flex gap-2 items-center">
                                <div class="left">
                                    <img src="../../assets/alegra-new-brand-icon-enterprise.svg" alt=""
                                        class="h-12 object-cover mr-2">
                                </div>
                                <div class="middle flex flex-col text-sm">
                                    Alegra para Contadores
                                    <span class="text-xs text-gray-500">Automatiza tu trabajo y ahorra tiempo</span>
                                </div>
                            </div>

                            <div class="right">
                                <v-icon name="fa-chevron-right" class="mt-1 text-gray-500" scale="1" />
                            </div>
                        </div>
                    </div>
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
            <div class="flex justify-between ">
                <DefaultButton class="mr-2 hover:bg-slate-100">Ingresa</DefaultButton>
                <DefaultButton class="text-white bg-custom-30aba9 hover:bg-custom-2a9795  block">Empieza gratis
                </DefaultButton>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import DefaultButton from './../DefaultButton.vue'

const isHover = ref(false)
</script>
