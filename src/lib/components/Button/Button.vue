<template>
	<component
		:is="tagName"
		:class="classes"
		:disabled="disabled"
		:type="type"
		:to="to"
	>
		<v-Icon
			v-if="iconLeft && !loading"
			:name="iconLeft"
			:disabled="disabled"
			:size="iconSize"
			:class="iconLeftClass"
		/>
		<slot />
		<v-icon
			v-if="iconRight && !loading"
			:name="iconRight"
			:disabled="disabled"
			:size="iconSize"
			:class="iconRightClass"
		/>
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VIcon } from '@/components/Icon/index';

export default defineComponent({
	name: 'VButton',

	components: {
		VIcon,
	},

	props: {
		/**
         * toggle disabled state.
         */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
         * Toggle loading spinner.
         */
		loading: {
			type: Boolean,
			default: false,
		},
		/**
         * Toggle active pseudo class.
         */
		active: {
			type: Boolean,
			default: false,
		},
		/**
         * Button's type attribute.
         * @values button, submit, reset
         */
		type: {
			type: String,
			default: 'button',
		},
		/**
         * Button in outline mode/style
         */
		outline: {
			type: Boolean,
			default: false,
		},
		/**
         * Button's different colors and styles.
         * @values neutral, primary, secondary, tertiary, danger, warning, info, success, link, orange
         */
		variant: {
			type: String,
			default: 'neutral',
		},
		/**
         * Button's different sizes.
         * @values sm, md, lg
         */
		size: {
			type: String,
			default: 'md',
		},
		/**
         * Button's left icon.
         * @values Any valid icon name.
         */
		iconLeft: {
			type: String,
		},
		/**
         * Button's right icon.
         * @values Any valid icon name.
         */
		iconRight: {
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
         * router-link's 'to' value.
         */
		to: {
			type: [String, Object],
		},
		/**
         * A HTML5 standard tag name in lowercase, e.g. div, p, a.
         */
		tag: {
			type: String,
			default: 'button',
		},
		/**
         * Block mode which fill its parent width.
         */
		fluid: {
			type: Boolean,
		},
	},

	computed: {
		classes(): Array<string> {
			const classNames = [this.$style.btn];
			if (this.outline) {
				classNames.push(this.$style.outline);
			}
			if (this.variant) {
				classNames.push(this.$style[this.variant]);
			}
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.active) {
				classNames.push(this.$style.active);
			}
			if (this.loading) {
				classNames.push(this.$style.loading);
			}
			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			if (this.fluid) {
				classNames.push(this.$style.fluid);
			}
			if (this.iconOnly) {
				classNames.push(this.$style.icononly);
			}
			return classNames;
		},
		iconLeftClass(): Array<string> {
			const classNames = [this.$style.iconLeft];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.iconOnly) {
				classNames.push(this.$style.icononly);
			}
			return classNames;
		},
		iconRightClass(): Array<string> {
			const classNames = [this.$style.iconRight];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.iconOnly) {
				classNames.push(this.$style.icononly);
			}
			return classNames;
		},
		tagName(): string {
			if (this.to) {
				return 'router-link';
			}
			return this.tag;
		},
		iconSize(): string {
			if (this.size == 'lg') {
				return this.iconOnly ? '20' : '16';
			}
			if (this.size == 'md') {
				return this.iconOnly ? '16' : '14';
			}
			return this.iconOnly ? '14' : '12';
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    /* Base Button */
    .btn {
        @apply py-1.5 px-3 cursor-pointer relative
		outline-none border-none rounded-md
		bg-neutral-700 text-white
		font-body text-sm font-bold;
        transition-duration: 0.2s;
        transition-property: background-color, color;
        min-height: 32px;
    }

    .btn.outline {
        @apply ring-1 ring-neutral-75 bg-transparent text-neutral-700;
    }
    .btn.outline:hover,
    .btn.outline.hover {
        @apply bg-transparent ring-neutral-300 text-neutral-400;
    }
    .btn.outline:active,
    .btn.outline.active {
        @apply bg-transparent ring-2 ring-neutral-400 text-neutral-700;
    }
    .btn.outline:disabled,
    .btn.outline.disabled {
        @apply bg-transparent ring-1 ring-neutral-50 text-neutral-300;
    }

    /* Button States */
    .btn:hover,
    .btn.hover {
        @apply bg-neutral-400;
    }
    .btn:active,
    .btn.active {
        @apply bg-neutral-700 ring-4 ring-neutral-75;
    }
    .btn:disabled,
    .btn.disabled {
        @apply bg-neutral-100 cursor-not-allowed pointer-events-none;
    }

    /* Button solid Primary */
    .btn.primary {
        @apply bg-primary-700;
    }
    .btn.primary:hover,
    .btn.primary.hover {
        @apply bg-primary-400;
    }
    .btn.primary:active,
    .btn.primary.active {
        @apply bg-primary-700 ring-4 ring-primary-75;
    }
    .btn.primary:disabled,
    .btn.primary.disabled {
        @apply bg-primary-100;
    }
    /* Button outline Primary */
    .btn.outline.primary {
        @apply ring-1 ring-primary-75 bg-transparent text-primary-700;
    }
    .btn.outline.primary:hover,
    .btn.outline.primary.hover {
        @apply bg-transparent ring-primary-300 text-primary-400;
    }
    .btn.outline.primary:active,
    .btn.outline.primary.active {
        @apply bg-transparent ring-2 ring-primary-400 text-primary-700;
    }
    .btn.outline.primary:disabled,
    .btn.outline.primary.disabled {
        @apply bg-transparent ring-1 ring-primary-50 text-primary-300;
    }

    /* Button Secondary */
    .btn.secondary {
        @apply bg-secondary-700;
    }
    .btn.secondary:hover,
    .btn.secondary.hover {
        @apply bg-secondary-400;
    }
    .btn.secondary:active,
    .btn.secondary.active {
        @apply bg-secondary-700 ring-4 ring-secondary-75;
    }
    .btn.secondary:disabled,
    .btn.secondary.disabled {
        @apply bg-secondary-100;
    }
	/* Button outline Secondary */
    .btn.outline.secondary {
        @apply ring-1 ring-secondary-75 bg-transparent text-secondary-700;
    }
    .btn.outline.secondary:hover,
    .btn.outline.secondary.hover {
        @apply bg-transparent ring-secondary-300 text-secondary-400;
    }
    .btn.outline.secondary:active,
    .btn.outline.secondary.active {
        @apply bg-transparent ring-2 ring-secondary-400 text-secondary-700;
    }
    .btn.outline.secondary:disabled,
    .btn.outline.secondary.disabled {
        @apply bg-transparent ring-1 ring-secondary-50 text-secondary-300;
    }

    /* Button Tertiary */
    .btn.tertiary {
        @apply bg-tertiary-700;
    }
    .btn.tertiary:hover,
    .btn.tertiary.hover {
        @apply bg-tertiary-400;
    }
    .btn.tertiary:active,
    .btn.tertiary.active {
        @apply bg-tertiary-700 ring-4 ring-tertiary-75;
    }
    .btn.tertiary:disabled,
    .btn.tertiary.disabled {
        @apply bg-tertiary-100;
    }
	/* Button outline Tertiary */
    .btn.outline.tertiary {
        @apply ring-1 ring-tertiary-75 bg-transparent text-tertiary-700;
    }
    .btn.outline.tertiary:hover,
    .btn.outline.tertiary.hover {
        @apply bg-transparent ring-tertiary-300 text-tertiary-400;
    }
    .btn.outline.tertiary:active,
    .btn.outline.tertiary.active {
        @apply bg-transparent ring-2 ring-tertiary-400 text-tertiary-700;
    }
    .btn.outline.tertiary:disabled,
    .btn.outline.tertiary.disabled {
        @apply bg-transparent ring-1 ring-tertiary-50 text-tertiary-300;
    }

    /* Button Danger */
    .btn.danger {
        @apply bg-danger-700;
    }
    .btn.danger:hover,
    .btn.danger.hover {
        @apply bg-danger-400;
    }
    .btn.danger:active,
    .btn.danger.active {
        @apply bg-danger-700 ring-4 ring-danger-75;
    }
    .btn.danger:disabled,
    .btn.danger.disabled {
        @apply bg-danger-100;
    }
	/* Button outline Danger */
    .btn.outline.danger {
        @apply ring-1 ring-danger-75 bg-transparent text-danger-700;
    }
    .btn.outline.danger:hover,
    .btn.outline.danger.hover {
        @apply bg-transparent ring-danger-300 text-danger-400;
    }
    .btn.outline.danger:active,
    .btn.outline.danger.active {
        @apply bg-transparent ring-2 ring-danger-400 text-danger-700;
    }
    .btn.outline.danger:disabled,
    .btn.outline.danger.disabled {
        @apply bg-transparent ring-1 ring-danger-50 text-danger-300;
    }

    /* Button Warning */
    .btn.warning {
        @apply bg-warning-700;
    }
    .btn.warning:hover,
    .btn.warning.hover {
        @apply bg-warning-400;
    }
    .btn.warning:active,
    .btn.warning.active {
        @apply bg-warning-700 ring-4 ring-warning-75;
    }
    .btn.warning:disabled,
    .btn.warning.disabled {
        @apply bg-warning-100;
    }
	/* Button outline Warning */
    .btn.outline.warning {
        @apply ring-1 ring-warning-75 bg-transparent text-warning-700;
    }
    .btn.outline.warning:hover,
    .btn.outline.warning.hover {
        @apply bg-transparent ring-warning-300 text-warning-400;
    }
    .btn.outline.warning:active,
    .btn.outline.warning.active {
        @apply bg-transparent ring-2 ring-warning-400 text-warning-700;
    }
    .btn.outline.warning:disabled,
    .btn.outline.warning.disabled {
        @apply bg-transparent ring-1 ring-warning-50 text-warning-300;
    }

    /* Button Success */
    .btn.success {
        @apply bg-success-700;
    }
    .btn.success:hover,
    .btn.success.hover {
        @apply bg-success-400;
    }
    .btn.success:active,
    .btn.success.active {
        @apply bg-success-700 ring-4 ring-success-75;
    }
    .btn.success:disabled,
    .btn.success.disabled {
        @apply bg-success-100;
    }
	/* Button outline Success */
    .btn.outline.success {
        @apply ring-1 ring-success-75 bg-transparent text-success-700;
    }
    .btn.outline.success:hover,
    .btn.outline.success.hover {
        @apply bg-transparent ring-success-300 text-success-400;
    }
    .btn.outline.success:active,
    .btn.outline.success.active {
        @apply bg-transparent ring-2 ring-success-400 text-success-700;
    }
    .btn.outline.success:disabled,
    .btn.outline.success.disabled {
        @apply bg-transparent ring-1 ring-success-50 text-success-300;
    }

    /* Button Info */
    .btn.info {
        @apply bg-info-700;
    }
    .btn.info:hover,
    .btn.info.hover {
        @apply bg-info-400;
    }
    .btn.info:active,
    .btn.info.active {
        @apply bg-info-700 ring-4 ring-info-75;
    }
    .btn.info:disabled,
    .btn.info.disabled {
        @apply bg-info-100;
    }
	/* Button outline Info */
    .btn.outline.info {
        @apply ring-1 ring-info-75 bg-transparent text-info-700;
    }
    .btn.outline.info:hover,
    .btn.outline.info.hover {
        @apply bg-transparent ring-info-300 text-info-400;
    }
    .btn.outline.info:active,
    .btn.outline.info.active {
        @apply bg-transparent ring-2 ring-info-400 text-info-700;
    }
    .btn.outline.info:disabled,
    .btn.outline.info.disabled {
        @apply bg-transparent ring-1 ring-info-50 text-info-300;
    }

    /* Button Orange */
    .btn.orange {
        @apply bg-orange-700;
    }
    .btn.orange:hover,
    .btn.orange.hover {
        @apply bg-orange-400;
    }
    .btn.orange:active,
    .btn.orange.active {
        @apply bg-orange-700 ring-4 ring-orange-75;
    }
    .btn.orange:disabled,
    .btn.orange.disabled {
        @apply bg-orange-100;
    }
	/* Button outline Orange */
    .btn.outline.orange {
        @apply ring-1 ring-orange-75 bg-transparent text-orange-700;
    }
    .btn.outline.orange:hover,
    .btn.outline.orange.hover {
        @apply bg-transparent ring-orange-300 text-orange-400;
    }
    .btn.outline.orange:active,
    .btn.outline.orange.active {
        @apply bg-transparent ring-2 ring-orange-400 text-orange-700;
    }
    .btn.outline.orange:disabled,
    .btn.outline.orange.disabled {
        @apply bg-transparent ring-1 ring-orange-50 text-orange-300;
    }

    /* Button Link */
    .btn.link {
        @apply bg-transparent text-primary;
    }
    .btn.link:hover,
    .btn.link.hover {
        @apply bg-transparent underline;
    }
    .btn.link:active,
    .btn.link.active {
        @apply text-blue-400 ring-0;
    }
    .btn.link.loading::after {
        @apply border-neutral-0;
    }

    /* Button Sizes */
    .btn.lg {
        @apply py-4 px-6 text-base font-semibold;
    }
    .btn.md {
        @apply py-4 px-4 text-sm leading-4 font-bold;
    }
    .btn.sm {
        @apply py-2 px-4 text-xs font-bold;
    }

    /* Button icon */
    .iconLeft.md {
        @apply mr-3 align-middle;
    }
    .iconLeft.sm {
        @apply mr-2 align-middle;
    }
    .iconLeft.lg {
        @apply mr-4 align-middle;
    }
    .iconRight.md {
        @apply ml-3 align-middle;
    }
    .iconRight.sm {
        @apply ml-2 align-middle;
    }
    .iconRight.lg {
        @apply ml-4 align-middle;
    }

    .iconLeft.icononly {
        @apply mr-0 !important;
    }
    .iconRight.icononly {
        @apply ml-0 !important;
    }

    .btn.sm.icononly {
        @apply p-2;
    }
    .btn.md.icononly {
        @apply p-4;
    }

    /* config */
    .btn.loading {
        @apply pointer-events-none select-none text-transparent;
    }
    .btn.loading::after {
        @apply animate-spin rounded-full border-neutral-0 inline-block border-2 border-solid;
        content: "";
        border-bottom-color: transparent !important;
        width: 16px;
        height: 16px;
        position: absolute;
        left: calc(50% - 8px);
        top: calc(50% - 8px);
    }
    .btn.outline.loading::after {
        @apply border-neutral-900;
    }
    .btn.loading:disabled::after,
    .btn.loading.disabled::after {
        @apply border-neutral-900;
    }
    .btn.outline.loading:disabled::after,
    .btn.outline.loading.disabled::after {
        @apply border-neutral-900;
    }

    .btn.fluid {
        @apply w-full block;
    }

    .btn:deep() *,
    .btn:deep() * {
        color: inherit;
    }

    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }
}
</style>

