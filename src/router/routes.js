import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
    { path: '/', component: HomeView, name: 'Home' },

    { path: '/login', component: LoginView, name: 'Login'},
]

export default routes