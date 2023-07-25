# VButton

#### Usage

```js
import { VButton } from "vue-ui-light";
```

<br/>
<br/>

#### Variants

<example>
<template v-slot:preview>
<div class="space-y-1 space-x-3">
	<v-button>Default Button</v-button>
	<v-button variant="primary">Primary Button</v-button>
	<v-button variant="secondary">Secondary Button</v-button>
	<v-row />
	<v-button variant="tertiary">Tertiary Button</v-button>
	<v-button variant="info">Info Button</v-button>
	<v-button variant="danger">Danger Button</v-button>
	<v-row />
	<v-button variant="warning">Warning Button</v-button>
	<v-button variant="success">Success Button</v-button>
	<v-button variant="orange">Orange Button</v-button>
</div>
</template>
<template v-slot:source>

```html
<v-button>Default Button</v-button>
<v-button variant="primary">Primary Button</v-button>
<v-button variant="secondary">Secondary Button</v-button>
<v-button variant="tertiary">Tertiary Button</v-button>
<v-button variant="info">Info Button</v-button>
<v-button variant="danger">Danger Button</v-button>
<v-button variant="warning">Warning Button</v-button>
<v-button variant="success">Success Button</v-button>
<v-button variant="orange">Orange Button</v-button>
```

</template>
</example>

#### Sizes

<example>
<template v-slot:preview>
<div class="space-x-3">
	<v-button  size="lg"> Large </v-button>
    <v-button  size="md"> Medium </v-button>
    <v-button  size="sm"> Small </v-button>
</div>
</template>
<template v-slot:source>

```html
<v-button size="lg"> Large </v-button>
<v-button size="md"> Medium </v-button>
<v-button size="sm"> Small </v-button>
```

</template>
</example>

#### Icons

<example>
<template v-slot:preview>
<div class="space-x-1">
	<v-button icon-left="description"> Left Icon </v-button>
    <v-button icon-right="description"> Right Icon </v-button>
    <v-button icon-right="description" icon-left="description"> Double Icon </v-button>
    <v-button icon-left="description" icon-only />
</div>
</template>
<template v-slot:source>

```html
<v-button icon-left="description" size="md"> Left Icon </v-button>
<v-button icon-right="description" size="md"> Right Icon </v-button>
<v-button icon-right="description" icon-left="description" size="md">
  Double Icon
</v-button>
<v-button icon-left="description" size="md" icon-only />
```

</template>
</example>

#### States

<example>
<template v-slot:preview>
<div class="space-x-4">
<v-button variant="primary">Normal Button</v-button>
<v-button variant="primary" active>Active Button</v-button>
<v-button variant="primary" loading>Loading</v-button>
<v-button variant="primary" disabled>Disabled Button</v-button>
</div>
<br/>
<v-button variant="primary" block>Block Button</v-button>
</template>
<template v-slot:source>

```html
<v-button variant="primary">Normal Button</v-button>
<v-button variant="primary" active>Active Button</v-button>
<v-button variant="primary" loading>Loading</v-button>
<v-button variant="primary" disabled>Disabled Button</v-button>
<v-button variant="primary" block>Block Button</v-button>
```

</template>
</example>

#### Outline Mode

<example>
<template v-slot:preview>
<div class="space-y-1 space-x-3">
<v-button outline > OutlinE </v-button>
<v-button outline icon-left="description"> OutlinE </v-button>
<v-button outline icon-right="description"> OutlinE </v-button>
<v-button outline icon-right="description" icon-left="description"> ICONS </v-button>
<v-button outline icon-left="description" icon-only />
<v-row />
<v-button outline size="md" disabled> Disabled </v-button>
<v-button outline icon-left="description" size="md" disabled icon-only />
<v-button outline loading>Loading</v-button>
</div>
</template>
<template v-slot:source>

```html
<v-button> OutlinE </v-button>
<v-button icon-left="description"> OutlinE </v-button>
<v-button icon-right="description"> OutlinE </v-button>
<v-button icon-right="description" icon-left="description"> ICONS </v-button>
<v-button icon-left="description" icon-only />
<v-button size="md" disabled> Disabled </v-button>
<v-button icon-left="description" size="md" disabled icon-only />
<v-button loading>Loading</v-button>
</div>
```

</template>
</example>

#### Anchor buttons and custom tags

<example>
<template v-slot:preview>
<div class="space-y-1">
	<v-row>
		<v-button variant="link" tag="a" href="https://google.com">Anchor Button</v-button>
	</v-row>
	<v-row>
		<v-button variant="link" to="/docs/components/button">Router Button</v-button>
	</v-row>
</div>
</template>
<template v-slot:source>

```html
<v-button tag="a" href="https://google.com">Anchor Button</v-button>
<v-button variant="link" to="/docs/components/button">
  Router Button
</v-button>
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description                                             | Type           | Values                                                                                                  | Default   |
| --------- | ------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------- | --------- |
| disabled  | toggle disabled state.                                  | boolean        | -                                                                                                       | false     |
| loading   | Toggle loading spinner.                                 | boolean        | -                                                                                                       | false     |
| active    | Toggle active pseudo class.                             | boolean        | -                                                                                                       | false     |
| type      | Button's type attribute.                                | string         | `button`, `submit`, `reset`                                                                             | 'button'  |
| outline   | Button in outline mode/style                            | boolean        | -                                                                                                       | false     |
| variant   | Button's different colors and styles.                   | string         | `neutral`, `primary`, `secondary`, `tertiary`, `danger`, `warning`, `info`, `success`, `link`, `orange` | 'neutral' |
| size      | Button's different sizes.                               | string         | `sm`, `md`, `lg`                                                                                        | 'md'      |
| iconLeft  | Button's left icon.                                     | string         | `Any valid icon name.`                                                                                  |           |
| iconRight | Button's right icon.                                    | string         | `Any valid icon name.`                                                                                  |           |
| iconOnly  | Just show icon if this.icon exist                       | boolean        | -                                                                                                       | false     |
| to        | router-link's 'to' value.                               | string\|object | -                                                                                                       |           |
| tag       | A HTML5 standard tag name in lowercase, e.g. div, p, a. | string         | -                                                                                                       | 'button'  |
| fluid     | Block mode which fill its parent width.                 | boolean        | -                                                                                                       |           |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
