<template>
	<component
		:is="tag"
		class="col"
		:class="classes"
	>
		<!-- @slot default slot -->
		<slot />
	</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

function columnSizeValidation(width: number): boolean {
	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto'].includes(width);
}

/**
 * @displayName Col
 */
export default defineComponent({
	name: 'VCol',
	props: {
		/**
         * Columns width at XS screens. must be a number in range of 1 to 12.
         * @values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto
         */
		xs: {
			type: [Number, String],
			validator: columnSizeValidation,
		},
		/**
         * Columns width at SM screens. must be a number in range of 1 to 12.
         * @values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto
         */
		sm: {
			type: [Number, String],
			validator: columnSizeValidation,
		},
		/**
         * Columns width at Md screens. must be a number in range of 1 to 12.
         * @values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto
         */
		md: {
			type: [Number, String],
			validator: columnSizeValidation,
		},
		/**
         * Columns width at LG screens. must be a number in range of 1 to 12.
         * @values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto
         */
		lg: {
			type: [Number, String],
			validator: columnSizeValidation,
		},
		/**
         * Columns width at XL screens. must be a number in range of 1 to 12.
         * @values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto
         */
		xl: {
			type: [Number, String],
			validator: columnSizeValidation,
		},
		/**
         * Columns width at 2XL screens. must be a number in range of 1 to 12.
         * @values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto
         */
		xxl: {
			type: [Number, String],
			validator: columnSizeValidation,
		},
		/**
         * Columns width at 2XL screens. must be a number in range of 1 to 12.
         * @values 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, auto
         */
		xxxl: {
			type: [Number, String],
			validator: columnSizeValidation,
		},
		/**
         * Flex's align-self property.
         * @values start, end, center
         */
		alignSelf: {
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

			const { xs, sm, md, lg, xl, xxl, xxxl, alignSelf } = this;
			if (xs) {
				classNames.push(`xs-${xs}`);
			}
			if (sm) {
				classNames.push(`sm-${sm}`);
			}
			if (md) {
				classNames.push(`md-${md}`);
			}
			if (lg) {
				classNames.push(`lg-${lg}`);
			}
			if (xl) {
				classNames.push(`xl-${xl}`);
			}
			if (xxl) {
				classNames.push(`xxl-${xxl}`);
			}
			if (this.xxxl) {
				classNames.push(`xxxl-${xxxl}`);
			}
			if (alignSelf) {
				classNames.push(`align-self-${alignSelf}`);
			}

			return classNames;
		},
	},
});
</script>

