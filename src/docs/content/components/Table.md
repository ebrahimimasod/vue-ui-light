# VTable

## Usage

```js
import { VTable } from "vue-ui-light";
```

<br />

```ts
interface TableRow {
  [key: string]: string | number | void | undefined;
}

interface TableColumn {
  key: string;
  title: string | number;
  icon: string;
  sortable: boolean;
  align: string;
}
```

<br/>
<br/>

### Default

<example color="white">
<template v-slot:preview>
		<v-table :rows='[
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "pending",
                    created: "17 Oct, 2020",
                    deadline: "22 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "success",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "pending",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "decline",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
            ]' :columns='[
                {
                    key: "id",
                    title: "ID No.",
                },
                {
                    key: "client",
                    title: "Client",
                },
                {
                    key: "created",
                    title: "Created date",
                },
            ]' pageSize="5">
            <template #invoice="{ row }">
                <!-- Column: Name -->
                <div class="font-bold text-base">
                    {{ row.invoice }}
                </div>
            </template>
        </v-table>
</template>

<template v-slot:source>

```html
<v-table :rows="rows" :columns="columns" pageSize="5">
  <template #invoice="{ row }">
    <!-- Column: Invoice -->
    <div class="font-bold text-base">
      {{ row.invoice }}
    </div>
  </template>
</v-table>
```

```js

columns:[
		{
			key: "id",
            title: "ID No.",
        },
		{
		    key: "invoice",
		    title: "Invoice Subject",
		},
		{
		    key: "client",
		    title: "Client",
		},
		{
		    key: "created",
		    title: "Created date",
		},
	]

row:[
	  {
		id: "ID: 70668",
		invoice: "New sign-in from iPhone",
		client: "Dianne Russell",
		created: "17 Oct, 2020",
    }, ....
	]
```

</template>
</example>

<br/>

## Actions

<example color="white">
<template v-slot:preview>
		<v-table :rows='[
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "pending",
                    created: "17 Oct, 2020",
                    deadline: "22 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "success",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "pending",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "decline",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
            ]' :columns='[
                {
                    key: "id",
                    title: "ID No.",
                },
                {
                    key: "client",
                    title: "Client",
                },
                {
                    key: "created",
                    title: "Created date",
                },
            ]' pageSize="5">
            <template #invoice="{ row }">
                <!-- Column: Name -->
                <div class="font-bold text-base">
                    {{ row.invoice }}
                </div>
            </template>
            <template #column-action="{ row }">
                <!-- Column: Name -->
                <div class="flex items-center gap-3">
                    <v-button size="sm" variant="primary">
                        Manage
                    </v-button>
                    <v-button outline size="sm" variant="primary">
                        Actions
                    </v-button>
                    <v-button icon-left="description" icon-only size="sm" outline variant="primary" />
                </div>
            </template>
        </v-table>
</template>

<template v-slot:source>

```html
<v-table :rows="rows" :columns="columns" pageSize="5">
  <template #invoice="{ row }">
    <!-- Column: Invoice -->
    <div class="font-bold text-base">
      {{ row.invoice }}
    </div>
  </template>
  <template #column-action="{ row }">
    <!-- Column: Action -->
    <div class="flex items-center gap-3">
      <v-button size="sm" variant="primary">
        Manage
      </v-button>
      <v-button outline size="sm" variant="primary">
        Actions
      </v-button>
      <v-button
        icon-left="description"
        icon-only
        size="sm"
        outline
        variant="primary"
      />
    </div>
  </template>
</v-table>
```

```js

columns:[
		{
			key: "id",
            title: "ID No.",
        },
		{
		    key: "client",
		    title: "Client",
		},
		{
		    key: "created",
		    title: "Created date",
		},
	]

row:[
	  {
		id: "ID: 70668",
		client: "Dianne Russell",
		created: "17 Oct, 2020",
    }, ....
	]
```

</template>
</example>

## Custom Row/Column

