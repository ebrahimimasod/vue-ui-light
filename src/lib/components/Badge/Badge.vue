<template>
	<span :class="classes">
		{{ content }}
		<!-- @slot default slot -->
		<slot />
	</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/**
 * @displayName Badge
 */
export default defineComponent({
	name: 'VBadge',

	props: {
		/**
         * Badge's color variant
         * @values neutral, primary, secondary, tertiary, danger, warning, info, success, orange
         */
		variant: {
			type: String,
			default: 'neutral',
		},
		/**
         * Badge's pastel mode
         */
		pastel: {
			type: Boolean,
		},
		/**
         * Badge's content
         */
		content: {
			type: String,
		},
	},

	computed: {
		classes(): string[] {
			const classNames = [this.$style.badge];
			classNames.push(this.$style[this.variant]);

			if (this.pastel) {
				classNames.push(this.$style.pastel);
			}

			return classNames;
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .badge {
        @apply inline-block px-2 py-1;
        @apply text-white text-xs font-semibold;
        line-height: 15.6px;
        border-radius: 10px;
    }
    .neutral {
        @apply bg-neutral-700;
    }

    .primary {
        @apply bg-primary-700;
    }

    .secondary {
        @apply bg-secondary-700;
    }

    .tertiary {
        @apply bg-tertiary-700;
    }

    .success {
        @apply bg-success-700;
    }

    .info {
        @apply bg-info-700;
    }

    .danger {
        @apply bg-danger-700;
    }

    .warning {
        @apply bg-warning-700 text-neutral-700;
    }

    .orange {
        @apply bg-orange-700;
    }

    /* pastel */
    .pastel.neutral {
        @apply text-neutral-700 bg-neutral-50;
    }

    .pastel.primary {
        @apply text-primary-700 bg-primary-50;
    }

    .pastel.secondary {
        @apply text-secondary-700 bg-secondary-50;
    }

    .pastel.tertiary {
        @apply text-tertiary-700 bg-tertiary-50;
    }

    .pastel.success {
        @apply text-success-700 bg-success-50;
    }

    .pastel.info {
        @apply text-info-700 bg-info-50;
    }

    .pastel.danger {
        @apply text-danger-700 bg-danger-50;
    }

    .pastel.warning {
        @apply text-warning-700 bg-warning-50;
    }

    .pastel.orange {
        @apply text-orange-700 bg-orange-50;
    }
}
</style>

<docs>
## Usage

```js
import { VBadge } from "vue-ui-light";
```

<br/>
<br/>

## Type

<example>
<template v-slot:preview>
<div class="flex justify-around space-x-4">
	<v-badge>Solid badge</v-badge>
	<v-badge pastel>Pastel badge</v-badge>
</div>
</template>
<template v-slot:source>

```html
	<v-badge>Solid badge</v-badge>
	<v-badge pastel>Pastel badge</v-badge>
```
</template>
</example>

#### Default Variants

<example>
<template v-slot:preview>
<div class="flex justify-around space-x-4">
<div class="space-x-4 text-center">
	<v-badge class="mb-4"> Label text </v-badge>
	<v-badge class="mb-4" variant="primary"> Label text </v-badge>
	<v-badge class="mb-4" variant="secondary"> Label text </v-badge>
	<v-badge class="mb-4" variant="tertiary"> Label text </v-badge>
	<v-badge class="mb-4" variant="info"> Label text </v-badge>
	<v-badge class="mb-4" variant="success"> Label text </v-badge>
	<v-badge class="mb-4" variant="danger"> Label text </v-badge>
	<v-badge class="mb-4" variant="warning"> Label text </v-badge>
	<v-badge class="mb-4" variant="orange"> Label text </v-badge>
	<br/>
</div>
</div>
</template>
<template v-slot:source>

```html
	<v-badge> Label text </v-badge>
	<v-badge variant="primary"> Label text </v-badge>
	<v-badge variant="secondary"> Label text </v-badge>
	<v-badge variant="tertiary"> Label text </v-badge>
	<v-badge variant="info"> Label text </v-badge>
	<v-badge variant="success"> Label text </v-badge>
	<v-badge variant="danger"> Label text </v-badge>
	<v-badge variant="warning"> Label text </v-badge>
	<v-badge variant="orange"> Label text </v-badge>
```
</template>
</example>

#### Pastel Variants

<example>
<template v-slot:preview>
<div class="flex justify-around space-x-4">
<div class="space-x-4 text-center">
	<v-badge pastel class="mb-4"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="primary"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="tertiary"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="secondary"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="info"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="success"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="danger"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="warning"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="orange"> Label text </v-badge>
</div>
</div>
</template>
<template v-slot:source>

```html
	<v-badge pastel> Label text </v-badge>
	<v-badge pastel variant="primary"> Label text </v-badge>
	<v-badge pastel variant="tertiary"> Label text </v-badge>
	<v-badge pastel variant="secondary"> Label text </v-badge>
	<v-badge pastel variant="info"> Label text </v-badge>
	<v-badge pastel variant="success"> Label text </v-badge>
	<v-badge pastel variant="danger"> Label text </v-badge>
	<v-badge pastel variant="warning"> Label text </v-badge>
	<v-badge pastel variant="orange"> Label text </v-badge>
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
