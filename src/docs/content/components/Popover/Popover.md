# Popover

## Usage

```js
import { VPopover } from "vue-ui-light";
```

## Basic

<example>
<template v-slot:preview>
<v-popover>
	<template #target>
		<v-button variant="primary">
			Popover Trigger
		</v-button>
	</template>
	<template #content>
		<div class="bg-blue-100 p-4">
			Paragraph
		</div>
	</template>
</v-popover>
</template>
<template v-slot:source>

```html
<v-popover>
  <template #target>
    <v-button variant="primary">
      Popover Trigger
    </v-button>
  </template>
  <template #content>
    <div class="bg-blue-100 p-4">
      Paragraph
    </div>
  </template>
</v-popover>
```

</template>
</example>

## Controlled Mode

<example>
<template v-slot:preview>
<v-popover>
	<template #target>
		<v-button variant="primary">
			Popover Trigger
		</v-button>
	</template>
	<template #content>
		<div class="bg-blue-100 p-4">
			Paragraph
		</div>
	</template>
</v-popover>
</template>
<template v-slot:source>

```html
<v-popover v-model="isOpen" @click-outside="isOpen=false">
  <template #target>
    <v-button variant="primary" @click="isOpen=true">
      Popover Trigger
    </v-button>
  </template>
  <template #content>
    <div class="bg-blue-100 p-4">
      Paragraph
    </div>
  </template>
</v-popover>
```

</template>
</example>

## Props

| Prop name    | Description                                                         | Type           | Values                                                                                                                                                                                                       | Default  |
| ------------ | ------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| trigger      | Trigger action to open/close popover.<br/>`@default` `click`        | string\|array  | `hover`, `click`, `manual`                                                                                                                                                                                   | 'click'  |
| position     | Popover position.<br/>`@default` `bottom`                           | Position       | `'auto'`, `'auto-start'`, `'auto-end'`, `'top'`, `'top-start'`, `'top-end'`, `'bottom'`, `'bottom-start'`, `'bottom-end'`, `'right'`, `'right-start'`, `'right-end'`, `'left'`, `'left-start'`, `'left-end'` | 'bottom' |
| offset       | Popover offset.<br/>`@default` `0`                                  | number\|string | -                                                                                                                                                                                                            | 0        |
| contentWidth | Set content's width based on target's width.<br/>`@default` `false` | boolean        | -                                                                                                                                                                                                            | false    |
| v-model      | v-model's value.<br/>`@model` true                                  | boolean        | -                                                                                                                                                                                                            |          |
| disabled     | Disabled mode                                                       | boolean        | -                                                                                                                                                                                                            |          |
| targetClass  | A class name passed to the target container node.                   | string\|array  | -                                                                                                                                                                                                            |          |
| contentClass | A class name passed to the target container node.                   | string         | -                                                                                                                                                                                                            |          |

## Events

| Event name    | Properties | Description                  |
| ------------- | ---------- | ---------------------------- |
| open          |            | Popover open event.          |
| close         |            | Popover close event.         |
| click-outside |            | Popover click outside event. |
| input         |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| target  | target      |          |
| content | content     |          |
