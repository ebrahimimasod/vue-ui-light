<template>
	<div :class="$style.content">
		<!-- @slot tab contents -->
		<slot />
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'VTab',
	props: {
		/**
		 * Title of the tab
		 */
		title: {
			type: String,
			required: true,
		},
		/**
		 * Name of a supported icon
		 */
		icon: {
			type: String,
		},
		/**
		 * Variant and contetn of a badge ['primary' , 'Text']
		 */
		badge: {
			type: [String],
		},
		/**
		 * Disabled state
		 */
		disabled: {
			type: Boolean,
		},
		/**
		 * Id attribute use on tab header. useful for navigation and focus accessibility.
		 */
		id: {
			type: [String, Number],
		},
	},
});
</script>

<style lang="postcss" module>
/* .content {
	@apply hidden;
} */
</style>
