import { RouteRecordRaw } from 'vue-router';

// Fetch a object containing All markdown file, placed under '~/content' directory.
// @ts-ignore
const markdowns = import.meta.glob('../content/**/*.{md,vue}');
const documentsRoute = Object.keys(markdowns).map((relativePath) => {
	// Prepare document route path, using its file-system path.
	const [, partial] = relativePath.split('./content');
	const path = partial.substring(1, partial.lastIndexOf('.'));
	// A promise which results in markdown's chunk.
	const component = markdowns[relativePath];
	const filename = partial.split('/');
	const name = filename[2].substring(0, filename[2].indexOf('.md'));
	return {
		name,
		path,
		component,
	};
});

const routes: RouteRecordRaw[] = [
	{
		name: 'home',
		path: '/',
		component: () => import('~/layout/Home.vue'),
	},
	{
		name: 'docs',
		path: '/docs',
		component: () => import('~/layout/Docs.vue'),
		children: documentsRoute,
	},
];

export default routes;
