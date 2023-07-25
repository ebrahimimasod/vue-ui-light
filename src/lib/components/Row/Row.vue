<template>
	<component
		:is="tag"
		class="row"
		:class="classes"
	>
		<!-- @slot default slot -->
		<slot />
	</component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

/**
 * @displayName Row
 */
export default defineComponent({
	name: 'VRow',
	props: {
		/**
         * Flex direction.
         * @values column, row
         */
		direction: {
			type: String,
		},
		/**
         * Gutter space in X axis (horizontial).
         */
		gutterX: {
			type: [Number, String],
		},
		/**
         * Gutter space in Y axis (vertical).
         */
		gutterY: {
			type: [Number, String],
		},
		/**
         * Gutter space in all directions.
         */
		gutter: {
			type: [Number, String],
		},
		/**
         * Flex's align-item property.
         * @values start, end, center, baseline
         */
		alignItems: {
			type: String,
		},
		/**
         * Flex's align-content proprty.
         * @values start, end, center, between, around, evenly
         */
		alignContent: {
			type: String,
		},
		/**
         * Flex's justify-content property.
         * @values start, end, center, between, around, evenly
         */
		justify: {
			type: String,
		},
		/**
         * Flex's flex-wrap property.
         * @values wrap, nowrap
         */
		wrap: {
			type: String,
		},
		/**
         * Any valid HTML tag name. defaults to 'div'.
         */
		tag: {
			type: String,
			default: 'div',
		},
	},
	computed: {
		classes(): string[] {
			const classNames = [];
			if (this.direction) {
				classNames.push(this.direction);
			}
			if (this.wrap) {
				classNames.push(this.wrap);
			}
			if (this.alignItems) {
				classNames.push(`align-items-${this.alignItems}`);
			}
			if (this.alignContent) {
				classNames.push(`align-content-${this.alignContent}`);
			}
			if (this.justify) {
				classNames.push(`justify-content-${this.justify}`);
			}
			if (this.gutter) {
				classNames.push('');
			}

			return classNames;
		},
	},
});
</script>

<style lang="postcss">
@tailwind components;
@layer components {
    .row {
        @apply flex;
        @apply flex-row;
        @apply flex-wrap;

        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 100%;
    }

    .row {
        @apply flex-row;
    }
    .column {
        @apply flex-col;
    }
    .wrap {
        @apply flex-wrap;
    }
    .nowrap {
        @apply flex-nowrap;
    }
    .align-items-start {
        @apply items-start;
    }
    .align-items-end {
        @apply items-end;
    }
    .align-items-center {
        @apply items-center;
    }
    .align-items-baseline {
        @apply items-baseline;
    }
    .align-content-start {
        @apply content-start;
    }
    .align-content-end {
        @apply content-end;
    }
    .align-content-center {
        @apply content-center;
    }
    .align-content-between {
        @apply content-between;
    }
    .align-content-around {
        @apply content-around;
    }
    .align-content-evenly {
        @apply content-evenly;
    }
    .justify-content-start {
        @apply justify-start;
    }
    .justify-content-end {
        @apply justify-end;
    }
    .justify-content-center {
        @apply justify-center;
    }
    .justify-content-between {
        @apply justify-between;
    }
    .justify-content-around {
        @apply justify-around;
    }
    .justify-content-evenly {
        @apply justify-evenly;
    }
}
</style>

<docs>
#### Usage
```js
import { VRow } from 'vue-ui-light';
```
<br/>
<br/>

This component can be used as wrapper for `v-col` to utilize flex layout.

#### Direction

`v-row` uses `flex-direction: row` by default to place its children. this behavior can be modified using `direction` prop.

<example>
<template v-slot:preview>
	<v-row class="mb-4">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column one</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column two</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column three</v-col>
	</v-row>
	<v-row direction="column">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Row one</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Row two</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Row three</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row class="mb-4">
	<v-col>Column one</v-col>
	<v-col>Column two</v-col>
	<v-col>Column three</v-col>
</v-row>
<v-row direction="column">
	<v-col>Row one</v-col>
	<v-col>Row two</v-col>
	<v-col>Row three</v-col>
