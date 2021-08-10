import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import User from './pages/User';

Vue.use(VueRouter);

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'User',
        path: '/user',
        component: User
    }
];

const router = new VueRouter({routes});

export default router;