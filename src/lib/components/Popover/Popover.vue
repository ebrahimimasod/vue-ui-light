<template>
	<div :class="$style.wrapper">
		<div
			ref="target"
			:class="[$style.target, targetClass]"
			v-on="listeners"
		>
			<!-- @slot target -->
			<slot name="target" />
		</div>
		<div
			ref="content"
			:class="[$style.content, contentClass]"
			:style="widthStyle"
		>
			<transition
				:enter-active-class="$style.popoverEnterActive"
				:leave-active-class="$style.popoverLeaveActive"
				:enter-from-class="$style.popoverEnterFrom"
				:leave-to-class="$style.popoverLeaveTo"
			>
				<div
					v-if="isOpen"
					v-click-outside="onClickOutside"
				>
					<!-- @slot content -->
					<slot name="content" />
				</div>
			</transition>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType, nextTick } from 'vue';
import { createPopper } from '@popperjs/core/lib/popper-lite';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';
import offset from '@popperjs/core/lib/modifiers/offset';
/// @ts-ignore
import vClickOutside from 'click-outside-vue3';

interface TargetListeners {
	mouseenter?: () => void;
	mouseleave?: () => void;
	click?: () => void;
}

type Position =
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'left'
    | 'left-start'
    | 'left-end';

/**
 * @displayName Popover
 */
export default defineComponent({
	name: 'VPopover',
	directives: {
		clickOutside: vClickOutside.directive,
	},
	props: {
		/**
         * Trigger action to open/close popover.
         * @values hover, click, manual
         * @default `click`
         */
		trigger: {
			type: [String, Array],
			default: 'click',
		},
		/**
         * Popover position.
         * @values 'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'
         * @default `bottom`
         */
		position: {
			type: String as PropType<Position>,
			default: 'bottom',
		},
		/**
         * Popover offset.
         * @default `0`
         */
		offset: {
			type: [Number, String],
			default: 0,
		},
		/**
         * Set content's width based on target's width.
         * @default `false`
         */
		contentWidth: {
			type: Boolean,
			default: false,
		},

		/**
         * v-model's value.
         * @model
         */
		modelValue: {
			type: Boolean,
		},
		/**
         * Disabled mode
         */
		disabled: {
			type: Boolean,
		},
		/**
         * A class name passed to the target container node.
         */
		targetClass: {
			type: [String, Array],
		},
		/**
         * A class name passed to the target container node.
         */
		contentClass: {
			type: String,
		},
	},
	emits: ['open', 'close', 'click-outside', 'input'],
	data() {
		return {
			staticIsOpen: false,
			isInstanceCreated: false,
			widthStyle: 'min-width : 0px',
			instancePopper: {},
		};
	},
	computed: {
		isOpen: {
			get(): boolean {
				return this.isManual ? this.modelValue : this.staticIsOpen;
			},
			set(newVal: boolean): void {
				if (this.isManual) {
					this.$emit('input', newVal);
				} else {
					this.staticIsOpen = newVal;
				}
			},
		},
		listeners(): TargetListeners {
			const { trigger } = this;
			const listenersObj: TargetListeners = {};
			if (trigger === 'manual' || this.disabled) {
				return {};
			}
			if (trigger === 'click') {
				listenersObj.click = this.isOpen ? this.close : this.open;
			} else if (trigger === 'hover') {
				if (this.isOpen) {
					listenersObj.mouseleave = this.close;
				} else {
					listenersObj.mouseenter = this.open;
				}
			}

			return listenersObj;
		},

		target(): HTMLElement {
			return this.$refs.target as HTMLElement;
		},

		content(): HTMLElement {
			return this.$refs.content as HTMLElement;
		},

		modifiers(): any {
			const modifiersArr: any = [preventOverflow, flip];
			if (this.offset) {
				modifiersArr.push(offset);
				modifiersArr.push({
					name: 'offset',
					options: {
						offset: [0, this.offset],
					},
				});
			}
			return modifiersArr;
		},
		isManual(): boolean {
			return this.trigger === 'manual';
		},
	},
	watch: {
		isOpen(newVal: true) {
			if (newVal && !this.isInstanceCreated) {
				this.mountPopper();
			} else {
				this.instancePopper.update();
			}
		},
	},
	methods: {
		mountPopper() {
			const { target, content } = this;
			this.isInstanceCreated = true;
			const targetChildren = target.children.item(0);
			if (targetChildren && content) {
				this.checkContentWidth();
				nextTick(() => {
					this.instancePopper = createPopper(targetChildren, content, {
						modifiers: this.modifiers,
						placement: this.position,
					});
				});
			}
		},

		open() {
			this.isOpen = true;
			/**
             * Popover open event.
             * @event open
             */
			this.$emit('open');
		},

		close() {
			this.isOpen = false;
			/**
             * Popover close event.
             * @event close
             */
			this.$emit('close');
		},

		onClickOutside() {
			if (this.isOpen) {
				nextTick(() => {
					/**
                     * Popover click outside event.
                     * @event click-outside
                     */
					this.$emit('click-outside');
					if (!this.isManual) {
						this.close();
					}
				});
			}
		},

		checkContentWidth() {
			if (this.contentWidth) {
				this.widthStyle = `min-width : ${this.target?.clientWidth}px`;
			}
		},
	},
});
</script>

<style lang="postcss" module>
.popover-wrapper {
    @apply inline-block;
}

.target {
    @apply inline-block;
}
.content {
    @apply inline-block z-50;
}

/* Popover animations */
.popoverEnterActive,
.popoverLeaveActive {
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.popoverEnterFrom,
.popoverLeaveTo {
    opacity: 0;
    transform: translateY(5px);
}
</style>

<docs>
## Usage
```js
import { VPopover } from 'vue-ui-light';
```

## Basic

<example>
<template v-slot:preview>
<v-popover>
	<template #target>
		<v-button variant="primary">
			Popover Trigger
		</v-button>
	</template>
	<template #content>
		<div class="bg-blue-100 p-4">
			Paragraph
		</div>
	</template>
</v-popover>
</template>
<template v-slot:source>

```html
<v-popover>
	<template #target>
		<v-button variant="primary">
			Popover Trigger
		</v-button>
	</template>
	<template #content>
		<div class="bg-blue-100 p-4">
			Paragraph
		</div>
	</template>
</v-popover>
```
</template>
</example>

## Controlled Mode

<example>
<template v-slot:preview>
<v-popover>
	<template #target>
		<v-button variant="primary">
			Popover Trigger
		</v-button>
	</template>
	<template #content>
		<div class="bg-blue-100 p-4">
			Paragraph
		</div>
	</template>
</v-popover>
</template>
<template v-slot:source>

```html
<v-popover v-model="isOpen" @click-outside="isOpen=false">
	<template #target>
		<v-button variant="primary" @click="isOpen=true">
			Popover Trigger
		</v-button>
	</template>
	<template #content>
		<div class="bg-blue-100 p-4">
			Paragraph
		</div>
	</template>
</v-popover>
```
</template>
</example>
</docs>
