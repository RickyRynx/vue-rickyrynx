import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/components/HelloWorld')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/main')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/main')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;