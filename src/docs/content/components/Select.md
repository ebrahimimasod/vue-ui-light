# VSelect

## Usage

```js
import { VSelect } from "vue-ui-light";
```

> You must use this type of structure for render the select list correctly.

```ts
interface SelectOption {
  title: string;
  value: string;
  icon?: string;
  caption?: string;
  image?: string;
}

interface SelectGroup {
  label?: string;
  divide?: boolean;
  options: SelectOption[];
}
```

## Basic

<example min-height="550" :modelData="modelData">
<template #preview="{ data }">
	<v-row class="flex flex-row gap-8">
		<v-select :model-value="modelData ? modelData : ''"
			:options="[
			{
			    title: 'Today',
			    caption: 'email1@email.com',
			    value: '1',
			},
			{
			    title: 'Yesterday',
			    caption: 'email2@email.com',
			    value: '2',
			},
			{
			    title: 'Current week',
			    caption: 'email3@email.com',
			    value: '3',
			},
			{
			    title: 'Last 15 days',
			    caption: 'email4@email.com',
			    value: '4',
			},
            ]"
		label="Select Basic"
		@update:modelValue="modelData =  $event"
		/>
				<v-select :model-value="modelData ? modelData : ''"
				icon-left="description"
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
                    value: '1',
                },
                {
                    title: 'Yesterday',
                    caption: 'email2@email.com',
                    value: '2',
                },
                {
                    title: 'Current week',
                    caption: 'email3@email.com',
                    value: '3',
                },
                {
                    title: 'Last 15 days',
                    caption: 'email4@email.com',
                    value: '4',
                },
            ]"
			label="Select Icon"
			@update:modelValue="modelData =  $event"
			/>
			<v-select :model-value="modelData ? modelData : ''"
				image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:options='[
                        {
                            title: "Today",
                            caption: "email1@email.com",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            caption: "email2@email.com",
                            value: "2",
                        },
                        {
                            title: "Current week",
                            caption: "email3@email.com",
                            value: "3",
                        },
                    ]'
			label="Select Image"
			@update:modelValue="modelData =  $event"
			/>
			<v-row>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{modelData}}</div>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{data}}</div>
			</v-row>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select v-model="select" :options="Options" label="Select Basic" />
<v-select
  v-model="select"
  :options="Options"
  label="Select Icon"
  icon-left="description"
/>
<v-select
  v-model="select"
  :options="Options"
  label="Select Image"
  :image-left="image"
/>
```

```ts
data() {
	return {
	    select: [],
		image : 'your image path'
		Options : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				value: '1',
			},
			...
		] as SelectOption[]
	}
}

```

</template>
</example>

## Icon/Image list

<example min-height="450" :modelData="modelData">
<template #preview="{ data }">
	<v-row class="flex flex-row gap-8">
		<v-select :model-value="modelData ? modelData : ''" icon-left="online"
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
					icon: 'description',
                    value: '1',
                },
                {
                    title: 'Yesterday',
                    caption: 'email1@email.com',
					icon: 'offline',
                    value: '2',
                },
                {
                    title: 'Monday',
                    caption: 'email1@email.com',
					icon: 'plus',
                    value: '3',
                },
                {
                    title: 'Friday',
                    caption: 'email1@email.com',
					icon: 'online',
                    value: '5',
                },
            ]"
			label="Select Basic"
			@update:modelValue="modelData =  $event"
			/>
			<v-select :model-value="modelData ? modelData  : []"
				image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:options='[
                        {
                            title: "Today",
                            caption: "email1@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            caption: "email2@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            value: "2",
                        },
                        {
                            title: "Current week",
                            caption: "email3@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/946.jpg",
                            value: "3",
                        },
                    ]'
			label="Select Image"
			@update:modelValue="modelData =  $event"
			/>
			<v-row>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{modelData}}</div>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{data}}</div>
			</v-row>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select
  v-model="select"
  :options="Options"
  label="Icon list"
  icon-left="online"
/>
<v-select
  v-model="select"
  :options="OptionsImage"
  label="Image list"
  :image-left="image"
/>
```

```ts
data() {
	return {
	    select: [],
		image : 'your image path'
		Options : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				icon: 'offline', //and  online
				value: '1',
			},
			...
		] as SelectOption[]
		OptionsImage : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				image: "Your image path",
				value: '1',
			},
			...
		] as SelectOption[]
	}
}

```

</template>
</example>

## States

