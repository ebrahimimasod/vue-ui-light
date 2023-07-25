<template>
	<div v-if="meta.total">
		<nav
			v-if="isDefault"
			:class="$style.pagination"
		>
			<div
				:class="$style.arrow"
				@click="paginate(meta.currentPage - 1)"
			>
				<v-Icon
					:class="$style.previous"
					name="chevron-down"
					:size="16"
					:disabled="meta.currentPage === 1"
					@click="paginate(meta.currentPage - 1)"
				/>
				<div v-if="!arrowOnly">
					Prev
				</div>
			</div>
			<a
				v-for="page in getList"
				:key="page"
				:class="[$style.buttons, meta.currentPage === page ? $style.active : '']"
				@click="paginate(page)"
			>
				{{ page }}
			</a>
			<div
				:class="$style.arrow"
				@click="paginate(meta.currentPage + 1)"
			>
				<div v-if="!arrowOnly">
					Next
				</div>
				<v-Icon
					:class="$style.next"
					name="chevron-down"
					:size="16"
					:disabled="meta.currentPage >= lastPage"
				/>
			</div>
		</nav>
		<nav
			v-if="isCompact"
			:class="[$style.compact, $style.pagination]"
		>
			<v-Icon
				:class="$style.previous"
				name="chevron-down"
				:size="16"
				:disabled="meta.currentPage === 1"
				@click="paginate(meta.currentPage - 1)"
			/>
			<div :class="$style.compactPage">
				<div :class="$style.compactActive">
					{{ meta.currentPage }}
				</div>
				<div>/</div>
				<div>{{ lastPage }}</div>
			</div>
			<v-Icon
				:class="$style.next"
				name="chevron-down"
				:size="16"
				:disabled="meta.currentPage >= lastPage"
				@click="paginate(meta.currentPage + 1)"
			/>
		</nav>
		<nav
			v-if="isGoto"
			:class="[$style.goto, $style.pagination]"
		>
			<div :class="$style.gotoDesc">
				Go to page
			</div>
			<input
				v-model="gotoPage"
				type="number"
				:class="$style.gotoInput"
				@input="validatePage"
			>
			<div
				:class="$style.gotoLink"
				@click="paginate(gotoPage)"
			>
				<div>Go</div>
				<v-Icon
					:class="$style.next"
					name="chevron-down"
					:size="16"
				/>
			</div>
		</nav>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VButton, VIcon } from '@/components';

type MetaData = {
	total: number;
	currentPage: number;
	lastPage: number;
};

export default defineComponent({
	name: 'VPagination',

	components: {
		VButton,
		VIcon,
	},

	props: {
		/**
         * Meta data (from server).
         */
		meta: {
			type: Object as PropType<MetaData>,
			required: true,
		},
		/**
         * Number of items per_page.
         */
		steps: {
			type: Number,
			default: 15,
		},
		/**
         * Type of pagination.
         * @values default , compact , goto
         */
		mode: {
			type: String,
			default: 'default',
		},
		/**
         * Just show arrow
         */
		arrowOnly: {
			type: Boolean,
			default: false,
		},
	},

	emits: ['paginate'],

	data() {
		return {
			gotoPage: 1 as number,
		};
	},

	computed: {
		isDefault(): Boolean {
			return this.mode === 'default';
		},
		isCompact(): Boolean {
			return this.mode === 'compact';
		},
		isGoto(): Boolean {
			return this.mode === 'goto';
		},
		/**
         * calculate lastPage.
         */
		lastPage(): number {
			const total = Number(this.meta.total) / this.steps;
			return Number.isInteger(total) ? total : parseInt(`${total}`) + 1;
		},
		/**
         * manipulate pagination list
         */
		getList(): Array<Number | String> {
			const numbers = [];

			if (this.meta.currentPage > 3) {
				numbers.push(1);
			}
			if (this.meta.currentPage > 4) {
				numbers.push('...');
			}

			for (let i = this.meta.currentPage - 2; i <= this.meta.currentPage + 2; i++) {
				if (i > 0 && i <= this.lastPage) {
					numbers.push(i);
				}
			}

			if (this.meta.currentPage + 3 < this.lastPage) {
				numbers.push('...');
			}

			if (this.meta.currentPage + 3 <= this.lastPage) {
				numbers.push(this.lastPage);
			}

			return numbers;
		},
	},
	methods: {
		/**
         * Handle paginate.
         * @param {Number} pageValue
         */
		paginate(pageValue: Number | String) {
			if (pageValue === '...' || Number(pageValue) > this.lastPage || Number(pageValue) < 1) {
				return false;
			}
			/**
             * Called when a page select
             * @event paginate
             * @property {number} page change current page
             */
			this.$emit('paginate', pageValue);
		},

		validatePage(event: any) {
			if (event.target.value) {
				if (Number(event.target.value) < 2) {
					this.gotoPage = 1;
				}
				if (Number(event.target.value) > this.lastPage) {
					this.gotoPage = this.lastPage;
				}
			} else {
				this.gotoPage = 1;
			}
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .pagination {
        @apply py-2 px-4 bg-white w-max flex flex-nowrap gap-4 rounded-2xl justify-items-center items-center;
        box-shadow: 0px 12px 16px rgba(85, 85, 85, 0.08), 0px 4px 56px rgba(85, 85, 85, 0.08);
    }
    .buttons {
        @apply flex w-10 h-10 mr-1 justify-center items-center rounded-md cursor-pointer;
        @apply text-neutral-700 text-sm font-bold;
        transition-duration: 0.2s;
        transition-property: background-color, color;
    }
    .buttons:hover {
        @apply text-primary-700 text-base;
    }
    .next {
        @apply cursor-pointer hover:text-primary-700;
        transform: rotate(-90deg);
    }
    .previous {
        @apply cursor-pointer hover:text-primary-700;
        transform: rotate(90deg);
    }

    .active {
        @apply p-2 bg-primary-700 text-white text-base !important;
    }

    .arrow {
        @apply text-sm font-bold flex items-center gap-3 cursor-pointer hover:text-primary-700;
    }

    /* compact mode */
    .compact {
        @apply gap-7;
    }
    .compactPage {
        @apply flex gap-2 items-center text-xs font-bold text-neutral-700;
    }
    .compactActive {
        @apply text-2xl font-extrabold text-primary-700;
    }

    /* goto mode */
    .goto {
        @apply py-3 px-6 gap-8;
    }

    .gotoDesc {
        @apply text-sm font-bold text-neutral-700;
    }
    .gotoLink {
        @apply cursor-pointer flex gap-1 items-center text-sm font-bold text-primary-700 hover:text-primary-800;
    }
    .gotoInput {
        @apply h-14 w-20 px-4 py-2;
        @apply bg-white placeholder-neutral-200 text-neutral-800
		font-body text-base font-bold
		border border-solid border-neutral-50 rounded-lg outline-none
		block;
        line-height: 1.33;
        transition-duration: 0.2s;
        transition-property: border-color;
    }
}
</style>

<docs>
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
	<v-pagination steps="25":meta="meta" />
	<v-pagination steps="20":meta="meta" />
	<v-pagination steps="5":meta="meta" />
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
	<v-pagination steps="25":meta="meta" arrow-only />
	<v-pagination steps="5":meta="meta" arrow-only />
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
	<v-pagination steps="5":meta="meta" mode="compact" />
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
	<v-pagination steps="5":meta="meta" mode="compact" />
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
	<v-table  :rows="rows" :columns="columns" page-size="4" hav-pagination />
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