<example color="white">
<template v-slot:preview>
		<v-table :rows='[
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "pending",
                    created: "17 Oct, 2020",
                    deadline: "22 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "success",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "pending",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "ID: 70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "decline",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
            ]' :columns='[
                {
                    key: "id",
                    title: "ID No.",
                },
                {
                    key: "client",
                    title: "Client",
                },
                {
                    key: "status",
                    title: "Status",
                },
            ]' pageSize="5">
            <template #status="{ row }">
                <!-- Column: Name -->
                <v-badge v-if="row.status === 'success'" pastel variant="success"> {{row.status}} </v-badge>
                <v-badge v-if="row.status === 'pending'" pastel variant="primary"> {{row.status}} </v-badge>
                <v-badge v-if="row.status === 'decline'" pastel variant="danger"> {{row.status}} </v-badge>
            </template>
            <template #client="{ row }">
                <!-- Column: Name -->
                <div class="text-base">
                    <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-neutral-500">{{row.client}}</div>
                      <div class="text-sm text-neutral-300">lindsay.walton@example.com</div>
                    </div>
                  </div>
                </div>
            </template>
            <template #column-action="{ row }">
                <!-- Column: Name -->
                <div class="flex items-center gap-3">
                                        <v-button icon-left="description" icon-only size="sm" outline variant="primary" />
                </div>
            </template>
        </v-table>
</template>

<template v-slot:source>

```html
<v-table :rows="rows" :columns="columns" pageSize="5">
  <template #status="{ row }">
    <!-- Column: Name -->
    <v-badge v-if="row.status === 'success'" pastel variant="success">
      {{row.status}}
    </v-badge>
    <v-badge v-if="row.status === 'pending'" pastel variant="primary">
      {{row.status}}
    </v-badge>
    <v-badge v-if="row.status === 'decline'" pastel variant="danger">
      {{row.status}}
    </v-badge>
  </template>
  <template #client="{ row }">
    <!-- Column: Name -->
    <div class="text-base">
      <div class="flex items-center">
        <div class="h-10 w-10 flex-shrink-0">
          <img class="h-10 w-10 rounded-full" :src="imageSrc" alt="" />
        </div>
        <div class="ml-4">
          <div class="font-medium text-neutral-500">{{row.client}}</div>
          <div class="text-sm text-neutral-300">lindsay.walton@example.com</div>
        </div>
      </div>
    </div>
  </template>
  <template #column-action="{ row }">
    <!-- Column: Name -->
    <div class="flex items-center gap-3">
      <v-button
        icon-left="description"
        icon-only
        size="sm"
        outline
        variant="primary"
      />
    </div>
  </template>
</v-table>
```

```js

columns:[
		{
			key: "id",
            title: "ID No.",
        },
		{
		    key: "client",
		    title: "Client",
		},
		{
		    key: "status",
		    title: "Status",
		},
	]

row:[
	  {
		id: "ID: 70668",
		invoice: "New sign-in from iPhone",
		client: "Dianne Russell",
		status: "decline",
    }, ....
	]
```

</template>
</example>

## Sortable / Checkbox

<example color="white">
<template v-slot:preview>
		<v-table :rows='[
                {
                    id: "70668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "pending",
                    created: "17 Oct, 2020",
                    deadline: "22 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "success",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "8885",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "pending",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
                {
                    id: "90668",
                    invoice: "New sign-in from iPhone",
                    client: "Dianne Russell",
                    vat: "16627",
                    status: "decline",
                    created: "17 Oct, 2020",
                    price: "$11.70",
                },
            ]' :columns='[
                {
                    key: "id",
                    title: "ID No.",
					sortable : true
                },
                {
                    key: "invoice",
                    title: "Invoice Subject",
                },
                {
                    key: "client",
                    title: "Client",
					sortable : true
                },
                {
                    key: "status",
                    title: "Status",
                },
            ]' pageSize="5" hav-checkbox >
            <template #invoice="{ row }">
                <!-- Column: Name -->
                <div class="font-bold text-base">
                    {{ row.invoice }}
                </div>
            </template>
            <template #status="{ row }">
                <!-- Column: Name -->
                <v-badge v-if="row.status === 'success'" pastel variant="success"> {{row.status}} </v-badge>
                <v-badge v-if="row.status === 'pending'" pastel variant="primary"> {{row.status}} </v-badge>
                <v-badge v-if="row.status === 'decline'" pastel variant="danger"> {{row.status}} </v-badge>
            </template>
            <template #client="{ row }">
                <!-- Column: Name -->
                <div class="text-base">
                    <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" src="https://www.uifaces.co/wp-content/themes/uifaces-theme/src/img/home-animation/avatar-4.svg" alt="">
                    </div>
                    <div class="ml-4">
                      <div class="font-medium text-neutral-500">{{row.client}}</div>
                      <div class="text-sm text-neutral-300">lindsay.walton@example.com</div>
                    </div>
                  </div>
                </div>
            </template>
            <template #column-action="{ row }">
                <!-- Column: Name -->
                <div class="flex items-center gap-4">
					<v-toggle size="medium" />
					<v-Icon name="more" size="14" class="text-neutral-200" />
                </div>
            </template>
        </v-table>
