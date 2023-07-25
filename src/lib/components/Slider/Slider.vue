<template>
	<div :class="containerClasses">
		<div :class="$style.wrapper">
			<span
				v-if="hasLabel && focused"
				:class="valueClasses"
				:style="tooltipStyle"
			>
				<div>{{ labelRenderer }}</div>
				<span :class="arrowClasses" />
			</span>
			<span
				:class="classInner"
				:style="tooltipStyle"
			>
				|||
			</span>
			<input
				ref="input"
				v-model="model"
				:class="inputClasses"
				type="range"
				:min="min"
				:max="max"
				:step="step"
				:disabled="disabled"
				:readonly="true"
				@focus="
					focused = true;
					hovered = false;
				"
				@blur="focused = false"
				@mouseenter="hovered = true"
				@mouseleave="hovered = false"
			>
			<span
				:class="classProgress"
				:style="progressStyle"
				@click="onClickProgress"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'VSlider',

	props: {
		/**
         * Range's min step.
         */
		min: {
			type: Number,
			default: 0,
		},
		/**
         * Range's max step.
         */
		max: {
			type: Number,
			default: 10,
		},
		/**
         * Range's step length.
         * @valeu
         */
		step: {
			type: Number,
			default: 1,
		},
		/**
         * Range's disabled attribute.
         */
		disabled: {
			type: Boolean,
		},
		/**
         * Range's readonly attribute.
         */
		readonly: {
			type: Boolean,
		},
		/**
         * Range's vertical mode.
         */
		vertical: {
			type: Boolean,
			default: false,
		},
		/**
         * Show Label for current step
         * if `true` you should use `renderLabel's prop`
         */
		hasLabel: {
			type: Boolean,
		},
		/**
         * position Label for current step
         * @values top , bottom
         */
		positionLabel: {
			type: String,
			default: 'top',
		},
		/**
         * Badge's color variant
         * @values primary, secondary, tertiary, danger, warning, info, success, orange
         */
		variant: {
			type: String,
			default: 'primary',
		},
		/**
         * v-model's value.
         * @model
         */
		modelValue: {
			type: Number,
			required: true,
		},
		/**
         * Custom Function for show current step label
         */
		renderLabel: {
			type: Function,
		},
	},

	emits: ['update:modelValue'],

	data() {
		return {
			focused: false,
			hovered: false,
		};
	},

	computed: {
		model: {
			get(): number {
				return this.modelValue;
			},
			set(newValue: number): void {
				/**
                 * Model's update event.
                 * @event update:modelValue
                 * @property {number} newValue - new range value.
                 */
				this.$emit('update:modelValue', parseFloat(Number(newValue).toFixed(this.stepDecimals)));
			},
		},
		containerClasses(): string[] {
			const classNames = [this.$style.form];
			if (this.hasLabel) {
				classNames.push(this.$style.hasLabel);
			}
			if (this.readonly) {
				classNames.push(this.$style.readonly);
			}
			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			if (this.vertical) {
				classNames.push(this.$style.vertical);
			}
			return classNames;
		},
		inputClasses(): string[] {
			const classNames = [this.$style.input];
			classNames.push(this.$style[this.variant]);

			return classNames;
		},
		classProgress(): string[] {
			const classNames = [this.$style.progress];
			classNames.push(this.$style[this.variant]);

			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			if (this.focused) {
				classNames.push(this.$style.focused);
			}
			return classNames;
		},
		classInner(): string[] {
			const classNames = [this.$style.inner];

			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			if (this.focused) {
				classNames.push(this.$style.focused);
			}
			if (this.hovered) {
				classNames.push(this.$style[this.variant]);
			}
			return classNames;
		},
		valueClasses(): string[] {
			const classNames = [this.$style.value];
			if (this.positionLabel) {
				classNames.push(this.$style[this.positionLabel]);
			}
			if (this.vertical) {
				classNames.push(this.$style.vertical);
			}
			return classNames;
		},
		arrowClasses(): string[] {
			const classNames = [this.$style.arrow];
			if (this.positionLabel) {
				classNames.push(this.$style[this.positionLabel]);
			}
			return classNames;
		},
		progressOffset(): string {
			const percent = (this.model - this.min) / (this.max - this.min);
			const size = this.focused ? 32 : 24;
			/**
             * This will make something like `calc(70% - 11.2px)`.
             * The second part is an percentage offset from slider thumb width.
             */
			return `calc(${percent * 100}% - ${percent * size}px)`;
		},
		progressStyle(): any {
			return { width: this.progressOffset };
		},
		tooltipStyle(): any {
			return { left: this.progressOffset };
		},
		stepDecimals(): number {
			// TODO: this method can be used as a utility on other components too.
			if (Math.floor(this.step) !== this.step) {
				return this.step.toString().split('.')[1].length || 0;
			}
			return 0;
		},
		labelRenderer(): string | number {
			return this.renderLabel ? this.renderLabel(this.model) : this.model;
		},
	},
	methods: {
		onClickProgress(e: MouseEvent) {
			const element = this.$refs.input as HTMLElement;
			const percent = Number((e.offsetX / element.offsetWidth).toFixed(2));
			const rawValue = percent * this.max;
			const parsedValue = parseFloat((rawValue / this.step).toFixed(this.stepDecimals)) * this.step;
			this.model = parsedValue;
		},
	},
});
</script>

