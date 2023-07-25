# VText

#### Usage

```js
import { VText } from "vue-ui-light";
```

<br/>
<br/>

#### Default

<example>
<template v-slot:preview>
			<v-text tag="span"> A Caption text </v-text>
			<br>
			<v-text tag="p"> A Paragraph </v-text>
			<br>
			<v-text tag="a"> A Link </v-text>
			<br>
			<v-text tag="del"> A Deleted text </v-text>
			<br>
			<v-text tag="em"> An Italic text </v-text>
			<br>
			<v-text tag="q"> A Quoted text with quoted mark </v-text>
			<br>
			<v-text tag="blockquote"> A Quoted text without quoted mark </v-text>
			<br>
			<v-text tag="u"> An Underlined text </v-text>
			<br>
			<v-text tag="small"> An Footnote text </v-text>
</template>
<template v-slot:source>

```html
<v-text tag="span"> A Caption text </v-text>
<v-text tag="p"> A Paragraph </v-text>
<v-text tag="a"> A Link </v-text>
<v-text tag="del"> A Deleted text </v-text>
<v-text tag="em"> An Italic text </v-text>
<v-text tag="q"> A Quoted text with quoted mark </v-text>
<v-text tag="blockquote"> A Quoted text without quoted mark </v-text>
<v-text tag="u"> An Underlined text </v-text>
<v-text tag="small"> An Footnote text </v-text>
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description                                                     | Type   | Values                                                                        | Default |
| --------- | --------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------- | ------- |
| tag       | Any Valid HTML 5 heading tags. also modifies the style of text. | string | `p`, `span`, `a`, `del`, `i`, `em`, `b`, `strong`, `q`, `blockquote`, `small` | 'span'  |

## Slots

| Name    | Description  | Bindings |
| ------- | ------------ | -------- |
| default | text content |          |