</v-row>
```
</template>
</example>
<br/>

#### Wrap

Children of the 'v-row' wrap to a new line by default if they exceed a line. Appending `wrap="nowrap"` to the `v-row`'s props, cause it to push its children in a row, makes its children shrink if provided width is not sufficient.

<example>
<template v-slot:preview>
	<v-row class="mb-4" wrap="nowrap">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column one</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column two</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column three</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column four</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column five</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column six</v-col>
	</v-row>
	<v-row class="mb-4" wrap="nowrap">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row class="mb-4">
	<v-col>Column one</v-col>
	<v-col>Column two</v-col>
	<v-col>Column three</v-col>
</v-row>
<v-row direction="column">
	<v-col>Row one</v-col>
	<v-col>Row two</v-col>
	<v-col>Row three</v-col>
</v-row>
```
</template>
</example>
<br/>

#### Justify Content
<example>
<template v-slot:preview>
	<v-row class="mb-4" justify="start">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(start)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(start)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4" justify="center">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(center)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(center)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4" justify="end">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(end)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(end)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4" justify="between">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(between)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(between)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(between)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4" justify="around">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(around)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(around)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(around)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4" justify="evenly">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(evenly)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(evenly)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(evenly)</span>
		</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row class="mb-4" justify="start">
	<v-col xs="3">
		col xs-3
		<span>(start)</span>
	</v-col>
	<v-col xs="3">
		col xs-3
		<span>(start)</span>
	</v-col>
</v-row>
<v-row class="mb-4" justify="center">
	<v-col xs="3">
		col xs-3
		<span>(center)</span>
	</v-col>
	<v-col xs="3">
		col xs-3
		<span>(center)</span>
	</v-col>
</v-row>
<v-row class="mb-4" justify="end">
	<v-col xs="3">
		col xs-3
		<span>(end)</span>
	</v-col>
	<v-col xs="3">
		col xs-3
		<span>(end)</span>
	</v-col>
</v-row>
<v-row class="mb-4" justify="between">
	<v-col xs="3">
		col xs-3
		<span>(between)</span>
	</v-col>
	<v-col xs="3">
		col xs-3
		<span>(between)</span>
	</v-col>
	<v-col xs="3">
		col xs-3
		<span>(between)</span>
	</v-col>
</v-row>
<v-row class="mb-4" justify="around">
	<v-col xs="2">
		col xs-3
		<span>(around)</span>
	</v-col>
	<v-col xs="2">
		col xs-3
		<span>(around)</span>
	</v-col>
	<v-col xs="2">
		col xs-3
		<span>(around)</span>
	</v-col>
</v-row>
<v-row class="mb-4" justify="evenly">
	<v-col xs="2">
		col xs-3
		<span>(evenly)</span>
	</v-col>
	<v-col xs="2">
		col xs-3
		<span>(evenly)</span>
	</v-col>
	<v-col xs="2">
		col xs-3
		<span>(evenly)</span>
	</v-col>
</v-row>
```
</template>
</example>
<br/>

#### Align Items
<example>
<template v-slot:preview>
	<v-row class="mb-4 h-24 bg-neutral-40 rounded" align-items="end" justify="center">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(end)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(end)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4 h-24 bg-neutral-40 rounded" align-items="center" justify="center">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4 h-24 bg-neutral-40 rounded" align-items="start" justify="center">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(start)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(start)</span>
		</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row align-items="end" justify="center">
	<v-col xs="4">
		xs-4
		<span>(end)</span>
	</v-col>
	<v-col xs="4">
		xs-4
		<span>(end)</span>
	</v-col>
</v-row>
<v-row align-items="center" justify="center">
	<v-col xs="4">
		xs-4
		<span>(center)</span>
	</v-col>
	<v-col xs="4">
		xs-4
		<span>(center)</span>
	</v-col>
</v-row>
<v-row align-items="start" justify="center">
	<v-col xs="4">
		xs-4
		<span>(start)</span>
	</v-col>
	<v-col xs="4">
		xs-4
		<span>(start)</span>
	</v-col>
</v-row>
```
</template>
</example>
<br/>

#### Align Content

When we're aliging children placed in multiple lines, `align-content` could be useful for better placement.

<example>
<template v-slot:preview>
	<v-row class="mb-4 h-52 bg-neutral-40 rounded" align-content="center" justify="center">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row align-content="center" justify="center">
	<v-col xs="4">
		xs-4
		<span>(center)</span>
	</v-col>
	<v-col xs="4">
		xs-4
		<span>(center)</span>
	</v-col>
	<v-col xs="4">
		xs-4
		<span>(center)</span>
	</v-col>
	<v-col xs="4">
		xs-4
		<span>(center)</span>
	</v-col>
</v-row>
```
</template>
</example>
<br/>


<br/>
<hr/>
<br/>
</docs>
