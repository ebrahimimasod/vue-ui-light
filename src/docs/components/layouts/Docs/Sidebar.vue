<template>
	<aside class="sidebar">
		<template
			v-for="section in links"
			:key="section.title"
		>
			<nav class="sidebar-nav">
				<h5 class="capitalize">
					{{ section.title }}
				</h5>
				<ul>
					<li
						v-for="route in section.children"
						:key="route.href"
						class="route-item"
					>
						<router-link
							class="nav-link body"
							exact-active-class="nav-link-active"
							:to="route.href"
						>
							{{ route.label }}
						</router-link>
					</li>
				</ul>
			</nav>
		</template>
	</aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Sidebar',
	data() {
		return {
			links: [
				{
					title: 'Getting Started',
					children: [
						{
							label: 'Introduction',
							href: '/docs/getting-started/introduction',
						},
						{
							label: 'Quick Start',
							href: '/docs/getting-started/quick-start',
						},
						{
							label: 'Installation',
							href: '/docs/getting-started/installation',
						},
					],
				},
				{
					title: 'Theme',
					children: [
						{
							label: 'Colors',
							href: '/docs/theme/colors',
						},
						{
							label: 'Icons',
							href: '/docs/theme/icons',
						},
						{
							label: 'Typography',
							href: '/docs/theme/typography',
						},
						// {
						//     label: "Layout",
						//     href: "/docs/theme/layout",
						// },
					],
				},
				{
					title: 'Components',
					children: [
						{
							label: 'Text',
							href: '/docs/components/text',
						},
						{
							label: 'Row',
							href: '/docs/components/row',
						},
						{
							label: 'Col',
							href: '/docs/components/col',
						},
						{
							label: 'Button',
							href: '/docs/components/button',
						},
						{
							label: 'Input',
							href: '/docs/components/input',
						},
						{
							label: 'TextArea',
							href: '/docs/components/textarea',
						},
						{
							label: 'Icon',
							href: '/docs/components/icon',
						},
						{
							label: 'Dialog',
							href: '/docs/components/dialog',
						},
						{
							label: 'Checkbox',
							href: '/docs/components/checkbox',
						},
						{
							label: 'Radio',
							href: '/docs/components/radio',
						},
						{
							label: 'Toggle/Switch',
							href: '/docs/components/toggle',
						},
						{
							label: 'Select',
							href: '/docs/components/select',
						},
						{
							label: 'Popover',
							href: '/docs/components/popover',
						},
						{
							label: 'Badge',
							href: '/docs/components/badge',
						},
						{
							label: 'Avatar',
							href: '/docs/components/avatar',
						},
						{
							label: 'Tooltip',
							href: '/docs/components/tooltip',
						},
						{
							label: 'Slider',
							href: '/docs/components/slider',
						},
						{
							label: 'Segment',
							href: '/docs/components/segment',
						},
						{
							label: 'Breadcrumb',
							href: '/docs/components/breadcrumb',
						},
						{
							label: 'Divider',
							href: '/docs/components/divider',
						},
						{
							label: 'Accordion',
							href: '/docs/components/accordion',
						},
						{
							label: 'Tabs',
							href: '/docs/components/tabs',
						},
						{
							label: 'Pagination',
							href: '/docs/components/pagination',
						},
						{
							label: 'Table',
							href: '/docs/components/table',
						},
					],
				},
				{
					title: 'Plugins',
					children: [
						{
							label: 'Toast',
							href: '/docs/plugins/toast',
						},
						{
							label: 'Alert',
							href: '/docs/plugins/alert',
						},
					],
				},
			],
		};
	},
});
</script>

<style lang="postcss" scoped>
.sidebar {
    @apply py-8 pr-8 w-64;
}
.sidebar-nav {
    @apply py-5 border-b border-neutral-50;
}

.route-item {
}

.nav-link {
    @apply text-neutral-400 py-2 px-4 block z-10 relative rounded-md;
    transition: 0.2s;
}

.nav-link-active {
    @apply text-primary bg-white shadow-sm font-semibold;
}
</style>
