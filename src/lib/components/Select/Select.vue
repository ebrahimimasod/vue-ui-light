<template>
	<v-popover
		ref="popover"
		position="bottom-start"
		content-width
		offset="8"
		:target-class="wrapperClasses"
		:disabled="disabled"
		@open="openPoppover"
		@close="closePoppover"
	>
		<template #target>
			<div :class="containerClasses">
				<div :class="selectWrapper">
					<span
						v-if="imageLeft"
						:class="[$style.imageLeft, iconClasses]"
					>
						<img :src="model && model[0]?.image ? model[0]?.image : imageLeft">
					</span>
					<span
						v-if="iconLeft"
						:class="[$style.iconLeft, iconClasses]"
					>
						<v-Icon
							:name="model && model[0]?.icon ? model[0]?.icon : iconLeft"
							:disabled="disabled"
							size="16"
						/>
					</span>
					<label
						v-if="label"
						:class="labelClasses"
						:for="id"
					>
						{{ label }}
					</label>
					<input
						:id="id"
						:class="selectClasses"
						type="text"
						:placeholder="!label ? placeholder : ''"
						:name="name"
						:disabled="disabled"
						:value="inputValue"
						readonly
					>
					<span
						v-if="model && hasClear && !!model.length"
						:class="[$style.iconClear, iconClasses]"
						@click.stop="model = []"
					>
						<v-Icon
							name="close"
							size="13"
						/>
					</span>
					<span :class="[$style.iconRight, iconClasses]">
						<v-Icon
							:name="up ? 'chevron-up' : 'chevron-down'"
							:disabled="disabled"
							size="13"
						/>
					</span>
				</div>
				<span
					v-if="helper"
					:class="$style.helper"
				>
					{{ helper }}
				</span>
				<!-- @slot helper -->
				<slot name="helper" />
			</div>
		</template>
		<template #content>
			<div :class="$style.dropdown">
				<div
					v-if="hasSearch"
					class="select-search"
				>
					<input
						v-model="search"
						type="text"
						:class="$style.searchInput"
						placeholder="Search"
					>
				</div>
				<!-- List mode with grouped options -->
				<template v-if="isGrouped && currentGroups">
					<v-select-list
						v-for="(group, index) in currentGroups"
						:key="index"
						:label="group.label"
						:divide="group.divide"
						:selected="Array.from(model ? model : '')"
						:options="group.options"
						:state="state"
						@select="onSelect"
					/>
				</template>
				<!-- List mode-->
				<template v-else-if="currentOptions">
					<v-select-list
						:state="state"
						:selected="Array.from(model ? model : '')"
						:options="currentOptions"
						@select="onSelect"
					/>
				</template>
			</div>
		</template>
	</v-popover>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VIcon, VInput, VPopover } from '@/components';
import { generateId } from '@/utils';
import VSelectList from './SelectList.vue';

/**
 * @displayName Select
 */
export interface SelectOption {
	title: string;
	value: string;
	icon?: string;
	caption?: string;
	image?: string;
}

export interface SelectGroup {
	label?: string;
	divide?: boolean;
	options: SelectOption[];
}

