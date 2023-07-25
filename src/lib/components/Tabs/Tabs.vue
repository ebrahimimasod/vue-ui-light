<script lang="ts">
import { defineComponent, h } from 'vue';
import { VIcon, VBadge } from '@/components';

interface Tab {
	title: string;
	icon?: string;
	badge?: string[];
	id?: string | number | void;
	disabled?: boolean;
	index: number;
}

export default defineComponent({
	name: 'VTabs',
	components: {
		VIcon,
		VBadge,
	},
	props: {
		/**
         * Initially indicates which tab has active state.
         */
		selected: {
			type: [Number, String],
		},
	},
	emits: ['change'],
	data() {
		return {
			activeTab: Number(this.selected) || 0,
		};
	},
	computed: {
		/**
         * Parse and map the list of tabs from slots.
         */
		tabsList(): Tab[] {
			if (this.$slots.default) {
				const tabs = this.$slots.default();
				return tabs.map(({ props = {} }, index) => ({
					title: props?.title || '',
					icon: props?.icon,
					badge: props?.badge,
					id: props?.id || '',
					disabled: Object.keys(props as object).includes('disabled'),
					index,
				}));
			}
			return [];
		},

		/**
         * Parse tabs and return the current active tab content.
         */
		currentTab(): any {
			if (this.$slots.default) {
				const tabs = this.$slots.default();
				return tabs[this.activeTab];
			}
			return [];
		},
	},
	methods: {
		/**
         * Handle tab changes.
         * @param {Number} tabIndex
         */
		onChangeTab(tabIndex: number) {
			this.activeTab = tabIndex;
			/**
             * Called when a tab select
             * @event change
             * @property {number} tabIndex change selected tab
             */
			this.$emit('change', tabIndex);
		},
		/**
         * Provide and array of class names for tab header element.
         * @param {Object} Tab
         */
		tabHeaderClasses(tab: Tab): string[] {
			const classNames = [this.$style.tabHeader];
			if (this.activeTab === tab.index) {
				classNames.push(this.$style.selected);
			}
			if (tab.disabled) {
				classNames.push(this.$style.disabled);
			}
			return classNames;
		},
	},
	render() {
		return h('div', { class: this.$style.tabs }, [
			h(
				'ul',
				{ class: this.$style.tabsHeader },
				this.tabsList.map((tab) =>
					h(
						'li',
						{
							class: this.tabHeaderClasses(tab),
							onClick: () => this.onChangeTab(tab.index),
						},
						[
							tab.icon &&
                                h(VIcon, {
                                	name: tab.icon,
                                	size: 16,
                                	class: this.$style.icon,
                                }),
							h(
								'a',
								{
									class: this.$style.title,
									id: tab.id,
								},
								[tab.title],
							),
							tab.badge &&
                                h(VBadge, {
                                	variant: tab.badge[0],
                                	content: tab.badge[1],
                                	class: this.$style.badge,
                                }),
						].filter(Boolean),
					),
				),
			),
			h('div', { class: this.$style.content }, [this.currentTab]),
		]);
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .tabs {
    }
    .tabsHeader {
        @apply flex list-none m-0 p-0;
        border-bottom: 2px solid var(--neutral-25);
    }
    .tabHeader {
        @apply px-6 py-4 no-underline cursor-pointer;
        min-height: 30px;
        border-radius: 3px;
        transition: 0.2s;
    }

    .tabHeader:focus {
        @apply border-primary-700 border-solid;
        border-width: 3px;
        border-radius: 3px;
    }

    .tabHeader:hover {
        @apply bg-neutral-25;
    }

    .tabHeader:active {
        @apply bg-primary-50;
    }

    .tabHeader.selected {
        @apply rounded-b-none;
        box-shadow: 0 3px 0 0 var(--blue-700);
    }

    .tabHeader.selected .title,
    .tabHeader.selected .icon {
        @apply text-primary-700;
    }

    .tabHeader.disabled {
        @apply pointer-events-none cursor-not-allowed text-neutral-400;
    }

    .tabHeader.disabled .title,
    .tabHeader.disabled .icon {
        @apply text-neutral-400;
    }

    .title {
        @apply text-sm font-bold text-neutral-700 no-underline;
        line-height: 15.68px;
    }

    .icon {
        @apply align-middle mr-2 text-neutral-700;
    }

    .badge {
        @apply align-middle ml-2 p-1 h-4 font-bold !important;
        min-width: 16px;
        border-radius: 6px;
        line-height: 8px;
    }

    .content {
        @apply pt-6;
    }
}
</style>

<docs>
## Usage
```js
import { VTabs , VTab } from 'vue-ui-light';
```
<br/>

>`v-tabs` combine multiple `v-tab` component in order to create an tab group.

>You must use this type of structure for render the select list correctly.
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
	<v-tab title="Selected">  Contetnt Selected </v-tab>
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
	<v-tab title="Selected" icon="tablet">  Contetnt Selected </v-tab>
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
	<v-tab title="Tab 3" icon="tablet">  Tab 3 </v-tab>
	<v-tab title="disabled" icon="desktop" disabled> Tab 4 </v-tab>
</v-tabs>
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
