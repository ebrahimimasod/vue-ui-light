<template>
	<div :class="containerClasses">
		<div :class="$style.inputWrapper">
			<span
				v-if="$slots.iconLeft"
				:class="[iconClasses, $style.iconLeft]"
			>
				<!-- @slot iconLeft icon placed at left hand of the input. -->
				<slot name="iconLeft" />
			</span>
			<span
				v-if="iconLeft"
				:class="[iconClasses, $style.iconLeft]"
			>
				<v-Icon
					:name="iconLeft"
					:disabled="disabled"
					size="13"
					@click="numberCount('down')"
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
				v-model="model"
				:class="inputClasses"
				:type="type"
				:placeholder="!label ? placeholder : ''"
				:name="name"
				:disabled="disabled"
				:readonly="readonly"
				:dir="dir"
				:hidden="hidden"
				:autocomplete="autoCompletion"
				@blur="up = false"
				@focus="up = true"
			>
			<span
				v-if="$slots.iconRight"
				:class="[iconClasses, $style.iconRight]"
			>
				<!-- @slot iconRight icon placed at right hand of the input. -->
				<slot name="iconRight" />
			</span>
			<span
				v-if="iconRight"
				:class="[iconClasses, $style.iconRight]"
			>
				<v-Icon
					:name="iconRight"
					:disabled="disabled"
					size="13"
					@click="numberCount('up')"
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

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { generateId } from '@/utils';
import { VIcon } from '@/components/Icon/index';

/**
 * @displayName Input
 */
