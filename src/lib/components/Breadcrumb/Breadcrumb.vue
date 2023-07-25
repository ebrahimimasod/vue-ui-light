<template>
	<ol :class="$style.breadcrumbs">
		<li
			v-for="(crumb, index) in crumbs"
			:key="index"
			@click="onSelect(crumb, index)"
		>
			<slot
				v-if="$slots.default"
				:crumb="crumb"
				:index="index"
			/>
			<router-link
				v-else-if="crumb.to && index !== crumbs.length - 1"
				:to="crumb.to"
				:class="lastClass(index)"
			>
				<v-Icon
					v-if="crumb.leftIcon"
					:name="crumb.leftIcon"
					size="14"
					:class="$style.icon"
				/>
				<div :class="$style.bcLink">
					{{ crumb.label }}
				</div>
				<v-Icon
					v-if="crumb.rightIcon"
					:name="crumb.rightIcon"
					size="14"
					:class="$style.icon"
				/>
			</router-link>
			<span
				v-else
				:class="lastClass(index)"
			>
				<v-Icon
					v-if="crumb.leftIcon"
					:name="crumb.leftIcon"
					size="14"
					:class="$style.icon"
				/>
				<div :class="$style.bcText">{{ crumb.label }}</div>
				<v-Icon
					v-if="crumb.rightIcon"
					:name="crumb.rightIcon"
					size="14"
					:class="$style.icon"
				/>
			</span>
			<span
				v-if="index !== crumbs.length - 1"
				:class="$style.seperator"
			>
				{{ seperator }}
			</span>
		</li>
	</ol>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { VIcon } from '@/components/Icon/index';

interface Crumb {
	label: string;
	to?: RouteLocationRaw;
	leftIcon: string;
	rightIcon: string;
}

/**
 * @displayName Breadcrumb
 */
