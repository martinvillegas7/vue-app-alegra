<template>
  <header class="h-12 bg-transparent  justify-between  relative  text-lg px-5 hidden lg:flex">
  <router-link :to="{ name: 'home' }" class="py-1">
      <img  src="../../assets/alegra.svg" alt="" class="h-full object-cover">
  </router-link>
  <div class="flex items-center justify-between ml-3 relative">
      <div>
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
          <DefaultButton class="text-white bg-custom-30aba9 hover:bg-custom-2a9795  block">Empieza gratis</DefaultButton>
      </div>
  </div>
</header>
</template>

<script setup>
import DefaultButton from './../DefaultButton.vue'
</script>