export default defineComponent({
	name: 'VInput',

	components: {
		VIcon,
	},

	props: {
		/**
         * Input's type attribute.
         */
		type: {
			type: String,
			default: 'text',
		},
		/**
         * v-model's value.
         * @model
         */
		modelValue: {
			type: [String, Number],
		},
		/**
         * Input's placeholder.
         */
		placeholder: {
			type: String,
		},
		/**
         * Input's helper text.
         */
		helper: {
			type: String,
		},
		/**
         * Input's label.
         */
		label: {
			type: String,
		},
		/**
         * Fluid mode which makes input full-width and disable its min-width.
         */
		fluid: {
			type: Boolean,
			default: false,
		},
		/**
         * Input's name attribute.
         */
		name: {
			type: String,
		},
		/**
         * Input's state variant.
         * @values danger, warning, success
         */
		state: {
			type: String as PropType<'danger' | 'warning' | 'success'>,
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
         * Input's dir attribute.
         */
		dir: {
			type: String,
		},
		/**
         * Input's hidden attribute.
         */
		hidden: {
			type: Boolean,
		},
		/**
         * Input's auto-complete attribute.
         */
		autoComplete: {
			type: Boolean,
			default: false,
		},
		/**
         * Input's right icon.
         */
		iconRight: {
			type: String,
		},
		/**
         * Input's left icon.
         */
		iconLeft: {
			type: String,
		},
		/**
         * Input's custom class.
         */
		inputClass: {
			type: String,
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
			if (this.type === 'number') {
				classNames.push(this.$style.numberWrapper);
			}
			if (this.fluid) {
				classNames.push(this.$style.fluid);
			}
			return classNames;
		},
		labelClasses(): string[] {
			const classNames = [this.$style.label];

			if (this.model || this.up) {
				classNames.push(this.$style.up);
			}

			if (this.type === 'number' && this.model === 0) {
				classNames.push(this.$style.up);
			}

			if (this.iconLeft || this.$slots.iconLeft) {
				classNames.push(this.$style.margin);
			}
			return classNames;
		},
		inputClasses(): string[] {
			const classNames = [this.$style.input];

			if (this.state) {
				classNames.push(this.stateClasses[this.state]);
			}

			if (this.iconRight || this.$slots.iconRight) {
				classNames.push(this.$style.marginRight);
			}

			if (this.iconLeft || this.$slots.iconLeft) {
				classNames.push(this.$style.marginLeft);
			}

			if (!this.label) {
				classNames.push(this.$style.noLable);
			}

			if (this.type === 'number') {
				classNames.push(this.$style.number);
			}

			if (this.inputClass) {
				classNames.push(this.inputClass);
			}

			return classNames;
		},
		iconClasses(): string[] {
			const classNames = [this.$style.icon];

			if (this.state) {
				classNames.push(this.stateClasses[this.state]);
			}

			if (this.type === 'number' && !this.$slots.iconLeft && !this.$slots.iconRight) {
				classNames.push(this.$style.number);
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
			set(value: string) {
				this.$emit('update:modelValue', value);
			},
		},
	},

	methods: {
		numberCount(model: string) {
			if (this.type === 'number') {
				model === 'up' ? (this.model = Number(this.model) + 1) : (this.model = Number(this.model) - 1);
			} else {
				return;
			}
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .wrapper {
        @apply inline-block;
        min-width: 270px;
        min-height: 56px;
    }

    .fluid {
        @apply block w-full;
        min-width: unset;
        width: unset;
    }

    .numberWrapper {
        min-width: 160px;
        width: 160px;
    }

    .inputWrapper {
        @apply relative;
    }

    .input {
        @apply pt-3 px-8 h-14
		bg-white placeholder-neutral-200 text-neutral-800
		font-body text-sm font-bold
		border border-solid border-neutral-50 rounded-lg outline-none
		block w-full;
        line-height: 1.33;
        transition-duration: 0.2s;
        transition-property: border-color;
    }

    .input.noLable {
        @apply py-0;
    }

    /* Input States */
    .input.success {
        @apply border-success-700;
    }
    .input.danger {
        @apply border-danger-700;
    }
    .input.warning {
        @apply border-yellow-700;
    }

    .input:hover {
        @apply border border-primary-500;
    }

    .input:focus {
        @apply border-2 border-primary-700;
    }

    .input:disabled,
    .input.disabled {
        @apply bg-neutral-25 border-neutral-50 text-neutral-200 cursor-not-allowed;
    }

    .helper {
        @apply mt-1 text-xs font-semibold text-neutral-200 inline-block;
        line-height: 1.45;
    }

    .label {
        @apply absolute font-body font-medium text-neutral-200;
        transform: translateY(-45%);
        top: 50%;
        left: 26px;
        transition: transform 100ms ease, font-size 100ms ease;
    }
    .label.margin {
        left: 42px;
    }

    .up {
        @apply text-xs mb-4 pb-0.5;
        transform: translateY(-110%);
        top: 50%;
        left: 34px;
    }

    .marginLeft {
        @apply pl-10 !important;
    }

    .marginRight {
        @apply pr-10 !important;
    }

    .iconRight {
        @apply absolute align-middle text-neutral-200;
        transform: translateY(-50%);
        top: 50%;
        right: 16px;
    }

    .iconLeft {
        @apply absolute align-middle text-neutral-200;
        transform: translateY(-50%);
        top: 50%;
        left: 16px;
    }

    .icon.number {
        @apply cursor-pointer hover:text-primary-700;
        @apply focus:text-primary-800;
    }

    /* .icon.success {
        @apply text-success-700;
    }
    .icon.danger {
        @apply text-danger-700;
    }
    .icon.warning {
        @apply text-yellow-700;
    } */

    .input:deep() *,
    .input:deep() * {
        color: inherit;
    }
}
</style>

<docs>
## Usage
```js
import { VInput } from "vue-ui-light";
```
<br/>
<br/>

Use `v-input` for different types of inputs. `text`, `number`, `email`, `search` and `link` are supported by default.

## Generic Inputs

<example>
<template v-slot:preview>
<div class="flex mb-2">
	<v-input
		type="text"
		label="Text"
		class="mr-2"
	/>
	<v-input
		type="number"
		label="Number"
	/>
</div>
<div class="flex">
	<v-input
		class="mr-2"
		type="email"
		label="Email"
		helper="A valid email must ends with @domain.com"
	/>
	<v-input
		type="text"
		placeholder="An Input has no label :))"
	/>
</div>
</template>
<template v-slot:source>

```html
<s-card>
	<v-input
		type="text"
		label="Text"
	/>
	<v-input
		type="number"
		label="Number"
		placeholder="Only accepts numbers"
	/>
	<v-input
		type="search"
		label="Search"
		helper="No default appearence"
	/>
	<v-input
		type="email"
		label="Email"
		helper="A valid email address must ends with @domain.com"
	/>
	<v-input
		type="text"
		placeholder="An Input has no label :))"
	/>
</s-card>
```
</template>
</example>

## States

<example>
<template v-slot:preview>
<s-card class="space-y-2">
	<v-input
		type="text"
		label="Text (disabled)"
		class="mr-2"
		disabled
	/>
	<v-input
		type="text"
		label="Text"
		model-value="readonly input"
		readonly
	/>
	<v-input
		type="text"
		label="Success Input"
		state="success"
		class="mr-2"
	/>
	<v-input
		type="text"
		label="Danger Input"
		state="danger"
	/>
	<v-input
		type="text"
		label="Warning Input"
		state="warning"
	/>
</s-card>
</template>
<template v-slot:source>

```html
<s-card>
	<v-input
		type="text"
		label="Text (disabled)"
		disabled
	/>
	<v-input
		type="text"
		label="Text"
		readonly
	/>
	<v-input
		type="text"
		label="Success Input"
		state="success"
	/>
	<v-input
		type="text"
		label="Danger Input"
		state="danger"
	/>
	<v-input
		type="text"
		label="Warning Input"
		state="warning"
	/>
</s-card>
```
</template>
</example>

## Icons

<example>
<template v-slot:preview>
<s-card class="space-y-2">
	<v-input
		type="text"
		class="mr-2"
		icon-left="description"
		label="Left Icon"
	/>
	<v-input
		type="text"
		class="mr-2"
		icon-right="description"
		label="Right Icon"
	/>
	<v-input
		type="text"
		class="mr-2"
		icon-left="description"
		icon-right="description"
		label="Double Icon"
	/>
	<v-input
		type="text"
		class="mr-2"
		icon-left="description"
		icon-right="description"
		placeholder="Placeholder"
	/>
</s-card>
</template>
<template v-slot:source>

```html
	<v-input
		type="text"
		class="mr-2"
		icon-left="description"
		label="Left Icon"
	/>
	<v-input
		type="text"
		class="mr-2"
		icon-right="description"
		label="Right Icon"
	/>
	<v-input
		type="text"
		class="mr-2"
		icon-left="description"
		icon-right="description"
		label="Double Icon"
	/>
	<v-input
		type="text"
		class="mr-2"
		icon-left="description"
		icon-right="description"
		placeholder="Placeholder"
	/>
```
</template>
</example>


## Number mode

<example>
<template v-slot:preview>
<s-card class="space-y-2">
	 	<v-input :model-value="5"  icon-right="plus" icon-left="minus" type="number" label="Number" />
        <v-input :model-value="5"  label="Right Only" type="number">
		    <template #iconRight>
                <div class="flex flex-col gap-1">
                    <v-Icon name="plus" size="13" class="hover:text-primary-700" @click="++num"/>
                    <v-Icon name="minus" size="13" class="hover:text-primary-700" @click="--num"/>
                </div>
            </template>
        </v-input>
        <v-input :model-value="5"  label="Left Only" type="number">
            <template #iconLeft>
                <div class="flex flex-col gap-1">
                    <v-Icon name="plus" size="13" class="hover:text-primary-700" @click="++num"/>
                    <v-Icon name="minus" size="13" class="hover:text-primary-700" @click="--num"/>
                </div>
            </template>
        </v-input>
        <v-input :model-value="5"  label="Slot" type="number">
            <template #iconRight>
                <div class="flex flex-col gap-1">
                    <v-Icon name="description" size="16" class="hover:text-danger-700" @click="num++"/>
                </div>
            </template>
        </v-input>
</s-card>
		<br />
		<v-input :model-value="5" icon-right="plus" icon-left="minus" type="number" placeholder="no lable"/>
		<br />
		<v-input :model-value="5"  icon-right="plus" icon-left="minus" type="number" helper="helper" label="Helper" />
</template>
<template v-slot:source>

```html
	 	<v-input :v-model="num"  icon-right="plus" icon-left="minus" type="number" label="Number" />
        <v-input :v-model="num"  label="Right Only" type="number">
		    <template #iconRight>
                <div class="flex flex-col gap-1">
                    <v-Icon name="plus" size="13" class="hover:text-primary-700" @click="++num"/>
                    <v-Icon name="minus" size="13" class="hover:text-primary-700" @click="--num"/>
                </div>
            </template>
        </v-input>
        <v-input :v-model="num"  label="Left Only" type="number">
            <template #iconLeft>
                <div class="flex flex-col gap-1">
                    <v-Icon name="plus" size="13" class="hover:text-primary-700" @click="++num"/>
                    <v-Icon name="minus" size="13" class="hover:text-primary-700" @click="--num"/>
                </div>
            </template>
        </v-input>
        <v-input :v-model="num"  label="Slot" type="number">
            <template #iconRight>
                <div class="flex flex-col gap-1">
                    <v-Icon name="description" size="16" class="hover:text-danger-700" @click="num++"/>
                </div>
            </template>
        </v-input>
		<v-input :v-model="num" icon-right="plus" icon-left="minus" type="number" placeholder="no lable"/>
		<v-input :v-model="num"  icon-right="plus" icon-left="minus" type="number" helper="helper" label="Helper" />
```
```js
data() {
	return {
		num : 5
	}
},
```
</template>
</example>


## Fluid Mode

In Fluid mode, input fills its parent width, causing its width to be either greater or smaller than the default.

<example>
<template v-slot:preview>
	<s-card>
		<v-row class="mb-4">
			<v-col xs="12">
				<v-input
					label="Text"
					fluid
				/>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col xs="3">
				<v-input
					label="Text"
					fluid
				/>
			</v-col>
		</v-row>
	</s-card>
</template>
<template v-slot:source>

```html
<s-card>
	<v-row>
		<v-col xs="12">
			<v-input
				label="Text"
				fluid
			/>
		</v-col>
	</v-row>
	<v-row justify="center">
		<v-col xs="3">
			<v-input
				label="Text"
				fluid
			/>
		</v-col>
	</v-row>
</s-card>
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
