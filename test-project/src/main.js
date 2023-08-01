import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//const app = createApp(App)
createApp(App).use(store).use(router).mount('#app')
//createApp(App).use(store).use(router).component('FocusTrap', FocusTrap).mount('#app')
