import {createRouter, createWebHistory} from "vue-router"
import Home from "@app/views/Home.vue"
import About from "@app/views/About.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    }
]

const router = createRouter({
    //eslint-disable-next-line no-process-env,no-undef
    history: createWebHistory("/"),
    routes
})

export default router
