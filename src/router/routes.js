import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import authGuard from '@/guards/authGuard';

const routes = [
    { path: '/', component: HomeView, name: 'Home', beforeEnter: authGuard },

    { path: '/login', component: LoginView, name: 'Login' },
];

export default routes;