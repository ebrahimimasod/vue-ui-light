<template>
	<h2>Colors</h2>
	<br>

	<h4>Theme Variants</h4>
	<v-row
		justify="center"
		class="space-x-4 mb-10"
	>
		<div class="color-tile-wrapper">
			<div class="color-tile bg-primary">
				<p class="color-name">
					Primary
				</p>
			</div>
			<p class="color-code">
				#2D8CFF
			</p>
		</div>
		<div class="color-tile-wrapper">
			<div class="color-tile bg-secondary">
				<p class="color-name">
					Secondary
				</p>
			</div>
			<p class="color-code">
				#57AE24
			</p>
		</div>
		<div class="color-tile-wrapper">
			<div class="color-tile bg-tertiary">
				<p class="color-name">
					Tertiary
				</p>
			</div>

			<p class="color-code">
				#DD7DF9
			</p>
		</div>
	</v-row>

	<h4>Palettes</h4>
	<v-row
		class="-m-1"
		justify="center"
	>
		<v-col
			v-for="(colorCodes, variant) in colors"
			:key="variant"
			xs="12"
			md="6"
			lg="4"
			class="p-1"
		>
			<p class="color-variant-group">
				{{ variant }}
			</p>
			<div class="colors-list">
				<div
					v-for="(code, color) in colorCodes"
					:key="code"
				>
					<div
						class="color-row"
						:style="{ backgroundColor: code }"
					>
						<p class="color-row-name">
							{{ color }}
						</p>

						<p class="color-row-code">
							{{ code }}
						</p>
					</div>
				</div>
			</div>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ColorsDocument',
	data() {
		return {
			colors: {
				blue: {
					25: '#F2F8FF',
					50: '#E2EFFF',
					75: '#DDECFF',
					100: '#C5DFFF',
					200: '#A8D0FF',
					300: '#7EB9FF',
					400: '#64AAFF',
					500: '#509FFF',
					600: '#2D8CFF',
					700: '#006AE9',
					800: '#004DC0',
					900: '#00398E',
				},
				green: {
					25: '#F4FFEA',
					50: '#E8FFD1',
					75: '#D9FFB2',
					100: '#C3FF86',
					200: '#B2FF64',
					300: '#95F82D',
					400: '#7EE42A',
					500: '#74D227',
					600: '#57AE24',
					700: '#48901F',
					800: '#328020',
					900: '#266F16',
				},
				purple: {
					25: '#FBF1FE',
					50: '#F7E2FE',
					75: '#F4D4FD',
					100: '#F0C5FC',
					200: '#ECB7FC',
					300: '#E8A9FB',
					400: '#E49AFA',
					500: '#E18CF9',
					600: '#DD7DF9',
					700: '#D96FF8',
					800: '#C364DF',
					900: '#AE59C6',
				},
				pink: {
					25: '#FFE6F3',
					50: '#FECCE6',
					75: '#FEB3DA',
					100: '#FD99CD',
					200: '#FD80C1',
					300: '#FC66B4',
					400: '#FC4DA8',
					500: '#FB339B',
					600: '#FB1A8F',
					700: '#FA0082',
					800: '#E10075',
					900: '#C80068',
				},
				red: {
					25: '#FEEAEA',
					50: '#FDD4D4',
					75: '#FCBFBF',
					100: '#FBA9A9',
					200: '#FA9494',
					300: '#F87E7F',
					400: '#F76969',
					500: '#F65354',
					600: '#F53E3E',
					700: '#F42829',
					800: '#DC2425',
					900: '#C32021',
				},
				orange: {
					25: '#FFF1E6',
					50: '#FFE2CC',
					75: '#FFD4B3',
					100: '#FFC599',
					200: '#FFB780',
					300: '#FFA867',
					400: '#FF9A4D',
					500: '#FF8B34',
					600: '#FF7D1A',
					700: '#FF6E01',
					800: '#E66301',
					900: '#CC5801',
				},
				yellow: {
					25: '#FFFCEE',
					50: '#FFF8DD',
					75: '#FFF5CC',
					100: '#FFF2BB',
					200: '#FFEFAA',
					300: '#FFEB98',
					400: '#FFE887',
					500: '#FFE576',
					600: '#FEDB25',
					700: '#F8C719',
					800: '#EBB700',
					900: '#E1B000',
				},
				neutral: {
					25: '#f9f9f9',
					50: '#e8e8ea',
					75: '#d2d1d4',
					100: '#bbbabf',
					200: '#a5a3a9',
					300: '#8e8c94',
					400: '#77757f',
					500: '#615e69',
					600: '#4a4754',
					700: '#34303e',
					800: '#1d1929',
					900: '#0f0d15',
				},
			},
		};
	},
});
</script>

<style lang="postcss" scoped>
.color-tile-wrapper {
    @apply h-32 w-32 rounded-md overflow-hidden relative;
}
.color-tile-wrapper.small {
    @apply h-20 w-20;
}

.color-tile {
    @apply h-full w-full cursor-pointer;
    @apply flex justify-center items-center;
}

.color-name {
    @apply text-white py-2 font-medium text-base;
    text-shadow: 0 0 2px var(--neutral-100);
}
.color-code {
    @apply text-center text-xs font-medium text-neutral-100 bg-neutral-600;
    @apply py-1 absolute -bottom-8 w-full;
    transition: 0.3s;
}

.color-tile-wrapper:hover .color-code {
    @apply bottom-0;
}

.color-variant-group {
    @apply text-center font-semibold text-lg mb-2 capitalize;
}
.colors-list {
    @apply rounded-md overflow-hidden mb-5 border-2 border-neutral-50;
}
.color-row {
    @apply flex justify-between items-baseline cursor-pointer;
}
.color-row-name {
    @apply bg-neutral-600 text-white h-full p-2 w-11 text-center font-medium;
}
.color-row-code {
    @apply text-xs mr-4 bg-neutral-300 text-white rounded px-1 opacity-0 cursor-text;
    transition: 0.1s;
}

.color-row:hover .color-row-code {
    @apply opacity-100;
}
</style>
