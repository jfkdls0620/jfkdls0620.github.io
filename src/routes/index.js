import { createWebHistory, createRouter } from "vue-router";
import Intro from '../components/Intro.vue'
import Home from '../components/Main.vue'
import Portfolio from '../components/Portfolio.vue'
import Info from '../components/Info.vue'
import Ew from '../components/Career.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/Info', component: Info },
        { path: '/ew', component: Ew },
    ]
})

export default router;