<example min-height="550" :modelData="modelData">
<template #preview="{ data }">
	<v-row class="flex flex-row gap-8">
	<v-select :model-value="modelData ? modelData : ''" icon-left="description" disabled
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
					icon: 'online',
                    value: '1',
                },
            ]"
			label="Select Disabled"
			@update:modelValue="modelData =  $event"
			/>
			<v-select :model-value="modelData ? modelData : ''" state="tertiary"
				image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:options='[
                        {
                            title: "Today",
                            caption: "email1@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            caption: "email2@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            value: "2",
                        },
                        {
                            title: "Current week",
                            caption: "email3@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/946.jpg",
                            value: "3",
                        },
                    ]'
			label="Select Tertiary"
			@update:modelValue="modelData =  $event"
			/>
		<v-select :model-value="modelData ? modelData : ''" icon-left="online" state="danger"
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
					icon: 'online',
                    value: '1',
                },
                {
                    title: 'Yesterday',
                    caption: 'email2@email.com',
					icon: 'offline',
                    value: '2',
                },
                {
                    title: 'Current week',
                    caption: 'email3@email.com',
					icon: 'offline',
                    value: '3',
                },
                {
                    title: 'Last 15 days',
                    caption: 'email4@email.com',
					icon: 'online',
                    value: '4',
                },
            ]"
			label="Select Danger"
			@update:modelValue="modelData =  $event"
			/>
			<v-select :model-value="modelData ? modelData : ''" state="success"
				image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:options='[
                        {
                            title: "Today",
                            caption: "email1@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            caption: "email2@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            value: "2",
                        },
                        {
                            title: "Current week",
                            caption: "email3@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/946.jpg",
                            value: "3",
                        },
                    ]'
			label="Select Success"
			@update:modelValue="modelData =  $event"
			/>
			<v-row>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{modelData}}</div>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{data}}</div>
			</v-row>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select
  v-model="select"
  :options="Options"
  label="Select Disabled"
  icon-left="description"
  disabled
/>
<v-select
  v-model="select"
  :options="OptionsImage"
  label="Tertiary list"
  :image-left="image"
  state="tertiary"
/>
<v-select
  v-model="select"
  :options="Options"
  label="Danger list"
  icon-left="online"
  state="danger"
/>
<v-select
  v-model="select"
  :options="OptionsImage"
  label="Success list"
  :image-left="image"
  state="success"
/>
```

```ts
data() {
	return {
	    select: [],
		image : 'your image path'
		Options : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				icon: 'offline', //and  online
				value: '1',
			},
			...
		] as SelectOption[]
		OptionsImage : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				image: "Your image path",
				value: '1',
			},
			...
		] as SelectOption[]
	}
}

```

</template>
</example>

## Group header/divider

<example min-height="450">
<template #preview>
	<v-row class="flex flex-row gap-8">
			<v-select v-model="dataImage" state="tertiary"
				image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:groups='[
                {
                    label: "",
                    options: [
                        {
                            title: "Today",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            caption: "email1@email.com",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            caption: "email2@email.com",
                            value: "2",
                        },
                    ],
                },
                {
                    label: "Section header 2",
                    options: [
                        {
                            title: "Last 15 days",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg",
                            caption: "email4@email.com",
                            value: "4",
                        },
                        {
                            title: "Last 30 days",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/84.jpg",
                            caption: "email5@email.com",
                            value: "5",
                        },
                    ],
                },
            ]'
			label="Group Header"
			@update:modelValue="dataImage =  $event"
			/>
			<v-select v-model="dataDivid"
				:groups='[
                {
                    divide: false,
                    options: [
                        {
                            title: "Today",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            caption: "email1@email.com",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            caption: "email2@email.com",
                            value: "2",
                        },
                    ],
                },
                {
                    divide: true,
                    options: [
                        {
                            title: "Last 15 days",
                            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg",
                            caption: "email4@email.com",
                            value: "4",
                        },
                    ],
                },
            ]'
			label="Group Divider"
			@update:modelValue="dataDivid =  $event"
			/>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select
  v-model="select"
  :groups="groupOptions"
  label="Group Header"
  :image-left="image"
  state="tertiary"
/>
<v-select
  v-model="select"
  :groups="groupOptionVDivider"
  label="Group Divider"
/>
```

```ts
data() {
	return {
	    select: [],
		image : 'your image path',
		groupOptions : [
				{
                    label: null,
                    options: [
                        {
                            title: "Last 15 days",
                            image: "Your image path",
                            caption: "email4@email.com",
                            value: "4",
                        },
						...
                    ],
                },
				{
                    label: "Section header 2",
                    options: [
                        {
                            title: "Last 15 days",
                            image: "Your image path",
                            caption: "email4@email.com",
                            value: "4",
                        },
						...
                    ],
                },
			...
		] as SelectGroup ,

		groupOptionVDivider : [
				{
                    divide: false,
                    options: [
                        {
                            title: "Last 15 days",
                            image: "Your image path",
                            caption: "email4@email.com",
                            value: "4",
                        },
						...
                    ],
                },
				{
                    divide: true,
                    options: [
                        {
                            title: "Last 15 days",
                            image: "Your image path",
                            caption: "email4@email.com",
                            value: "4",
                        },
						...
                    ],
                },
			...
		] as SelectGroup ,

	}
}

```

</template>
</example>

## Has search

