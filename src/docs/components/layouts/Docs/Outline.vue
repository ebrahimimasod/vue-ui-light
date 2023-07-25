<template>
	<aside class="outlines">
		<h5>On This Page</h5>
		<ul v-if="headings.length">
			<li
				v-for="heading in headings"
				:key="heading.label"
			>
				<a
					:href="`#${heading.href}`"
					:class="[heading.type]"
					class="outline-heading"
				>
					{{ heading.label }}
				</a>
			</li>
		</ul>
	</aside>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export interface DocumentsHeading {
	type: string;
	label: string;
	href: string;
}

export default defineComponent({
	name: 'Outline',
	props: {
		headings: {
			type: Array as PropType<DocumentsHeading[]>,
		},
	},
});
</script>

<style lang="postcss" scoped>
.outlines {
    @apply sticky py-10 pl-8;
    top: 50px;
}
.outline-heading {
    @apply inline-block text-neutral-100 py-1;
    @apply hover:text-blue;
}

.outline-heading.H2 {
    @apply pl-4;
}
.outline-heading.H3 {
    @apply pl-8;
}
</style>
