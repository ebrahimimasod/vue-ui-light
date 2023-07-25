# VDialog

## Usage

```js
import { VDialog } from "vue-ui-light";
```

#### default with title

<example>
<template #preview="{ state }">
<v-button variant="primary" fluid>
    Dialog1
</v-button>
<v-dialog :model-value="state" title="Popup title">
	Popup description
</v-dialog>
</template>

<template v-slot:source>

```html
<v-button variant="primary" @click="state = true">
  Dialog1
</v-button>
<v-dialog :model-value="state" title="Popup title">
  Popup description
</v-dialog>
```

</template>
</example>

#### footer and header slot

<example>
<template #preview="{ state }">
<v-button variant="primary" fluid>
    Dialog1
</v-button>
<v-dialog :model-value="state">
	<template #header>
	    <h4>Popup title</h4>
	</template>
	Popup description
	<template #footer>
	    <div class="flex flex-col items-center gap-1 w-full">
			<v-button variant="primary" fluid>
				Action
			</v-button>
			<v-button variant="link" fluid>
				Action
			</v-button>
		</div>
	</template>
</v-dialog>
</template>

<template v-slot:source>

```html
<v-dialog v-model="state" icon="description">
  <template #header>
    <h4>Popup title</h4>
  </template>
  Popup description
  <template #footer>
    <div class="flex flex-col items-center gap-1 w-full">
      <v-button variant="primary" fluid @click="state = !state">
        Action
      </v-button>
      <v-button variant="link" fluid @click="state = !state">
        Action
      </v-button>
    </div>
  </template>
</v-dialog>
```

</template>
</example>

#### Icon

<example>
<template #preview="{ state }">
<v-button variant="primary" fluid>
    Dialog1
</v-button>
<v-dialog :model-value="state" icon="description" >
	<template #header>
	    <h4>Popup title</h4>
	</template>
	Popup description
	<template #footer>
	    <div class="flex flex-col items-center gap-1 w-full">
			<v-button variant="primary" fluid>
				Action
			</v-button>
			<v-button variant="link" fluid>
				Action
			</v-button>
		</div>
	</template>
</v-dialog>
</template>

<template v-slot:source>

```html
<v-dialog v-model="state" icon="description">
  <template #header>
    <h4>Popup title</h4>
  </template>
  Popup description
  <template #footer>
    <div class="flex flex-col items-center gap-1 w-full">
      <v-button variant="primary" fluid @click="state = !state">
        Action
      </v-button>
      <v-button variant="link" fluid @click="state = !state">
        Action
      </v-button>
    </div>
  </template>
</v-dialog>
```

</template>
</example>

#### Size and Close

> also you can change footer style with slot (anything you want)

<example>
<template #preview="{ state }">
<v-button variant="primary" fluid>
    Dialog1
</v-button>
<v-dialog :model-value="state" icon="description" size="small" :has-close="true">
	<template #header>
	    <h4>Popup title</h4>
	</template>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit
	<template #footer>
	    <div class="flex items-center justify-between w-full">
			<v-button variant="primary">
				Action
			</v-button>
			<v-button variant="link">
				Action
			</v-button>
		</div>
	</template>
</v-dialog>
</template>

<template v-slot:source>

```html
<v-dialog :model-value="data" icon="description" size="small" :has-close="true">
  <template #header>
    <h4>Popup title</h4>
  </template>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit
  <template #footer>
    <div class="flex items-center justify-between w-full">
      <v-button variant="primary">
        Action
      </v-button>
      <v-button variant="link">
        Action
      </v-button>
    </div>
  </template>
</v-dialog>
```

</template>
</example>

#### Custom all

<example>
<template #preview="{ state }">
<v-button variant="primary" fluid>
    Dialog1
</v-button>
<v-dialog :model-value="state" :has-close="true" size="small">
	<template #icon>
	    <v-Icon name="description" size="45" class="text-orange-500" />
	</template>
	<template #header>
	    <h3 class="text-orange-500">You have food</h3>
	</template>
	<div class="text-neutral-600">Why don't you share with your friend?</div>
	<template #footer>
		<h5 class="flex items-center justify-around w-full">
		    <v-button variant="orange" outline>
		        Share now
		    </v-button>
		</h5>
	</template>
</v-dialog>
</template>

<template v-slot:source>

```html
<v-dialog :model-value="data" :has-close="true" size="small">
  <template #icon>
    <v-Icon name="description" size="45" class="text-orange-500" />
  </template>
  <template #header>
    <h3 class="text-orange-500">You have food</h3>
  </template>
  <div class="text-neutral-600">Why don't you share with your friend?</div>
  <template #footer>
    <h5 class="flex items-center justify-around w-full">
      <v-button variant="orange" outline>
        Share now
      </v-button>
    </h5>
  </template>
</v-dialog>
```

</template>
</example>

## Props

| Prop name   | Description                                                                  | Type    | Values                                     | Default       |
| ----------- | ---------------------------------------------------------------------------- | ------- | ------------------------------------------ | ------------- |
| v-model     | v-model's value.<br/>`@model` true                                           | boolean | -                                          |               |
| title       | Dialog's title used in absensce of 'footer' slot.                            | string  | -                                          |               |
| size        | Dialog's size.                                                               | string  | `small`, `medium`, `large`, `max-content.` | 'max-content' |
| forced      | Forced mode which prevents outside click and close icon to close the dialog. | boolean | -                                          |               |
| hasClose    | Whether to show dialog's close icon.                                         | boolean | -                                          | false         |
| dialogClass | Custom class for dialog el                                                   | string  | -                                          | ''            |
| icon        | Dialog's top icon.                                                           | string  | `Any valid icon name.`                     |               |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |

## Slots

| Name    | Description    | Bindings |
| ------- | -------------- | -------- |
| icon    | dialog icon    |          |
| header  | dialog header  |          |
| default | dialog content |          |
| footer  | dialog footer  |          |