<docs>

#### Usage
```js
import { VButton } from 'vue-ui-light';
```
<br/>
<br/>

#### Variants

<example>
<template v-slot:preview>
<div class="space-y-1 space-x-3">
	<v-button>Default Button</v-button>
	<v-button variant="primary">Primary Button</v-button>
	<v-button variant="secondary">Secondary Button</v-button>
	<v-row />
	<v-button variant="tertiary">Tertiary Button</v-button>
	<v-button variant="info">Info Button</v-button>
	<v-button variant="danger">Danger Button</v-button>
	<v-row />
	<v-button variant="warning">Warning Button</v-button>
	<v-button variant="success">Success Button</v-button>
	<v-button variant="orange">Orange Button</v-button>
</div>
</template>
<template v-slot:source>

```html
<v-button>Default Button</v-button>
<v-button variant="primary">Primary Button</v-button>
<v-button variant="secondary">Secondary Button</v-button>
<v-button variant="tertiary">Tertiary Button</v-button>
<v-button variant="info">Info Button</v-button>
<v-button variant="danger">Danger Button</v-button>
<v-button variant="warning">Warning Button</v-button>
<v-button variant="success">Success Button</v-button>
<v-button variant="orange">Orange Button</v-button>
```
</template>
</example>

#### Sizes
<example>
<template v-slot:preview>
<div class="space-x-3">
	<v-button  size="lg"> Large </v-button>
    <v-button  size="md"> Medium </v-button>
    <v-button  size="sm"> Small </v-button>
