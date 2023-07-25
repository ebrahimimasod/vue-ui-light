<template>
	<div :class="$style.wrapper">
		<input
			:id="id"
			v-model="model"
			type="checkbox"
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
 * @displayName Checkbox
 */
export default defineComponent({
	name: 'VCheckbox',
	props: {
		/**
         * Checkbox's label string.
         */
		label: {
			type: String,
		},
		/**
         * Checkbox's caption string.
         */
		caption: {
			type: String,
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
         * Checkbox's name attribute.
         */
		name: {
			type: String,
		},
		/**
         * Checkbox's disabled attribute.
         */
		disabled: {
			type: Boolean,
		},
		/**
         * Checkbox's readonlt attribute.
         */
		readonly: {
			type: Boolean,
		},
		/**
         * Checkbox's size.
         * @values small, medium, large.
         */
		size: {
			type: String,
			default: 'medium',
		},
		/**
         * Checkbox's custom classes.
         */
		checkboxClass: {
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
		hasLabel() : Boolean{
			return !!this.$slots.label || !!this.label;
		},
		hasCaption() : Boolean{
			return !!this.$slots.caption || !!this.caption;
		},
		classes(): Array<string> {
			const classNames = [this.$style.checkbox];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.checkboxClass) {
				classNames.push(this.checkboxClass);
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
                 * @property {boolean} newValue - new checkbox value.
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
    .checkbox {
        @apply appearance-none bg-white border-neutral-50 cursor-pointer border-solid rounded-md m-0 outline-none align-middle;
        border-width: 2px;
        height: 24px;
        width: 24px;
        transition: 0.2s;
    }
    .checkbox.small {
        height: 20px;
        width: 20px;
    }
    .checkbox.medium {
        height: 24px;
        width: 24px;
    }
    .checkbox.large {
        height: 32px;
        width: 32px;
    }
    .checkbox:focus {
        @apply outline-none;
    }
    .checkbox:hover {
        @apply border-blue-700;
    }
    .checkbox:disabled:hover {
        @apply border-neutral-50;
    }
    .checkbox.error {
        @apply border-red-500 bg-red-25;
    }
    .checkbox:active {
        @apply border-blue-700 outline-none;
    }
    .checkbox:disabled {
        @apply opacity-40 cursor-not-allowed;
    }

    .checkbox:checked {
        @apply bg-blue-700 border-blue-700 relative outline-none;
    }
    .checkbox:checked::after {
        @apply absolute;
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        width: 11px;
        height: 6px;
        border-left: 1px solid white;
        border-bottom: 1px solid white;
        border-radius: 0px;
        transform: rotate(-45deg);
    }
    .checkbox.large:checked::after {
        top: 8px;
        left: 7px;
        width: 14px;
        height: 7px;
    }
    .checkbox.small:checked::after {
        top: 4px;
        left: 4px;
        width: 9px;
        height: 5px;
    }
    .checkbox:checked:focus {
        @apply border-blue-700;
    }
    .checkbox:checked:hover {
        @apply bg-blue-700 border-blue-700;
    }
    .checkbox.error:checked {
        @apply border-red-700;
    }
    .checkbox:checked:active::after {
        @apply border-blue-700;
    }
    .checkbox:checked:active {
        @apply bg-blue-700 border-blue-700;
    }
    .checkbox:checked:disabled {
        @apply opacity-40 cursor-not-allowed;
    }
    .checkbox:checked:disabled::after {
        @apply opacity-40 cursor-not-allowed;
    }
}
</style>

<docs>
## Usage
```js
import { VCheckbox } from 'vue-ui-light';
```
<br/>
<br/>

### Basic Checkbox

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-checkbox />
	</div>
	<div>
	    <v-checkbox :model-value="true" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-checkbox />
<v-checkbox :model-value="true" />
```
</template>
</example>


### Label/Caption

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-checkbox label="Label" />
	</div>
	<div>
	    <v-checkbox caption="Caption" />
	</div>
	<div>
	    <v-checkbox label="Label" caption="Caption" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-checkbox label="Label" />
<v-checkbox caption="Caption" />
<v-checkbox label="Label" caption="Caption" />
```
</template>
</example>


### States
<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-checkbox error caption="error" label="Error" />
	</div>
	<div>
	    <v-checkbox disabled caption="Disabled"  label="disabled" />
	</div>
	<div>
	    <v-checkbox :model-value="true" caption="Checked" label="Checked" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-checkbox caption="error" label="Error" />
<v-checkbox caption="Disabled"  label="disabled" />
<v-checkbox :model-value="true" caption="Checked" label="Checked" />
```
</template>
</example>


### Sizes
<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-checkbox size="small" caption="small" label="Small" />
	</div>
	<div>
	    <v-checkbox size="medium" caption="medium" label="Medium" />
	</div>
	<div>
	    <v-checkbox size="large" caption="large" label="Large" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-checkbox size="small" caption="small" label="Small" />
<v-checkbox size="medium" caption="medium" label="Medium" />
<v-checkbox size="large" caption="large" label="Large" />
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