<example min-height="400" :modelData="modelData">
<template #preview="{ data }">
	<v-row class="flex flex-row gap-8">
	<code>Search functionality is on " title " field</code>
	<v-select v-model="dataSearch" has-search icon-left="online"
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
					icon: 'description',
                    value: '1',
                },
                {
                    title: 'Yesterday',
                    caption: 'email1@email.com',
					icon: 'offline',
                    value: '2',
                },
                {
                    title: 'Monday',
                    caption: 'email1@email.com',
					icon: 'plus',
                    value: '3',
                },
                {
                    title: 'Friday',
                    caption: 'email1@email.com',
					icon: 'online',
                    value: '5',
                },
            ]"
			label="Search list"
			@update:modelValue="dataSearch =  $event"
			/>
			<code>Clear functionality not work correctly only in docgn because lack of reactivity</code>
			<v-select :model-value="modelData ? modelData : ''" has-clear icon-left="offline"
				:options="[
                {
                    title: 'Today',
                    caption: 'email1@email.com',
					icon: 'offline',
                    value: '1',
                },
                {
                    title: 'Yesterday',
                    caption: 'email1@email.com',
					icon: 'offline',
                    value: '2',
                },
            ]"
			label="Clear list"
			@update:modelValue="modelData =  $event"
			/>
			<v-row>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{modelData}}</div>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{data}}</div>
			</v-row>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select
  v-model="select"
  :options="Options"
  has-search
  label="Search list"
  icon-left="online"
/>
<v-select
  v-model="select"
  :options="Options"
  has-clear
  label="Clear list"
  icon-left="offline"
/>
```

```ts
data() {
	return {
	    select: [],
		image : 'your image path'
		Options : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				icon: 'offline', //and  online
				value: '1',
			},
			...
		] as SelectOption[]
	}
}

```

</template>
</example>

## Multi mode

<example min-height="400" :modelData="modelData">
<template #preview="{ data }">
	<v-row class="flex flex-row gap-8">
	<code>Clear Selection not work correctly only in docgn because lack of reactivity</code>
	<v-select multi :model-value="modelData ? modelData : ''"  image-left="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg"
				:options='[
    					{
                            title: "Today",
                            caption: "email1@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/70.jpg",
                            value: "1",
                        },
                        {
                            title: "Yesterday",
                            caption: "email2@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/496.jpg",
                            value: "2",
                        },
                        {
                            title: "Current week",
                            caption: "email3@email.com",
							image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/946.jpg",
                            value: "3",
                        },
            ]'
			label="Multi select"
			@update:modelValue="modelData =  $event"
			/>
			<v-row>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{modelData}}</div>
			<div class="w-px h-px overflow-hidden text-neutral-25">{{data}}</div>
			</v-row>
	</v-row>
</template>

<template v-slot:source>

```html
<v-select
  v-model="select"
  :options="Options"
  multi
  label="Multi select"
  :image-left="image"
/>
```

```ts
data() {
	return {
	    select: [],
		image : 'your image path'
		Options : [
			{
				title: 'Today',
				caption: 'email1@email.com',
				image: 'your image path',
				value: '1',
			},
			...
		] as SelectOption[]
	}
}

```

</template>
</example>

## Props

| Prop name  | Description                                                              | Type                  | Values                                     | Default |
| ---------- | ------------------------------------------------------------------------ | --------------------- | ------------------------------------------ | ------- |
| label      | Select's label. will be placed inside input tag`. | string | -           |
| mode       | Select's dropdown mode. defaults to use list mode.<br/>`@default` 'list' | 'list'                | -                                          | 'list'  |
| options    | An array of options to render in dropdown.                               | SelectOption[]        | -                                          |         |
| groups     | An array of options groups to render in dropdown.                        | SelectGroup[]         | -                                          |         |
| name       | html input's name attribute.                                             | string                | -                                          |         |
| disabled   | Disabled state.                                                          | boolean               | -                                          |         |
| modelValue | v-model's value.                                                         | string\|array\|object | -                                          |         |
| multi      | Multi select mode.                                                       | boolean               | -                                          |         |
| hasSearch  | Whether to show search box in dropdown.                                  | boolean               | -                                          |         |
| hasClear   | Whether to show clear select value.                                      | boolean               | -                                          |         |
| state      | Select's state variant.                                                  | string                | `danger`, `warning`, `success`, `tertiary` |         |
| iconLeft   | A supported icon name to put on the left side of the select.             | string                | -                                          |         |
| imageLeft  | A image url to put on the left side of the select.                       | string                | -                                          |         |
| helper     | Select's helper text.                                                    | string                | -                                          |         |
| fluid      | fluid mode which makes input full-width and disable min-width.           | boolean               | -                                          |         |

## Events

| Event name        | Properties | Description |
| ----------------- | ---------- | ----------- |
| update:modelValue |            |
| close             |            |
| open              |            |

## Slots

| Name   | Description | Bindings |
| ------ | ----------- | -------- |
| helper | helper      |          |