export default defineComponent({
	name: 'VSelect',
	components: {
		VSelectList,
		VIcon,
		VInput,
		VPopover,
	},
	props: {
		/**
         * Select's label. will be placed inside input tag`.
         */
		label: {
			type: String,
		},
		/**
         * Select's dropdown mode. defaults to use list mode.
         * @default 'list'
         */
		mode: {
			type: String as PropType<'list'>,
			default: 'list',
		},
		/**
         * An array of options to render in dropdown.
         */
		options: {
			type: Array as PropType<SelectOption[]>,
		},
		/**
         * An array of options groups to render in dropdown.
         */
		groups: {
			type: Array as PropType<SelectGroup[]>,
		},
		/**
         * html input's name attribute.
         */
		name: {
			type: String,
		},
		/**
         * Disabled state.
         */
		disabled: {
			type: Boolean,
		},
		/**
         * v-model's value.
         */
		modelValue: {
			type: [String, Array, Object],
			required: true,
		},
		/**
         * Multi select mode.
         */
		multi: {
			type: Boolean,
		},
		/**
         * Whether to show search box in dropdown.
         */
		hasSearch: {
			type: Boolean,
		},
		/**
         * Whether to show clear select value.
         */
		hasClear: {
			type: Boolean,
		},
		/**
         * Select's state variant.
         * @values danger, warning, success , tertiary
         */
		state: {
			type: String as PropType<'danger' | 'warning' | 'success' | 'tertiary'>,
		},
		/**
         * A supported icon name to put on the left side of the select.
         */
		iconLeft: {
			type: String,
		},
		/**
         * A image url to put on the left side of the select.
         */
		imageLeft: {
			type: String,
		},
		/**
         * Select's helper text.
         */
		helper: {
			type: String,
		},
		/**
         * fluid mode which makes input full-width and disable min-width.
         */
		fluid: {
			type: Boolean,
		},
	},
	emits: ['update:modelValue', 'close', 'open'],
	data() {
		return {
			id: String(generateId()),
			search: '',
			up: false,
			stateClasses: {
				success: this.$style.success,
				danger: this.$style.danger,
				warning: this.$style.warning,
				tertiary: this.$style.tertiary,
			},
		};
	},
	computed: {
		isGrouped(): boolean {
			return !!this.groups;
		},
		isMultiple(): boolean {
			return this.multi;
		},
		model: {
			get(): any {
				return this.modelValue;
			},
			set(value: string | string[]) {
				this.$emit('update:modelValue', value);
			},
		},
		inputValue(): string {
			const labels = [];
			let valueLabel = null;
			if (this.model && !!this.model.length) {
				valueLabel = this.isMultiple ? this.model.length : this.findOptionByValue(this.model).title;
			}
			if (valueLabel) {
				labels.push(this.isMultiple ? `Selected (${valueLabel})` : valueLabel);
			} else {
				labels.push('');
			}

			return labels.join(' ');
		},
		wrapperClasses(): string[] {
			const classNames = [''];
			if (this.fluid) {
				classNames.push(this.$style.fluid);
			}
			return classNames;
		},
		containerClasses(): string[] {
			const classNames = [this.$style.wrapper];
			if (this.fluid) {
				classNames.push(this.$style.fluid);
			}
			if (this.disabled) {
				classNames.push('disabled');
			}
			return classNames;
		},
		selectWrapper(): string[] {
			const classNames = [this.$style.selectWrapper];
			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			return classNames;
		},
		labelClasses(): string[] {
			const classNames = [this.$style.label];

			if (this.model && this.model.length) {
				classNames.push(this.$style.up);
			}
			if (this.up) {
				classNames.push(this.$style.labelUp);
			}
			if (this.state) {
				classNames.push(this.stateClasses[this.state]);
			}
			if (this.iconLeft || this.imageLeft) {
				classNames.push(this.$style.margin);
			}
			return classNames;
		},
		selectClasses(): string[] {
			const classNames = [this.$style.select, this.$style.marginRight];

			if (this.state) {
				classNames.push(this.stateClasses[this.state]);
			}

			if (this.iconLeft || this.imageLeft) {
				classNames.push(this.$style.marginLeft);
			}

			if (!this.label) {
				classNames.push(this.$style.noLable);
			}

			return classNames;
		},
		iconClasses(): string[] {
			const classNames = [this.$style.icon];
			if (this.state) {
				classNames.push(this.stateClasses[this.state]);
			}
			if (this.disabled) {
				classNames.push('disabled');
			}
			if (this.up) {
				classNames.push(this.$style.iconUp);
			}
			if (this.state) {
				classNames.push(this.stateClasses[this.state]);
			}
			return classNames;
		},
		currentOptions(): SelectOption[] | void {
			return this.search ? this.options?.filter(this.searchOptions) : this.options;
		},
		currentGroups(): SelectGroup[] | void {
			return this.search ? this.groups?.filter(this.searchGroups) : this.groups;
		},
	},
	mounted() {
		if (!Array.isArray(this.model)) {
			this.model = [];
		}
	},
	methods: {
		openPoppover() {
			this.up = true;
			this.$emit('open');
		},
		closePoppover() {
			this.up = false;
			this.$emit('close');
		},
		onClose() {
			const popover = this.$refs.popover as any;
			popover.close();
		},
		onSelect(value: string) {
			if (this.isMultiple) {
				if (this.model?.includes(value)) {
					this.model = this.model.filter((item: string) => item !== value);
				} else {
					this.model = [...this.model, value];
				}
			} else {
				this.model = [value];
				this.onClose();
			}
		},
		findOptionByValue(value: SelectOption | SelectOption[]): SelectOption {
			let key = (null as unknown) as SelectOption;
			key = Array.isArray(value) ? value[0] : value;
			const options: SelectOption[] = this.groups ? this.groups.flatMap((group) => group.options) : this.options!;
			return options.find((opt) => opt.value === key.value)!;
		},
		searchOptions(option: SelectOption) {
			return option.title.toLowerCase().includes(this.search.toLowerCase());
		},
		searchGroups(group: SelectGroup) {
			// TODO: this method is a WIP.
			return group.options.some(this.searchOptions);
			// return group;
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .wrapper {
        @apply inline-block;
        min-width: 330px;
        min-height: 56px;
    }

    .fluid {
        @apply block w-full;
        min-width: unset;
        width: unset;
    }

    .selectWrapper {
        @apply relative;
    }

    .select {
        @apply pt-3 px-8 h-14
		bg-white placeholder-neutral-200 text-neutral-800
		font-body text-sm font-bold
		border border-solid border-neutral-50 rounded-lg outline-none
		block w-full;
        line-height: 1.33;
        transition-duration: 0.2s;
        transition-property: border-color;
        text-overflow: ellipsis;
    }

    .select.noLable {
        @apply py-0;
    }

    /* Input States */
    .select.success {
        @apply border-success-700;
    }
    .select.success:hover {
        @apply border-success-500 !important;
    }
    .select.success:focus {
        @apply border-success-700 !important;
    }
    .select.danger {
        @apply border-danger-700;
    }
    .select.danger:hover {
        @apply border-danger-500 !important;
    }
    .select.danger:focus {
        @apply border-danger-700 !important;
    }
    .select.warning {
        @apply border-warning-700;
    }
    .select.warning:hover {
        @apply border-warning-500 !important;
    }
    .select.warning:focus {
        @apply border-warning-700 !important;
    }
    .select.tertiary {
        @apply border-tertiary-700;
    }
    .select.tertiary:hover {
        @apply border-tertiary-500 !important;
    }
    .select.tertiary:focus {
        @apply border-tertiary-700 !important;
    }

    .select:hover {
        @apply border border-primary-500;
    }
    .selectWrapper:hover .icon i {
        @apply text-primary-500 !important;
    }
    .selectWrapper.disabled:hover .icon i {
        @apply text-neutral-100 !important;
    }
    .selectWrapper:hover .icon.success i {
        @apply text-success-500 !important;
    }
    .selectWrapper:hover .icon.danger i {
        @apply text-danger-500 !important;
    }
    .selectWrapper:hover .icon.tertiary i {
        @apply text-tertiary-500 !important;
    }

    .select:focus {
        @apply border-2 border-primary-700;
    }

    .select:disabled,
    .select.disabled {
        @apply bg-neutral-25 border-neutral-50 text-neutral-200 cursor-not-allowed;
    }

    .helper {
        @apply mt-1 ml-1 text-xs font-semibold text-neutral-200 inline-block;
        line-height: 1.45;
    }

    .label {
        @apply absolute font-body font-medium text-neutral-200;
        transform: translateY(-45%);
        top: 50%;
        left: 27px;
        transition: transform 100ms ease, font-size 100ms ease;
    }
    .label.margin {
        left: 49px;
    }

    .labelUp {
        @apply font-semibold text-primary-700 !important;
    }
    .label.success {
        @apply text-success-700 !important;
    }
    .label.danger {
        @apply text-danger-700 !important;
    }
    .label.warning {
        @apply text-warning-700 !important;
    }
    .label.tertiary {
        @apply text-tertiary-700 !important;
    }

    .up {
        @apply text-xs mb-4 pb-0.5;
        transform: translateY(-110%);
        top: 50%;
        left: 34px;
    }

    .marginLeft {
        @apply pl-12 !important;
    }

    .marginRight {
        @apply pr-10 !important;
    }

    .icon {
        @apply absolute align-middle text-neutral-200;
    }

    .iconUp {
        @apply text-primary-700;
    }
    .icon.success {
        @apply text-success-700;
    }
    .icon.danger {
        @apply text-danger-700;
    }
    .icon.warning {
        @apply text-warning-700;
    }
    .icon.tertiary {
        @apply text-tertiary-700;
    }

    .icon.disabled {
        @apply text-neutral-200;
    }

    .upIcon {
        @apply text-primary-400 !important;
    }

    .iconRight {
        transform: translateY(-50%);
        top: 50%;
        right: 20px;
    }

    .iconClear {
        @apply cursor-pointer transform rotate-45;
        transform: translateY(-50%);
        top: 50%;
        right: 40px;
    }

    .iconLeft {
        transform: translateY(-50%);
        top: 50%;
        left: 20px;
    }

    .imageLeft {
        transform: translateY(-50%);
        top: 53%;
        left: 10px;
    }

    .imageLeft img {
        @apply rounded-xl h-7 w-7;
    }

    .dropdown {
        @apply inline-block relative bg-white z-50 w-full p-4 m-0 overflow-auto;
        min-width: 240px;
        max-height: 380px;
        border-radius: 16px;
        box-shadow: 0px 8px 12px rgba(85, 85, 85, 0.08), 0px 4px 48px rgba(85, 85, 85, 0.08);
    }
    .select-search {
        @apply px-3 pb-4 pt-2;
    }

    .selectWrapper.disabled {
        @apply pointer-events-none cursor-not-allowed;
    }
    .select:disabled {
        @apply text-neutral-70 cursor-not-allowed;
    }

    .fluid {
        @apply w-full;
    }

    .searchInput {
        @apply px-4 h-10 mb-2
		bg-white placeholder-neutral-200 text-neutral-600
		font-body text-sm
		border border-solid border-neutral-50 rounded-lg outline-none
		block w-full;
        line-height: 1.33;
        transition-duration: 0.1s;
        transition-property: border-color;
    }

    .searchInput:hover {
        @apply border border-neutral-100;
    }

    .searchInput:focus {
        @apply border-2 border-primary-100;
    }
}
</style>

<docs>
## Usage
```js
import { VSelect } from 'vue-ui-light';
```
>You must use this type of structure for render the select list correctly.
```ts
interface SelectOption {
    title: string;
    value: string;
    icon?: string;
    caption?: string;
    image?: string;
}

interface SelectGroup {
    label?: string;
    divide?: boolean;
    options: SelectOption[];
}
```
## Basic

<example min-height="550" :modelData="modelData">
<template #preview="{ data }">
	<v-row class="flex flex-row gap-8">
		<v-select :model-value="modelData ? modelData : ''"
			:options="[
			{
			    title: 'Today',
			    caption: 'email1@email.com',
			    value: '1',
			},
			{
			    title: 'Yesterday',
			    caption: 'email2@email.com',
			    value: '2',
			},
			{
			    title: 'Current week',
			    caption: 'email3@email.com',
			    value: '3',
			},
			{
			    title: 'Last 15 days',
			    caption: 'email4@email.com',
			    value: '4',
			},
            ]"
		label="Select Basic"
		@update:modelValue="modelData =  $event"
		/>
				<v-select :model-value="modelData ? modelData : ''"
				icon-left="description"
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
                    value: '1',
                },
                {
                    title: 'Yesterday',
                    caption: 'email2@email.com',
                    value: '2',
                },
                {
                    title: 'Current week',
                    caption: 'email3@email.com',
                    value: '3',
                },
                {
                    title: 'Last 15 days',
                    caption: 'email4@email.com',
                    value: '4',
                },
            ]"
			label="Select Icon"
			@update:modelValue="modelData =  $event"
			/>
			<v-select :model-value="modelData ? modelData : ''"
				image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:options='[
                        {
                            title: "Today",
                            caption: "email1@email.com",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            caption: "email2@email.com",
                            value: "2",
                        },
                        {
                            title: "Current week",
                            caption: "email3@email.com",
                            value: "3",
                        },
                    ]'
			label="Select Image"
			@update:modelValue="modelData =  $event"
			/>
			<v-row>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{modelData}}</div>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{data}}</div>
			</v-row>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select v-model="select" :options="Options" label="Select Basic"/>
