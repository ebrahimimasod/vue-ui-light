<template>
	<div class="v-table-wrapper">
		<table class="v-table">
			<thead>
				<tr class="v-table-header">
					<th
						v-if="haVCheckbox"
						class="v-table-th pr-4"
						width="3%"
					>
						<v-checkbox v-model="isCheckAll" />
					</th>
					<th
						v-for="column in columns"
						:id="column.key"
						:key="column.key"
						class="v-table-th"
						:class="alignClass(column)"
					>
						<div class="th-container">
							<div>{{ column.title }}</div>
							<div class="v-table-th-caption">
								{{ column.caption }}
							</div>
							<v-Icon
								v-if="column.icon"
								class="v-table-action-btn"
								:name="column.icon"
								size="12"
							/>
							<!-- handle seperate sort  -->
							<v-Icon
								v-if="column.sortable"
								:id="column.key"
								:key="column.key"
								class="v-table-action-btn"
								:name="sortIcon[column.key]"
								size="10"
								@click.prevent="sort(column.key)"
							/>
						</div>
					</th>
					<th
						v-if="hasAction"
						class="v-table-th"
					>
						{{ actionText }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="(row, index) in currentPageRows"
					:key="index"
					class="v-table-body"
				>
					<td
						v-if="haVCheckbox"
						class="v-table-td pr-4"
						width="3%"
					>
						<v-checkbox
							:model-value="isCheckAll || !!row.selected"
							@click="onSelectRow(row)"
						/>
					</td>
					<!-- <td class="v-table-td">
                        TODO: change based on meta data from/to
                        {{ index + (currentPage - 1) * pageSize + 1 }}
                    </td> -->
					<td
						v-for="column in columns"
						:key="column.key"
						class="v-table-td"
						:class="alignClass(column)"
					>
						<!--
							@slot Indicating a custom cell using its column id
							@binding {string} name - column.key
							@binding {object} row - row model
							@binding {object} column - column model
						-->
						<slot
							v-if="$slots[column.key]"
							:name="column.key"
							:row="row"
							:column="column"
						/>
						<div v-else>
							{{ row[column.key] }}
						</div>
					</td>
					<td
						v-if="hasAction"
						class="v-table-td"
					>
						<!--
							@slot Table action column
							@binding {object} row - row model
						-->
						<slot
							name="column-action"
							:row="row"
						/>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<v-row
		v-if="haVPagination"
		class="table-pagination"
		justify="center"
		align-items="center"
	>
		<v-pagination
			:meta="paginationOptions"
			arrow-only
			:mode="pageMode"
			:steps="pageSize"
			@paginate="paginate($event)"
		/>
	</v-row>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VIcon, VCheckbox, VRow, VPagination } from '@/components';

const NO_SORT = 'none';
const SORT_ASC = 'asc';
const SORT_DESC = 'desc';
const SORT_DESC_ICON = 'chevron-up';
const SORT_ASC_ICON = 'chevron-down';
const NO_SORT_ICON = 'double-chevron';

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

interface SortModel {
	sortBy: string;
	status: string;
}

interface SortIcon {
	[key: string]: string | number | void | undefined;
}

