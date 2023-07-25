# VPagination

## Usage

```js
import { VPagination } from "vue-ui-light";
```

<br/>

```ts
type MetaData = {
  total: number;
  currentPage: number;
  lastPage?: number;
};
```

<br/>
<br/>

### Default

<example>
<template v-slot:preview>
<div class="flex flex-col justify-center space-x-1">
		<v-pagination
			steps="25"
			:meta="{total: 100,currentPage: 3}"
			class="my-4"
		/>
		<v-pagination
		steps="20"
		:meta="{total: 100,currentPage: 2}"
		class="my-4"
		/>
		<v-pagination
			steps="5"
			:meta="{total: 100,currentPage: 4}"
			class="my-4"
		/>
</div>
</template>

<template v-slot:source>

```html
<v-pagination steps="25" :meta="meta" />
<v-pagination steps="20" :meta="meta" />
<v-pagination steps="5" :meta="meta" />
```

```js
meta: {
  total: 100;
  currentPage: 3;
}
```

</template>
</example>

<br/>
<br/>

### Arrow only

<example>
<template v-slot:preview>
<div class="flex flex-col justify-center space-x-1">
		<v-pagination
			steps="25"
			:meta="{total: 100,currentPage: 2}"
			class="my-4"
			arrow-only
		/>
		<v-pagination
			steps="5"
			:meta="{total: 100,currentPage: 2}"
			class="my-4"
			arrow-only
		/>
</div>
</template>

<template v-slot:source>

```html
<v-pagination steps="25" :meta="meta" arrow-only />
<v-pagination steps="5" :meta="meta" arrow-only />
```

```js
meta: {
  total: 100;
  currentPage: 3;
}
```

</template>
</example>

<br/>
<br/>

### Compact mode

<example>
<template v-slot:preview>
<div class="flex justify-center space-x-1">
		<v-pagination
			steps="5"
			:meta="{total: 100,currentPage: 3}"
			mode="compact"
			class="my-4"
		/>
</div>
</template>

<template v-slot:source>

```html
<v-pagination steps="5" :meta="meta" mode="compact" />
```

```js
meta: {
  total: 100;
  currentPage: 3;
}
```

</template>
</example>

<br/>
<br/>

### Goto mode

<example>
<template v-slot:preview>
<div class="flex justify-center space-x-1">
		<v-pagination
			steps="5"
			:meta="{total: 100,currentPage: 3}"
			mode="goto"
			class="my-4"
		/>
</div>
</template>

<template v-slot:source>

```html
<v-pagination steps="5" :meta="meta" mode="compact" />
```

```js
meta: {
  total: 100;
  currentPage: 3;
}
```

</template>
</example>

### UseCase wiht Table

<example color="white">
<template v-slot:preview>
		<v-table :rows="[
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					deadline: '22 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'success',
					created: '17 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'pending',
					created: '17 Oct, 2020',
					price: '$11.70',
				},
				{
					id: 'ID: 70668',
					invoice: 'New sign-in from iPhone',
					client: 'Dianne Russell',
					vat: '16627',
					status: 'decline',
					created: '17 Oct, 2020',
					price: '$11.70',
				},
			]" :columns="[
				{
					key: 'id',
					title: 'ID No.',
					sortable: true,
				},
				{
					key: 'client',
					title: 'Client',
					sortable: true,
				},
				{
					key: 'status',
					title: 'Status',
				},
			]" page-size="4" hav-pagination />
</template>

<template v-slot:source>

```html
<v-table :rows="rows" :columns="columns" page-size="4" hav-pagination />
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description               | Type     | Values                       | Default   |
| --------- | ------------------------- | -------- | ---------------------------- | --------- |
| meta      | Meta data (from server).  | MetaData | -                            |           |
| steps     | Number of items per_page. | number   | -                            | 15        |
| mode      | Type of pagination.       | string   | `default`, `compact`, `goto` | 'default' |
| arrowOnly | Just show arrow           | boolean  | -                            | false     |

## Events

| Event name | Properties                              | Description               |
| ---------- | --------------------------------------- | ------------------------- |
| paginate   | **page** `number` - change current page | Called when a page select |