</div>
</template>
<template v-slot:source>

```html
	<v-button  size="lg"> Large </v-button>
    <v-button  size="md"> Medium </v-button>
    <v-button  size="sm"> Small </v-button>
```
</template>
</example>


#### Icons
<example>
<template v-slot:preview>
<div class="space-x-1">
	<v-button icon-left="description"> Left Icon </v-button>
    <v-button icon-right="description"> Right Icon </v-button>
    <v-button icon-right="description" icon-left="description"> Double Icon </v-button>
    <v-button icon-left="description" icon-only />
</div>
</template>
<template v-slot:source>

```html
	<v-button icon-left="description" size="md"> Left Icon </v-button>
    <v-button icon-right="description" size="md"> Right Icon </v-button>
    <v-button icon-right="description" icon-left="description" size="md"> Double Icon </v-button>
    <v-button icon-left="description" size="md" icon-only />
```
</template>
</example>

#### States
<example>
<template v-slot:preview>
<div class="space-x-4">
<v-button variant="primary">Normal Button</v-button>
<v-button variant="primary" active>Active Button</v-button>
<v-button variant="primary" loading>Loading</v-button>
<v-button variant="primary" disabled>Disabled Button</v-button>
</div>
<br/>
<v-button variant="primary" block>Block Button</v-button>
</template>
<template v-slot:source>

