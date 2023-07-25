# Breadcrumb

## Usage

```js
import { VBreadcrumb } from "vue-ui-light";
```

<br/>
<br/>

### Default

<example>
<template v-slot:preview>
	 <v-breadcrumb
            :crumbs="[
                { label: 'Cloud', to: { name: 'home' } },
                { label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { label: 'Project', to: { name: 'Breadcrumb' } },
                { label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
    />
</template>
<template v-slot:source>

```html
<v-breadcrumb :crumbs="crumbItems" />
```

```js
crumbItems: [
  { label: "Cloud", to: { name: "home" } },
  { label: "File", to: { name: "docs", query: { source: "test" } } },
  { label: "Project", to: { name: "Breadcrumb" } },
  { label: "ProjectName", to: { name: "Breadcrumb" } }
];
```

</template>
</example>

### Seperator

<example>
<template v-slot:preview>
	<div class="my-8" >
	<v-breadcrumb
		:crumbs="[
                { label: 'Cloud', to: { name: 'home' } },
                { label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { label: 'Project', to: { name: 'Breadcrumb' } },
                { label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
		seperator="//"
	/>
	</div>
	<div class="my-8" >
	<v-breadcrumb
		:crumbs="[
                { label: 'Cloud', to: { name: 'home' } },
                { label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { label: 'Project', to: { name: 'Breadcrumb' } },
                { label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
		seperator="|"
	/>
	</div>
	<div class="my-8" >
	<v-breadcrumb
		:crumbs="[
                { label: 'Cloud', to: { name: 'home' } },
                { label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { label: 'Project', to: { name: 'Breadcrumb' } },
                { label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
		seperator="⏵"
	/>
	</div>
</template>
<template v-slot:source>

```html
<v-breadcrumb seperator="//" :crumbs="crumbItems" />
<v-breadcrumb seperator="|" :crumbs="crumbItems" />
<v-breadcrumb seperator="⏵" :crumbs="crumbItems" />
```

```js
crumbItems: [
  { label: "Cloud", to: { name: "home" } },
  { label: "File", to: { name: "docs", query: { source: "test" } } },
  { label: "Project", to: { name: "Breadcrumb" } },
  { label: "ProjectName", to: { name: "Breadcrumb" } }
];
```

</template>
</example>

### with icon

Use `Icons` valid names for icon property.

<example>
<template v-slot:preview>
	 <div class="my-8" >
	 <v-breadcrumb
            :crumbs="[
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
    />
	</div>
	 <div class="my-8" >
	 <v-breadcrumb
            :crumbs="[
                { leftIcon: 'offline', label: 'Cloud', to: { name: 'home' } },
                { leftIcon: 'offline', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { leftIcon: 'offline', label: 'Project', to: { name: 'Breadcrumb' } },
                { leftIcon: 'offline', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
    />
	</div>
	 <div class="my-8" >
	 <v-breadcrumb
            :crumbs="[
                { rightIcon: 'online', leftIcon: 'offline', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
    />
	</div>
</template>
<template v-slot:source>

```html
<v-breadcrumb :crumbs="crumbItemsRight" />
<v-breadcrumb :crumbs="crumbItemsLeft" />
<v-breadcrumb :crumbs="crumbItemsBoth" />
```

```js
crumbItemsRight: [
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ],
crumbItemsLeft: [
                { leftIcon: 'offline', label: 'Cloud', to: { name: 'home' } },
                { leftIcon: 'offline', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { leftIcon: 'offline', label: 'Project', to: { name: 'Breadcrumb' } },
                { leftIcon: 'offline', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]
crumbItemsBoth: [
                { rightIcon: 'online', leftIcon: 'offline', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', leftIcon: 'offline', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]
```

</template>
</example>

### Variant

<example>
<template v-slot:preview>
	<div class="my-8" >
	<v-breadcrumb
		variant="primary"
		:crumbs="[
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
	/>
	</div>
	<div class="my-8" >
	<v-breadcrumb
		variant="secondary"
		:crumbs="[
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
	/>
	</div>
	<div class="my-8" >
	<v-breadcrumb
		variant="tertiary"
		:crumbs="[
                { rightIcon: 'online', label: 'Cloud', to: { name: 'home' } },
                { rightIcon: 'online', label: 'File', to: { name: 'docs', query: { source: 'test' } } },
                { rightIcon: 'online', label: 'Project', to: { name: 'Breadcrumb' } },
                { rightIcon: 'online', label: 'ProjectName', to: { name: 'Breadcrumb' } },
            ]"
	/>
	</div>
</template>
<template v-slot:source>

```html
<v-breadcrumb variant="primary" :crumbs="crumbItems" />
<v-breadcrumb variant="secondary" :crumbs="crumbItems" />
<v-breadcrumb variant="tertiary" :crumbs="crumbItems" />
```

```js
crumbItems: [
  { rightIcon: "online", label: "Cloud", to: { name: "home" } },
  {
    rightIcon: "online",
    label: "File",
    to: { name: "docs", query: { source: "test" } }
  },
  { rightIcon: "online", label: "Project", to: { name: "Breadcrumb" } },
  { rightIcon: "online", label: "ProjectName", to: { name: "Breadcrumb" } }
];
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description                           | Type    | Values                                                                                                  | Default   |
| --------- | ------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- | --------- |
| crumbs    | Array of crumb items.                 | Crumb[] | -                                                                                                       |           |
| seperator | seperator style<br/>`@default` /      | string  | -                                                                                                       | '/'       |
| variant   | Crumbs's different colors and styles. | string  | `neutral`, `primary`, `secondary`, `tertiary`, `danger`, `warning`, `info`, `success`, `link`, `orange` | 'neutral' |

## Events

| Event name | Properties                                                                          | Description             |
| ---------- | ----------------------------------------------------------------------------------- | ----------------------- |
| select     | **crumb** `object` - Crumb's object<br/>**index** `number` - Selected crumb's index | v-model's update event. |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             | <br/>    |
