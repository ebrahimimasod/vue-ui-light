# Checkbox

## Usage

```js
import { VCheckbox } from "vue-ui-light";
```

<br/>
<br/>

### Basic Checkbox

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-checkbox />
	</div>
	<div>
	    <v-checkbox :model-value="true" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-checkbox /> <v-checkbox :model-value="true" />
```

</template>
</example>

### Label/Caption

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-checkbox label="Label" />
	</div>
	<div>
	    <v-checkbox caption="Caption" />
	</div>
	<div>
	    <v-checkbox label="Label" caption="Caption" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-checkbox label="Label" />
<v-checkbox caption="Caption" />
<v-checkbox label="Label" caption="Caption" />
```

</template>
</example>

### States

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-checkbox error caption="error" label="Error" />
	</div>
	<div>
	    <v-checkbox disabled caption="Disabled"  label="disabled" />
	</div>
	<div>
	    <v-checkbox :model-value="true" caption="Checked" label="Checked" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-checkbox caption="error" label="Error" />
<v-checkbox caption="Disabled" label="disabled" />
<v-checkbox :model-value="true" caption="Checked" label="Checked" />
```

</template>
</example>

### Sizes

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-checkbox size="small" caption="small" label="Small" />
	</div>
	<div>
	    <v-checkbox size="medium" caption="medium" label="Medium" />
	</div>
	<div>
	    <v-checkbox size="large" caption="large" label="Large" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-checkbox size="small" caption="small" label="Small" />
<v-checkbox size="medium" caption="medium" label="Medium" />
<v-checkbox size="large" caption="large" label="Large" />
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name     | Description                        | Type            | Values                      | Default  |
| ------------- | ---------------------------------- | --------------- | --------------------------- | -------- |
| label         | Checkbox's label string.           | string          | -                           |          |
| caption       | Checkbox's caption string.         | string          | -                           |          |
| v-model       | v-model's value.<br/>`@model` true | number\|boolean | -                           |          |
| error         | Indicate Error state.              | boolean         | -                           |          |
| name          | Checkbox's name attribute.         | string          | -                           |          |
| disabled      | Checkbox's disabled attribute.     | boolean         | -                           |          |
| readonly      | Checkbox's readonlt attribute.     | boolean         | -                           |          |
| size          | Checkbox's size.                   | string          | `small`, `medium`, `large.` | 'medium' |
| checkboxClass | Checkbox's custom classes.         | string          | -                           | ''       |

## Events

| Event name        | Properties                                   | Description           |
| ----------------- | -------------------------------------------- | --------------------- |
| update:modelValue | **newValue** `boolean` - new checkbox value. | Model's update event. |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| label   |             |          |
| caption |             |          |