export default defineComponent({
	name: 'VTable',

	components: {
		VIcon,
		VCheckbox,
		VRow,
		VPagination,
	},

	props: {
		/**
         * Table data. must comply with column key specified in 'columns' prop.
         */
		rows: {
			type: Array as PropType<TableRow[]>,
			required: true,
		},
		/**
         * Table columns.
         */
		columns: {
			type: Array as PropType<TableColumn[]>,
			required: true,
		},
		/**
         * Text used as title of action column. will be ignored if `action` slot were not defined.
         * @default Action
         */
		actionText: {
			type: String,
			default: 'Action',
		},
		/**
         * Whether to show a checkbox on each row.
         */
		haVCheckbox: {
			type: Boolean,
			default: false,
		},
		/**
         * Number of rows being displayed in each page.
         */
		pageSize: {
			type: Number,
			default: 10,
		},
		/**
         * Search based on this property.
         * required when has-search was true.
         */
		searchKey: {
			type: String,
			default: '',
		},
		/**
         * Whether to show search input or not.
         */
		hasSearch: {
			type: Boolean,
			default: false,
		},
		/**
         * Change Table style for sticky mode
         */
		sticky: {
			type: Boolean,
			default: false,
		},
		/**
         * show pagination
         */
		haVPagination: {
			type: Boolean,
			default: false,
		},
		/**
         * Type of pagination.
         * @values default , compact , goto
         */
		pageMode: {
			type: String,
			default: 'default',
		},
	},

	emits: ['action', 'select-row', 'change-page'],

	data() {
		return {
			isCheckAll: false,
			currentPage: 1,
			searchValue: '',
			sorts: [] as SortModel[],
			sortIcon: {} as SortIcon,
		};
	},

	computed: {
		/**
         * Chech if table has Action column.
         */
		hasAction(): boolean {
			return !!this.$slots['column-action'];
		},
		/**
         * Calculate current page rows (using page number, steps, filters, sort, etc.).
         */
		currentPageRows(): TableRow[] {
			const startIndex: number = Number((this.currentPage - 1)) * Number(this.pageSize);
			const endIndex: number = Number(startIndex) + Number(this.pageSize);

			//filters
			const rows = this.filteredRows.slice(startIndex, endIndex);

			//sort (asc/dsc)
			this.sorts.forEach((sort) => {
				//ascending order
				if (sort.status === SORT_ASC) {
					return rows.sort((a, b) => String(a[sort.sortBy]).localeCompare(String(b[sort.sortBy])));
				}
				//descending order
				if (sort.status === SORT_DESC) {
					return rows.sort((a, b) => String(b[sort.sortBy]).localeCompare(String(a[sort.sortBy])));
				}
			});
			return rows;
		},
		/**
         * Manipulate table rows based on searchValue and filter-data
         */
		filteredRows(): TableRow[] {
			return this.searchValue
				? this.rows.filter((row) => {
					return String(row[`${this.searchKey}`])
						.toLowerCase()
						.includes(this.searchValue.toLowerCase());
				})
				: this.rows;
		},
		/**
         * Pagination options passed to v-pagination component.
         */
		paginationOptions(): {
			total: number;
			currentPage: number;
			lastPage?: number;
		} {
			return {
				total: this.filteredRows.length,
				currentPage: this.currentPage,
			};
		},
	},

	created() {
		/**
         *set all column defualt sort{} if sortable is true
         */
		this.columns.forEach((col) => {
			if (col.sortable) {
				this.sorts.push({
					sortBy: col.key,
					status: NO_SORT,
				});
				this.sortIcon[`${col.key}`] = NO_SORT_ICON;
			}
		});
	},

	methods: {
		/**
         * Handle row selection event.
         */
		onSelectRow(row: any) {
			/**
             * Called when action in a row selected
             * @event select-row
             * @property {row} row row
             */
			this.$emit('select-row', row);
		},
		/**
         * Handle page change event.
         */
		paginate(newPage: number) {
			this.currentPage = newPage;
			/**
             * Called when paginate item click
             * @event change-page
             * @property {number} newPage newPage
             */
			this.$emit('change-page', newPage);
		},
		/**
         * Change data besd on search.
         */
		search(): void {
			this.filteredRows;
			this.paginate(1);
		},
		/**
         * Handle sort status and icon
         */
		sort(prop: string): void {
			this.sorts.forEach((sort) => {
				if (sort.sortBy === prop) {
					if (sort.status === SORT_ASC) {
						//change ascending to descending
						sort.status = SORT_DESC;
						this.sortIcon[prop] = SORT_DESC_ICON;
					} else if (sort.status === SORT_DESC) {
						//change descending to none
						sort.status = NO_SORT;
						this.sortIcon[prop] = NO_SORT_ICON;
					} else if (sort.status === NO_SORT) {
						//change none to ascending
						sort.status = SORT_ASC;
						this.sortIcon[prop] = SORT_ASC_ICON;
					}
				} else {
					//change another all to none
					sort.status = NO_SORT;
					this.sortIcon[sort.sortBy] = NO_SORT_ICON;
				}
			});
		},
		/**
         * set table th/td align
         */
		alignClass(column: TableColumn): string {
			if (column.align === 'center') {
				return 'table-align-center';
			} else if (column.align === 'right') {
				return 'table-align-right';
			}
			return 'table-align-left';
		},
	},
});
</script>

