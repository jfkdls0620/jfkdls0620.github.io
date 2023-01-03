import { createWebHashHistory, createRouter } from "vue-router";
import Landing from '../components/Landing.vue'
import Intro from '../components/Intro.vue'
import Home from '../components/Main.vue'
import Portfolio from '../components/Portfolio.vue'
import Info from '../components/Info.vue'
import Ew from '../components/Career.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Landing },
        { path: '/intro', component: Intro },
        { path: '/main', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/info', component: Info },
        { path: '/ew', component: Ew },
    ]
})

export default router;
