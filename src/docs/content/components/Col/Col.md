# Col

#### Usage

```js
import { VCol } from "vue-ui-light";
```

<br/>
<br/>

Our grid system uses a 12 column flex layout to responsively layouts application content on any screen sizes.

#### Breakpoints

6 breakpoints supported out of the box:

- **xs** : 320px
- **sm** : 667px
- **md** : 768px
- **lg** : 1024px
- **xl** : 1280px
- **2xl** : 1366px
- **3xl** : 1440px

They will each be applied to screens that are equal or greater than them. Therefore, you may just use `xs` for all screens.

#### Basic Columns

Columns always initially use their content's width:

<example>
<template v-slot:preview>
	<v-row>
		<v-col class="border border-purple-50 p-4 bg-purple-100">Column 1</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100">Column 2</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100">Column 3 with more content</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row>
  <v-col>Column 1</v-col>
  <v-col>Column 2</v-col>
  <v-col>Column 3 with more text</v-col>
</v-row>
```

</template>
</example>
<br/>

But can be customized to fill available space too:

<example>
<template v-slot:preview>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100">Column 1</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100" xs="auto">Column auto</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100">Column 3</v-col>
	</v-row>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="auto">Column auto</v-col>
	</v-row>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" lg="auto">Auto on lg and up</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="auto">Auto on md and up</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" sm="auto">Auto on sm and up</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row>
  <v-col>Column 1</v-col>
  <v-col xs="auto">Column auto</v-col>
  <v-col>Column 3</v-col>
</v-row>
<v-row>
  <v-col xs="auto">Column auto</v-col>
</v-row>
<v-row>
  <v-col lg="auto">Auto on md and up</v-col>
  <v-col md="auto">Auto on md and up</v-col>
  <v-col sm="auto">Auto on md and up</v-col>
</v-row>
```

</template>
</example>
<br/>

#### Responsive Columns

<example>
<template v-slot:preview>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="12">xs-12</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="12" md="6"> xs-12, md-6</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="auto" sm="8">xs-auto, sm-8</v-col>
	</v-row>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="auto">xs-auto</v-col>
	</v-row>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" lg="auto">lg-auto</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="auto">md-auto</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" sm="auto">sm-auto</v-col>
	</v-row>
	<v-row class="mb-2">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="3">md-3</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="3">md-3</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="3">md-3</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" md="3">md-3</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row class="mb-2">
  <v-col xs="12">xs-12</v-col>
  <v-col xs="12" md="6"> xs-12, md-6</v-col>
  <v-col xs="auto" sm="8">xs-auto, sm-8</v-col>
</v-row>
<v-row class="mb-2">
  <v-col xs="auto">xs-auto</v-col>
</v-row>
<v-row class="mb-2">
  <v-col lg="auto">lg-auto</v-col>
  <v-col md="auto">md-auto</v-col>
  <v-col sm="auto">sm-auto</v-col>
</v-row>
<v-row class="mb-2">
  <v-col md="3">md-3</v-col>
  <v-col md="3">md-3</v-col>
  <v-col md="3">md-3</v-col>
  <v-col md="3">md-3</v-col>
</v-row>
```

</template>
</example>
<br/>

#### Alignment

Use `align-self` prop to modify column's alignment, individually:

<example>
<template v-slot:preview>
	<v-row class="h-40">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">no align</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3" align-self="start">start</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3" align-self="center">center</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3" align-self="end">end</v-col>
	</v-row>
	<hr class="my-5"/>
	<v-row class="h-40" align-items="start">
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">no align</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3" align-self="end">end</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3" align-self="center">center</v-col>
		<v-col class="border border-purple-50 p-4 bg-purple-100 text-center" xs="3">no align</v-col>
	</v-row>
</template>
<template v-slot:source>

```html
<v-row class="h-40">
  <v-col xs="3">no align</v-col>
  <v-col xs="3" align-self="start">start</v-col>
  <v-col xs="3" align-self="center">center</v-col>
  <v-col xs="3" align-self="end">end</v-col>
</v-row>
<hr class="my-5" />
<v-row class="h-40" align-items="start">
  <v-col xs="3">no align</v-col>
  <v-col xs="3" align-self="end">end</v-col>
  <v-col xs="3" align-self="center">center</v-col>
  <v-col xs="3">no align</v-col>
</v-row>
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description                                                         | Type           | Values                                                                     | Default |
| --------- | ------------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------- | ------- |
| xs        | Columns width at XS screens. must be a number in range of 1 to 12.  | number\|string | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `auto` |         |
| sm        | Columns width at SM screens. must be a number in range of 1 to 12.  | number\|string | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `auto` |         |
| md        | Columns width at Md screens. must be a number in range of 1 to 12.  | number\|string | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `auto` |         |
| lg        | Columns width at LG screens. must be a number in range of 1 to 12.  | number\|string | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `auto` |         |
| xl        | Columns width at XL screens. must be a number in range of 1 to 12.  | number\|string | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `auto` |         |
| xxl       | Columns width at 2XL screens. must be a number in range of 1 to 12. | number\|string | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `auto` |         |
| xxxl      | Columns width at 2XL screens. must be a number in range of 1 to 12. | number\|string | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `auto` |         |
| alignSelf | Flex's align-self property.                                         | string         | `start`, `end`, `center`                                                   |         |
| tag       | Any valid HTML tag name. defaults to 'div'.                         | string         | -                                                                          | 'div'   |

## Slots

| Name    | Description  | Bindings |
| ------- | ------------ | -------- |
| default | default slot |          |
