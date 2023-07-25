# VSegment

## Usage

```js
import { VSegment } from "vue-ui-light";
```

<br/>
<br/>

## Default

<example>
<template v-slot:preview>
<div class="flex justify-around space-x-1">
	<v-segment
			model-value="1"
			:options="[{
					label: 'Button 1',
					value: '1',
				},
				{
					label: 'Button 2',
					value: '2',
				}]"
	/>
</div>
</template>
<template v-slot:source>

```html
<v-segment v-model="model" :options="options" />
```

```js
	model: '1',
	options: [
		{
			label: 'Button 1',
			value: '1',
		},
		{
			label: 'Button 2',
			value: '2',
		}
	],
```

</template>
</example>

<br/>
<br/>

## With CustumProps

Use `v-button` and `v-col` defined props.

<example>
<template v-slot:preview>
<div class="flex justify-around space-x-1">
	<v-segment
			model-value="1"
			:options="[{
					label: 'Button 1',
					value: '1',
				},
				{
					label: 'Button 2',
					value: '2',
				}]"
			:button-props="{block: true}"
			:column-props="{xs: 'auto'}"
	/>
</div>
</template>
<template v-slot:source>

```html
<v-segment
  v-model="model"
  :options="options"
  :button-props="{block: true}"
  :column-props="{xs: 'auto'}"
/>
```

```js
	model: '1',
	options: [
		{
			label: 'Button 1',
			value: '1',
		},
		{
			label: 'Button 2',
			value: '2',
		}
	],
```

</template>
</example>
<br/>
<br/>

## With Icon

Use `Icons` valid names for active-icon and inactive-icon.

<example>
<template v-slot:preview>
<div class="flex justify-around space-x-1">
	<v-segment
			model-value="1"
			:options="[{
					label: 'Button 1',
					value: '1',
				},
				{
					label: 'Button 2',
					value: '2',
				}]"
			active-icon="chubby-plus"
			inactive-icon="chubby-minus"
	/>
</div>
</template>
<template v-slot:source>

```html
<v-segment
  v-model="model"
  :options="options"
  active-icon="chubby-plus"
  inactive-icon="chubby-minus"
/>
```

```js
	model: '1',
	options: [
		{
			label: 'Button 1',
			value: '1',
		},
		{
			label: 'Button 2',
			value: '2',
		}
	],
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name    | Description                                                       | Type      | Values | Default |
| ------------ | ----------------------------------------------------------------- | --------- | ------ | ------- |
| v-model      | v-model's value.<br/>`@model` true                                | ModelType | -      |         |
| options      | An array of options used to render the buttons.                   | Option[]  | -      |         |
| buttonProps  | An object containing support CButton's props to get passed to it. | object    | -      |         |
| columnProps  | An object containing support CCol's props to get passed to it.    | object    | -      |         |
| activeIcon   | An icon name to be used on active button.                         | string    | -      |         |
| inactiveIcon | An icon name to be used on inactive buttons.                      | string    | -      |         |

## Events

| Event name        | Properties                                 | Description           |
| ----------------- | ------------------------------------------ | --------------------- |
| update:modelValue | **newValue** `String, Number` - new value. | Model's update event. |