<style lang="postcss" scoped>
@tailwind components;
@layer components {
    .v-table {
        @apply text-left w-full;
        width: -webkit-fill-available !important;
        border-collapse: separate !important;
        border-spacing: 0;
    }
    .v-table-header {
        @apply text-left bg-neutral-25;
    }
    .v-table-th {
        @apply py-4 px-5 text-base font-normal text-neutral-400;
        line-height: 16.24px;
    }
    .th-container {
        @apply flex items-center gap-1;
    }
    .v-table-th:first-child {
        @apply rounded-l-2xl !important;
    }
    .v-table-th:last-child {
        @apply rounded-r-2xl !important;
    }
    .v-table-th-caption {
        @apply mt-1 text-sm font-semibold text-neutral-400;
        line-height: 15.6px;
    }

    .v-table-body {
        @apply bg-transparent text-left text-neutral-800;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: normal;
        transition-duration: 0.2s;
        transition-property: background-color, color;
    }
    .v-table-body:hover {
        @apply bg-white rounded-2xl;
        box-shadow: 0px 8px 12px rgba(85, 85, 85, 0.08), 0px 4px 48px rgba(85, 85, 85, 0.08);
    }
    .v-table-td {
        @apply py-5 px-5;
    }
    .v-table-td:first-child {
        @apply rounded-l-2xl !important;
    }
    .v-table-td:last-child {
        @apply rounded-r-2xl !important;
    }
    /* search */
    .v-table-search-box {
        @apply py-2.5 px-2
		bg-neutral-10 placeholder-neutral-100 text-neutral-700
		font-body text-sm font-normal
		rounded outline-none;
        border: solid 1px #dfe1e5;
        width: 320px !important;
        height: 40px !important;
        transition-duration: 0.2s;
        transition-property: border-color;
    }
    .v-table-search-box:focus {
        @apply border-blue-200 border;
    }
    /** Table th/td align */
    .table-align-center {
        @apply text-center;
    }
    .table-align-left {
        @apply text-left;
    }
    .table-align-right {
        @apply text-right;
    }

    .table-pagination {
        @apply py-5;
    }
    .v-table-action-btn {
        @apply rounded-md text-neutral-500 cursor-pointer;
        transition-duration: 0.2s;
        transition-property: color;
    }
    .v-table-action-btn:disabled,
    .v-table-action-btn.disabled {
        @apply bg-neutral-10 text-neutral-70 cursor-not-allowed pointer-events-none;
    }
    .v-table-action-btn:hover,
    .v-table-action-btn.hover {
        @apply text-primary-600;
    }
}
</style>

<docs>
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
                    <v-button icon-left="description" icon-only size="sm" outline variant="primary" />
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
                <v-badge v-if="row.status === 'success'" pastel variant="success"> {{row.status}} </v-badge>
                <v-badge v-if="row.status === 'pending'" pastel variant="primary"> {{row.status}} </v-badge>
                <v-badge v-if="row.status === 'decline'" pastel variant="danger"> {{row.status}} </v-badge>
            </template>
            <template #client="{ row }">
                <!-- Column: Name -->
                <div class="text-base">
                    <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" :src="imageSrc" alt="">
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
                <v-badge v-if="row.status === 'success'" pastel variant="success"> {{row.status}} </v-badge>
                <v-badge v-if="row.status === 'pending'" pastel variant="primary"> {{row.status}} </v-badge>
                <v-badge v-if="row.status === 'decline'" pastel variant="danger"> {{row.status}} </v-badge>
            </template>
            <template #client="{ row }">
                <!-- Column: Name -->
                <div class="text-base">
                    <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" :src="imageSrc" alt="">
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
</docs>
