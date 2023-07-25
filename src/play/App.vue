<template>
	<!--
    Use this file as a playground for developing components and stuffs related to UI library.
    After getting ready to publish your changes on upstream, revert any changes on this file let it be as it was :)
  -->
	<main>
		<!-- my component demo -->
		<v-icon
			style="color:red"
			disabled
			size="50"
			name="activity"
		/>
	</main>
</template>

<script>

import { VIcon } from '@/components';

export default {
	name: 'App',
	components: {
		VIcon,
	},
	methods: {

	},
};
</script>

<style lang="postcss">
@tailwind components;

main {
	@apply bg-white h-screen py-10 px-5;
}
</style>
