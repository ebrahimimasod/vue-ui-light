# Row

#### Usage

```js
import { VRow } from "vue-ui-light";
```

<br/>
<br/>

This component can be used as wrapper for `v-col` to utilize flex layout.

#### Direction

`v-row` uses `flex-direction: row` by default to place its children. this behavior can be modified using `direction` prop.

<example>
<template v-slot:preview>
	<v-row class="mb-4">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column one</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column two</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column three</v-col>
	</v-row>
	<v-row direction="column">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Row one</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Row two</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Row three</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row class="mb-4">
  <v-col>Column one</v-col>
  <v-col>Column two</v-col>
  <v-col>Column three</v-col>
</v-row>
<v-row direction="column">
  <v-col>Row one</v-col>
  <v-col>Row two</v-col>
  <v-col>Row three</v-col>
</v-row>
```

</template>
</example>
<br/>

#### Wrap

Children of the 'v-row' wrap to a new line by default if they exceed a line. Appending `wrap="nowrap"` to the `v-row`'s props, cause it to push its children in a row, makes its children shrink if provided width is not sufficient.

<example>
<template v-slot:preview>
	<v-row class="mb-4" wrap="nowrap">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column one</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column two</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column three</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column four</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column five</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center">Column six</v-col>
	</v-row>
	<v-row class="mb-4" wrap="nowrap">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">col xs-4</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row class="mb-4">
  <v-col>Column one</v-col>
  <v-col>Column two</v-col>
  <v-col>Column three</v-col>
</v-row>
<v-row direction="column">
  <v-col>Row one</v-col>
  <v-col>Row two</v-col>
  <v-col>Row three</v-col>
</v-row>
```

</template>
</example>
<br/>

#### Justify Content

<example>
<template v-slot:preview>
	<v-row class="mb-4" justify="start">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(start)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(start)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4" justify="center">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(center)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(center)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4" justify="end">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(end)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(end)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4" justify="between">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(between)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(between)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">
			col xs-3
			<span>(between)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4" justify="around">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(around)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(around)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(around)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4" justify="evenly">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(evenly)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(evenly)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="2">
			col xs-3
			<span>(evenly)</span>
		</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row class="mb-4" justify="start">
  <v-col xs="3">
    col xs-3
    <span>(start)</span>
  </v-col>
  <v-col xs="3">
    col xs-3
    <span>(start)</span>
  </v-col>
</v-row>
<v-row class="mb-4" justify="center">
  <v-col xs="3">
    col xs-3
    <span>(center)</span>
  </v-col>
  <v-col xs="3">
    col xs-3
    <span>(center)</span>
  </v-col>
</v-row>
<v-row class="mb-4" justify="end">
  <v-col xs="3">
    col xs-3
    <span>(end)</span>
  </v-col>
  <v-col xs="3">
    col xs-3
    <span>(end)</span>
  </v-col>
</v-row>
<v-row class="mb-4" justify="between">
  <v-col xs="3">
    col xs-3
    <span>(between)</span>
  </v-col>
  <v-col xs="3">
    col xs-3
    <span>(between)</span>
  </v-col>
  <v-col xs="3">
    col xs-3
    <span>(between)</span>
  </v-col>
</v-row>
<v-row class="mb-4" justify="around">
  <v-col xs="2">
    col xs-3
    <span>(around)</span>
  </v-col>
  <v-col xs="2">
    col xs-3
    <span>(around)</span>
  </v-col>
  <v-col xs="2">
    col xs-3
    <span>(around)</span>
  </v-col>
</v-row>
<v-row class="mb-4" justify="evenly">
  <v-col xs="2">
    col xs-3
    <span>(evenly)</span>
  </v-col>
  <v-col xs="2">
    col xs-3
    <span>(evenly)</span>
  </v-col>
  <v-col xs="2">
    col xs-3
    <span>(evenly)</span>
  </v-col>
</v-row>
```

</template>
</example>
<br/>

#### Align Items

<example>
<template v-slot:preview>
	<v-row class="mb-4 h-24 bg-neutral-40 rounded" align-items="end" justify="center">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(end)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(end)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4 h-24 bg-neutral-40 rounded" align-items="center" justify="center">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
	</v-row>
	<v-row class="mb-4 h-24 bg-neutral-40 rounded" align-items="start" justify="center">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(start)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(start)</span>
		</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row align-items="end" justify="center">
  <v-col xs="4">
    xs-4
    <span>(end)</span>
  </v-col>
  <v-col xs="4">
    xs-4
    <span>(end)</span>
  </v-col>
</v-row>
<v-row align-items="center" justify="center">
  <v-col xs="4">
    xs-4
    <span>(center)</span>
  </v-col>
  <v-col xs="4">
    xs-4
    <span>(center)</span>
  </v-col>
</v-row>
<v-row align-items="start" justify="center">
  <v-col xs="4">
    xs-4
    <span>(start)</span>
  </v-col>
  <v-col xs="4">
    xs-4
    <span>(start)</span>
  </v-col>
</v-row>
```

</template>
</example>
<br/>

#### Align Content

When we're aliging children placed in multiple lines, `align-content` could be useful for better placement.

<example>
<template v-slot:preview>
	<v-row class="mb-4 h-52 bg-neutral-40 rounded" align-content="center" justify="center">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="4">
			xs-4
			<span>(center)</span>
		</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row align-content="center" justify="center">
  <v-col xs="4">
    xs-4
    <span>(center)</span>
  </v-col>
  <v-col xs="4">
    xs-4
    <span>(center)</span>
  </v-col>
  <v-col xs="4">
    xs-4
    <span>(center)</span>
  </v-col>
  <v-col xs="4">
    xs-4
    <span>(center)</span>
  </v-col>
</v-row>
```

</template>
</example>
<br/>

<br/>
<hr/>
<br/>

## Props

| Prop name    | Description                                 | Type           | Values                                                  | Default |
| ------------ | ------------------------------------------- | -------------- | ------------------------------------------------------- | ------- |
| direction    | Flex direction.                             | string         | `column`, `row`                                         |         |
| gutterX      | Gutter space in X axis (horizontial).       | number\|string | -                                                       |         |
| gutterY      | Gutter space in Y axis (vertical).          | number\|string | -                                                       |         |
| gutter       | Gutter space in all directions.             | number\|string | -                                                       |         |
| alignItems   | Flex's align-item property.                 | string         | `start`, `end`, `center`, `baseline`                    |         |
| alignContent | Flex's align-content proprty.               | string         | `start`, `end`, `center`, `between`, `around`, `evenly` |         |
| justify      | Flex's justify-content property.            | string         | `start`, `end`, `center`, `between`, `around`, `evenly` |         |
| wrap         | Flex's flex-wrap property.                  | string         | `wrap`, `nowrap`                                        |         |
| tag          | Any valid HTML tag name. defaults to 'div'. | string         | -                                                       | 'div'   |

## Slots

| Name    | Description  | Bindings |
| ------- | ------------ | -------- |
| default | default slot |          |
