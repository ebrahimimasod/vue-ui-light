import { App } from 'vue';
import RouterPlugin from './router.plugin';
import LibraryPlugins from './library.plugins';

export default {
	install(app: App) {
		app.use(RouterPlugin);
		app.use(LibraryPlugins);
	},
};
