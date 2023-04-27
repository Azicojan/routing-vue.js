import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'
import Contacts from './components/Contacts.vue'



const routes = [

    { path: '/', component: Home },
    { path:'/gallery', component: Gallery },
    { path: '/contacts', component: Contacts},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
