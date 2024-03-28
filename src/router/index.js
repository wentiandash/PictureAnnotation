import { createRouter, createWebHashHistory } from 'vue-router'
import { emitter } from './modal';
// import Home from '@/views/Home/Home.vue'
// import Dialog from '@/views/Home/dialog.vue'
const routes = [
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/home",
        name: "Home",
        component: () => import("@/views/Home/Home.vue"),
    },
    {
        path: "/explore",
        name: "Explore",
        component: () => import("@/views/Home/Home.vue"),
        children: [
            {
                path: ':id',
                name: "Detail",
                component: () => import('@/views/Home/Detail.vue'),
            }
        ]
    },
    {
        path: '/explore/:id',
        name: "DetailId",
        component: () => import('@/views/Home/Detail.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    debugger
    if (to.name === 'Detail') {
        if (from.name === 'Home') {
            return true
        } else {
            return { name: 'DetailId', params: to.params }
        }
    }
})

export default router