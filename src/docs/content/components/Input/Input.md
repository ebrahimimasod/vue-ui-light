# Input

## Usage

```js
import { VInput } from "vue-ui-light";
```

<br/>
<br/>

Use `v-input` for different types of inputs. `text`, `number`, `email`, `search` and `link` are supported by default.

## Generic Inputs

<example>
<template v-slot:preview>
<div class="flex mb-2">
	<v-input
		type="text"
		label="Text"
		class="mr-2"
	/>
	<v-input
		type="number"
		label="Number"
	/>
</div>
<div class="flex">
	<v-input
		class="mr-2"
		type="email"
		label="Email"
		helper="A valid email must ends with @domain.com"
	/>
	<v-input
		type="text"
		placeholder="An Input has no label :))"
	/>
</div>
</template>
<template v-slot:source>

```html
<s-card>
  <v-input type="text" label="Text" />
  <v-input type="number" label="Number" placeholder="Only accepts numbers" />
  <v-input type="search" label="Search" helper="No default appearence" />
  <v-input
    type="email"
    label="Email"
    helper="A valid email address must ends with @domain.com"
  />
  <v-input type="text" placeholder="An Input has no label :))" />
</s-card>
```

</template>
</example>

## States

<example>
<template v-slot:preview>
<s-card class="space-y-2">
	<v-input
		type="text"
		label="Text (disabled)"
		class="mr-2"
		disabled
	/>
	<v-input
		type="text"
		label="Text"
		model-value="readonly input"
		readonly
	/>
	<v-input
		type="text"
		label="Success Input"
		state="success"
		class="mr-2"
	/>
	<v-input
		type="text"
		label="Danger Input"
		state="danger"
	/>
	<v-input
		type="text"
		label="Warning Input"
		state="warning"
	/>
</s-card>
</template>
<template v-slot:source>

```html
<s-card>
  <v-input type="text" label="Text (disabled)" disabled />
  <v-input type="text" label="Text" readonly />
  <v-input type="text" label="Success Input" state="success" />
  <v-input type="text" label="Danger Input" state="danger" />
  <v-input type="text" label="Warning Input" state="warning" />
</s-card>
```

</template>
</example>

## Icons

<example>
<template v-slot:preview>
<s-card class="space-y-2">
	<v-input
		type="text"
		class="mr-2"
		icon-left="description"
		label="Left Icon"
	/>
	<v-input
		type="text"
		class="mr-2"
		icon-right="description"
		label="Right Icon"
	/>
	<v-input
		type="text"
		class="mr-2"
		icon-left="description"
		icon-right="description"
		label="Double Icon"
	/>
	<v-input
		type="text"
		class="mr-2"
		icon-left="description"
		icon-right="description"
		placeholder="Placeholder"
	/>
</s-card>
</template>
<template v-slot:source>

```html
<v-input type="text" class="mr-2" icon-left="description" label="Left Icon" />
<v-input type="text" class="mr-2" icon-right="description" label="Right Icon" />
<v-input
  type="text"
  class="mr-2"
  icon-left="description"
  icon-right="description"
  label="Double Icon"
/>
<v-input
  type="text"
  class="mr-2"
  icon-left="description"
  icon-right="description"
  placeholder="Placeholder"
/>
```

</template>
</example>

## Number mode

<example>
<template v-slot:preview>
<s-card class="space-y-2">
	 	<v-input :model-value="5"  icon-right="plus" icon-left="minus" type="number" label="Number" />
        <v-input :model-value="5"  label="Right Only" type="number">
		    <template #iconRight>
                <div class="flex flex-col gap-1">
                    <v-Icon name="plus" size="13" class="hover:text-primary-700" @click="++num"/>
                    <v-Icon name="minus" size="13" class="hover:text-primary-700" @click="--num"/>
                </div>
            </template>
        </v-input>
        <v-input :model-value="5"  label="Left Only" type="number">
            <template #iconLeft>
                <div class="flex flex-col gap-1">
                    <v-Icon name="plus" size="13" class="hover:text-primary-700" @click="++num"/>
                    <v-Icon name="minus" size="13" class="hover:text-primary-700" @click="--num"/>
                </div>
            </template>
        </v-input>
        <v-input :model-value="5"  label="Slot" type="number">
            <template #iconRight>
                <div class="flex flex-col gap-1">
                    <v-Icon name="description" size="16" class="hover:text-danger-700" @click="num++"/>
                </div>
            </template>
        </v-input>
