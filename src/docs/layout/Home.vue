<template>
	<v-row
		tag="main-wrapper"
		justify="center"
		align-items="start"
		align-content="start"
	>
		<v-row
			justify="center"
			class="mt-24"
		>
			<img
				:src="logo"
				class="logo"
			>
		</v-row>
		<v-row
			justify="center"
			class="mt-12"
		>
			<h1 class="text-neutral-600">
				Vue UI Light
			</h1>
			<v-col
				xs="12"
				class="text-center mt-5"
			>
				<span class="text-base">Vue 3 + Typescript + Tailwindcss + Vite</span>
			</v-col>
		</v-row>
		<v-row
			justify="center"
			class="mt-5"
		>
			<v-col>
				<code class="install-code">npm install --save vue-ui-light</code>
			</v-col>
		</v-row>
		<v-row
			justify="center"
			class="my-10"
		>
			<hr class="w-4/12 border-neutral-50">
		</v-row>
		<v-row justify="center">
			<v-button
				class="!py-2 !px-5 !text-xl !rounded-lg mr-2"
				variant="secondary"
				to="/docs/getting-started/introduction"
			>
				Learn more
			</v-button>
			<v-button
				class="!py-2 !px-5 !text-xl !rounded-lg"
				variant="primary"
				to="/docs/getting-started/quick-start"
			>
				Get Started
			</v-button>
		</v-row>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import logo from '~/assets/images/vue-ui-light-logo.png';

export default defineComponent({
	name: 'HomeLayout',
	data() {
		return {
			logo,
		};
	},
});
</script>

<style lang="postcss" scoped>
.main-wrapper {
    min-height: calc(100% - 56px);
}

.logo {
    @apply h-40 w-40 block;
}
.install-code {
    @apply bg-neutral-50 py-3 px-10 rounded-lg inline-block text-neutral-400;
    font-family: "Fira Code";
}
</style>
