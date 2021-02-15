import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/about/:id',
        name: 'About',

        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/create',
        name: 'Create',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Create.vue')
    },
    {
        path: "*",
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Error.vue')
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router