<v-select v-model="select" :options="Options" label="Select Icon" icon-left="description" />
<v-select v-model="select" :options="Options" label="Select Image" :image-left="image" />

```
```ts
data() {
	return {
	    select: [],
		image : 'your image path'
		Options : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				value: '1',
			},
			...
		] as SelectOption[]
	}
}

```
</template>
</example>

## Icon/Image list

<example min-height="450" :modelData="modelData">
<template #preview="{ data }">
	<v-row class="flex flex-row gap-8">
		<v-select :model-value="modelData ? modelData : ''" icon-left="online"
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
					icon: 'description',
                    value: '1',
                },
                {
                    title: 'Yesterday',
                    caption: 'email1@email.com',
					icon: 'offline',
                    value: '2',
                },
                {
                    title: 'Monday',
                    caption: 'email1@email.com',
					icon: 'plus',
                    value: '3',
                },
                {
                    title: 'Friday',
                    caption: 'email1@email.com',
					icon: 'online',
                    value: '5',
                },
            ]"
			label="Select Basic"
			@update:modelValue="modelData =  $event"
			/>
			<v-select :model-value="modelData ? modelData  : []"
				image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:options='[
                        {
                            title: "Today",
                            caption: "email1@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            caption: "email2@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            value: "2",
                        },
                        {
                            title: "Current week",
                            caption: "email3@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/946.jpg",
                            value: "3",
                        },
                    ]'
			label="Select Image"
			@update:modelValue="modelData =  $event"
			/>
			<v-row>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{modelData}}</div>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{data}}</div>
			</v-row>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select v-model="select" :options="Options" label="Icon list" icon-left="online" />
<v-select v-model="select" :options="OptionsImage" label="Image list" :image-left="image" />

```
```ts
data() {
	return {
	    select: [],
		image : 'your image path'
		Options : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				icon: 'offline', //and  online
				value: '1',
			},
			...
		] as SelectOption[]
		OptionsImage : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				image: "Your image path",
				value: '1',
			},
			...
		] as SelectOption[]
	}
}

```
</template>
</example>

