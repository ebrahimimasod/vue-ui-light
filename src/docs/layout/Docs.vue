<template>
	<v-col
		lg="11"
		class="docs-wrapper"
	>
		<v-row
			justify="center"
			align-items="start"
		>
			<v-col>
				<sidebar />
			</v-col>
			<v-col
				ref="docs"
				xs="12"
				md="9"
				lg="7"
				class="py-6 px-10 shadow-md rounded bg-white"
			>
				<router-view />
			</v-col>
			<v-col
				xs="0"
				lg="2"
			>
				<outline :headings="headings" />
			</v-col>
		</v-row>
	</v-col>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import { Sidebar, Outline } from '~/components/layouts/Docs';
import { DocumentsHeading } from '~/components/layouts/Docs/Outline.vue';

export default defineComponent({
	name: 'DocsLayout',
	components: {
		Sidebar,
		Outline,
	},
	data() {
		return {
			headings: [] as DocumentsHeading[],
		};
	},
	watch: {
		'$refs.docs': 'getOutlineHeadings',
	},
	mounted() {
		this.getOutlineHeadings();
		this.$router.afterEach(() => {
			nextTick(this.getOutlineHeadings);
		});
	},
	methods: {
		getOutlineHeadings() {
			const headingsQuery = 'h1:not(.exmaple *),h2:not(.exmaple *),h3:not(.exmaple *)';
			const headings: HTMLElement[] = Array.from(this.$el.querySelectorAll(headingsQuery));
			this.headings = headings.map((h) => ({
				type: h.nodeName,
				label: h.innerText,
				href: h.id,
			}));
		},
	},
});
</script>

<style lang="postcss">
.docs-wrapper {
    @apply mx-auto pb-20;
    padding-top: 75px;
}

.markdown-body h1:first-child {
    @apply mb-12;
}

.markdown-body h1,
h2,
h3,
h4,
h5,
h6 {
    @apply mb-4;
}

.markdown-body h1:not(:first-child),
.markdown-body h2:not(:first-child),
.markdown-body h3:not(:first-child),
.markdown-body h4:not(:first-child),
.markdown-body h5:not(:first-child),
.markdown-body h6:not(:first-child) {
    @apply mt-6;
}

.markdown-body p:not([class]) {
    @apply my-4 text-neutral-600 leading-relaxed text-justify;
}

.markdown-body blockquote {
    @apply bg-neutral-50 py-1 px-3 rounded-r;
    border-left: 3px solid var(--neutral-700);
}
.markdown-body blockquote > * {
    @apply text-neutral-600 font-medium;
}

.markdown-body > ul,
.markdown-body > ol {
    @apply list-inside mb-4 list-disc pl-4;
}

.markdown-body > li:not(.example *) {
    @apply mb-3 list-outside;
}

.markdown-body > pre {
    @apply rounded-md;
}
.markdown-body code,
.markdown-body code * {
    font-family: "Fira Code", monospace !important;
    font-size: 0.95em;
}
.markdown-body code:not([class]) {
    @apply bg-neutral-500 px-1 py-px rounded-sm text-green-100;
}

.markdown-body > table {
    @apply mb-5 w-full;
}
.markdown-body tr:not(:last-child) {
    @apply border-b border-neutral-40;
}
.markdown-body thead tr {
    @apply border-b-2 border-neutral-40;
}
.markdown-body th {
    @apply whitespace-nowrap text-left;
}
/* .markdown-body td:not(:last-child) {
    @apply border-r border-neutral-40;
}
.markdown-body tr:nth-child(even):not([class]) {
    @apply bg-neutral-20;
} */

.markdown-body td,
.markdown-body th {
    @apply py-2 px-4;
}
</style>
