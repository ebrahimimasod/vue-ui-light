# Badge

## Usage

```js
import { VBadge } from "vue-ui-light";
```

<br/>
<br/>

## Type

<example>
<template v-slot:preview>
<div class="flex justify-around space-x-4">
	<v-badge>Solid badge</v-badge>
	<v-badge pastel>Pastel badge</v-badge>
</div>
</template>
<template v-slot:source>

```html
<v-badge>Solid badge</v-badge>
<v-badge pastel>Pastel badge</v-badge>
```

</template>
</example>

#### Default Variants

<example>
<template v-slot:preview>
<div class="flex justify-around space-x-4">
<div class="space-x-4 text-center">
	<v-badge class="mb-4"> Label text </v-badge>
	<v-badge class="mb-4" variant="primary"> Label text </v-badge>
	<v-badge class="mb-4" variant="secondary"> Label text </v-badge>
	<v-badge class="mb-4" variant="tertiary"> Label text </v-badge>
	<v-badge class="mb-4" variant="info"> Label text </v-badge>
	<v-badge class="mb-4" variant="success"> Label text </v-badge>
	<v-badge class="mb-4" variant="danger"> Label text </v-badge>
	<v-badge class="mb-4" variant="warning"> Label text </v-badge>
	<v-badge class="mb-4" variant="orange"> Label text </v-badge>
	<br/>
</div>
</div>
</template>
<template v-slot:source>

```html
<v-badge> Label text </v-badge>
<v-badge variant="primary"> Label text </v-badge>
<v-badge variant="secondary"> Label text </v-badge>
<v-badge variant="tertiary"> Label text </v-badge>
<v-badge variant="info"> Label text </v-badge>
<v-badge variant="success"> Label text </v-badge>
<v-badge variant="danger"> Label text </v-badge>
<v-badge variant="warning"> Label text </v-badge>
<v-badge variant="orange"> Label text </v-badge>
```

</template>
</example>

#### Pastel Variants

<example>
<template v-slot:preview>
<div class="flex justify-around space-x-4">
<div class="space-x-4 text-center">
	<v-badge pastel class="mb-4"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="primary"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="tertiary"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="secondary"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="info"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="success"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="danger"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="warning"> Label text </v-badge>
	<v-badge pastel class="mb-4" variant="orange"> Label text </v-badge>
</div>
</div>
</template>
<template v-slot:source>

```html
<v-badge pastel> Label text </v-badge>
<v-badge pastel variant="primary"> Label text </v-badge>
<v-badge pastel variant="tertiary"> Label text </v-badge>
<v-badge pastel variant="secondary"> Label text </v-badge>
<v-badge pastel variant="info"> Label text </v-badge>
<v-badge pastel variant="success"> Label text </v-badge>
<v-badge pastel variant="danger"> Label text </v-badge>
<v-badge pastel variant="warning"> Label text </v-badge>
<v-badge pastel variant="orange"> Label text </v-badge>
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description           | Type    | Values                                                                                          | Default   |
| --------- | --------------------- | ------- | ----------------------------------------------------------------------------------------------- | --------- |
| variant   | Badge's color variant | string  | `neutral`, `primary`, `secondary`, `tertiary`, `danger`, `warning`, `info`, `success`, `orange` | 'neutral' |
| pastel    | Badge's pastel mode   | boolean | -                                                                                               |           |
| content   | Badge's content       | string  | -                                                                                               |           |

## Slots

| Name    | Description  | Bindings |
| ------- | ------------ | -------- |
| default | default slot |          |