<style lang="postcss" module>
.form {
    @apply py-2;
}
.form.hasLabel {
    @apply pt-8;
}
.form.vertical {
    transform: rotate(270deg);
}
.form.readonly,
.form.disabled {
    @apply pointer-events-none;
}

.wrapper {
    @apply relative flex;
}

.inner {
    @apply text-neutral-50 absolute text-center text-xs font-light z-50 whitespace-nowrap pointer-events-none;
    line-height: 1.33;
    top: -6px;
    transform: translateX(calc(-50% + 12px));
}
.inner.focused {
    @apply text-sm;
    transform: translateX(calc(-50% + 16px));
}
.inner.disabled {
    @apply text-neutral-25 !important;
}

.inner.primary {
    @apply text-primary-700 !important;
}
.inner.secondary {
    @apply text-secondary-700;
}
.inner.tertiary {
    @apply text-tertiary-700;
}
.inner.danger {
    @apply text-danger-700;
}
.inner.orange {
    @apply text-orange-700;
}
.inner.warning {
    @apply text-warning-700;
}

.value {
    @apply bg-neutral-700 absolute text-white rounded-xl text-center text-xs py-2 px-4 z-50 whitespace-nowrap;
    line-height: 1.33;
    transform: translateX(calc(-50% + 14px));
}
.value.top {
    top: -53px;
}
.value.bottom {
    top: 28px;
}
.value.vertical > div {
    @apply transform rotate-90 z-50;
}

.arrow {
    @apply bg-neutral-700 absolute w-3 h-3 transform rotate-45 z-30;
    left: calc(50% - 5px);
}
.arrow.top {
    top: calc(100% - 9px);
}
.arrow.bottom {
    top: -4px;
}

.input {
    @apply appearance-none h-1 bg-neutral-50 cursor-pointer m-0 outline-none;
    width: 100%;
    min-width: 200px;
    border-radius: 100px;
    transition: 0.1s;
}
.input:disabled,
.input.disabled {
    @apply bg-neutral-25;
}

.input.focus,
.input:focus {
    @apply h-2;
}

.input::-webkit-slider-thumb {
    @apply appearance-none w-6 h-6 bg-white shadow rounded-lg border-solid border border-neutral-25 relative !important;
    transition: 0.1s;
}
.input::-moz-slider-thumb {
    @apply appearance-none w-6 h-6 bg-white shadow rounded-lg border-solid border border-neutral-25 relative !important;
    transform: translateX(1px);
    transition: 0.1s;
}

.progress {
    @apply bg-primary-700;
    transition: 0.1s height;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    position: absolute;
    height: 4px;
    width: 30%;
    bottom: 0;
    left: 0;
    z-index: 0;
}

.progress.focused {
    height: 8px;
}

.progress.disabled {
    @apply opacity-30;
}
.progress.secondary {
    @apply bg-secondary-700;
}
.progress.tertiary {
    @apply bg-tertiary-700;
}
.progress.danger {
    @apply bg-danger-700;
}
.progress.orange {
    @apply bg-orange-700;
}
.progress.warning {
    @apply bg-warning-700;
}

.input:disabled::-webkit-slider-thumb {
    @apply shadow-none !important;
}
.input:disabled::-moz-slider-thumb {
    @apply shadow-none !important;
}

.input:focus::-webkit-slider-thumb {
    @apply border-solid border-2 border-primary-700 w-8 h-8 !important;
}
.input:focus::-moz-slider-thumb {
    @apply border-solid border-2 border-primary-700 w-8 h-8 !important;
}
.input:focus.secondary::-webkit-slider-thumb {
    @apply border-secondary-700 !important;
}
.input:focus.secondary::-moz-slider-thumb {
    @apply border-secondary-700 !important;
}
.input:focus.tertiary::-webkit-slider-thumb {
    @apply border-tertiary-700 !important;
}
.input:focus.tertiary::-moz-slider-thumb {
    @apply border-tertiary-700 !important;
}
.input:focus.danger::-webkit-slider-thumb {
    @apply border-danger-700 !important;
}
.input:focus.danger::-moz-slider-thumb {
    @apply border-danger-700 !important;
}
.input:focus.orange::-webkit-slider-thumb {
    @apply border-orange-700 !important;
}
.input:focus.orange::-moz-slider-thumb {
    @apply border-orange-700 !important;
}
.input:focus.warning::-webkit-slider-thumb {
    @apply border-warning-700 !important;
}
.input:focus.warning::-moz-slider-thumb {
    @apply border-warning-700 !important;
}

