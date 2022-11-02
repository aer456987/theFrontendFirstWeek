import { createApp } from 'vue';
import { createPinia } from 'pinia';
// import { RouterLink, RouterView } from 'vue-router';

import App from './App.vue';
import router from './router';

// import './assets/main.css';
import 'bootstrap';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
