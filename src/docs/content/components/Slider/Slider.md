# VSlider

## Usage

```js
import { VSlider } from "vue-ui-light";
```

<br/>
<br/>

## Default

<example :modelData="modelData" color="#FFFFFF">
<template #preview="{ data }">
<div class="flex flex-col gap-4">
 	<v-slider  :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
</div>
</template>
<template v-slot:source>

```html
<v-slider v-model="model" :step="1" :min="1" :max="10" />
```

</template>
</example>

## Variant

<example :modelData="modelData" color="#FFFFFF">
<template #preview="{ data }">
<div class="flex flex-col gap-4">
 	<v-slider variant="primary" :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
 	<v-slider variant="secondary" :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
 	<v-slider variant="danger" :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
 	<v-slider variant="tertiary" :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
</div>
</template>
<template v-slot:source>

```html
<v-slider variant="primary" v-model="model" :step="1" :min="1" :max="10" />
<v-slider variant="secondary" v-model="model" :step="1" :min="1" :max="10" />
<v-slider variant="danger" v-model="model" :step="1" :min="1" :max="10" />
<v-slider variant="tertiary" v-model="model" :step="1" :min="1" :max="10" />
```

</template>
</example>

## States

<example  color="#FFFFFF">
<template v-slot:preview>
<div class="flex flex-col gap-4">
	Readonly
	<v-slider
			:model-value="9"
			:step="1"
			:min="1"
			:max="10"
			readonly
			start-label="ReadOnly"
	/>
	Disabled
	<v-slider
			:model-value="5"
			:step="1"
			:min="1"
			:max="10"
			disabled
			start-label="Disabled"
	/>
</div>
</template>
<template v-slot:source>

```html
<v-slider readonly :step="1" :min="1" :max="10" />
<v-slider disabled :step="1" :min="1" :max="10" />
```

</template>
</example>

## With Label

<example :modelData="modelData" color="#FFFFFF" min-height="300">
<template #preview="{ data }">
	<v-slider
			:model-value="modelData ? modelData :5"
			@update:modelValue="modelData =  $event"
			:step="1"
			position-label="top"
			:min="1"
			:max="10"
			has-label
			:render-label="(val) => {
				return val < 5 ? `${val} Less than 5` : `${val} More than 5`;
			}"
		/>
		<v-slider
			:model-value="modelData ? modelData :5"
			@update:modelValue="modelData =  $event"
			:step="1"
			position-label="bottom"
			:min="1"
			:max="10"
			has-label
			:render-label="(val) => {
				return val < 5 ? `${val} Less than 5` : `${val} More than 5`;
			}"
		/>
</template>
<template v-slot:source>

```html
<v-slider
  v-model="model"
  :step="1"
  :min="1"
  :max="10"
  has-label
  :render-label="rangeLabel"
/>
```

```js
model:5
rangeLabel(val) {
	return val < 5 ? `${val} Less than 5` : `${val} More than 5`;
},
```

</template>
</example>

## Vertical

<example :modelData="modelData" min-height="500" color="#FFFFFF">
<template #preview="{ data }">
<div class="flex flex-col justify-start mt-24">
<div class="flex flex-row justify-center">
 	<v-slider
			has-label
			position-label="top"
			:render-label="(val) => {
				return val;
			}"
			vertical :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
 	<v-slider
			has-label
			position-label="bottom"
			:render-label="(val) => {
				return val;
			}"
			vertical variant="tertiary" :model-value="modelData ? modelData :5" :step="1" :min="1" :max="10" @update:modelValue="modelData =  $event" />
</div>
</div>
</template>
<template v-slot:source>

```html
<v-slider
  vertical
  has-label
  :render-label="rangeLabel"
  v-model="model"
  :step="1"
  :min="1"
  :max="10"
/>
<v-slider
  variant="tertiary"
  vertical
  has-label
  :render-label="rangeLabel"
  v-model="model"
  :step="1"
  :min="1"
  :max="10"
/>
```

```js
model:5
rangeLabel(val) {
	return val ;
},
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name     | Description                                                                   | Type    | Values                                                                               | Default   |
| ------------- | ----------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------ | --------- |
| min           | Range's min step.                                                             | number  | -                                                                                    | 0         |
| max           | Range's max step.                                                             | number  | -                                                                                    | 10        |
| step          | Range's step length.<br/>`@valeu` true                                        | number  | -                                                                                    | 1         |
| disabled      | Range's disabled attribute.                                                   | boolean | -                                                                                    |           |
| readonly      | Range's readonly attribute.                                                   | boolean | -                                                                                    |           |
| vertical      | Range's vertical mode.                                                        | boolean | -                                                                                    | false     |
| hasLabel      | Show Label for current step<br/>if `true` you should use `renderLabel's prop` | boolean | -                                                                                    |           |
| positionLabel | position Label for current step                                               | string  | `top`, `bottom`                                                                      | 'top'     |
| variant       | Badge's color variant                                                         | string  | `primary`, `secondary`, `tertiary`, `danger`, `warning`, `info`, `success`, `orange` | 'primary' |
| v-model       | v-model's value.<br/>`@model` true                                            | number  | -                                                                                    |           |
| renderLabel   | Custom Function for show current step label                                   | func    | -                                                                                    |           |

## Events

| Event name        | Properties                               | Description           |
| ----------------- | ---------------------------------------- | --------------------- |
| update:modelValue | **newValue** `number` - new range value. | Model's update event. |
