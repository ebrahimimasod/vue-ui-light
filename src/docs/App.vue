<template>
	<navbar />
	<router-view />
</template>

<script>
import Navbar from '~/components/layouts/Navbar.vue';

export default {
	name: 'App',
	components: {
		Navbar,
	},
};
</script>

<style lang="postcss">
@tailwind base;
@tailwind utilities;

:root {
    @apply text-neutral-400 bg-neutral-25;
}

#app {
    @apply h-full;
}

* {
    border-style: solid;
    border-width: 0;
    box-sizing: border-box;
}
</style>
