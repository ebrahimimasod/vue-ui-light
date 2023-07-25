<template>
	<v-row :class="$style.wrapper">
		<v-col
			v-for="option in options"
			:key="option.value"
			v-bind="columnProps"
			:class="$style.container"
		>
			<v-button
				v-bind="buttonProps"
				:class="[$style.segment, iVSelected(option.value) ? selectedClass : '']"
				:icon-left="option.icon ? option.icon : iVSelected(option.value) ? activeIcon : inactiveIcon"
				:icon-only="iconOnly"
				:size="size"
				@click="onSelect(option)"
			>
				{{ !iconOnly ? option.label : "" }}
			</v-button>
		</v-col>
	</v-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VButton, VRow, VCol } from '@/components';

type ModelType = string | number;

interface Option {
	value: ModelType;
	name: string;
	icon: string
}

export default defineComponent({
	name: 'VSegment',
	components: {
		VRow,
		VCol,
		VButton,
	},
	props: {
		/**
         * v-model's value.
         * @model
         */
		modelValue: {
			type: [String, Number] as PropType<ModelType>,
			required: true,
		},
		/**
         * An array of options used to render the buttons.
         */
		options: {
			type: Array as PropType<Option[]>,
		},
		/**
         * An object containing support CButton's props to get passed to it.
         */
		buttonProps: {
			type: Object,
		},
		/**
         * An object containing support CCol's props to get passed to it.
         */
		columnProps: {
			type: Object,
		},
		/**
         * An icon name to be used on active button.
         */
		activeIcon: {
			type: String,
		},
		/**
         * An icon name to be used on inactive buttons.
         */
		inactiveIcon: {
			type: String,
		},
		/**
         * Just show icon if this.icon exist
         */
		iconOnly: {
			type: Boolean,
			default: false,
		},
		/**
         * Segment's different sizes.
         * @values sm, md, lg
         */ size: {
			type: String,
			default: 'md',
		},
		/**
         * Button's different colors and styles.
         * @values neutral, primary, secondary, tertiary, danger, warning, info, success, link, orange
         */
		variant: {
			type: String,
			default: 'primary',
		},
	},
	emits: ['update:modelValue'],
	computed: {
		model: {
			get(): ModelType {
				return this.modelValue;
			},
			set(newVal: string | number) {
				/**
                 * Model's update event.
                 * @event update:modelValue
                 * @property {String, Number} newValue - new value.
                 */
				this.$emit('update:modelValue', newVal);
			},
		},
		selectedClass(): Array<string> {
			const classNames = [this.$style.selected];
			if (this.variant) {
				classNames.push(this.$style[this.variant]);
			}
			return classNames;
		},
	},
	methods: {
		onSelect(option: Option) {
			this.model = option.value;
		},
		iVSelected(value: string) {
			return this.model === value;
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .wrapper {
        @apply bg-neutral-25 rounded-xl w-max !important;
    }
    .segment {
        @apply bg-transparent text-neutral-800 border border-transparent border-solid text-sm whitespace-nowrap;
        @apply font-bold !important;
    }

    .segment:hover:not(.selected),
    .segment.hover {
        @apply bg-transparent;
    }
    .segment:active:not(.selected),
    .segment.active {
        @apply bg-transparent outline-none ring-0;
    }
    .segment:disabled,
    .segment.disabled {
        @apply bg-neutral-100 cursor-not-allowed pointer-events-none;
    }

    .segment.selected {
        @apply text-white outline-none ring-0 rounded-xl;
    }

    .segment.neutral {
        @apply bg-neutral-700;
    }

    .segment.primary {
        @apply bg-primary-700;
    }

    .segment.secondary {
        @apply bg-secondary-700;
    }

    .segment.tertiary {
        @apply bg-tertiary-700;
    }

    .segment.success {
        @apply bg-success-700;
    }

    .segment.info {
        @apply bg-info-700;
    }

    .segment.danger {
        @apply bg-danger-700;
    }

    .segment.warning {
        @apply bg-warning-700;
    }

    .segment.orange {
        @apply bg-orange-700;
    }
}
</style>

<docs>
## Usage

```js
import { VSegment } from "vue-ui-light";
```

<br/>
<br/>

### Default

<example :modelData="modelData">
<template #preview="{ data }">
<div class="mt-8">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			:options="[{
					label: 'Label',
					value: '1',
				},
				{
					label: 'Label',
					value: '2',
				},{
					label: 'Label',
					value: '3',
				}]"
	/>
</div>
</template>
<template v-slot:source>

```html
	<v-segment
			v-model="model"
			:options="options"
	/>
```
```js
	model: '1',
	options: [{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}],
```
</template>
</example>


### With Icon
Use `Icons` valid names for active-icon and inactive-icon.

<example :modelData="modelData">
<template #preview="{ data }">
<div class="flex justify-around space-x-1">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			:options="[{
			label: 'Label',
			value: '1',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '2',
			icon: 'plus'
		},
		{
			label: 'Label',
			value: '3',
			icon: 'offline'
		}]"
	/>
