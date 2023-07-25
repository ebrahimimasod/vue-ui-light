<template>
	<!-- eslint-disable vue/no-v-html -->
	<section
		class="exmaple"
		:style="styles"
	>
		<div
			v-if="!showSource"
			class="component-preview"
			@click="callClick"
		>
			<slot
				name="preview"
				:state="state"
				:data="cmpData"
			/>
		</div>
		<div
			v-if="showSource"
			class="source-code"
		>
			<slot name="source" />
		</div>
		<div class="toolbar">
			<button
				class="toolbar-btn"
				:class="{ active: showSource }"
				@click="showSource = true"
				v-html="CodeIcon"
			/>
			<button
				class="toolbar-btn"
				:class="{ active: !showSource }"
				@click="showSource = false"
				v-html="EyeIcon"
			/>
		</div>
	</section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import CodeIcon from '~/assets/images/code.svg?raw';
import EyeIcon from '~/assets/images/eye.svg?raw';

export default defineComponent({
	name: 'Exmaple',
	props: {
		minHeight: {
			type: [String, Number],
		},
		color: {
			type: String,
		},
		modelData: {
			type: [String, Number, Array, Object],
			default: [],
		},
	},
	data() {
		return {
			CodeIcon,
			EyeIcon,
			showSource: false,
			state: false,
			cmpData: [] as any,
		};
	},
	computed: {
		styles(): string {
			const classname = [];
			if (this.minHeight) {
				classname.push(`min-height: ${this.minHeight}px !important`);
			}
			if (this.color) {
				classname.push(`background-color: ${this.color} !important`);
			}
			return classname.join(';');
		},
	},
	watch: {
		modelData: {
			deep: true,
			immediate: true,
			handler() {
				this.cmpData = this.modelData;
			},
		},
	},
	methods: {
		callClick() {
			//for v-model functionality
			this.state = !this.state;
		},
	},
});
</script>
<style lang="postcss" scoped>
.exmaple {
    @apply relative overflow-auto bg-neutral-25 p-1 pt-12;
    @apply rounded-md border-2 border-neutral-50;
    @apply mb-10;
}
.component-preview {
    @apply p-5;
}
.source-code {
    @apply overflow-hidden;
}

.source-code:deep() pre:not(:first-child) {
    @apply mt-1;
}

.toolbar {
    @apply absolute top-1 left-1 right-1;
    @apply flex justify-center bg-neutral-25;
    @apply py-1 rounded;
}

.toolbar-btn {
    @apply mx-1 bg-white rounded-full w-8 h-8 text-center flex justify-center items-center p-2;
    @apply hover:bg-neutral-50;
}
.toolbar-btn.active {
    @apply bg-green;
}
.toolbar-btn.active:deep() * {
    stroke: white;
}
</style>
