import { createApp } from 'vue';
import app from './App.vue';
import PluginsInstaller from '~/lib/plugins';

const App = createApp(app);
App.use(PluginsInstaller);

App.mount('#app');