export default defineComponent({
	name: 'VBreadcrumb',

	components: {
		VIcon,
	},

	props: {
		/**
         * Array of crumb items.
         */
		crumbs: {
			type: Array as PropType<Crumb[]>,
			required: true,
		},
		/**
         * seperator style
         * @default /
         */
		seperator: {
			type: String,
			default: '/',
		},
		/**
         * Crumbs's different colors and styles.
         * @values neutral, primary, secondary, tertiary, danger, warning, info, success, link, orange
         */
		variant: {
			type: String,
			default: 'neutral',
		},
	},

	emits: ['select'],

	methods: {
		onSelect(crumb: Crumb, index: number) {
			/**
             * v-model's update event.
             * @event select
             * @property {object} crumb Crumb's object
             * @property {number} index Selected crumb's index
             */
			this.$emit('select', crumb, index);
		},
		lastClass(index: number): Array<string> {
			const classNames = [] as string[];
			if (index === this.crumbs.length - 1) {
				classNames.push(this.$style.last);
				if (this.variant) {
					classNames.push(this.$style[this.variant]);
				}
			}
			return classNames;
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .breadcrumbs {
        @apply flex flex-nowrap list-none m-0 p-0;
    }
    .bcLink {
        @apply inline cursor-pointer text-xs font-semibold text-neutral-500;
        @apply hover:underline;
        line-height: 1.33;
    }
    .bcText {
        @apply inline text-xs font-semibold text-neutral-500;
        line-height: 1.33;
    }
    .icon {
        @apply mx-2 align-baseline text-neutral-500;
    }
    .last > * {
        @apply font-bold text-sm !important;
    }
    .seperator {
        @apply text-neutral-300 font-semibold cursor-not-allowed pointer-events-none mx-4;
    }

    .last.neutral > * {
        @apply text-neutral !important;
    }

    .last.primary > * {
        @apply text-primary !important;
    }

    .last.secondary > * {
        @apply text-secondary !important;
    }

    .last.tertiary > * {
        @apply text-tertiary !important;
    }

    .last.success > * {
        @apply text-success !important;
    }

    .last.info > * {
        @apply text-info !important;
    }

    .last.danger > * {
        @apply text-danger !important;
    }

    .last.warning > * {
        @apply text-warning !important;
    }

    .last.orange > * {
        @apply text-orange !important;
    }
}
</style>

<docs>
## Usage

```js
import { VBreadcrumb } from "vue-ui-light";
```

<br/>
<br/>

### Default

<example>
<template v-slot:preview>
	 <v-breadcrumb
            :crumbs="[
                { label: 'Cloud', to: { name: 'home' } },
                { label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { label: 'Project', to: { name: 'Breadcrumb' } },
                { label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
    />
</template>
<template v-slot:source>

```html
	<v-breadcrumb :crumbs="crumbItems"/>
```
```js
crumbItems: [
                { label: 'Cloud', to: { name: 'home' } },
                { label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { label: 'Project', to: { name: 'Breadcrumb' } },
                { label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]
```
</template>
</example>

### Seperator

<example>
<template v-slot:preview>
	<div class="my-8" >
	<v-breadcrumb
		:crumbs="[
                { label: 'Cloud', to: { name: 'home' } },
                { label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { label: 'Project', to: { name: 'Breadcrumb' } },
                { label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
		seperator="//"
	/>
	</div>
	<div class="my-8" >
	<v-breadcrumb
		:crumbs="[
                { label: 'Cloud', to: { name: 'home' } },
                { label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { label: 'Project', to: { name: 'Breadcrumb' } },
                { label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
		seperator="|"
	/>
	</div>
	<div class="my-8" >
	<v-breadcrumb
		:crumbs="[
                { label: 'Cloud', to: { name: 'home' } },
                { label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { label: 'Project', to: { name: 'Breadcrumb' } },
                { label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
		seperator="⏵"
	/>
	</div>
</template>
<template v-slot:source>

```html
	<v-breadcrumb seperator="//" :crumbs="crumbItems"/>
	<v-breadcrumb seperator="|" :crumbs="crumbItems"/>
	<v-breadcrumb seperator="⏵" :crumbs="crumbItems"/>
```
```js
crumbItems: [
                { label: 'Cloud', to: { name: 'home' } },
                { label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { label: 'Project', to: { name: 'Breadcrumb' } },
                { label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]
```
</template>
</example>


### with icon
Use `Icons` valid names for icon property.

<example>
<template v-slot:preview>
	 <div class="my-8" >
	 <v-breadcrumb
            :crumbs="[
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
    />
	</div>
	 <div class="my-8" >
	 <v-breadcrumb
            :crumbs="[
                { leftIcon: 'offline', label: 'Cloud', to: { name: 'home' } },
                { leftIcon: 'offline', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { leftIcon: 'offline', label: 'Project', to: { name: 'Breadcrumb' } },
                { leftIcon: 'offline', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
    />
	</div>
	 <div class="my-8" >
	 <v-breadcrumb
            :crumbs="[
                { rightIcon: 'online', leftIcon: 'offline', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
    />
	</div>
</template>
<template v-slot:source>

```html
	<v-breadcrumb :crumbs="crumbItemsRight"/>
	<v-breadcrumb :crumbs="crumbItemsLeft"/>
	<v-breadcrumb :crumbs="crumbItemsBoth"/>
```
```js
crumbItemsRight: [
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ],
crumbItemsLeft: [
                { leftIcon: 'offline', label: 'Cloud', to: { name: 'home' } },
                { leftIcon: 'offline', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { leftIcon: 'offline', label: 'Project', to: { name: 'Breadcrumb' } },
                { leftIcon: 'offline', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]
crumbItemsBoth: [
                { rightIcon: 'online', leftIcon: 'offline', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]
```
</template>
</example>

### Variant

<example>
<template v-slot:preview>
	<div class="my-8" >
	<v-breadcrumb
		variant="primary"
		:crumbs="[
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
	/>
	</div>
	<div class="my-8" >
	<v-breadcrumb
		variant="secondary"
		:crumbs="[
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
	/>
	</div>
	<div class="my-8" >
	<v-breadcrumb
		variant="tertiary"
		:crumbs="[
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
	/>
	</div>
</template>
<template v-slot:source>

```html
	<v-breadcrumb variant="primary" :crumbs="crumbItems"/>
	<v-breadcrumb variant="secondary" :crumbs="crumbItems"/>
	<v-breadcrumb variant="tertiary" :crumbs="crumbItems"/>
```
```js
crumbItems: [
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