<style lang="postcss">
@tailwind components;
@layer components {
    .col {
        @apply block relative;
    }

    .align-self-start {
        @apply self-start;
    }
    .align-self-end {
        @apply self-end;
    }
    .align-self-center {
        @apply self-center;
    }

    .xs-auto {
        @apply flex-1;
    }
    .xs-0 {
        @apply flex-initial w-auto;
    }
    .xs-1 {
        @apply w-1/12;
    }
    .xs-2 {
        @apply w-2/12;
    }
    .xs-3 {
        @apply w-3/12;
    }
    .xs-4 {
        @apply w-4/12;
    }
    .xs-5 {
        @apply w-5/12;
    }
    .xs-6 {
        @apply w-6/12;
    }
    .xs-7 {
        @apply w-7/12;
    }
    .xs-8 {
        @apply w-8/12;
    }
    .xs-9 {
        @apply w-9/12;
    }
    .xs-10 {
        @apply w-10/12;
    }
    .xs-11 {
        @apply w-11/12;
    }
    .xs-12 {
        @apply w-full;
    }

    @screen sm {
        .sm-auto {
            @apply flex-1;
        }
        .sm-0 {
            @apply flex-initial w-auto;
        }
        .sm-1 {
            @apply w-1/12 flex-initial;
        }
        .sm-2 {
            @apply w-2/12 flex-initial;
        }
        .sm-3 {
            @apply w-3/12 flex-initial;
        }
        .sm-4 {
            @apply w-4/12 flex-initial;
        }
        .sm-5 {
            @apply w-5/12 flex-initial;
        }
        .sm-6 {
            @apply w-6/12 flex-initial;
        }
        .sm-7 {
            @apply w-7/12 flex-initial;
        }
        .sm-8 {
            @apply w-8/12 flex-initial;
        }
        .sm-9 {
            @apply w-9/12 flex-initial;
        }
        .sm-10 {
            @apply w-10/12 flex-initial;
        }
        .sm-11 {
            @apply w-11/12 flex-initial;
        }
        .sm-12 {
            @apply w-full flex-initial;
        }
    }

    @screen md {
        .md-auto {
            @apply flex-1;
        }
        .md-0 {
            @apply flex-initial w-auto;
        }
        .md-1 {
            @apply w-1/12 flex-initial;
        }
        .md-2 {
            @apply w-2/12 flex-initial;
        }
        .md-3 {
            @apply w-3/12 flex-initial;
        }
        .md-4 {
            @apply w-4/12 flex-initial;
        }
        .md-5 {
            @apply w-5/12 flex-initial;
        }
        .md-6 {
            @apply w-6/12 flex-initial;
        }
        .md-7 {
            @apply w-7/12 flex-initial;
        }
        .md-8 {
            @apply w-8/12 flex-initial;
        }
        .md-9 {
            @apply w-9/12 flex-initial;
        }
        .md-10 {
            @apply w-10/12 flex-initial;
        }
        .md-11 {
            @apply w-11/12 flex-initial;
        }
        .md-12 {
            @apply w-full flex-initial;
        }
    }

    @screen lg {
        .lg-auto {
            @apply flex-1;
        }
        .lg-0 {
            @apply flex-initial w-auto;
        }
        .lg-1 {
            @apply w-1/12 flex-initial;
        }
        .lg-2 {
            @apply w-2/12 flex-initial;
        }
        .lg-3 {
            @apply w-3/12 flex-initial;
        }
        .lg-4 {
            @apply w-4/12 flex-initial;
        }
        .lg-5 {
            @apply w-5/12 flex-initial;
        }
        .lg-6 {
            @apply w-6/12 flex-initial;
        }
        .lg-7 {
            @apply w-7/12 flex-initial;
        }
        .lg-8 {
            @apply w-8/12 flex-initial;
        }
        .lg-9 {
            @apply w-9/12 flex-initial;
        }
        .lg-10 {
            @apply w-10/12 flex-initial;
        }
        .lg-11 {
            @apply w-11/12 flex-initial;
        }
        .lg-12 {
            @apply w-full flex-initial;
        }
    }

    @screen xl {
        .xl-auto {
            @apply flex-1;
        }
        .xl-0 {
            @apply flex-initial w-auto;
        }
        .xl-1 {
            @apply w-1/12 flex-initial;
        }
        .xl-2 {
            @apply w-2/12 flex-initial;
        }
        .xl-3 {
            @apply w-3/12 flex-initial;
        }
        .xl-4 {
            @apply w-4/12 flex-initial;
        }
        .xl-5 {
            @apply w-5/12 flex-initial;
        }
        .xl-6 {
            @apply w-6/12 flex-initial;
        }
        .xl-7 {
            @apply w-7/12 flex-initial;
        }
        .xl-8 {
            @apply w-8/12 flex-initial;
        }
        .xl-9 {
            @apply w-9/12 flex-initial;
        }
        .xl-10 {
            @apply w-10/12 flex-initial;
        }
        .xl-11 {
            @apply w-11/12 flex-initial;
        }
        .xl-12 {
            @apply w-full flex-initial;
        }
    }

    @screen 2xl {
        .xxl-auto {
            @apply flex-1;
        }
        .xxl-0 {
            @apply flex-initial w-auto;
        }
        .xxl-1 {
            @apply w-1/12 flex-initial;
        }
        .xxl-2 {
            @apply w-2/12 flex-initial;
        }
        .xxl-3 {
            @apply w-3/12 flex-initial;
        }
        .xxl-4 {
            @apply w-4/12 flex-initial;
        }
        .xxl-5 {
            @apply w-5/12 flex-initial;
        }
        .xxl-6 {
            @apply w-6/12 flex-initial;
        }
        .xxl-7 {
            @apply w-7/12 flex-initial;
        }
        .xxl-8 {
            @apply w-8/12 flex-initial;
        }
        .xxl-9 {
            @apply w-9/12 flex-initial;
        }
        .xxl-10 {
            @apply w-10/12 flex-initial;
        }
        .xxl-11 {
            @apply w-11/12 flex-initial;
        }
        .xxl-12 {
            @apply w-full flex-initial;
        }
    }

    @screen 3xl {
        .xxxl-auto {
            @apply flex-1;
        }
        .xxxl-0 {
            @apply flex-initial w-auto;
        }
        .xxxl-1 {
            @apply w-1/12 flex-initial;
        }
        .xxxl-2 {
            @apply w-2/12 flex-initial;
        }
        .xxxl-3 {
            @apply w-3/12 flex-initial;
        }
        .xxxl-4 {
            @apply w-4/12 flex-initial;
        }
        .xxxl-5 {
            @apply w-5/12 flex-initial;
        }
        .xxxl-6 {
            @apply w-6/12 flex-initial;
        }
        .xxxl-7 {
            @apply w-7/12 flex-initial;
        }
        .xxxl-8 {
            @apply w-8/12 flex-initial;
        }
        .xxxl-9 {
            @apply w-9/12 flex-initial;
        }
        .xxxl-10 {
            @apply w-10/12 flex-initial;
        }
        .xxxl-11 {
            @apply w-11/12 flex-initial;
        }
        .xxxl-12 {
            @apply w-full flex-initial;
        }
    }
}
</style>

