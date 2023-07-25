<template>
	<div :class="$style.accordion">
		<div
			:class="$style.header"
			@click="onToggle"
		>
			<div :class="$style.heading">
				<div v-if="$slots.leftIcon">
					<!--
					@slot Accordion leftIcon slot, can be used in replace of `left-icon` prop.
					-->
					<slot
						name="leftIcon"
						:active="isOpen"
					/>
				</div>
				<v-Icon
					v-else-if="leftIcon"
					:name="leftIcon"
					size="16"
					:class="$style.icon"
				/>
				<div v-if="$slots.header">
					<!--
					@slot Accordion header slot, can be used in replace of `title` prop.
					-->
					<slot
						name="header"
						:active="isOpen"
					/>
				</div>
				<p
					v-else
					:class="$style.title"
				>
					{{ title }}
					<span
						v-if="subtitle"
						:class="$style.subtitle"
					> {{ subtitle }}</span>
				</p>
			</div>
			<div v-if="$slots.rightIcon">
				<!--
					@slot Accordion rightIcon slot, can be used in replace of `right-icon` prop.
					-->
				<slot
					name="rightIcon"
					:active="isOpen"
				/>
			</div>
			<v-Icon
				v-else-if="rightIcon"
				:name="rightIcon"
				size="16"
				:class="[$style.icon, upsideClass]"
			/>
		</div>
		<div
			v-show="isOpen"
			:class="$style.body"
		>
			<v-divider
				class="py-4"
				:mode="divider"
			/>
			<!-- @slot Accordion content -->
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VIcon, VDivider } from '@/components';
import { generateId } from '@/utils';
import { AccordionInject } from './AccordionGroup.vue';

