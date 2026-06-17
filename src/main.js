import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'vuetify/styles';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';

import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';

import '@fontsource/roboto/100-italic.css';
import '@fontsource/roboto/300-italic.css';
import '@fontsource/roboto/400-italic.css';
import '@fontsource/roboto/500-italic.css';
import '@fontsource/roboto/700-italic.css';
import '@fontsource/roboto/900-italic.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount('#app');