<docs>
#### Usage
```js
import { VCol } from 'vue-ui-light';
```
<br/>
<br/>

Our grid system uses a 12 column flex layout to responsively layouts application content on any screen sizes.

#### Breakpoints
6 breakpoints supported out of the box:
- **xs** : 320px
- **sm** : 667px
- **md** : 768px
- **lg** : 1024px
- **xl** : 1280px
- **2xl** : 1366px
- **3xl** : 1440px

They will each be applied to screens that are equal or greater than them. Therefore, you may just use `xs` for all screens.

#### Basic Columns
Columns always initially use their content's width:

<example>
<template v-slot:preview>
	<v-row>
		<v-col class="border border-purple-50 p-4 bg-purple-100">Column 1</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100">Column 2</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100">Column 3 with more content</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
	<v-row>
		<v-col>Column 1</v-col>
		<v-col>Column 2</v-col>
		<v-col>Column 3 with more text</v-col>
	</v-row>
```
</template>
</example>
<br/>

But can be customized to fill available space too:

<example>
<template v-slot:preview>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100">Column 1</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100" xs="auto">Column auto</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100">Column 3</v-col>
	</v-row>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="auto">Column auto</v-col>
	</v-row>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" lg="auto">Auto on lg and up</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="auto">Auto on md and up</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" sm="auto">Auto on sm and up</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row>
	<v-col>Column 1</v-col>
	<v-col xs="auto">Column auto</v-col>
	<v-col>Column 3</v-col>
</v-row>
<v-row>
	<v-col xs="auto">Column auto</v-col>
</v-row>
<v-row >
		<v-col lg="auto">Auto on md and up</v-col>
		<v-col md="auto">Auto on md and up</v-col>
		<v-col sm="auto">Auto on md and up</v-col>
</v-row>
```
</template>
</example>
<br/>

#### Responsive Columns

<example>
<template v-slot:preview>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="12">xs-12</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="12" md="6"> xs-12, md-6</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="auto" sm="8">xs-auto, sm-8</v-col>
	</v-row>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="auto">xs-auto</v-col>
	</v-row>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" lg="auto">lg-auto</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="auto">md-auto</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" sm="auto">sm-auto</v-col>
	</v-row>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="3">md-3</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="3">md-3</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="3">md-3</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="3">md-3</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row class="mb-2">
	<v-col xs="12">xs-12</v-col>
	<v-col xs="12" md="6"> xs-12, md-6</v-col>
	<v-col xs="auto" sm="8">xs-auto, sm-8</v-col>
</v-row>
<v-row class="mb-2">
	<v-col xs="auto">xs-auto</v-col>
</v-row>
<v-row class="mb-2">
	<v-col lg="auto">lg-auto</v-col>
	<v-col md="auto">md-auto</v-col>
	<v-col sm="auto">sm-auto</v-col>
</v-row>
<v-row class="mb-2">
	<v-col md="3">md-3</v-col>
	<v-col md="3">md-3</v-col>
	<v-col md="3">md-3</v-col>
	<v-col md="3">md-3</v-col>
</v-row>
```
</template>
</example>
<br/>

#### Alignment

Use `align-self` prop to modify column's alignment, individually:

<example>
<template v-slot:preview>
	<v-row class="h-40">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">no align</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3" align-self="start">start</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3" align-self="center">center</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3" align-self="end">end</v-col>
	</v-row>
	<hr class="my-5"/>
	<v-row class="h-40" align-items="start">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">no align</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3" align-self="end">end</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3" align-self="center">center</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">no align</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row class="h-40">
	<v-col xs="3">no align</v-col>
	<v-col xs="3" align-self="start">start</v-col>
	<v-col xs="3" align-self="center">center</v-col>
	<v-col xs="3" align-self="end">end</v-col>
</v-row>
<hr class="my-5"/>
<v-row class="h-40" align-items="start">
	<v-col xs="3">no align</v-col>
	<v-col xs="3" align-self="end">end</v-col>
	<v-col xs="3" align-self="center">center</v-col>
	<v-col xs="3">no align</v-col>
</v-row>
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
