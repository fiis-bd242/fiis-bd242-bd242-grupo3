import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'


const app = createApp(App)
axios.defaults.baseURL = 'http://localhost:8080'
app.use(router,axios)

app.use(createPinia())
app.use(router)

app.mount('#app')
