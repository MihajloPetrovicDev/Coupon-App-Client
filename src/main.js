import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import config from './config';
import './styles/main.scss'

const app = createApp(App);

app.config.globalProperties.$config = config;

app.use(router).mount('#app');
