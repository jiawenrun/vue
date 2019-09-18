import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Micspe from './views/Micspe.vue'
import Pshar from './views/Pshar.vue'
import Appdown from './views/Appdown.vue'
import Login from './views/Login.vue'
import Sno from './views/Sno.vue'
import SearchBar from './views/SearchBar.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Micspe',
            name: 'Micspe',
            component: Micspe
        },
        {
            path: '/Pshar',
            name: 'Pshar',
            component: Pshar
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {
            path: '/SearchBar',
            name: 'SearchBar',
            component: SearchBar
        },
        {
            path: '/Sno',
            name: 'Sno',
            component: Sno
        },
        {
            path: '/Appdown',
            name: 'Appdown',
            component: Appdown
        },

        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})