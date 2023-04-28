import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'
import Contacts from './components/Contacts.vue'
import ImageDetail from './components/ImageDetail.vue'


const routes = [

    { path: '/', component: Home },
    { path:'/gallery', component: Gallery },
    { path: '/contacts', component: Contacts},
    { path:'/image/:id',name:'ImageDetail',component: ImageDetail, props:true}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
