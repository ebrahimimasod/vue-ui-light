<template>
	<div :class="containerClasses">
		<label
			v-if="label"
			:class="labelClasses"
			:for="id"
		>
			{{ label }}
		</label>
		<span
			v-if="limit"
			:class="limitClasses"
			:for="id"
		>
			{{ showLimit() }}
		</span>
		<textarea
			:id="id"
			:ref="id"
			v-model="model"
			:class="textareaClasses"
			:placeholder="!label ? placeholder : ''"
			:name="name"
			:rows="rows"
			:disabled="disabled"
			:maxlength="limit ? limit : 2000"
			:autocomplete="autoCompletion"
			@blur="up = false"
			@focus="up = true"
		/>
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

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { generateId } from '@/utils';

export default defineComponent({
	name: 'VTextarea',
	props: {
		/**
         * v-model's value.
         * @model
         */
		modelValue: {
			type: [String, Number],
		},
		/**
         * Textarea's placeholder.
         */
		placeholder: {
			type: String,
		},
		/**
         * Textarea's helper text.
         */
		helper: {
			type: String,
		},
		/**
         * Textarea's label.
         */
		label: {
			type: String,
		},
		/**
         * Textarea's Limit Character.
         */
		limit: {
			type: Number,
		},
		/**
         * Textarea's state variant.
         * @values danger, warning, success
         */
		state: {
			type: String as PropType<'danger' | 'warning' | 'success'>,
		},
		/**
         * Fluid mode which makes input full-width and disable its min-width.
         */
		fluid: {
			type: Boolean,
			default: false,
		},
		/**
         * Textarea's name attribute.
         */
		name: {
			type: String,
		},
		/**
         * Disabled mode.
         */
		disabled: {
			type: Boolean,
		},
		/**
         * Read only mode.
         */
		readonly: {
			type: Boolean,
		},
		/**
         * Textarea's dir attribute.
         */
		dir: {
			type: String,
		},
		/**
         * Textarea's hidden attribute.
         */
		hidden: {
			type: Boolean,
		},
		/**
         * Textarea's auto-complete attribute.
         */
		autoComplete: {
			type: Boolean,
			default: false,
		},
		/**
         * Textarea's rows attribute.
         */
		rows: {
			type: Number,
			default: 4,
		},
	},

	emits: ['update:modelValue'],

	data() {
		return {
			id: String(generateId()),
			up: false,
			stateClasses: {
				success: this.$style.success,
				danger: this.$style.danger,
				warning: this.$style.warning,
			},
		};
	},

	computed: {
		containerClasses(): string[] {
			const classNames = [this.$style.wrapper];
			if (this.fluid) {
				classNames.push(this.$style.fluid);
			}
			return classNames;
		},

		textareaClasses(): string[] {
			const classNames = [this.$style.textarea];
			if (this.state) {
				classNames.push(this.stateClasses[this.state]);
			}
			if (!this.label) {
				classNames.push(this.$style.noLable);
			}
			if (!this.limit) {
				classNames.push(this.$style.limited);
			}
			return classNames;
		},

		labelClasses(): string[] {
			const classNames = [this.$style.label];

			if (this.model || this.up) {
				classNames.push(this.$style.up);
			}
			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			return classNames;
		},

		limitClasses(): string[] {
			const classNames = [this.$style.limit];

			if (this.model || this.up) {
				classNames.push(this.$style.up);
			}
			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			return classNames;
		},

		autoCompletion(): string {
			return this.autoComplete ? 'on' : 'off';
		},

		model: {
			get(): string | number | void {
				return this.modelValue;
			},
			set(value: string | void) {
				/**
                 * v-model's update event.
                 * @event update:modelValue
                 * @property {string} newValue New model value
                 */
				this.$emit('update:modelValue', value);
			},
		},
	},

	methods: {
		showLimit(): string {
			if (this.model) {
				return `${String(this.model).length}/${this.limit}`;
			}
			return `0/${this.limit}`;

		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .wrapper {
        @apply inline-block relative;
        min-width: 340px;
    }

    .textarea {
        @apply py-9 pl-4 pr-4 w-full
		bg-white placeholder-neutral-200 text-neutral-800
		font-body text-sm font-bold
		border border-solid border-neutral-50 rounded-lg outline-none;
        transition-duration: 0.2s;
        transition-property: border-color, border-width;
    }

    .textarea.noLable {
        @apply py-4;
    }

    .textarea.limited {
        @apply pr-12 !important;
    }

    .wrapper.fluid {
        @apply block w-full;
        min-width: unset;
    }

    .textarea:hover {
        @apply border-blue-700 border;
    }

    .textarea:focus {
        @apply border-blue-700 border-2;
    }

    .textarea:disabled,
    .textarea.disabled {
        @apply bg-neutral-25 border-neutral-50 text-neutral-200 cursor-not-allowed overflow-hidden;
    }

    .textarea.success {
        @apply border-green-700;
    }
    .textarea.danger {
        @apply border-red-700;
    }
    .textarea.warning {
        @apply border-yellow-700;
    }

    .helper {
        @apply mt-1 text-xs font-semibold text-neutral-200 inline-block;
        line-height: 1.45;
    }

    .label {
        @apply absolute px-2 font-body font-medium text-neutral-200 bg-white;
        transform: translateY(-45%);
        top: 26px;
        left: 16px;
        transition: transform 100ms ease, font-size 100ms ease;
    }

    .label.up {
        top: 24px;
    }

    .label.disabled {
        @apply bg-transparent;
    }

    .limit {
        @apply absolute px-2 font-body font-normal text-neutral-200 bg-white rounded-lg shadow-md;
        top: 20px;
        right: 16px;
    }

    .limit.disabled {
        @apply bg-transparent shadow-none;
    }
}
</style>

<docs>
## Usage

```js
import { VTextarea } from "vue-ui-light";
```

<br/>
<br/>

## Default

<example>
<template v-slot:preview>
	<v-textarea label="Label"/>
	<v-textarea placeholder="No label" />
</template>
<template v-slot:source>

```html
	<v-textarea label="Label"/>
	<v-textarea placeholder="No label" />
```
</template>
</example>

## States

<example>
<template v-slot:preview>
	<v-textarea  state="success" placeholder="Success" />
	<v-textarea  state="danger" placeholder="Danger" />
	<v-textarea  state="warning" placeholder="Warning" />
</template>
<template v-slot:source>

```html
	<v-textarea  state="success" placeholder="Success" />
	<v-textarea  state="danger" placeholder="Danger" />
	<v-textarea  state="warning" placeholder="Warning" />
```
</template>
</example>

## Options

<example>
<template v-slot:preview>
	<v-textarea limit="50" label="With Limitation" />
	<v-textarea helper="helper text" label="Helper" />
	<v-textarea rows="8" label="Row" />
</template>
<template v-slot:source>

```html
	<v-textarea limit="50" label="With Limitation" />
	<v-textarea name="txtarea" helper="helper text" label="Helper"/>
	<v-textarea rows="8" label="Row" />
```
</template>
</example>

## Fluid Mode

In Fluid mode, area fills its parent width, causing its width to be either greater or smaller than the default.

<example>
<template v-slot:preview>
		<v-row class="mb-4">
			<v-col xs="12">
				<v-textarea fluid />
			</v-col>
		</v-row>
		<v-row>
			<v-col xs="3">
				<v-textarea fluid />
			</v-col>
		</v-row>
</template>
<template v-slot:source>

```html
<s-card>
	<v-col xs="12">
		<v-textarea fluid />
	</v-col>
	<v-col xs="3">
		<v-textarea fluid />
	</v-col>
</s-card>
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
