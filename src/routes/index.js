import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Main.vue'
import Portfolio from '../components/Portfolio.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
    ]
})

export default router;