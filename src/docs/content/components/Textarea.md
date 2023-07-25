# VTextarea

## Usage

```js
import { VTextarea } from "vue-ui-light";
```

<br/>
<br/>

## Default

<example>
<template v-slot:preview>
	<v-textarea label="Label"/>
	<v-textarea placeholder="No label" />
</template>
<template v-slot:source>

```html
<v-textarea label="Label" />
<v-textarea placeholder="No label" />
```

</template>
</example>

## States

<example>
<template v-slot:preview>
	<v-textarea  state="success" placeholder="Success" />
	<v-textarea  state="danger" placeholder="Danger" />
	<v-textarea  state="warning" placeholder="Warning" />
</template>
<template v-slot:source>

```html
<v-textarea state="success" placeholder="Success" />
<v-textarea state="danger" placeholder="Danger" />
<v-textarea state="warning" placeholder="Warning" />
```

</template>
</example>

## Options

<example>
<template v-slot:preview>
	<v-textarea limit="50" label="With Limitation" />
	<v-textarea helper="helper text" label="Helper" />
	<v-textarea rows="8" label="Row" />
</template>
<template v-slot:source>

```html
<v-textarea limit="50" label="With Limitation" />
<v-textarea name="txtarea" helper="helper text" label="Helper" />
<v-textarea rows="8" label="Row" />
```

</template>
</example>

## Fluid Mode

In Fluid mode, area fills its parent width, causing its width to be either greater or smaller than the default.

<example>
<template v-slot:preview>
		<v-row class="mb-4">
			<v-col xs="12">
				<v-textarea fluid />
			</v-col>
		</v-row>
		<v-row>
			<v-col xs="3">
				<v-textarea fluid />
			</v-col>
		</v-row>
</template>
<template v-slot:source>

```html
<s-card>
  <v-col xs="12">
    <v-textarea fluid />
  </v-col>
  <v-col xs="3">
    <v-textarea fluid />
  </v-col>
</s-card>
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name    | Description                                                        | Type           | Values                         | Default |
| ------------ | ------------------------------------------------------------------ | -------------- | ------------------------------ | ------- |
| v-model      | v-model's value.<br/>`@model` true                                 | string\|number | -                              |         |
| placeholder  | Textarea's placeholder.                                            | string         | -                              |         |
| helper       | Textarea's helper text.                                            | string         | -                              |         |
| label        | Textarea's label.                                                  | string         | -                              |         |
| limit        | Textarea's Limit Character.                                        | number         | -                              |         |
| state        | Textarea's state variant.                                          | string         | `danger`, `warning`, `success` |         |
| fluid        | Fluid mode which makes input full-width and disable its min-width. | boolean        | -                              | false   |
| name         | Textarea's name attribute.                                         | string         | -                              |         |
| disabled     | Disabled mode.                                                     | boolean        | -                              |         |
| readonly     | Read only mode.                                                    | boolean        | -                              |         |
| dir          | Textarea's dir attribute.                                          | string         | -                              |         |
| hidden       | Textarea's hidden attribute.                                       | boolean        | -                              |         |
| autoComplete | Textarea's auto-complete attribute.                                | boolean        | -                              | false   |
| rows         | Textarea's rows attribute.                                         | number         | -                              | 4       |

## Events

| Event name        | Properties                              | Description             |
| ----------------- | --------------------------------------- | ----------------------- |
| update:modelValue | **newValue** `string` - New model value | v-model's update event. |

## Slots

| Name   | Description | Bindings |
| ------ | ----------- | -------- |
| helper | helper      |          |
