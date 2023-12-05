import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoHamburgerMenu, IoCloseOutline, FaRegularUserCircle, FaChevronDown, RiGridFill, FaChevronRight, MdWhatsapp } from 'oh-vue-icons/icons'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

addIcons(CoHamburgerMenu, IoCloseOutline, FaRegularUserCircle, FaChevronDown, RiGridFill, FaChevronRight, MdWhatsapp)

createApp(App)
  .use(router)
  .use(store)
  .component('v-icon', OhVueIcon)
  .mount('#app')
