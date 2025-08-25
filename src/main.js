import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Nicole from './components/Nicole.vue'
import Catalog from './components/Catalog.vue'
import Stores from './components/Stores.vue'
import './main.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/homepage', component: Nicole },
    { path: '/catalog', component: Catalog },
    { path: '/stores', component: Stores },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')