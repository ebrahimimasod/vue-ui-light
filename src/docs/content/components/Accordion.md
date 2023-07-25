# VSAccordion

## Usage

```js
import { VAccordionGroup, VAccordion } from "vue-ui-light";
```

<br/>

> `v-accordion-group` lets you combine multiple `v-accordion` component in order to create an accordion. This causes only one v-accordion component to be opened at a time.

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
<v-accordion title="Simple Accordion">
  <div>
    Lorem ipsum...
  </div>
</v-accordion>
<v-accordion title="Accordion with subtitle" subtitle="Accordion with subtitle">
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
<v-accordion
  left-icon="plus"
  title="Accordion Left Icon"
  subtitle="Accordion Left Icon"
>
  <div>
    Lorem ipsum...
  </div>
</v-accordion>
<v-accordion
  right-icon="chevron-down"
  title="Accordion Right Icon"
  subtitle="Accordion Right Icon"
>
  <div>
    Lorem ipsum...
  </div>
</v-accordion>
<v-accordion
  left-icon="plus"
  right-icon="chevron-down"
  title="Accordion Both Icon"
  subtitle="Accordion Both Icon"
>
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
<v-accordion divider="dashed" title="Divider dashed" subtitle="Divider dashed">
  <div>
    Lorem ipsum...
  </div>
</v-accordion>
<v-accordion divider="dotted" title="Divider dotted" subtitle="Divider dotted">
  <div>
    Lorem ipsum...
  </div>
</v-accordion>
<v-accordion divider="solid" title="Divider solid" subtitle="Divider solid">
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
<v-accordion title="Heading" v-model="isOpen">
  <div>
    Lorem ipsum ...
  </div>
</v-accordion>
```

```js
export default {
  data() {
    return {
      isOpen: false
    };
  }
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
      <v-Icon
        :name="active ? 'description' : 'plus'"
        size="16"
        class="mr-4"
        :class="{ 'text-primary': active }"
      />
    </template>
    <template #header="{active}">
      <code :class="{ 'text-primary': active }">Custom Header</code>
      <v-badge class="ml-4" :variant="active ? 'primary' : 'neutral'"
        >Default</v-badge
      >
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
      isOpen: false
    };
  }
};
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description                             | Type    | Values | Default  |
| --------- | --------------------------------------- | ------- | ------ | -------- |
| v-model   | v-model's value.<br/>`@model` true      | boolean | -      |          |
| title     | Title used as accordion heading.        | string  | -      |          |
| subtitle  | subtitle used as accordion under title. | string  | -      |          |
| leftIcon  | leftIcon used as accordion left icon.   | string  | -      |          |
| rightIcon | rightIcon used as accordion right icon. | string  | -      |          |
| divider   | divider used as accordion divider mode. | string  | -      | 'dotted' |

## Events

| Event name        | Properties                                             | Description           |
| ----------------- | ------------------------------------------------------ | --------------------- |
| update:modelValue | **isOpen** `boolean` - whether if accordion is opened. | Model's update event. |

## Slots

| Name      | Description                                                            | Bindings |
| --------- | ---------------------------------------------------------------------- | -------- |
| leftIcon  | Accordion leftIcon slot, can be used in replace of `left-icon` prop.   |          |
| header    | Accordion header slot, can be used in replace of `title` prop.         |          |
| rightIcon | Accordion rightIcon slot, can be used in replace of `right-icon` prop. |          |
| default   | Accordion content                                                      |          |
