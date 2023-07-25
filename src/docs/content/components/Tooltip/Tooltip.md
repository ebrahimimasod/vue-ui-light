# VTooltip

## Usage

```js
import { VTooltip } from "vue-ui-light";
```

<br/>
<br/>

### Default

<example min-height="300">
<template v-slot:preview>
<div class="flex justify-around p-2">
		<v-tooltip position="right"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Right </v-button>
		</v-tooltip>
		<v-tooltip position="bottom"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Bottom </v-button>
		</v-tooltip>
</div>

<div class="flex justify-around p-2">
		<v-tooltip position="top"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Top </v-button>
		</v-tooltip>
		<v-tooltip position="left"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Left </v-button>
		</v-tooltip>
</div>
</template>
<template v-slot:source>

```html
<v-tooltip position="right" :content="content">
  <v-button> Right </v-button>
</v-tooltip>
<v-tooltip position="bottom" :content="content">
  <v-button> Bottom </v-button>
</v-tooltip>
<v-tooltip position="top" :content="content">
  <v-button> Top </v-button>
</v-tooltip>
<v-tooltip position="left" :content="content">
  <v-button> Left </v-button>
</v-tooltip>
```

```js
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
'Maecenas quis tortor accumsan tellus feugiat maximus vel nec ligula. ',
```

</template>
</example>

<br/>
<br/>

### Custom / Disabled

<example min-height="300">
<template v-slot:preview>
<div class="flex justify-around py-8">
		<v-tooltip position="right"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button>
					Custom Right
				</v-button>
				<template #content="{ content }">
					<!-- Tooltip Custume content -->
					<h6>Slot tooltip</h6>
					<small class="text-muted">slot tooltip</small>
					<div>{{ content }}</div>
					<span class="align-bottom">slot tooltip</span>
				</template>
		</v-tooltip>
		<v-tooltip disabled position="left" content="content" >
			<v-button>Disabled TOOlTIP</v-button>
		</v-tooltip>
</div>
</template>
<template v-slot:source>

```html
<v-tooltip position="right" :content="content">
  <v-button> Custom Right </v-button>
  <template #content="{ content }">
    <h6>Slot tooltip</h6>
    <small class="text-muted">slot tooltip</small>
    <div>{{ content }}</div>
    <span class="align-bottom">slot tooltip</span>
  </template>
</v-tooltip>
<v-tooltip disabled position="left" :content="content">
  <v-button>Disabled TOOlTIP</v-button>
</v-tooltip>
```

```js
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
'Maecenas quis tortor accumsan tellus feugiat maximus vel nec ligula. ',
```

</template>
</example>

### Trigger

<example min-height="300">
<template v-slot:preview>
<div class="flex justify-around p-2">
		<v-tooltip position="right" trigger="hover"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Hover </v-button>
		</v-tooltip>
		<v-tooltip position="bottom" trigger="click"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Click </v-button>
		</v-tooltip>
	</div>
</template>
<template v-slot:source>

```html
<v-tooltip position="right" :content="content" trigger="hover">
  <v-button> Hover </v-button>
</v-tooltip>
<v-tooltip position="bottom" :content="content" trigger="click">
  <v-button> Click </v-button>
</v-tooltip>
```

```js
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
'Maecenas quis tortor accumsan tellus feugiat maximus vel nec ligula. ',
```

</template>
</example>

### Variant

<example min-height="300">
<template v-slot:preview>
<div class="flex justify-around p-2">
		<v-tooltip position="bottom" variant="primary"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Primary </v-button>
		</v-tooltip>
		<v-tooltip position="bottom" variant="tertiary"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Tertiary </v-button>
		</v-tooltip>
		<v-tooltip position="bottom" variant="danger"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Danger </v-button>
		</v-tooltip>
		<v-tooltip position="bottom" variant="secondary"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> secondary </v-button>
		</v-tooltip>
		<v-tooltip position="bottom" variant="orange"
			content="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit."
		>
			<v-button> Orange </v-button>
		</v-tooltip>
	</div>
</template>
<template v-slot:source>

```html
<v-tooltip position="bottom" :content="content" variant="primary">
  <v-button> Primary </v-button>
</v-tooltip>
<v-tooltip position="bottom" :content="content" variant="tertiary">
  <v-button> Tertiary </v-button>
</v-tooltip>
...
```

```js
content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
'Maecenas quis tortor accumsan tellus feugiat maximus vel nec ligula. ',
```

</template>
</example>

<br/>
<br/>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description                                         | Type           | Values                                                                                          | Default   |
| --------- | --------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------- | --------- |
| content   | content of tooltip e.g text                         | string         | -                                                                                               | ''        |
| position  | Tooltip's different positions.<br/>`@default` `top` | string         | `top`, `right`, `bottom`, `left`                                                                | 'top'     |
| size      | Tooltip's different sizes.<br/>`@default` `sm`      | string         | `sm`, `md`, `lg`, `maxContent`                                                                  | 'sm'      |
| variant   | Badge's color variant                               | string         | `neutral`, `primary`, `secondary`, `tertiary`, `danger`, `warning`, `info`, `success`, `orange` | 'neutral' |
| disabled  | toggle disabled state.<br/>`@default` `false`       | boolean        | -                                                                                               | false     |
| offset    | The offset number passed down to popover component. | string\|number | -                                                                                               | 10        |
| trigger   | Popover triggerer<br/>`@default` 'hover'            | string         | `click`, `hover`                                                                                | 'hover'   |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
| content |             |          |
