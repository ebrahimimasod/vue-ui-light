<template>
	<i
		:class="classes"
		:style="iconSize"
	>
		<!-- @slot icon text -->
		<slot />
	</i>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'VIcon',

	props: {
		/**
         * valid icon name baesd on vue-ui-light-icons package.
         */
		name: {
			type: String,
			default: '',
		},
		/**
         * icon size in 'px' format.
         */
		size: {
			type: [Number, String],
			default: 24,
		},
		/**
         * toggle disabled state.
         */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
         * if icon clickable.
         */
		action: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		classes(): string[] {
			const classNames = [this.$style.icon, `icon-${this.name}`];
			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			if (this.action) {
				classNames.push(this.$style.action);
			}
			return classNames;
		},
		iconSize(): object {
			return {
				'font-size': `${this.size}px`,
			};
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    /* Base Icon */
    .icon {
        @apply align-middle font-normal;
        font-family: "vue-ui-light-icons" !important;
        speak: never;
        font-style: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        color: inherit;

        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .action {
        @apply p-1 rounded text-neutral-500 cursor-pointer;
        transition-duration: 0.2s;
        transition-property: background-color;
    }
    .action:disabled,
    .action.disabled {
        @apply bg-neutral-10 text-neutral-70 cursor-not-allowed pointer-events-none !important;
    }
    .action:hover,
    .action.hover {
        @apply text-blue bg-neutral-20;
    }
    .action:active,
    .action.active {
        @apply text-blue bg-blue-50;
    }
}
</style>

<docs>
#### Usage

```js
import { VIcon } from "vue-ui-light";
```

<br/>
<br/>

#### Default

<example>
<template v-slot:preview>
	<div class="flex justify-around">
		<v-icon name="activity" size="36" />
		<v-icon name="activity" size="57" />
		<v-icon name="activity" size="78" />
		<v-icon name="activity" size="108" />
	</div>
</template>
<template v-slot:source>

```html
		<v-icon name="activity" size="36" />
		<v-icon name="activity" size="57" />
		<v-icon name="activity" size="78" />
		<v-icon name="activity" size="108" />
```
</template>
</example>

#### States

<example>
<template v-slot:preview>
	<div class="flex justify-around">
		<v-icon name="activity" size="30" action />
		<v-icon name="activity" size="24" disabled />
		<v-icon name="activity" size="24" > with text </v-icon>
	</div>
</template>
<template v-slot:source>

```html
		<v-icon name="activity" size="36" action />
		<v-icon name="activity" size="36" disabled />
		<v-icon name="activity" size="24" > with text </v-icon>
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
