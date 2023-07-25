# VDivider

## Usage

```js
import { VDivider } from "vue-ui-light";
```

<br/>
<br/>

### Default

<example>
<template v-slot:preview>
	<v-divider class="my-8" />
	<v-divider class="my-8" />
	<v-divider class="my-8" />
</template>
<template v-slot:source>

```html
<v-divider />
<v-divider />
<v-divider />
```

</template>
</example>

### Mode

<example>
<template v-slot:preview>
	<v-divider class="my-8" mode="solid" />
	<v-divider class="my-8" mode="dashed" />
	<v-divider class="my-8" mode="dotted" />
</template>
<template v-slot:source>

```html
<v-divider mode="solid" />
<v-divider mode="dashed" />
<v-divider mode="dotted" />
```

</template>
</example>

### Title

<example>
<template v-slot:preview>
	<v-divider title="Divider" position="start" />
	<v-divider title="Divider" position="center" />
	<v-divider title="Divider" position="end" />
</template>
<template v-slot:source>

```html
<v-divider title="Divider" position="start" />
<v-divider title="Divider" position="center" />
<v-divider title="Divider" position="end" />
```

</template>
</example>

### Vertical

<example minHeight="400">
<template v-slot:preview>
	<v-divider mode="dashed" vertical />
</template>
<template v-slot:source>

```html
<v-divider mode="dashed" vertical />
```

</template>
</example>

## Props

| Prop name | Description                                       | Type    | Values                      | Default  |
| --------- | ------------------------------------------------- | ------- | --------------------------- | -------- |
| title     | Divider's title used in absensce of 'title' slot. | string  | -                           |          |
| mode      | Divider's different style.                        | string  | `solid`, `dashed`, `dotted` | 'solid'  |
| position  | Divider's title position.                         | string  | `center`, `start`, `end`    | 'center' |
| vertical  | Vertical mode.                                    | boolean | -                           |          |

## Slots

| Name  | Description   | Bindings |
| ----- | ------------- | -------- |
| title | divider title |          |