## States

<example min-height="550" :modelData="modelData">
<template #preview="{ data }">
	<v-row class="flex flex-row gap-8">
	<v-select :model-value="modelData ? modelData : ''" icon-left="description" disabled
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
					icon: 'online',
                    value: '1',
                },
            ]"
			label="Select Disabled"
			@update:modelValue="modelData =  $event"
			/>
			<v-select :model-value="modelData ? modelData : ''" state="tertiary"
				image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:options='[
                        {
                            title: "Today",
                            caption: "email1@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            caption: "email2@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            value: "2",
                        },
                        {
                            title: "Current week",
                            caption: "email3@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/946.jpg",
                            value: "3",
                        },
                    ]'
			label="Select Tertiary"
			@update:modelValue="modelData =  $event"
			/>
		<v-select :model-value="modelData ? modelData : ''" icon-left="online" state="danger"
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
					icon: 'online',
                    value: '1',
                },
                {
                    title: 'Yesterday',
                    caption: 'email2@email.com',
					icon: 'offline',
                    value: '2',
                },
                {
                    title: 'Current week',
                    caption: 'email3@email.com',
					icon: 'offline',
                    value: '3',
                },
                {
                    title: 'Last 15 days',
                    caption: 'email4@email.com',
					icon: 'online',
                    value: '4',
                },
            ]"
			label="Select Danger"
			@update:modelValue="modelData =  $event"
			/>
			<v-select :model-value="modelData ? modelData : ''" state="success"
				image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:options='[
                        {
                            title: "Today",
                            caption: "email1@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            caption: "email2@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            value: "2",
                        },
                        {
                            title: "Current week",
                            caption: "email3@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/946.jpg",
                            value: "3",
                        },
                    ]'
			label="Select Success"
			@update:modelValue="modelData =  $event"
			/>
			<v-row>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{modelData}}</div>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{data}}</div>
			</v-row>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select v-model="select" :options="Options" label="Select Disabled" icon-left="description" disabled />
