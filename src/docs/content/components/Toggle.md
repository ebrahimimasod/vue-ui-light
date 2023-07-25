# Toggle/Switch

## Usage

```js
import { VToggle } from "vue-ui-light";
```

<br/>
<br/>

## Basic

<example>
<template v-slot:preview>
<v-row justify="between" align="center">
		<v-toggle />
</v-row>
</template>
<template v-slot:source>

```html
<v-toggle />
```

</template>
</example>

## States

<example>
<template v-slot:preview>
<v-row class="space-x-5">
	<div>
		<span class="mx-2">Checked</span>
		<v-toggle :model-value="true" />
	</div>
	<div>
		<span class="mx-2">Disabled</span>
		<v-toggle disabled/>
	</div>
	<div>
		<span class="mx-2">Error</span>
		<v-toggle state="error" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-toggle v-model="true" />
<v-toggle disabled />
<v-toggle error />
```

</template>
</example>

## Sizes

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
		<v-toggle size="medium" />
		<v-toggle size="large" />
</v-row>
</template>
<template v-slot:source>

```html
<v-toggle size="medium" />
<v-toggle size="large" />
```

</template>
</example>

## Variant

<example>
<template v-slot:preview>
<v-row class="space-x-5">
	<v-toggle :model-value="true" variant="primary" size="large" />
	<v-toggle :model-value="true" variant="secondary" size="large" />
	<v-toggle :model-value="true" variant="tertiary" size="large" />
	<v-toggle :model-value="true" variant="danger" size="large" />
	<v-toggle :model-value="true" variant="warning" size="large" />
	<v-toggle :model-value="true" variant="info" size="large" />
	<v-toggle :model-value="true" variant="success" size="large" />
	<v-toggle :model-value="true" variant="orange" size="large" />
</v-row>
</template>
<template v-slot:source>

```html
<v-toggle variant="primary" size="large" />
<v-toggle variant="secondary" size="large" />
<v-toggle variant="tertiary" size="large" />
<v-toggle variant="danger" size="large" />
<v-toggle variant="warning" size="large" />
<v-toggle variant="info" size="large" />
<v-toggle variant="success" size="large" />
<v-toggle variant="orange" size="large" />
```

</template>
</example>

## Icon

<example>
<template #preview="{ state }" >
<v-row class="space-x-5">
	<div>
		<v-toggle :model-value="state" icon="online" size="large" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-toggle icon="online" size="large" />
```

</template>
</example>

## Double Icon

<example>
<template #preview="{ state }">
<v-row class="space-x-5">
	<v-toggle :model-value="state" variant="secondary" icon="offline" checked-icon="online" size="large" />
	<v-toggle :model-value="state" variant="info" icon="offline" checked-icon="online" size="large" />
</v-row>
</template>
<template v-slot:source>

```html
<v-toggle
  variant="secondary"
  icon="offline"
  checked-icon="online"
  size="large"
/>
<v-toggle variant="info" icon="offline" checked-icon="online" size="large" />
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name   | Description                           | Type    | Values                                                                                       | Default   |
| ----------- | ------------------------------------- | ------- | -------------------------------------------------------------------------------------------- | --------- |
| v-model     | v-model's value<br/>`@model` true     | boolean | -                                                                                            |           |
| size        | Toggle's size.                        | string  | `small`, `medium`, `large.`                                                                  | 'medium'  |
| variant     | Toggle's different colors and styles. | string  | `primary`, `secondary`, `tertiary`, `danger`, `warning`, `info`, `success`, `link`, `orange` | 'primary' |
| disabled    | Toggle's disabled state.              | boolean | -                                                                                            |           |
| icon        | Toggle's icon.                        | string  | `Any valid icon name.`                                                                       |           |
| checkedIcon | Toggle's checkedIcon.                 | string  | `Any valid icon name.`                                                                       |           |
| readonly    | Toggle's readonly mode.               | boolean | -                                                                                            |           |
| state       | Toggle's state                        | string  | `error`                                                                                      |           |

## Events

| Event name        | Properties                                 | Description           |
| ----------------- | ------------------------------------------ | --------------------- |
| update:modelValue | **newValue** `boolean` - new toggle value. | Model's update event. |
