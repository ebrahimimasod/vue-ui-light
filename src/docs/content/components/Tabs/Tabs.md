# VTabs

## Usage

```js
import { VTabs, VTab } from "vue-ui-light";
```

<br/>

> `v-tabs` combine multiple `v-tab` component in order to create an tab group.

> You must use this type of structure for render the select list correctly.

```ts
interface Tab {
  title: string;
  icon?: string;
  badge?: string[]; // [variant , content]
  id?: string | number | void;
  disabled?: boolean;
  index: number;
}
```

### Default

<example>
<template v-slot:preview>
<v-tabs selected="3">
	<v-tab title="Tab 1"> Tab 1 </v-tab>
	<v-tab title="Tab 2"> Tab 2 </v-tab>
	<v-tab title="Tab 3"> Tab 3 </v-tab>
	<v-tab title="Selected">  Contetnt Selected </v-tab>
	<v-tab title="Tab 5"> Tab 5 </v-tab>
</v-tabs>
</template>
<template v-slot:source>

```html
<v-tabs selected="3">
  <v-tab title="Tab 1"> Tab 1 </v-tab>
  <v-tab title="Tab 2"> Tab 2 </v-tab>
  <v-tab title="Tab 3"> Tab 3 </v-tab>
  <v-tab title="Selected"> Contetnt Selected </v-tab>
  <v-tab title="Tab 5"> Tab 5 </v-tab>
</v-tabs>
```

</template>
</example>

### With Icon

<example>
<template v-slot:preview>
<v-tabs selected="3">
	<v-tab title="Tab 1" icon="desktop"> Tab 1 </v-tab>
	<v-tab title="Tab 2" icon="phone"> Tab 2 </v-tab>
	<v-tab title="Tab 3" icon="desktop"> Tab 3 </v-tab>
	<v-tab title="Selected" icon="tablet">  Contetnt Selected </v-tab>
	<v-tab title="Tab 5" icon="desktop"> Tab 5 </v-tab>
</v-tabs>
</template>
<template v-slot:source>

```html
<v-tabs selected="3">
  <v-tab title="Tab 1" icon="desktop"> Tab 1 </v-tab>
  <v-tab title="Tab 2" icon="phone"> Tab 2 </v-tab>
  <v-tab title="Tab 3" icon="desktop"> Tab 3 </v-tab>
  <v-tab title="Selected" icon="tablet"> Contetnt Selected </v-tab>
  <v-tab title="Tab 5" icon="desktop"> Tab 5 </v-tab>
</v-tabs>
```

</template>
</example>

### With Badge

<example>
<template v-slot:preview>
<v-tabs selected="3">
	<v-tab title="Tab 1" icon="desktop"> Tab 1 </v-tab>
	<v-tab title="Tab 2" icon="phone" :badge="['warning', '1']"> Tab 2 </v-tab>
	<v-tab title="Tab 3" icon="desktop"> Tab 3 </v-tab>
	<v-tab title="Tab 5" icon="desktop" :badge="['orange', '2']"> Tab 5 </v-tab>
</v-tabs>
</template>
<template v-slot:source>

```html
<v-tabs selected="3">
  <v-tab title="Tab 1" icon="desktop"> Tab 1 </v-tab>
  <v-tab title="Tab 2" icon="phone" :badge="['warning', '1']"> Tab 2 </v-tab>
  <v-tab title="Tab 3" icon="desktop"> Tab 3 </v-tab>
  <v-tab title="Tab 5" icon="desktop" :badge="['orange', '2']"> Tab 5 </v-tab>
</v-tabs>
```

</template>
</example>

### Disabled

<example>
<template v-slot:preview>
<v-tabs selected="3">
	<v-tab title="disabled" icon="desktop" disabled> Tab 1 </v-tab>
	<v-tab title="Tab 2" icon="desktop"> Tab 2 </v-tab>
	<v-tab title="Tab 3" icon="tablet">  Tab 3 </v-tab>
	<v-tab title="disabled" icon="desktop" disabled> Tab 4 </v-tab>
</v-tabs>
</template>
<template v-slot:source>

```html
<v-tabs selected="3">
  <v-tab title="disabled" icon="desktop" disabled> Tab 1 </v-tab>
  <v-tab title="Tab 2" icon="desktop"> Tab 2 </v-tab>
  <v-tab title="Tab 3" icon="tablet"> Tab 3 </v-tab>
  <v-tab title="disabled" icon="desktop" disabled> Tab 4 </v-tab>
</v-tabs>
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description                                     | Type           | Values | Default |
| --------- | ----------------------------------------------- | -------------- | ------ | ------- |
| selected  | Initially indicates which tab has active state. | number\|string | -      |         |

## Events

| Event name | Properties                                  | Description              |
| ---------- | ------------------------------------------- | ------------------------ |
| change     | **tabIndex** `number` - change selected tab | Called when a tab select |
