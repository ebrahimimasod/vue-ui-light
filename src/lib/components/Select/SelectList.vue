<template>
	<div class="select-list-wrapper">
		<div
			v-if="divide"
			class="select-optionv-divider"
		/>
		<div
			v-if="label"
			class="select-options-heading"
		>
			{{ label }}
		</div>
		<ul class="select-options-list">
			<li
				v-for="option in options"
				:key="option.value"
				:class="[selectOption(option)]"
				@click="onSelect(option)"
			>
				<div class="flex items-center">
					<v-Icon
						v-if="option.icon"
						class="select-option-icon"
						:name="option.icon"
						:size="16"
					/>
					<img
						v-if="option.image"
						class="select-option-image"
						:src="option.image"
					>
					<div class="flex flex-col items-start justify-start">
						<span class="select-option-title">
							{{ option.title }}
						</span>
						<span
							v-if="option.caption"
							class="select-option-caption"
						>
							{{ option.caption }}
						</span>
					</div>
				</div>
				<v-Icon
					v-if="iVSelected(option.value)"
					name="check"
					size="14"
					class="check-icon"
				/>
			</li>
			<li
				v-if="!options.length"
				class="p-2 list-none text-neutral-100 cursor-default"
			>
				Nothing matched ...
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VIcon, VCheckbox } from '@/components';
import { SelectOption } from './Select.vue';

export default defineComponent({
	name: 'VSelectList',
	components: {
		VIcon,
		VCheckbox,
	},
	props: {
		/**
         * An array of options to render in dropdown.
         */
		options: {
			type: Array as PropType<SelectOption[]>,
		},
		/**
         * An array of selected values.
         */
		selected: {
			type: Array,
		},
		/**
         * A label to represent the group of options.
         */
		label: {
			type: String,
		},
		/**
         * A divide to represent the group of options.
         */
		divide: {
			type: Boolean,
		},
		/**
         * Select's state variant.
         * @values danger, warning, success , tertiary
         */
		state: {
			type: String as PropType<'danger' | 'warning' | 'success' | 'tertiary'>,
		},
	},

	emits: ['select'],

	methods: {
		onSelect(option: SelectOption) {
			this.$emit('select', option);
		},
		selectOption(option: SelectOption): Array<string> {
			const classNames = ['select-option'];
			if (this.state) {
				classNames.push(this.state);
			}
			if (this.selected && !!this.selected.length && this.iVSelected(option.value)) {
				classNames.push('selected');
			}
			return classNames;
		},
		iVSelected(key: string | number | boolean): boolean {
			let iVSelect = false;
			this.selected?.forEach((item: any) => {
				if (item.value === key) {
					iVSelect = true;
				}
			});
			return iVSelect;
		},
	},
});
</script>

<style lang="postcss">
.select-list-wrapper {
    @apply p-0 m-0;
}
.select-options-list {
    @apply p-0 m-0;
}
.select-options-heading {
    @apply text-xs font-semibold text-neutral-200 pl-4 my-2;
}
.select-optionv-divider {
    @apply h-px bg-neutral-50 mx-4 mb-2;
    width: calc(100% - 32px);
}
.select-option {
    @apply px-4 py-2 mb-2 list-none rounded-lg cursor-pointer flex items-center justify-between;
    transition: 0.2s;
    line-height: 15.68px;
}
.select-option:hover {
    @apply bg-neutral-25;
}
.select-option:active {
    @apply bg-primary-25;
}
.select-option.success:active {
    @apply bg-success-25;
}
.select-option.danger:active {
    @apply bg-danger-25;
}
.select-option.warning:active {
    @apply bg-warning-25;
}
.select-option.tertiary:active {
    @apply bg-tertiary-25;
}

.select-option-title {
    @apply font-bold text-sm text-neutral-800;
}

.select-option-icon {
    @apply font-semibold text-xs text-neutral-500 mr-4;
}

.select-option-image {
    @apply rounded-xl h-8 w-8 mr-4;
}

.select-checkbox {
    @apply mr-3 !important;
}

.select-option-caption {
    @apply text-xs font-normal text-neutral-200;
    line-height: 1.33;
}

/* selected state */
.select-option.selected {
    @apply bg-primary-600;
}
.select-option.tertiary.selected {
    @apply bg-tertiary-600;
}
.select-option.success.selected {
    @apply bg-success-600;
}
.select-option.danger.selected {
    @apply bg-danger-600;
}
.select-option.warning.selected {
    @apply bg-warning-600;
}
.select-option.selected .select-option-title {
    @apply text-white;
}
.select-option.selected .select-option-caption {
    @apply text-white;
}
.select-option.selected .select-option-icon {
    @apply text-white;
}

.check-icon {
    @apply text-white font-semibold !important;
    color: var(--white) !important;
}
</style>
