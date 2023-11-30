<template>
  <navbar :style="{
    backgroundColor: isScrolled ? '#fff' : 'transparent',
    boxShadow: isScrolled ? '0 0 10px rgba(0,0,0,0.2)' : 'none'
  }" />
  <main>
    <router-view></router-view>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './NavBar/NavBar.vue'

const isScrolled = ref(false)

window.onscroll = () => {
  isScrolled.value = window.pageYOffset !== 0
  return () => (window.onscroll = null)
}
</script>
