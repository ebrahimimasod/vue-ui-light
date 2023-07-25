<template>
	<div :class="wrapperClasses">
		<div
			:class="$style.divider"
			aria-hidden="true"
		>
			<div :class="lineClasses" />
		</div>
		<div :class="titleClasses">
			<!-- @slot divider title -->
			<slot
				v-if="$slots.title"
				name="title"
			/>
			<span
				v-else-if="title"
				:class="$style.innertitle"
			> {{ title }} </span>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'VDivider',

	props: {
		/**
         * Divider's title used in absensce of 'title' slot.
         */
		title: {
			type: String,
		},
		/**
         * Divider's different style.
         * @values solid, dashed , dotted
         */
		mode: {
			type: String,
			default: 'solid',
		},
		/**
         * Divider's title position.
         * @values center, start , end
         */ position: {
			type: String,
			default: 'center',
		},
		 /**
         * Vertical mode.
         */
		vertical: {
			type: Boolean,
		},
	},

	computed: {
		wrapperClasses(): Array<string> {
			const classNames = [this.$style.wrapper];
			if (this.vertical) {
				classNames.push(this.$style.vertical);
			}
			return classNames;
		},
		lineClasses(): Array<string> {
			const classNames = [this.$style.line];
			if (this.mode) {
				classNames.push(this.$style[this.mode]);
			}
			return classNames;
		},
		titleClasses(): Array<string> {
			const classNames = [this.$style.title];
			if (this.position) {
				classNames.push(this.$style[this.position]);
			}
			return classNames;
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .wrapper {
        @apply relative;
    }
    .wrapper.vertical {
        @apply transform rotate-90;
    }
    .divider {
        @apply absolute inset-0 flex items-center;
    }
    .line {
        @apply w-full h-px;
    }
    .line.solid {
        @apply bg-neutral-50;
    }
    .line.dashed {
        background-image: linear-gradient(to right, transparent 36%, var(--neutral-50) 36%);
        background-size: 20px 100%;
    }
    .line.dotted {
        background-image: linear-gradient(to right, transparent 70%, var(--neutral-50) 70%);
        background-size: 10px 100%;
		height: 3px;
    }
    .title {
        @apply relative flex;
    }
    .title.center {
        @apply justify-center;
    }
    .title.start {
        @apply justify-start;
    }
    .title.end {
        @apply justify-end;
    }
    .innertitle {
        @apply px-3 py-1 bg-neutral-25 text-sm text-neutral-300 rounded;
    }
}
</style>

<docs>
## Usage

```js
import { VDivider } from "vue-ui-light";
```

<br/>
<br/>

### Default

<example>
<template v-slot:preview>
	<v-divider class="my-8" />
	<v-divider class="my-8" />
	<v-divider class="my-8" />
</template>
<template v-slot:source>

```html
	<v-divider />
	<v-divider />
	<v-divider />
```
</template>
</example>

### Mode

<example>
<template v-slot:preview>
	<v-divider class="my-8" mode="solid" />
	<v-divider class="my-8" mode="dashed" />
	<v-divider class="my-8" mode="dotted" />
</template>
<template v-slot:source>

```html
	<v-divider mode="solid" />
	<v-divider mode="dashed" />
	<v-divider mode="dotted" />
```
</template>
</example>

### Title
<example>
<template v-slot:preview>
	<v-divider title="Divider" position="start" />
	<v-divider title="Divider" position="center" />
	<v-divider title="Divider" position="end" />
</template>
<template v-slot:source>

```html
	<v-divider title="Divider" position="start" />
	<v-divider title="Divider" position="center" />
	<v-divider title="Divider" position="end" />
```
</template>
</example>

### Vertical
<example minHeight="400">
<template v-slot:preview>
	<v-divider mode="dashed" vertical />
</template>
<template v-slot:source>

```html
	<v-divider mode="dashed" vertical />
```
</template>
</example>

</docs>
