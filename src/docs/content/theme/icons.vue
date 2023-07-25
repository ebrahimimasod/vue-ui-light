<template>
	<h2>Icons</h2>
	<br>
	<!-- TODO://input for search -->
	<!-- TODO://range  for size -->
	<v-row class="-m-1">
		<v-col
			v-for="icon in currentIcons"
			:key="icon"
			xs="2"
			class="p-1"
		>
			<div
				class="icon-card"
				@click="onCopyIcon(icon)"
			>
				<v-Icon
					:name="icon"
					:size="iconSize"
					class="mb-4 inline-block"
				/>
				<p class="mb-0 text-xs text-neutral-100 truncate">
					{{ icon }}
				</p>
			</div>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'IconsDocument',
	data() {
		return {
			iconSize: 24,
			search: '',
			icons: [
				'description',
				'plus',
				'minus',
				'offline',
				'online',
				'chevron-up',
				'chevron-down',
				'check',
				'close',
				'check-fill',
				'info-fill',
				'desktop',
				'tablet',
				'phone',
				'email',
				'sms',
				'double-chevron',
				'columns',
				'more',
			],
		};
	},
	computed: {
		currentIcons(): string[] {
			if (this.search) {
				return this.icons.filter((icon) => icon.includes(this.search));
			}
			return this.icons;
		},
	},
	methods: {
		onCopyIcon(icon: string) {
			navigator.clipboard.writeText(icon).then(() => {
				/// @ts-ignore
				this.$toast.info('Copied to clipboard!');
			});
		},
		rangeLabel(size: number): string {
			return `${size}px`;
		},
	},
});
</script>

<style lang="postcss" scoped>
.icon-card {
    @apply bg-white rounded text-center p-4 hover:shadow-md cursor-pointer;
    transition: box-shadow 0.3s;
}
</style>
