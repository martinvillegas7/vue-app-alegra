import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { CoHamburgerMenu, IoCloseOutline, FaRegularUserCircle } from 'oh-vue-icons/icons'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

addIcons(CoHamburgerMenu, IoCloseOutline, FaRegularUserCircle)

createApp(App)
  .use(router)
  .use(store)
  .component('v-icon', OhVueIcon)
  .mount('#app')
