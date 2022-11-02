import { createApp } from "vue";

import App from "./App.vue";
import router from './routes/index.js';

import './assets/css/base.css';
import './assets/css/style.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret);


createApp(App).use(
    router,
).component('font-awesome-icon', FontAwesomeIcon).mount('#app');





