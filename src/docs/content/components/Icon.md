# VIcon

#### Usage

```js
import { VIcon } from "vue-ui-light";
```

<br/>
<br/>

#### Default

<example>
<template v-slot:preview>
	<div class="flex justify-around">
		<v-icon name="activity" size="36" />
		<v-icon name="activity" size="57" />
		<v-icon name="activity" size="78" />
		<v-icon name="activity" size="108" />
	</div>
</template>
<template v-slot:source>

```html
<v-icon name="activity" size="36" />
<v-icon name="activity" size="57" />
<v-icon name="activity" size="78" />
<v-icon name="activity" size="108" />
```

</template>
</example>

#### States

<example>
<template v-slot:preview>
	<div class="flex justify-around">
		<v-icon name="activity" size="30" action />
		<v-icon name="activity" size="24" disabled />
		<v-icon name="activity" size="24" > with text </v-icon>
	</div>
</template>
<template v-slot:source>

```html
<v-icon name="activity" size="36" action />
<v-icon name="activity" size="36" disabled />
<v-icon name="activity" size="24"> with text </v-icon>
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description                                          | Type           | Values | Default |
| --------- | ---------------------------------------------------- | -------------- | ------ | ------- |
| name      | valid icon name baesd on vue-ui-light-icons package. | string         | -      | ''      |
| size      | icon size in 'px' format.                            | number\|string | -      | 24      |
| disabled  | toggle disabled state.                               | boolean        | -      | false   |
| action    | if icon clickable.                                   | boolean        | -      | false   |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default | icon text   |          |