</template>

<template v-slot:source>

```html
<v-table :rows="rows" :columns="columns" hav-checkbox pageSize="5">
  <template #invoice="{ row }">
    <!-- Column: Name -->
    <div class="font-bold text-base">
      {{ row.invoice }}
    </div>
  </template>
  <template #status="{ row }">
    <!-- Column: Name -->
    <v-badge v-if="row.status === 'success'" pastel variant="success">
      {{row.status}}
    </v-badge>
    <v-badge v-if="row.status === 'pending'" pastel variant="primary">
      {{row.status}}
    </v-badge>
    <v-badge v-if="row.status === 'decline'" pastel variant="danger">
      {{row.status}}
    </v-badge>
  </template>
  <template #client="{ row }">
    <!-- Column: Name -->
    <div class="text-base">
      <div class="flex items-center">
        <div class="h-10 w-10 flex-shrink-0">
          <img class="h-10 w-10 rounded-full" :src="imageSrc" alt="" />
        </div>
        <div class="ml-4">
          <div class="font-medium text-neutral-500">{{row.client}}</div>
          <div class="text-sm text-neutral-300">lindsay.walton@example.com</div>
        </div>
      </div>
    </div>
  </template>
  <template #column-action="{ row }">
    <!-- Column: Name -->
    <div class="flex items-center gap-4">
      <v-toggle size="medium" />
      <v-Icon name="more" size="14" class="text-neutral-200" />
    </div>
  </template>
</v-table>
```

```js

columns:[
		{
			key: "id",
            title: "ID No.",
			sortable : true
        },
		{
		    key: "invoice",
		    title: "Invoice Subject",
		},
		{
		    key: "client",
		    title: "Client",
			sortable : true
		},
		{
		    key: "status",
		    title: "Status",
		},
	]

row:[
	  {
		id: "ID: 70668",
		invoice: "New sign-in from iPhone",
		client: "Dianne Russell",
		status: "decline",
    }, ....
	]
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name     | Description                                                                                                   | Type          | Values                       | Default   |
| ------------- | ------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------- | --------- |
| rows          | Table data. must comply with column key specified in 'columns' prop.                                          | TableRow[]    | -                            |           |
| columns       | Table columns.                                                                                                | TableColumn[] | -                            |           |
| actionText    | Text used as title of action column. will be ignored if `action` slot were not defined.<br/>`@default` Action | string        | -                            | 'Action'  |
| haVCheckbox   | Whether to show a checkbox on each row.                                                                       | boolean       | -                            | false     |
| pageSize      | Number of rows being displayed in each page.                                                                  | number        | -                            | 10        |
| searchKey     | Search based on this property.<br/>required when has-search was true.                                         | string        | -                            | ''        |
| hasSearch     | Whether to show search input or not.                                                                          | boolean       | -                            | false     |
| sticky        | Change Table style for sticky mode                                                                            | boolean       | -                            | false     |
| haVPagination | show pagination                                                                                               | boolean       | -                            | false     |
| pageMode      | Type of pagination.                                                                                           | string        | `default`, `compact`, `goto` | 'default' |

## Events

| Event name  | Properties                     | Description                          |
| ----------- | ------------------------------ | ------------------------------------ |
| action      |                                |
| select-row  | **row** `row` - row            | Called when action in a row selected |
| change-page | **newPage** `number` - newPage | Called when paginate item click      |

## Slots

| Name          | Description                                  | Bindings                                                                                               |
| ------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| default       | Indicating a custom cell using its column id | **name** `string` - column.key<br/>**row** `object` - row model<br/>**column** `object` - column model |
| column-action | Table action column                          | **row** `object` - row model                                                                           |
