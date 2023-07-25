# VSegment

## Usage

```js
import { VSegment } from "vue-ui-light";
```

<br/>
<br/>

### Default

<example :modelData="modelData">
<template #preview="{ data }">
<div class="mt-8">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			:options="[{
					label: 'Label',
					value: '1',
				},
				{
					label: 'Label',
					value: '2',
				},{
					label: 'Label',
					value: '3',
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
	options: [{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}],
```

</template>
</example>

### With Icon

Use `Icons` valid names for active-icon and inactive-icon.

<example :modelData="modelData">
<template #preview="{ data }">
<div class="flex justify-around space-x-1">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			:options="[{
			label: 'Label',
			value: '1',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '2',
			icon: 'plus'
		},
		{
			label: 'Label',
			value: '3',
			icon: 'offline'
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
	options: [{
			label: 'Label',
			value: '1',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '2',
			icon: 'plus'
		},
		{
			label: 'Label',
			value: '3',
			icon: 'offline'
		}],
```

</template>
</example>

### Icon only

Use `Icons` valid names for active-icon and inactive-icon.

<example :modelData="modelData">
<template #preview="{ data }">
<div class="flex justify-around space-x-1">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			icon-only
			:options="[{
			label: 'Label',
			value: '1',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '2',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '3',
			icon: 'online'
		}]"
	/>
</div>
</template>
<template v-slot:source>

```html
<v-segment v-model="model" :options="options" icon-only />
```

```js
	model: '1',
	options: [{
			label: 'Label',
			value: '1',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '2',
			icon: 'online'
		},
		{
			label: 'Label',
			value: '3',
			icon: 'online'
		}],
```

</template>
</example>

### With Interactive Icon

Use `Icons` valid names for active-icon and inactive-icon.

<example :modelData="modelData">
<template #preview="{ data }">
<div class="flex justify-around space-x-1">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			:options="[{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}]"
			active-icon="plus"
			inactive-icon="minus"
	/>
</div>
</template>
<template v-slot:source>

```html
<v-segment
  v-model="model"
  :options="options"
  active-icon="plus"
  inactive-icon="minus"
/>
```

```js
	model: '1',
	options: [{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}],
```

</template>
</example>

### Size and Variant

Use `Icons` valid names for active-icon and inactive-icon.

<example :modelData="modelData">
<template #preview="{ data }">
<div class="mb-8">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			size="sm"
			:options="[{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}]"
			active-icon="online"
			inactive-icon="online"
	/>
</div>
<div class="mb-8">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			variant="tertiary"
			size="md"
			:options="[{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}]"
			active-icon="online"
			inactive-icon="online"
	/>
</div>
<div class="mb-8">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			variant="danger"
			size="lg"
			:options="[{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}]"
			active-icon="online"
			inactive-icon="online"
	/>
</div>
</template>
<template v-slot:source>

```html
<v-segment
  v-model="model"
  variant="primary"
  :options="options"
  active-icon="online"
  inactive-icon="online"
/>
<v-segment
  v-model="model"
  variant="tertiary"
  :options="options"
  active-icon="online"
  inactive-icon="online"
/>
<v-segment
  v-model="model"
  variant="danger"
  :options="options"
  active-icon="online"
  inactive-icon="online"
/>
```

```js
	model: '1',
	options: [{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		},
		{
			label: 'Label',
			value: '3',
		}],
```

</template>
</example>

### With CustumProps

Use `v-button` and `v-col` defined props.

<example :modelData="modelData">
<template #preview="{ data }">
<div class="flex justify-around space-x-1">
	<v-segment
			:model-value="modelData ? modelData : '1'"
			@update:modelValue="modelData =  $event"
			:options="[{
					label: 'Label',
					value: '1',
				},
				{
					label: 'Label',
					value: '2',
				}]"
			:button-props="{fluid: true}"
			:column-props="{xs: 'auto'}"
	/>
</div>
</template>
<template v-slot:source>

```html
<v-segment
  v-model="model"
  :options="options"
  :button-props="{fluid: true}"
  :column-props="{xs: 'auto'}"
/>
```

```js
	model: '1',
	options: [
		{
			label: 'Label',
			value: '1',
		},
		{
			label: 'Label',
			value: '2',
		}
	],
```

</template>
</example>
<br/>
<br/>

<hr/>
<br/>

## Props

| Prop name    | Description                                                       | Type      | Values                                                                                                  | Default   |
| ------------ | ----------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------- | --------- |
| v-model      | v-model's value.<br/>`@model` true                                | ModelType | -                                                                                                       |           |
| options      | An array of options used to render the buttons.                   | Option[]  | -                                                                                                       |           |
| buttonProps  | An object containing support CButton's props to get passed to it. | object    | -                                                                                                       |           |
| columnProps  | An object containing support CCol's props to get passed to it.    | object    | -                                                                                                       |           |
| activeIcon   | An icon name to be used on active button.                         | string    | -                                                                                                       |           |
| inactiveIcon | An icon name to be used on inactive buttons.                      | string    | -                                                                                                       |           |
| iconOnly     | Just show icon if this.icon exist                                 | boolean   | -                                                                                                       | false     |
| size         | Segment's different sizes.                                        | string    | `sm`, `md`, `lg`                                                                                        | 'md'      |
| variant      | Button's different colors and styles.                             | string    | `neutral`, `primary`, `secondary`, `tertiary`, `danger`, `warning`, `info`, `success`, `link`, `orange` | 'primary' |

## Events

| Event name        | Properties                                 | Description           |
| ----------------- | ------------------------------------------ | --------------------- |
| update:modelValue | **newValue** `String, Number` - new value. | Model's update event. |