</s-card>
		<br />
		<v-input :model-value="5" icon-right="plus" icon-left="minus" type="number" placeholder="no lable"/>
		<br />
		<v-input :model-value="5"  icon-right="plus" icon-left="minus" type="number" helper="helper" label="Helper" />
</template>
<template v-slot:source>

```html
<v-input
  :v-model="num"
  icon-right="plus"
  icon-left="minus"
  type="number"
  label="Number"
/>
<v-input :v-model="num" label="Right Only" type="number">
  <template #iconRight>
    <div class="flex flex-col gap-1">
      <v-Icon
        name="plus"
        size="13"
        class="hover:text-primary-700"
        @click="++num"
      />
      <v-Icon
        name="minus"
        size="13"
        class="hover:text-primary-700"
        @click="--num"
      />
    </div>
  </template>
</v-input>
<v-input :v-model="num" label="Left Only" type="number">
  <template #iconLeft>
    <div class="flex flex-col gap-1">
      <v-Icon
        name="plus"
        size="13"
        class="hover:text-primary-700"
        @click="++num"
      />
      <v-Icon
        name="minus"
        size="13"
        class="hover:text-primary-700"
        @click="--num"
      />
    </div>
  </template>
</v-input>
<v-input :v-model="num" label="Slot" type="number">
  <template #iconRight>
    <div class="flex flex-col gap-1">
      <v-Icon
        name="description"
        size="16"
        class="hover:text-danger-700"
        @click="num++"
      />
    </div>
  </template>
</v-input>
<v-input
  :v-model="num"
  icon-right="plus"
  icon-left="minus"
  type="number"
  placeholder="no lable"
/>
<v-input
  :v-model="num"
  icon-right="plus"
  icon-left="minus"
  type="number"
  helper="helper"
  label="Helper"
/>
```

```js
data() {
	return {
		num : 5
	}
},
```

</template>
</example>

## Fluid Mode

In Fluid mode, input fills its parent width, causing its width to be either greater or smaller than the default.

<example>
<template v-slot:preview>
	<s-card>
		<v-row class="mb-4">
			<v-col xs="12">
				<v-input
					label="Text"
					fluid
				/>
			</v-col>
		</v-row>
		<v-row justify="center">
			<v-col xs="3">
				<v-input
					label="Text"
					fluid
				/>
			</v-col>
		</v-row>
	</s-card>
</template>
<template v-slot:source>

```html
<s-card>
  <v-row>
    <v-col xs="12">
      <v-input label="Text" fluid />
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col xs="3">
      <v-input label="Text" fluid />
    </v-col>
  </v-row>
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
| type         | Input's type attribute.                                            | string         | -                              | 'text'  |
| v-model      | v-model's value.<br/>`@model` true                                 | string\|number | -                              |         |
| placeholder  | Input's placeholder.                                               | string         | -                              |         |
| helper       | Input's helper text.                                               | string         | -                              |         |
| label        | Input's label.                                                     | string         | -                              |         |
| fluid        | Fluid mode which makes input full-width and disable its min-width. | boolean        | -                              | false   |
| name         | Input's name attribute.                                            | string         | -                              |         |
| state        | Input's state variant.                                             | string         | `danger`, `warning`, `success` |         |
| disabled     | Disabled mode.                                                     | boolean        | -                              |         |
| readonly     | Read only mode.                                                    | boolean        | -                              |         |
| dir          | Input's dir attribute.                                             | string         | -                              |         |
| hidden       | Input's hidden attribute.                                          | boolean        | -                              |         |
| autoComplete | Input's auto-complete attribute.                                   | boolean        | -                              | false   |
| iconRight    | Input's right icon.                                                | string         | -                              |         |
| iconLeft     | Input's left icon.                                                 | string         | -                              |         |
| inputClass   | Input's custom class.                                              | string         | -                              |         |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |

## Slots

| Name      | Description                                       | Bindings |
| --------- | ------------------------------------------------- | -------- |
| iconLeft  | iconLeft icon placed at left hand of the input.   |          |
| iconRight | iconRight icon placed at right hand of the input. |          |
| helper    | helper                                            |          |
