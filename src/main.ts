import { createApp } from 'vue';
import App from './App';
import router from './router';
import { createI18n } from './i18n';
// import { getProviders } from './store/providers';

import './bootstrap';
import './main.scss';

const i18n = createI18n();
// const {store, actions} = getProviders();

createApp(App)
// .provide(...store)
// .provide(...actions)
.use(i18n)
.use(router)
.mount('#app')
