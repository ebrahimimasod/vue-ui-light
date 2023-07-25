import { createRouter, createWebHistory } from 'vue-router';
import routes from '~/routes/routes';

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { behavior: 'smooth',
			top: 0 };
	},
});

export default router;
