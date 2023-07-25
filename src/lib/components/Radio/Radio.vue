<template>
	<div :class="$style.wrapper">
		<input
			:id="id"
			v-model="model"
			:value="value"
			type="radio"
			:class="classes"
			:name="name"
			:disabled="disabled"
			:readonly="readonly"
		>
		<label
			v-if="hasLabel || hasCaption"
			:for="id"
			:class="labelWrapper"
		>
			<span
				v-if="hasLabel"
			>
				<slot
					v-if="$slots.label"
					name="label"
				/>
				<span
					v-else
					:class="labelClasses"
				> {{ label }} </span>
			</span>
			<span
				v-if="hasCaption"
			>
				<slot
					v-if="$slots.caption"
					name="caption"
				/>
				<span
					v-else
					:class="captionClasses"
				> {{ caption }} </span>
			</span>
		</label>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { generateId } from '@/utils';

/**
 * @displayName Radio
 */
export default defineComponent({
	name: 'VRadio',
	props: {
		/**
         * Radio's label string.
         */
		label: {
			type: String,
		},
		/**
         * Radio's caption string.
         */
		caption: {
			type: String,
		},
		/**
         * Radio's static defined value.
         * @value
         */
		value: {
			type: [Number, Boolean, String],
		},
		/**
         * v-model's value.
         * @model
         */
		modelValue: {
			type: [Number, Boolean],
		},
		/**
         * Indicate Error state.
         */
		error: {
			type: Boolean,
		},
		/**
         * Radio's name attribute.
         */
		name: {
			type: String,
		},
		/**
         * Radio's disabled attribute.
         */
		disabled: {
			type: Boolean,
		},
		/**
         * Radio's readonlt attribute.
         */
		readonly: {
			type: Boolean,
		},
		/**
         * Radio's size.
         * @values small, medium, large.
         */
		size: {
			type: String,
			default: 'medium',
		},
		/**
         * Radio's custom classes.
         */
		radioClass: {
			type: String,
			default: '',
		},
	},
	emits: ['update:modelValue'],
	data() {
		return {
			id: generateId(),
		};
	},
	computed: {
		hasLabel(): Boolean {
			return !!this.$slots.label || !!this.label;
		},
		hasCaption(): Boolean {
			return !!this.$slots.caption || !!this.caption;
		},
		classes(): Array<string> {
			const classNames = [this.$style.radio];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.radioClass) {
				classNames.push(this.radioClass);
			}
			if (this.error) {
				classNames.push(this.$style.error);
			}
			return classNames;
		},
		labelWrapper(): Array<string> {
			const classNames = [this.$style.labelWrapper];
			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			return classNames;
		},
		labelClasses(): Array<string> {
			const classNames = [this.$style.label];
			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			return classNames;
		},
		captionClasses(): Array<string> {
			const classNames = [this.$style.caption];
			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			return classNames;
		},
		model: {
			get(): boolean | number | void {
				return this.modelValue;
			},
			set(value: string) {
				/**
                 * Model's update event.
                 * @event update:modelValue
                 * @property {boolean} newValue - new radio value.
                 */
				this.$emit('update:modelValue', value);
			},
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .wrapper {
        @apply flex items-center;
    }
    .labelWrapper {
        @apply flex flex-col flex-nowrap;
    }
    .labelWrapper.disabled {
        @apply opacity-40 cursor-not-allowed;
    }
    .label {
        @apply text-neutral-800 font-bold text-sm ml-3.5 align-middle cursor-pointer;
    }
    .label.disabled {
        @apply cursor-not-allowed;
    }
    .caption {
        @apply text-neutral-200 font-semibold text-xs ml-3.5 align-middle cursor-pointer;
    }
    .caption.disabled {
        @apply cursor-not-allowed;
    }
    .radio {
        @apply appearance-none bg-white border-neutral-50 cursor-pointer border-solid rounded-full m-0 outline-none align-middle;
        border-width: 2px;
        height: 24px;
        width: 24px;
        transition: 0.2s;
    }
    .radio.small {
        height: 20px;
        width: 20px;
    }
    .radio.medium {
        height: 24px;
        width: 24px;
    }
    .radio.large {
        height: 32px;
        width: 32px;
    }
    .radio:focus {
        @apply outline-none;
    }
    .radio:hover {
        @apply border-blue-700;
    }
    .radio:disabled:hover {
        @apply border-neutral-50;
    }
    .radio.error {
        @apply border-red-500 bg-red-25;
    }
    .radio:active {
        @apply border-blue-700 outline-none;
    }
    .radio:disabled {
        @apply opacity-40 cursor-not-allowed;
    }
    /* //large */
    .radio.large:checked {
        @apply border-8 border-blue-700 relative outline-none;
    }
    .radio.large:checked:focus {
        @apply border-8;
    }
    .radio.large:checked:hover {
        @apply border-8;
    }
    .radio.large.error:checked {
        @apply border-8 border-red-700;
    }
    .radio.large:checked:active::after {
        @apply border-8;
    }
    .radio.large:checked:active {
        @apply border-8;
    }
    /* //small */
    .radio.small:checked {
        @apply border-blue-700 relative outline-none;
        border-width: 5px;
    }
    .radio.small:checked:focus {
        border-width: 5px;
    }
    .radio.small:checked:hover {
        border-width: 5px;
    }
    .radio.small.error:checked {
        @apply border-red-700;
        border-width: 5px;
    }
    .radio.small:checked:active::after {
        border-width: 5px;
    }
    .radio.small:checked:active {
        border-width: 5px;
    }
    /* //medium */
    .radio:checked {
        @apply border-blue-700 relative outline-none;
        border-width: 6px;
    }
    .radio:checked:focus {
        border-width: 6px;
    }
    .radio:checked:hover {
        border-width: 6px;
    }
    .radio.error:checked {
        @apply border-red-700;
        border-width: 6px;
    }
    .radio:checked:active::after {
        border-width: 6px;
    }
    .radio:checked:active {
        border-width: 6px;
    }
    /* disabled */
    .radio:checked:disabled {
        @apply opacity-40 cursor-not-allowed;
    }
    .radio:checked:disabled::after {
        @apply opacity-40 cursor-not-allowed;
    }
    .radio:checked:disabled:hover {
        @apply border-blue-700 opacity-40 cursor-not-allowed;
    }
}
</style>

<docs>
## Usage
```js
import { VRadio } from 'vue-ui-light';
```
<br/>
<br/>

### Basic Radio

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-radio value="1" />
	</div>
	<div>
	    <v-radio value="2" model-value="2" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-radio />
<v-radio :model-value="true" />
```
</template>
</example>


### Label/Caption

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-radio value="1" label="Label" />
	</div>
	<div>
	    <v-radio value="2" caption="Caption" />
	</div>
	<div>
	    <v-radio value="3" label="Label" caption="Caption" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-radio label="Label" />
<v-radio caption="Caption" />
<v-radio label="Label" caption="Caption" />
```
</template>
</example>


### States
<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-radio error caption="error" label="Error" />
	</div>
	<div>
	    <v-radio disabled caption="Disabled"  label="disabled" />
	</div>
	<div>
	    <v-radio :model-value="1" value="1" caption="Checked" label="Checked" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-radio caption="error" label="Error" />
<v-radio caption="Disabled"  label="disabled" />
<v-radio :v-model="1" value="1" caption="Checked" label="Checked" />
```
</template>
</example>


### Sizes
<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-radio size="small" caption="small" label="Small" />
	</div>
	<div>
	    <v-radio size="medium" caption="medium" label="Medium" />
	</div>
	<div>
	    <v-radio size="large" caption="large" label="Large" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-radio size="small" caption="small" label="Small" />
<v-radio size="medium" caption="medium" label="Medium" />
<v-radio size="large" caption="large" label="Large" />
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
