# Radio

## Usage

```js
import { VRadio } from "vue-ui-light";
```

<br/>
<br/>

### Basic Radio

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-radio value="1" />
	</div>
	<div>
	    <v-radio value="2" model-value="2" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-radio /> <v-radio :model-value="true" />
```

</template>
</example>

### Label/Caption

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-radio value="1" label="Label" />
	</div>
	<div>
	    <v-radio value="2" caption="Caption" />
	</div>
	<div>
	    <v-radio value="3" label="Label" caption="Caption" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-radio label="Label" />
<v-radio caption="Caption" />
<v-radio label="Label" caption="Caption" />
```

</template>
</example>

### States

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-radio error caption="error" label="Error" />
	</div>
	<div>
	    <v-radio disabled caption="Disabled"  label="disabled" />
	</div>
	<div>
	    <v-radio :model-value="1" value="1" caption="Checked" label="Checked" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-radio caption="error" label="Error" />
<v-radio caption="Disabled" label="disabled" />
<v-radio :v-model="1" value="1" caption="Checked" label="Checked" />
```

</template>
</example>

### Sizes

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8">
	<div>
	    <v-radio size="small" caption="small" label="Small" />
	</div>
	<div>
	    <v-radio size="medium" caption="medium" label="Medium" />
	</div>
	<div>
	    <v-radio size="large" caption="large" label="Large" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-radio size="small" caption="small" label="Small" />
<v-radio size="medium" caption="medium" label="Medium" />
<v-radio size="large" caption="large" label="Large" />
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name  | Description                                     | Type                    | Values                      | Default  |
| ---------- | ----------------------------------------------- | ----------------------- | --------------------------- | -------- |
| label      | Radio's label string.                           | string                  | -                           |          |
| caption    | Radio's caption string.                         | string                  | -                           |          |
| value      | Radio's static defined value.<br/>`@value` true | number\|boolean\|string | -                           |          |
| v-model    | v-model's value.<br/>`@model` true              | number\|boolean         | -                           |          |
| error      | Indicate Error state.                           | boolean                 | -                           |          |
| name       | Radio's name attribute.                         | string                  | -                           |          |
| disabled   | Radio's disabled attribute.                     | boolean                 | -                           |          |
| readonly   | Radio's readonlt attribute.                     | boolean                 | -                           |          |
| size       | Radio's size.                                   | string                  | `small`, `medium`, `large.` | 'medium' |
| radioClass | Radio's custom classes.                         | string                  | -                           | ''       |

## Events

| Event name        | Properties                                | Description           |
| ----------------- | ----------------------------------------- | --------------------- |
| update:modelValue | **newValue** `boolean` - new radio value. | Model's update event. |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| label   |             |          |
| caption |             |          |