<v-select v-model="select" :options="OptionsImage" label="Tertiary list" :image-left="image"  state="tertiary"/>
<v-select v-model="select" :options="Options" label="Danger list" icon-left="online" state="danger" />
<v-select v-model="select" :options="OptionsImage" label="Success list" :image-left="image"  state="success"/>

```
```ts
data() {
	return {
	    select: [],
		image : 'your image path'
		Options : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				icon: 'offline', //and  online
				value: '1',
			},
			...
		] as SelectOption[]
		OptionsImage : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				image: "Your image path",
				value: '1',
			},
			...
		] as SelectOption[]
	}
}

```
</template>
</example>


## Group header/divider

<example min-height="450">
<template #preview>
	<v-row class="flex flex-row gap-8">
			<v-select v-model="dataImage" state="tertiary"
				image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:groups='[
                {
                    label: "",
                    options: [
                        {
                            title: "Today",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            caption: "email1@email.com",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            caption: "email2@email.com",
                            value: "2",
                        },
                    ],
                },
                {
                    label: "Section header 2",
                    options: [
                        {
                            title: "Last 15 days",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg",
                            caption: "email4@email.com",
                            value: "4",
                        },
                        {
                            title: "Last 30 days",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/84.jpg",
                            caption: "email5@email.com",
                            value: "5",
                        },
                    ],
                },
            ]'
			label="Group Header"
			@update:modelValue="dataImage =  $event"
			/>
			<v-select v-model="dataDivid"
				:groups='[
                {
                    divide: false,
                    options: [
                        {
                            title: "Today",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            caption: "email1@email.com",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            caption: "email2@email.com",
                            value: "2",
                        },
                    ],
                },
                {
                    divide: true,
                    options: [
                        {
                            title: "Last 15 days",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg",
                            caption: "email4@email.com",
                            value: "4",
                        },
                    ],
                },
            ]'
			label="Group Divider"
			@update:modelValue="dataDivid =  $event"
			/>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select v-model="select" :groups="groupOptions"  label="Group Header" :image-left="image"  state="tertiary"/>
<v-select v-model="select" :groups="groupOptionVDivider" label="Group Divider" />

```
```ts
data() {
	return {
	    select: [],
		image : 'your image path',
		groupOptions : [
				{
                    label: null,
                    options: [
                        {
                            title: "Last 15 days",
                            image: "Your image path",
                            caption: "email4@email.com",
                            value: "4",
                        },
						...
                    ],
                },
				{
                    label: "Section header 2",
                    options: [
                        {
                            title: "Last 15 days",
                            image: "Your image path",
                            caption: "email4@email.com",
                            value: "4",
                        },
						...
                    ],
                },
			...
		] as SelectGroup ,

		groupOptionVDivider : [
				{
                    divide: false,
                    options: [
                        {
                            title: "Last 15 days",
                            image: "Your image path",
                            caption: "email4@email.com",
                            value: "4",
                        },
						...
                    ],
                },
				{
                    divide: true,
                    options: [
                        {
                            title: "Last 15 days",
                            image: "Your image path",
                            caption: "email4@email.com",
                            value: "4",
                        },
						...
                    ],
                },
			...
		] as SelectGroup ,

	}
}

```
</template>
</example>


