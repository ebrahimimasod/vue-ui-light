<template>
	<div :class="$style.wrapper">
		<input
			:id="id"
			v-model="model"
			:class="inputClasses"
			:disabled="disabled"
			:readonly="readonly"
			type="checkbox"
		>
		<v-Icon
			v-if="icon"
			:name="model && checkedIcon ? checkedIcon : icon"
			:disabled="disabled"
			:size="iconSize"
			:class="iconClass"
			@click.stop="model = !model"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { generateId } from '@/utils';
import { VIcon } from '@/components/Icon/index';

/**
 * @displayName Toggle/Switch
 */
export default defineComponent({
	name: 'VToggle',

	components: {
		VIcon,
	},

	props: {
		/**
         * v-model's value
         * @model
         */
		modelValue: {
			type: Boolean,
		},
		/**
         * Toggle's size.
         * @values small, medium, large.
         */
		size: {
			type: String,
			default: 'medium',
		},
		/**
         * Toggle's different colors and styles.
         * @values primary, secondary, tertiary, danger, warning, info, success, link, orange
         */
		variant: {
			type: String,
			default: 'primary',
		},
		/**
         * Toggle's disabled state.
         */
		disabled: {
			type: Boolean,
		},
		/**
         * Toggle's icon.
         * @values Any valid icon name.
         */
		icon: {
			type: String,
		},
		/**
         * Toggle's checkedIcon.
         * @values Any valid icon name.
         */
		checkedIcon: {
			type: String,
		},
		/**
         * Toggle's readonly mode.
         */
		readonly: {
			type: Boolean,
		},
		/**
         * Toggle's state
         * @values error
         */
		state: {
			type: String,
		},
	},
	emits: ['update:modelValue'],
	data() {
		return {
			id: generateId(),
		};
	},
	computed: {
		model: {
			get(): boolean {
				return this.modelValue;
			},
			set(newVal: boolean): void {
				/**
                 * Model's update event.
                 * @event update:modelValue
                 * @property {boolean} newValue - new toggle value.
                 */
				this.$emit('update:modelValue', newVal);
			},
		},
		inputClasses(): string[] {
			const classNames = [this.$style.toggleInput];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.state) {
				classNames.push(this.$style[this.state]);
			}
			if (this.variant) {
				classNames.push(this.$style[this.variant]);
			}
			return classNames;
		},
		iconClass(): Array<string> {
			const classNames = [this.$style.iconToggle];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.model) {
				classNames.push(this.$style.checked);
				classNames.push(this.$style[this.variant]);
			}
			return classNames;
		},
		iconSize(): string | void {
			if (this.size == 'large') {
				return '12';
			}
			if (this.size == 'medium') {
				return '10';
			}
			if (this.size == 'small') {
				return '7';
			}
		},
	},
});
</script>

<style lang="postcss" module>
.wrapper {
    @apply relative;
}

.toggleInput {
    @apply appearance-none bg-neutral-50 rounded-full cursor-pointer outline-none m-0 align-middle;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    width: 48px;
    height: 24px;
	padding: 2px;
}
.toggleInput::after {
    @apply bg-white inline-block rounded-full;
	box-shadow: 0px 2px 4px rgba(85, 85, 85, 0.08), 0px 4px 24px rgba(0, 0, 0, 0.08);
    content: "";
    transition: transform 0.2s ease;
	width: 20px;
    height: 20px;
}

.toggleInput.large {
    width: 56px;
    height: 32px;
	padding: 4px;
}
.toggleInput.large::after {
    width: 24px;
    height: 24px;
}

.toggleInput.small {
    width: 32px;
    height: 16px;
    padding: 1px;
}
.toggleInput.small::after {
    width: 14px;
    height: 14px;
}

.toggleInput.medium:checked::after {
    transform: translateX(24px);
}
.toggleInput.large:checked::after {
    transform: translateX(23px);
}
.toggleInput.small:checked::after {
    transform: translateX(16px);
}

.toggleInput.primary:checked {
    @apply bg-primary-700;
}
.toggleInput.primary:focus {
    box-shadow: 0 0 0 2px theme("colors.primary.100");
}
.toggleInput.secondary:checked {
    @apply bg-secondary-700;
}
.toggleInput.secondary:focus {
    box-shadow: 0 0 0 2px theme("colors.secondary.100");
}
.toggleInput.tertiary:checked {
    @apply bg-tertiary-700;
}
.toggleInput.tertiary:focus {
    box-shadow: 0 0 0 2px theme("colors.tertiary.100");
}
.toggleInput.danger:checked {
    @apply bg-danger-700;
}
.toggleInput.danger:focus {
    box-shadow: 0 0 0 2px theme("colors.danger.100");
}
.toggleInput.success:checked {
    @apply bg-success-700;
}
.toggleInput.success:focus {
    box-shadow: 0 0 0 2px theme("colors.success.100");
}
.toggleInput.warning:checked {
    @apply bg-warning-700;
}
.toggleInput.warning:focus {
    box-shadow: 0 0 0 2px theme("colors.warning.100");
}
.toggleInput.info:checked {
    @apply bg-info-700;
}
.toggleInput.info:focus {
    box-shadow: 0 0 0 2px theme("colors.info.100");
}
.toggleInput.orange:checked {
    @apply bg-orange-700;
}
.toggleInput.orange:focus {
    box-shadow: 0 0 0 2px theme("colors.orange.100");
}