</div>
</template>
<template v-slot:source>

```html
	<v-segment
			v-model="model"
			:options="options"
	/>
```
```js
	model: '1',
	options: [{
			label: 'Label',
			value: '1',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '2',
			icon: 'plus'
		},
		{
			label: 'Label',
			value: '3',
			icon: 'offline'
		}],
```
</template>
</example>


### Icon only
Use `Icons` valid names for active-icon and inactive-icon.

<example :modelData="modelData">
<template #preview="{ data }">
<div class="flex justify-around space-x-1">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			icon-only
			:options="[{
			label: 'Label',
			value: '1',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '2',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '3',
			icon: 'online'
		}]"
	/>
</div>
</template>
<template v-slot:source>

```html
	<v-segment
			v-model="model"
			:options="options"
			icon-only
	/>
```
```js
	model: '1',
	options: [{
			label: 'Label',
			value: '1',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '2',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '3',
			icon: 'online'
		}],
```
</template>
</example>


### With Interactive Icon
Use `Icons` valid names for active-icon and inactive-icon.

<example :modelData="modelData">
<template #preview="{ data }">
<div class="flex justify-around space-x-1">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			:options="[{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}]"
			active-icon="plus"
			inactive-icon="minus"
	/>
</div>
</template>
<template v-slot:source>

```html
	<v-segment
			v-model="model"
			:options="options"
			active-icon="plus"
			inactive-icon="minus"
	/>
```
```js
	model: '1',
	options: [{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}],
```
</template>
</example>



### Size and Variant
Use `Icons` valid names for active-icon and inactive-icon.

<example :modelData="modelData">
<template #preview="{ data }">
<div class="mb-8">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			size="sm"
			:options="[{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}]"
			active-icon="online"
			inactive-icon="online"
	/>
</div>
<div class="mb-8">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			variant="tertiary"
			size="md"
			:options="[{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}]"
			active-icon="online"
			inactive-icon="online"
	/>
</div>
<div class="mb-8">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			variant="danger"
			size="lg"
			:options="[{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}]"
			active-icon="online"
			inactive-icon="online"
	/>
</div>
</template>
<template v-slot:source>

```html
	<v-segment
			v-model="model"
			variant="primary"
			:options="options"
			active-icon="online"
			inactive-icon="online"
	/>
	<v-segment
			v-model="model"
			variant="tertiary"
			:options="options"
			active-icon="online"
			inactive-icon="online"
	/>
	<v-segment
			v-model="model"
			variant="danger"
			:options="options"
			active-icon="online"
			inactive-icon="online"
	/>
```
```js
	model: '1',
	options: [{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}],
```
</template>
</example>

### With CustumProps
Use `v-button` and `v-col` defined props.

<example :modelData="modelData">
<template #preview="{ data }">
<div class="flex justify-around space-x-1">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			:options="[{
					label: 'Label',
					value: '1',
				},
				{
					label: 'Label',
					value: '2',
				}]"
			:button-props="{fluid: true}"
			:column-props="{xs: 'auto'}"
	/>
</div>
</template>
<template v-slot:source>

```html
	<v-segment
			v-model="model"
			:options="options"
			:button-props="{fluid: true}"
			:column-props="{xs: 'auto'}"
	/>
```
```js
	model: '1',
	options: [
		{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		}
	],
```
</template>
</example>
<br/>
<br/>


<hr/>
<br/>
</docs>