## Has search
<example min-height="400" :modelData="modelData">
<template #preview="{ data }">
	<v-row class="flex flex-row gap-8">
	<code>Search functionality is on " title " field</code>
	<v-select v-model="dataSearch" has-search icon-left="online"
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
					icon: 'description',
                    value: '1',
                },
                {
                    title: 'Yesterday',
                    caption: 'email1@email.com',
					icon: 'offline',
                    value: '2',
                },
                {
                    title: 'Monday',
                    caption: 'email1@email.com',
					icon: 'plus',
                    value: '3',
                },
                {
                    title: 'Friday',
                    caption: 'email1@email.com',
					icon: 'online',
                    value: '5',
                },
            ]"
			label="Search list"
			@update:modelValue="dataSearch =  $event"
			/>
			<code>Clear functionality not work correctly only in docgn because lack of reactivity</code>
			<v-select :model-value="modelData ? modelData : ''" has-clear icon-left="offline"
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
					icon: 'offline',
                    value: '1',
                },
                {
                    title: 'Yesterday',
                    caption: 'email1@email.com',
					icon: 'offline',
                    value: '2',
                },
            ]"
			label="Clear list"
			@update:modelValue="modelData =  $event"
			/>
			<v-row>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{modelData}}</div>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{data}}</div>
			</v-row>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select v-model="select" :options="Options" has-search label="Search list" icon-left="online" />
<v-select v-model="select" :options="Options" has-clear label="Clear list" icon-left="offline" />
```
```ts
data() {
	return {
	    select: [],
		image : 'your image path'
		Options : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				icon: 'offline', //and  online
				value: '1',
			},
			...
		] as SelectOption[]
	}
}

```
</template>
</example>


## Multi mode
<example min-height="400" :modelData="modelData">
<template #preview="{ data }">
	<v-row class="flex flex-row gap-8">
	<code>Clear Selection not work correctly only in docgn because lack of reactivity</code>
	<v-select multi :model-value="modelData ? modelData : ''"  image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:options='[
    					{
                            title: "Today",
                            caption: "email1@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            caption: "email2@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            value: "2",
                        },
                        {
                            title: "Current week",
                            caption: "email3@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/946.jpg",
                            value: "3",
                        },
            ]'
			label="Multi select"
			@update:modelValue="modelData =  $event"
			/>
			<v-row>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{modelData}}</div>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{data}}</div>
			</v-row>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select v-model="select" :options="Options" multi  label="Multi select" :image-left="image" />
```
```ts
data() {
	return {
	    select: [],
		image : 'your image path'
		Options : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				image: 'your image path',
				value: '1',
			},
			...
		] as SelectOption[]
	}
}

```
</template>
</example>


</docs>