.toggleInput.error {
    box-shadow: 0 0 0 2px theme("colors.red.DEFAULT");
}

.toggleInput:disabled {
    @apply bg-neutral-50 cursor-not-allowed;
}
.toggleInput:disabled::after {
    @apply bg-neutral-25 cursor-not-allowed;
}

.iconToggle.small {
    @apply absolute align-middle;
    top: 8px;
    left: 4.5px;
    transition: left 0.2s ease;
}
.iconToggle.small.checked {
    @apply absolute align-middle;
    top: 8px;
    left: 20.5px;
    transition: left 0.2s ease;
}
.iconToggle.medium {
    @apply absolute align-middle;
    top: 7px;
    left: 7px;
    transition: left 0.2s ease;
}
.iconToggle.medium.checked {
    @apply absolute align-middle;
    top: 7px;
    left: 31px;
    transition: left 0.2s ease;
}
.iconToggle.large {
    @apply absolute align-middle;
    top: 9.5px;
    left: 9px;
    transition: left 0.2s ease;
}
.iconToggle.large.checked {
    @apply absolute align-middle;
    top: 9.5px;
    left: 33px;
    transition: left 0.2s ease;
}

.iconToggle {
    @apply text-neutral-75 cursor-pointer;
}
.iconToggle.checked.primary {
    @apply text-primary;
}
.iconToggle.checked.secondary {
    @apply text-secondary;
}
.iconToggle.checked.tertiary {
    @apply text-tertiary;
}
.iconToggle.checked.danger {
    @apply text-danger;
}
.iconToggle.checked.success {
    @apply text-success;
}
.iconToggle.checked.warning {
    @apply text-warning;
}
.iconToggle.checked.info {
    @apply text-info;
}
.iconToggle.checked.orange {
    @apply text-orange;
}

.toggleInput:deep() *,
.toggleInput:deep() * {
    color: inherit;
}
</style>

<docs>
## Usage
```js
import { VToggle } from 'vue-ui-light';
```
<br/>
<br/>

## Basic

<example>
<template v-slot:preview>
<v-row justify="between" align="center">
		<v-toggle />
</v-row>
</template>
<template v-slot:source>

```html
	<v-toggle />
```
</template>
</example>


## States
<example>
<template v-slot:preview>
<v-row class="space-x-5">
	<div>
		<span class="mx-2">Checked</span>
		<v-toggle :model-value="true" />
	</div>
	<div>
		<span class="mx-2">Disabled</span>
		<v-toggle disabled/>
	</div>
	<div>
		<span class="mx-2">Error</span>
		<v-toggle state="error" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
	<v-toggle v-model="true" />
	<v-toggle disabled />
	<v-toggle error />
```
</template>
</example>


## Sizes
<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
		<v-toggle size="medium" />
		<v-toggle size="large" />
</v-row>
</template>
<template v-slot:source>

```html
	<v-toggle size="medium" />
	<v-toggle size="large" />
```
</template>
</example>


## Variant
<example>
<template v-slot:preview>
<v-row class="space-x-5">
	<v-toggle :model-value="true" variant="primary" size="large" />
	<v-toggle :model-value="true" variant="secondary" size="large" />
	<v-toggle :model-value="true" variant="tertiary" size="large" />
	<v-toggle :model-value="true" variant="danger" size="large" />
	<v-toggle :model-value="true" variant="warning" size="large" />
	<v-toggle :model-value="true" variant="info" size="large" />
	<v-toggle :model-value="true" variant="success" size="large" />
	<v-toggle :model-value="true" variant="orange" size="large" />
</v-row>
</template>
<template v-slot:source>

```html
	<v-toggle variant="primary" size="large" />
	<v-toggle variant="secondary" size="large" />
	<v-toggle variant="tertiary" size="large" />
	<v-toggle variant="danger" size="large" />
	<v-toggle variant="warning" size="large" />
	<v-toggle variant="info" size="large" />
	<v-toggle variant="success" size="large" />
	<v-toggle variant="orange" size="large" />
```
</template>
</example>


## Icon
<example>
<template #preview="{ state }" >
<v-row class="space-x-5">
	<div>
		<v-toggle :model-value="state" icon="online" size="large" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-toggle icon="online" size="large" />
```
</template>
</example>

## Double Icon
<example>
<template #preview="{ state }">
<v-row class="space-x-5">
	<v-toggle :model-value="state" variant="secondary" icon="offline" checked-icon="online" size="large" />
	<v-toggle :model-value="state" variant="info" icon="offline" checked-icon="online" size="large" />
</v-row>
</template>
<template v-slot:source>

```html
	<v-toggle variant="secondary" icon="offline" checked-icon="online" size="large" />
	<v-toggle variant="info" icon="offline" checked-icon="online" size="large" />
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