export default defineComponent({
	name: 'VSAccordion',

	components: {
		VIcon,
		VDivider,
	},

	inject: ['accordionGroup'],

	props: {
		/**
         * v-model's value.
         * @model
         */
		modelValue: {
			type: Boolean,
		},
		/**
         * Title used as accordion heading.
         */
		title: {
			type: String,
		},
		/**
         * subtitle used as accordion under title.
         */
		subtitle: {
			type: String,
		},
		/**
         * leftIcon used as accordion left icon.
         */
		leftIcon: {
			type: String,
		},
		/**
         * rightIcon used as accordion right icon.
         */
		rightIcon: {
			type: String,
		},
		/**
         * divider used as accordion divider mode.
         */
		divider: {
			type: String,
			default: 'dotted',
		},
	},

	emits: ['update:modelValue'],

	data() {
		return {
			isOpen: this.modelValue,
			id: generateId(),
		};
	},

	computed: {
		upsideClass(): string[] {
			const classNames = [this.$style.icon];
			if (this.isOpen) {
				classNames.push(this.$style.upside);
			}
			return classNames;
		},
	},

	watch: {
		modelValue(newVal: boolean): void {
			if (newVal !== this.isOpen) {
				this.isOpen = newVal;
			}
		},
	},

	mounted() {
		const { accordionGroup } = (this as unknown) as AccordionInject; // what a mess! :/
		if (accordionGroup) {
			/**
             * Register this component's instance in the AccordionGroup provided methods,
             * so toggling accordion to open state, can be tracked.
             */
			accordionGroup.registerAccordion(this.id, () => {
				this.isOpen = false;
				this.$emit('update:modelValue', this.isOpen);
				return (this.isOpen = false);
			});
		}
	},

	methods: {
		onToggle() {
			const { accordionGroup } = (this as unknown) as AccordionInject;
			this.isOpen = !this.isOpen;
			/**
             * Model's update event.
             * @event update:modelValue
             * @property {boolean} isOpen - whether if accordion is opened.
             */
			this.$emit('update:modelValue', this.isOpen);
			/**
             * Let the AccordionGroup be aware whenever this component enters open state.
             * so the other Accordion instances will be closed.
             */
			if (this.isOpen === true && accordionGroup) {
				accordionGroup.onOpenAccordion(this.id);
			}
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .accordion {
        @apply bg-white p-4 rounded-xl;
    }

    .header {
        @apply flex justify-between items-center cursor-pointer;
    }

    .title {
        @apply text-base font-bold text-neutral-800 mb-0 ml-4 flex flex-col items-start;
        line-height: 23.52px;
    }
    .subtitle {
        @apply text-xs font-semibold text-neutral-300;
        line-height: 15.6px;
    }

    .heading {
        @apply text-base font-bold text-neutral-800 mb-0 flex items-center;
        line-height: 23.52px;
    }

    .icon {
        transition: 0.2s;
    }
    .icon.upside {
        transform: rotate(180deg);
    }
}
</style>

<docs>
## Usage
```js
import { VAccordionGroup , VAccordion } from 'vue-ui-light';
```
<br/>

>`v-accordion-group` lets you combine multiple `v-accordion` component in order to create an accordion. This causes only one v-accordion component to be opened at a time.

## AccordionGroup

<example>
<template v-slot:preview>
<div class="grid grid-rows-1 space-y-3 w-96">
            <v-accordion-group>
                <v-accordion title="Title" right-icon="chevron-down">
                    <div>
                        Content , Accordion Content here
                    </div>
                </v-accordion>
                <v-accordion title="Title" right-icon="chevron-down">
                    <div>
                        Content , Accordion Content here
                    </div>
                </v-accordion>
                <v-accordion title="Title" right-icon="chevron-down">
                    <div>
                        Content , Accordion Content here
                    </div>
                </v-accordion>
            </v-accordion-group>
			</div>
</template>
<template v-slot:source>

```html
            <v-accordion-group>
                <v-accordion title="Title" right-icon="chevron-down">
                    <div>
                        Content , Accordion Content here
                    </div>
                </v-accordion>
                <v-accordion title="Title" right-icon="chevron-down">
                    <div>
                        Content , Accordion Content here
                    </div>
                </v-accordion>
                <v-accordion title="Title" right-icon="chevron-down">
                    <div>
                        Content , Accordion Content here
                    </div>
                </v-accordion>
            </v-accordion-group>
```
</template>
</example>

### Default

<example>
<template v-slot:preview>
<div class="grid grid-rows-1 space-y-3">
	<v-accordion title='Simple Accordion'>
		<div>
		Content Lorem ipsum...
		</div>
	</v-accordion>
	<v-accordion title='Accordion with subtitle' subtitle="Accordion with subtitle">
			<div>
			Content Lorem ipsum...
			</div>
	</v-accordion>
</div>
</template>
<template v-slot:source>

```html
	<v-accordion title='Simple Accordion'>
		<div>
		Lorem ipsum...
		</div>
	</v-accordion>
	<v-accordion title='Accordion with subtitle' subtitle="Accordion with subtitle">
			<div>
			Lorem ipsum...
			</div>
	</v-accordion>
```
</template>
</example>

### Icon

<example>
<template v-slot:preview>
<div class="grid grid-rows-1 space-y-3">
	<v-accordion left-icon="plus" title='Accordion Left Icon' subtitle='Accordion Left Icon'>
		<div>
		Content Lorem ipsum...
		</div>
	</v-accordion>
	<v-accordion right-icon="chevron-down" title='Accordion Right Icon' subtitle='Accordion Right Icon'>
		<div>
		Content Lorem ipsum...
		</div>
	</v-accordion>
	<v-accordion left-icon="plus" right-icon="chevron-down" title='Accordion Both Icon' subtitle='Accordion Both Icon'>
		<div>
		Content Lorem ipsum...
		</div>
	</v-accordion>
</div>
</template>
<template v-slot:source>

```html
	<v-accordion left-icon="plus" title='Accordion Left Icon' subtitle='Accordion Left Icon'>
		<div>
		Lorem ipsum...
		</div>
	</v-accordion>
	<v-accordion right-icon="chevron-down" title='Accordion Right Icon' subtitle='Accordion Right Icon'>
		<div>
		Lorem ipsum...
		</div>
	</v-accordion>
	<v-accordion left-icon="plus" right-icon="chevron-down" title='Accordion Both Icon' subtitle='Accordion Both Icon'>
		<div>
		Lorem ipsum...
		</div>
	</v-accordion>
```
</template>
</example>

### Divider

<example>
<template v-slot:preview>
<div class="grid grid-rows-1 space-y-3">
	<v-accordion title='Divider Dashed' subtitle='Divider Dashed' divider="dashed">
		<div>
		Content Lorem ipsum...
		</div>
	</v-accordion>
	<v-accordion divider="dotted" title='Divider Dotted' subtitle='Divider Dotted'>
		<div>
		Content Lorem ipsum...
		</div>
	</v-accordion>
	<v-accordion divider="solid" title='Divider Solid' subtitle='Divider Solid'>
		<div>
		Content Lorem ipsum...
		</div>
	</v-accordion>
</div>
</template>
<template v-slot:source>

```html
	<v-accordion divider="dashed" title='Divider dashed' subtitle='Divider dashed'>
		<div>
		Lorem ipsum...
		</div>
	</v-accordion>
	<v-accordion divider="dotted" title='Divider dotted' subtitle='Divider dotted'>
		<div>
		Lorem ipsum...
		</div>
	</v-accordion>
	<v-accordion divider="solid" title='Divider solid' subtitle='Divider solid'>
		<div>
		Lorem ipsum...
		</div>
	</v-accordion>
```
</template>
</example>

## Bind Accordion State

<example :modelData="modelData">
<template #preview="{ data }">
		<v-accordion title='Heading'
			:model-value="modelData ? modelData : false"
			@update:modelValue="modelData =  $event"
		>
			<div>
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
			</div>
		</v-accordion>
</template>
<template v-slot:source>

```html
	<v-accordion title='Heading' v-model="isOpen">
		<div>
		Lorem ipsum ...
		</div>
	</v-accordion>
```
```js
export default {
	data() {
		return {
			isOpen: false,
		};
	},
};
```
</template>
</example>

## Custom Heading

<example :modelData="modelData">
<template #preview="{ data }">
		<v-accordion
			:model-value="modelData ? modelData : false"
			@update:modelValue="modelData =  $event"
			>
			<template #leftIcon="{active}">
			    <v-Icon :name="active ? 'description' : 'plus'" size="16" class="mr-4" :class="{ 'text-primary': active }" />
			</template>
			<template #header="{active}">
			    <code :class="{ 'text-primary': active }">Custom Header</code>
			    <v-badge class="ml-4" :variant="active ? 'primary' : 'neutral'">Default</v-badge>
			</template>
			<template #rightIcon="{active}">
			    <v-Icon :name="active ? 'minus' : 'plus'" size="16" />
			</template>
			<div>
			    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
			</div>
        </v-accordion>
</template>
<template v-slot:source>

```html
<s-card>
<v-accordion v-model="isOpen">
	<template #leftIcon="{active}">
	    <v-Icon :name="active ? 'description' : 'plus'" size="16" class="mr-4" :class="{ 'text-primary': active }" />
	</template>
	<template #header="{active}">
	    <code :class="{ 'text-primary': active }">Custom Header</code>
	    <v-badge class="ml-4" :variant="active ? 'primary' : 'neutral'">Default</v-badge>
	</template>
	<template #rightIcon="{active}">
	    <v-Icon :name="active ? 'minus' : 'plus'" size="16" />
	</template>
	<div>
	    Content , Accordion Content here
	</div>
</v-accordion>
</s-card>
```
```js
export default {
	data() {
		return {
			isOpen: false,
		};
	},
};
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
