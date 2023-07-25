<template>
	<transition
		:enter-active-class="$style.transitionEnter"
		:leave-active-class="$style.transitionLeave"
		:enter-from-class="$style.transitionEnterForm"
		:leave-to-class="$style.transitionLeaveTo"
	>
		<div
			v-if="model"
			:class="containerClasses"
			role="dialog"
			@keydown.esc.stop
		>
			<div
				v-click-outside="onOutside"
				:class="dialogClasses"
			>
				<div
					v-if="showIcon"
					:class="$style.icon"
				>
					<!-- @slot dialog icon -->
					<slot
						v-if="$slots.icon"
						name="icon"
					/>
					<v-Icon
						v-else
						:name="icon"
						size="40"
						class="text-neutral-600"
					/>
				</div>
				<div
					v-if="showHeader"
					:class="$style.header"
				>
					<!-- @slot dialog header -->
					<slot
						v-if="$slots.header"
						name="header"
					/>
					<h4
						v-else
						:class="$style.title"
					>
						{{ title }}
					</h4>
					<button
						v-if="hasClose"
						:class="$style.closeBtn"
						@click="onClose"
					>
						<v-Icon
							name="close"
							size="14"
						/>
					</button>
				</div>
				<div :class="bodyClasses">
					<!-- @slot dialog content -->
					<slot />
				</div>
				<div v-if="$slots.footer">
					<!-- @slot dialog footer -->
					<slot name="footer" />
				</div>
			</div>
		</div>
	</transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
/// @ts-ignore
import vClickOutside from 'click-outside-vue3';
import { VIcon } from '@/components';

export default defineComponent({
	name: 'VDialog',
	components: {
		VIcon,
	},
	directives: {
		clickOutside: vClickOutside.directive,
	},
	props: {
		/**
         * v-model's value.
         * @model
         */
		modelValue: {
			type: Boolean,
		},
		/**
         * Dialog's title used in absensce of 'footer' slot.
         */
		title: {
			type: String,
		},
		/**
         * Dialog's size.
         * @values small, medium, large, max-content.
         */
		size: {
			type: String,
			default: 'max-content',
		},
		/**
         * Forced mode which prevents outside click and close icon to close the dialog.
         */
		forced: {
			type: Boolean,
		},
		/**
         * Whether to show dialog's close icon.
         */
		hasClose: {
			type: Boolean,
			default: false,
		},
		/**
         * Custom class for dialog el
         */
		dialogClass: {
			type: String,
			default: '',
		},
		/**
         * Dialog's top icon.
         * @values Any valid icon name.
         */
		icon: {
			type: String,
		},
	},

	emits: ['update:modelValue'],

	computed: {
		model: {
			get(): boolean {
				return this.modelValue;
			},
			set(newVal: boolean) {
				this.$emit('update:modelValue', newVal);
			},
		},

		containerClasses(): string[] {
			const classNames = [this.$style.wrapper];
			if (this.model) {
				classNames.push(this.$style.data);
			}
			return classNames;
		},

		dialogClasses(): string[] {
			const classNames = [this.$style.dialog];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.dialogClass) {
				classNames.push(this.dialogClass);
			}
			return classNames;
		},

		bodyClasses(): string[] {
			const classNames = [this.$style.body];
			return classNames;
		},

		showHeader(): boolean {
			return !!this.$slots.header || !!this.title;
		},

		showIcon(): boolean {
			return !!this.$slots.icon || !!this.icon;
		},
	},

	created() {
		window.addEventListener('keydown', this.onEscKeyDown);
	},

	unmounted() {
		window.removeEventListener('keydown', this.onEscKeyDown);
	},

	methods: {
		onOutside() {
			if (!this.forced) {
				this.model = false;
			}
		},

		onClose() {
			this.model = false;
		},

		onEscKeyDown(e: KeyboardEvent) {
			if (e.key === 'Escape' && this.model && !this.forced) {
				this.onClose();
			}
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;

@layer components {
    .wrapper {
        @apply hidden justify-center items-center z-50;
    }
    .data {
        @apply flex fixed h-full w-full top-0 left-0 right-0 bottom-0;
        background-color: #091e42b3;
    }

    .dialog {
        @apply p-8 bg-white relative;
		min-width: 280px;
        border-radius: 24px;
        box-shadow: 0 1px 4px 0 rgba(0, 78, 255, 0.05);
        background-color: #ffffff;
    }
    .small {
        width: 400px;
    }
    .medium {
        width: 600px;
    }
    .large {
        width: 800px;
    }
    .max-content {
        @apply w-max;
    }

    .icon {
        @apply flex justify-center items-center pb-8;
    }

    .header {
        @apply flex justify-center items-center pb-2 text-neutral-800;
    }

    .closeBtn {
        @apply absolute right-8 top-8 text-neutral-800 hover:text-red-800 bg-transparent outline-none border-none cursor-pointer;
    }

    .title {
        @apply text-neutral-800;
    }

    .body {
        @apply text-center text-base text-neutral-700 font-normal pb-6;
    }

    .bordered {
        @apply border-neutral-50 border-b;
        border-bottom-style: solid;
    }

    /* Dialog animations */
    .transitionEnter,
    .transitionLeave {
        transition: opacity 0.2s ease;
    }

    .transitionEnterForm,
    .transitionLeaveTo {
        opacity: 0;
    }

    .transitionEnter .dialog,
    .transitionLeave .dialog {
        transition: transform 0.2s ease;
    }

    .transitionEnterForm .dialog,
    .transitionLeaveTo .dialog {
        transform: translateY(5px);
    }
}
</style>

<docs>

## Usage
```js
import { VDialog } from 'vue-ui-light';

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
>also you can change footer style with slot (anything you want)

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

</docs>