```html
<v-button variant="primary">Normal Button</v-button>
<v-button variant="primary" active>Active Button</v-button>
<v-button variant="primary" loading>Loading</v-button>
<v-button variant="primary" disabled>Disabled Button</v-button>
<v-button variant="primary" block>Block Button</v-button>
```
</template>
</example>

#### Outline Mode
<example>
<template v-slot:preview>
<div class="space-y-1 space-x-3">
<v-button outline > OutlinE </v-button>
<v-button outline icon-left="description"> OutlinE </v-button>
<v-button outline icon-right="description"> OutlinE </v-button>
<v-button outline icon-right="description" icon-left="description"> ICONS </v-button>
<v-button outline icon-left="description" icon-only />
<v-row />
<v-button outline size="md" disabled> Disabled </v-button>
<v-button outline icon-left="description" size="md" disabled icon-only />
<v-button outline loading>Loading</v-button>
</div>
</template>
<template v-slot:source>

```html
<v-button> OutlinE </v-button>
<v-button icon-left="description"> OutlinE </v-button>
<v-button icon-right="description"> OutlinE </v-button>
<v-button icon-right="description" icon-left="description"> ICONS </v-button>
<v-button icon-left="description" icon-only />
<v-button size="md" disabled> Disabled </v-button>
<v-button icon-left="description" size="md" disabled icon-only />
<v-button loading>Loading</v-button>
</div>
```
</template>
</example>

#### Anchor buttons and custom tags
<example>
<template v-slot:preview>
<div class="space-y-1">
	<v-row>
		<v-button variant="link" tag="a" href="https://google.com">Anchor Button</v-button>
	</v-row>
	<v-row>
		<v-button variant="link" to="/docs/components/button">Router Button</v-button>
	</v-row>
</div>
</template>
<template v-slot:source>

```html
<v-button tag="a" href="https://google.com">Anchor Button</v-button>
<v-button
	variant="link"
	to="/docs/components/button"
>
	Router Button
</v-button>
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
