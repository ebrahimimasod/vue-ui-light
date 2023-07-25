<template>
	<component :is="tag">
		<!-- @slot text content -->
		<slot />
	</component>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'VText',
	props: {
		/**
         * Any Valid HTML 5 heading tags. also modifies the style of text.
         * @values p, span, a, del, i, em, b, strong, q, blockquote, small
         */
		tag: {
			type: String,
			default: 'span',
		},
	},
	computed: {
		classes(): string[] {
			const classNames = ['text'];
			return classNames;
		},
	},
});
</script>

<style lang="postcss">
@tailwind components;
@layer components {
    span {
        @apply font-body text-sm font-normal text-neutral-500;
        line-height: 1.33;
    }
    p {
        @apply font-body text-sm font-normal text-neutral-800 mt-0;
        line-height: 1.43;
    }
    a {
        @apply font-body font-medium text-sm text-primary no-underline;
        line-height: 1.43;
    }
    del {
        @apply font-body text-sm font-normal text-neutral-500;
        line-height: 1.71;
    }
    i,
    em {
        @apply font-body text-sm font-normal italic text-neutral-500;
        line-height: 1.71;
    }
    q,
    blockquote {
        @apply font-body text-sm font-normal italic text-neutral-100 m-0;
        line-height: 1.43;
    }
    u {
        @apply font-body text-sm font-normal underline text-neutral-500;
        line-height: 1.71;
    }
    small {
        @apply font-body text-heading1 font-normal text-neutral-100;
        line-height: 1.45;
    }
}
</style>

<docs>
#### Usage

```js
import { VText } from "vue-ui-light";
```

<br/>
<br/>

#### Default

<example>
<template v-slot:preview>
			<v-text tag="span"> A Caption text </v-text>
			<br>
			<v-text tag="p"> A Paragraph </v-text>
			<br>
			<v-text tag="a"> A Link </v-text>
			<br>
			<v-text tag="del"> A Deleted text </v-text>
			<br>
			<v-text tag="em"> An Italic text </v-text>
			<br>
			<v-text tag="q"> A Quoted text with quoted mark </v-text>
			<br>
			<v-text tag="blockquote"> A Quoted text without quoted mark </v-text>
			<br>
			<v-text tag="u"> An Underlined text </v-text>
			<br>
			<v-text tag="small"> An Footnote text </v-text>
</template>
<template v-slot:source>

```html
			<v-text tag="span"> A Caption text </v-text>
			<v-text tag="p"> A Paragraph </v-text>
			<v-text tag="a"> A Link </v-text>
			<v-text tag="del"> A Deleted text </v-text>
			<v-text tag="em"> An Italic text </v-text>
			<v-text tag="q"> A Quoted text with quoted mark </v-text>
			<v-text tag="blockquote"> A Quoted text without quoted mark </v-text>
			<v-text tag="u"> An Underlined text </v-text>
			<v-text tag="small"> An Footnote text </v-text>
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