.form-slider.disabled .input {
    @apply bg-neutral-50;
}

.labels {
    @apply flex justify-between items-center pt-2.5;
}

.labels span {
    @apply text-xs text-neutral-500;
    line-height: 1.33;
}
</style>

<docs>
## Usage

```js
import { VSlider } from "vue-ui-light";
```

<br/>
<br/>

## Default

<example :modelData="modelData" color="#FFFFFF">
<template #preview="{ data }">
<div class="flex flex-col gap-4">
 	<v-slider  :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
</div>
</template>
<template v-slot:source>

```html
	<v-slider
			v-model="model"
			:step="1"
			:min="1"
			:max="10"
	/>
```
</template>
</example>


## Variant

<example :modelData="modelData" color="#FFFFFF">
<template #preview="{ data }">
<div class="flex flex-col gap-4">
 	<v-slider variant="primary" :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
 	<v-slider variant="secondary" :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
 	<v-slider variant="danger" :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
 	<v-slider variant="tertiary" :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
</div>
</template>
<template v-slot:source>

```html
	<v-slider
			variant="primary"
			v-model="model"
			:step="1"
			:min="1"
			:max="10"
	/>
	<v-slider
			variant="secondary"
			v-model="model"
			:step="1"
			:min="1"
			:max="10"
	/>
	<v-slider
			variant="danger"
			v-model="model"
			:step="1"
			:min="1"
			:max="10"
	/>
	<v-slider
			variant="tertiary"
			v-model="model"
			:step="1"
			:min="1"
			:max="10"
	/>
```
</template>
</example>

## States

<example  color="#FFFFFF">
<template v-slot:preview>
<div class="flex flex-col gap-4">
	Readonly
	<v-slider
			:model-value="9"
			:step="1"
			:min="1"
			:max="10"
			readonly
			start-label="ReadOnly"
	/>
	Disabled
	<v-slider
			:model-value="5"
			:step="1"
			:min="1"
			:max="10"
			disabled
			start-label="Disabled"
	/>
</div>
</template>
<template v-slot:source>

```html
	<v-slider
			readonly
			:step="1"
			:min="1"
			:max="10"
	/>
	<v-slider
			disabled
			:step="1"
			:min="1"
			:max="10"
	/>
```
</template>
</example>

## With Label

<example :modelData="modelData" color="#FFFFFF" min-height="300">
<template #preview="{ data }">
	<v-slider
			:model-value="modelData ? modelData :5"
			@update:modelValue="modelData =  $event"
			:step="1"
			position-label="top"
			:min="1"
			:max="10"
			has-label
			:render-label="(val) => {
				return val < 5 ? `${val} Less than 5` : `${val} More than 5`;
			}"
		/>
		<v-slider
			:model-value="modelData ? modelData :5"
			@update:modelValue="modelData =  $event"
			:step="1"
			position-label="bottom"
			:min="1"
			:max="10"
			has-label
			:render-label="(val) => {
				return val < 5 ? `${val} Less than 5` : `${val} More than 5`;
			}"
		/>
</template>
<template v-slot:source>

```html
	<v-slider
			v-model="model"
			:step="1"
			:min="1"
			:max="10"
			has-label
			:render-label="rangeLabel"
	/>
```

```js
model:5
rangeLabel(val) {
	return val < 5 ? `${val} Less than 5` : `${val} More than 5`;
},
```
</template>
</example>


## Vertical

<example :modelData="modelData" min-height="500" color="#FFFFFF">
<template #preview="{ data }">
<div class="flex flex-col justify-start mt-24">
<div class="flex flex-row justify-center">
 	<v-slider
			has-label
			position-label="top"
			:render-label="(val) => {
				return val;
			}"
			vertical :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
 	<v-slider
			has-label
			position-label="bottom"
			:render-label="(val) => {
				return val;
			}"
			vertical variant="tertiary" :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
</div>
</div>
</template>
<template v-slot:source>

```html
	<v-slider
			vertical
			has-label
			:render-label="rangeLabel"
			v-model="model"
			:step="1"
			:min="1"
			:max="10"
	/>
	<v-slider
			variant="tertiary"
			vertical
			has-label
			:render-label="rangeLabel"
			v-model="model"
			:step="1"
			:min="1"
			:max="10"
	/>
```

```js
model:5
rangeLabel(val) {
	return val ;
},
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
