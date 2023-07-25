<template>
	<v-popover
		:position="position"
		:trigger="trigger"
		:offset="offset"
	>
		<template #target>
			<slot />
		</template>
		<template #content>
			<span
				v-if="!disabled"
				id="tooltip"
				:class="contentClass"
			>
				<div
					id="arrow"
					:class="arrowClass"
				/>
				<slot
					v-if="$slots['content']"
					name="content"
					:content="content"
				/>
				<div v-else>
					{{ content }}
				</div>
			</span>
		</template>
	</v-popover>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VPopover } from '@/components';

export default defineComponent({
	name: 'VTooltip',
	components: {
		VPopover,
	},
	props: {
		/**
         * content of tooltip e.g text
         */
		content: {
			type: String,
			default: '',
		},
		/**
         * Tooltip's different positions.
         * @values top , right , bottom , left
         * @default `top`
         */
		position: {
			type: String,
			default: 'top',
			validator(propValue: string) {
				return ['top', 'right', 'bottom', 'left'].includes(propValue);
			},
		},
		/**
         * Tooltip's different sizes.
         * @values sm , md , lg , maxContent
         * @default `sm`
         */
		size: {
			type: String,
			default: 'sm',
			validator(propValue: string) {
				return ['sm', 'md', 'lg'].includes(propValue);
			},
		},
		/**
         * Badge's color variant
         * @values neutral, primary, secondary, tertiary, danger, warning, info, success, orange
         */
		variant: {
			type: String,
			default: 'neutral',
		},
		/**
         * toggle disabled state.
         * @default `false`
         */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
         * The offset number passed down to popover component.
         */
		offset: {
			type: [String, Number],
			default: 10,
		},
		/**
         * Popover triggerer
         * @values 'click' 'hover'
         * @default 'hover'
         */
		trigger: {
			type: String as PropType<'click' | 'hover'>,
			default: 'hover',
		},
	},
	computed: {
		contentClass(): Array<string> {
			const classNames = [this.$style.content];
			classNames.push(this.$style[this.variant]);
			classNames.push(this.$style[this.size]);
			return classNames;
		},
		arrowClass(): Array<string> {
			const classNames = [this.$style.arrow];
			classNames.push(this.$style[this.position]);
			classNames.push(this.$style[this.variant]);
			return classNames;
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .content {
        @apply relative inline-block bg-neutral-700 text-white rounded-lg text-center py-2 px-4 z-50;
    }

    .content.primary,
    .arrow.primary {
        @apply bg-primary-700 !important;
    }

    .content.secondary,
    .arrow.secondary {
        @apply bg-secondary-700 !important;
    }

    .content.tertiary,
    .arrow.tertiary {
        @apply bg-tertiary-700 !important;
    }

    .content.success,
    .arrow.success {
        @apply bg-success-700 !important;
    }

    .content.info,
    .arrow.info {
        @apply bg-info-700 !important;
    }

    .content.danger,
    .arrow.danger {
        @apply bg-danger-700 !important;
    }

    .content.warning,
    .arrow.warning {
        @apply bg-warning-700 text-neutral-700 !important;
    }

    .content.orange,
    .arrow.orange {
        @apply bg-orange-700 !important;
    }

    .content.sm {
        @apply w-48 !important;
    }
    .content.md {
        @apply w-64 !important;
    }
    .content.lg {
        @apply w-96 !important;
    }
    .content.maxContent {
        @apply w-max !important;
    }

    .arrow {
        @apply bg-neutral-700 absolute w-3 h-3 transform rotate-45;
    }

    div[data-popper-placement="bottom"] > div * > .arrow {
        left: calc(50% - 5px);
        top: -5px;
    }
    div[data-popper-placement="top"] > div * > .arrow {
        left: calc(50% - 5px);
        bottom: -5px;
    }
    div[data-popper-placement="left"] > div * > .arrow {
        top: calc(50% - 5px);
        right: -5px;
    }
    div[data-popper-placement="right"] > div * > .arrow {
        top: calc(50% - 5px);
        left: -5px;
    }
}
</style>

<docs>
## Usage

```js
import { VTooltip } from "vue-ui-light";
```

<br/>
<br/>

### Default

<example min-height="300">
<template v-slot:preview>
<div class="flex justify-around p-2">
		<v-tooltip position="right"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Right </v-button>
		</v-tooltip>
		<v-tooltip position="bottom"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Bottom </v-button>
		</v-tooltip>
</div>

<div class="flex justify-around p-2">
		<v-tooltip position="top"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Top </v-button>
		</v-tooltip>
		<v-tooltip position="left"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Left </v-button>
		</v-tooltip>
</div>
</template>
<template v-slot:source>

```html
	<v-tooltip position="right" :content="content">
		<v-button> Right </v-button>
	</v-tooltip>
	<v-tooltip position="bottom" :content="content">
		<v-button> Bottom </v-button>
	</v-tooltip>
	<v-tooltip position="top" :content="content">
		<v-button> Top </v-button>
	</v-tooltip>
	<v-tooltip position="left" :content="content">
		<v-button> Left </v-button>
	</v-tooltip>
```
```js
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
'Maecenas quis tortor accumsan tellus feugiat maximus vel nec ligula. ',
```
</template>
</example>

<br/>
<br/>


### Custom / Disabled

<example min-height="300">
<template v-slot:preview>
<div class="flex justify-around py-8">
		<v-tooltip position="right"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button>
					Custom Right
				</v-button>
				<template #content="{ content }">
					<!-- Tooltip Custume content -->
					<h6>Slot tooltip</h6>
					<small class="text-muted">slot tooltip</small>
					<div>{{ content }}</div>
					<span class="align-bottom">slot tooltip</span>
				</template>
		</v-tooltip>
		<v-tooltip disabled position="left" content="content" >
			<v-button>Disabled TOOlTIP</v-button>
		</v-tooltip>
</div>
</template>
<template v-slot:source>

```html
	<v-tooltip position="right" :content="content" >
			<v-button> Custom Right </v-button>
			<template #content="{ content }">
				<h6>Slot tooltip</h6>
				<small class="text-muted">slot tooltip</small>
				<div>{{ content }}</div>
				<span class="align-bottom">slot tooltip</span>
			</template>
	</v-tooltip>
	<v-tooltip disabled position="left" :content="content" >
		<v-button>Disabled TOOlTIP</v-button>
	</v-tooltip>
```
```js
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
'Maecenas quis tortor accumsan tellus feugiat maximus vel nec ligula. ',
```
</template>
</example>


### Trigger

<example min-height="300">
<template v-slot:preview>
<div class="flex justify-around p-2">
		<v-tooltip position="right" trigger="hover"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Hover </v-button>
		</v-tooltip>
		<v-tooltip position="bottom" trigger="click"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Click </v-button>
		</v-tooltip>
	</div>
</template>
<template v-slot:source>

```html
	<v-tooltip position="right" :content="content" trigger="hover">
		<v-button> Hover </v-button>
	</v-tooltip>
	<v-tooltip position="bottom" :content="content" trigger="click">
		<v-button> Click </v-button>
	</v-tooltip>
```
```js
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
'Maecenas quis tortor accumsan tellus feugiat maximus vel nec ligula. ',
```
</template>
</example>


### Variant

<example min-height="300">
<template v-slot:preview>
<div class="flex justify-around p-2">
		<v-tooltip position="bottom" variant="primary"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Primary </v-button>
		</v-tooltip>
		<v-tooltip position="bottom" variant="tertiary"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Tertiary </v-button>
		</v-tooltip>
		<v-tooltip position="bottom" variant="danger"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Danger </v-button>
		</v-tooltip>
		<v-tooltip position="bottom" variant="secondary"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> secondary </v-button>
		</v-tooltip>
		<v-tooltip position="bottom" variant="orange"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Orange </v-button>
		</v-tooltip>
	</div>
</template>
<template v-slot:source>

```html
	<v-tooltip position="bottom" :content="content" variant="primary">
		<v-button> Primary </v-button>
	</v-tooltip>
	<v-tooltip position="bottom" :content="content" variant="tertiary">
		<v-button> Tertiary </v-button>
	</v-tooltip>
	...
```
```js
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
'Maecenas quis tortor accumsan tellus feugiat maximus vel nec ligula. ',
```
</template>
</example>

<br/>
<br/>

<br/>
<hr/>
<br/>
</docs>
