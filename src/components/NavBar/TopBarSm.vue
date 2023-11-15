<template>
<header v-show="isOpen" class="h-12 flex bg-transparent  justify-between  relative  text-lg px-5 lg:hidden">
  <router-link :to="{ name: 'home' }" class="py-1">
      <img  src="../../assets/alegra.svg" alt="" class="h-full object-cover">
  </router-link>

  <span class="h-full flex items-center justify-center gap-4 ">
      <DefaultButton class="text-white bg-custom-30aba9 hover:bg-custom-2a9795  text-lg" @click="toggleMenu" >Empieza gratis</DefaultButton>
      <v-icon @click="toggleMenu" name="co-hamburger-menu" scale="1.8"  />
  </span>
</header>

<header ref="topBar" class="flex flex-col bg-transparent  text-lg p-5 lg:hidden absolute top-0 left-0 right-0 h-0  transition-all duration-500 ease-in-out pointer-events-none overflow-hidden opacity-0">

  <div class="flex justify-between items-center h-12 w-full">
    <router-link :to="{ name: 'home' }" class="py-1 h-full">
      <img  src="../../assets/alegra.svg" alt="" class="h-full object-cover">
    </router-link>
    <span class="h-full flex items-center justify-center gap-4 ">
        <DefaultButton class="text-white bg-custom-30aba9 hover:bg-custom-2a9795  text-lg" @click="toggleMenu" >Empieza gratis</DefaultButton>
        <v-icon @click="toggleMenu" name="io-close-outline" scale="1.8"  />
    </span>
  </div>

  <div class="flex flex-col mt-5 justify-between h-full" >
      <div class="flex flex-col gap-4">
          <router-link to="/"
              class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9">
              Inicio
          </router-link>
          <hr>
          <router-link to="/"
              class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9">
              Planes
          </router-link>
          <hr>
          <router-link to="/"
              class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9">
              Contacto
          </router-link>
          <hr>
          <router-link to="/"
              class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9">
              Soluciones
          </router-link>
          <div class="solutions flex flex-col gap-2">
            <router-link to="/"
              class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9 text-gray-700">
              <img  src="../../assets/alegra-new-brand-icon-accounting-minus-padding.svg" alt="" class="h-7 object-cover mr-2">
              Facturación
          </router-link>
          <router-link to="/"
              class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9 text-gray-700">
              <img  src="../../assets/alegra-new-brand-icon-accounting-minus-padding.svg" alt="" class="h-7 object-cover mr-2">
              Contabilidad
          </router-link>
          <router-link to="/"
              class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9 text-gray-700">
              <img  src="../../assets/alegra-new-brand-icon-accounting-minus-padding.svg" alt="" class="h-7 object-cover mr-2">
              POS
          </router-link>
          <router-link to="/"
              class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9 text-gray-700">
              <img  src="../../assets/alegra-new-brand-icon-accounting-minus-padding.svg" alt="" class="h-7 object-cover mr-2">
              Tienda
          </router-link>
          <router-link to="/"
              class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9 text-gray-700">
              <img  src="../../assets/alegra-new-brand-icon-accounting-minus-padding.svg" alt="" class="h-7 object-cover mr-2">
              Nómina
          </router-link>
          <router-link to="/"
              class="inline-flex items-center transition-colors- px-2 h-full hover:text-custom-30aba9 text-gray-700">
              <img  src="../../assets/alegra-new-brand-icon-accounting-minus-padding.svg" alt="" class="h-7 object-cover mr-2">
              Alegra para Contadores
          </router-link>
          </div>
      </div>
      <div class="flex mr-10">
        <div class="flex items-center justify-center gap-2">
          <v-icon @click="toggleMenu" name="fa-regular-user-circle" scale="1.8"  />
          <DefaultButton class="mr-2 hover:bg-slate-100">Iniciar Sesión</DefaultButton>
        </div>
      </div>
  </div>
</header>
</template>

<script setup>
import { ref, watch } from 'vue'
import DefaultButton from './../DefaultButton.vue'

const props = defineProps({
  isOpen: Boolean,
  toggleMenu: Function
})

const topBar = ref(null)

watch(() => props.isOpen, (newVal) => {
  if (newVal === true) { // Desactiva
    topBar.value.classList.remove('h-[100vh]')
    topBar.value.classList.add('h-0', 'opacity-0', 'pointer-events-none')
    return
  }

  //   Activa
  topBar.value.classList.remove('h-0', 'opacity-0', 'pointer-events-none')
  topBar.value.classList.add('h-[100vh]')
})

</script>
