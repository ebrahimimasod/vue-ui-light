<template>
	<div
		:class="classes"
		:disabled="disabled"
	>
		<v-Icon
			v-if="iconLeft"
			:name="iconLeft"
			:disabled="disabled"
			:size="iconSize"
			:class="iconLeftClass"
		/>
		<slot />
		<v-Icon
			v-if="close"
			size="16"
			name="close"
			:class="closeIconClass"
			:disabled="disabled"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VIcon } from '@/components/Icon/index';
import { VButton } from '@/components/Button/index';

export default defineComponent({
	name: 'VChip',

	components: {
		VIcon,
		VButton,
	},

	props: {
		/**
     * toggle disabled state.
     */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
     * Chip in outline mode/style
     */
		outline: {
			type: Boolean,
			default: false,
		},
		/**
     * Chip's different colors and styles.
     * @values neutral, primary, secondary, tertiary, danger, warning, info, success, link, orange
     */
		variant: {
			type: String,
			default: 'neutral',
		},
		/**
     * Chip's different sizes.
     * @values sm, md, lg
     */
		size: {
			type: String,
			default: 'md',
		},
		/**
     * Chip's left icon.
     * @values Any valid icon name.
     */
		iconLeft: {
			type: String,
		},
		/**
     * Closeable Chip.
     */
		close: {
			type: Boolean,
			default: false,
		},
	},

	computed: {
		classes(): Array<string> {
			const classNames = [this.$style.chip];
			if (this.outline) {
				classNames.push(this.$style.outline);
			}
			if (this.variant) {
				classNames.push(this.$style[this.variant]);
			}
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.disabled) {
				classNames.push(this.$style.disabled);
			}
			if (this.close) {
				classNames.push(this.$style.withCloseIcon);
			}
			return classNames;
		},
		iconLeftClass(): Array<string> {
			const classNames = [this.$style.iconLeft];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			return classNames;
		},
		iconSize(): string {
			switch (this.size) {
				case 'lg': {
					return '16';
				}
				case 'md': {
					return '14';
				}
				default: {
					return '12';
				}
			}
		},
		closeIconClass(): Array<string> {
			return [this.$style.closeIcon];
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
  /* Base Chip */
  .chip {
    @apply py-2.5 px-3
    relative
    ring-2
    rounded-full
    bg-transparent
    ring-neutral-100
    text-neutral-500
    font-body
    text-sm
    font-bold
    inline-flex
    max-w-max;
  }

  .chip.disabled {
    @apply ring-neutral-50 text-neutral-50 bg-transparent cursor-not-allowed pointer-events-none;
  }

  .chip.outline {
    @apply ring-neutral text-neutral-500 bg-transparent ;
  }


  /* Chip solid Primary */
  .chip.primary {
    @apply bg-primary-700 text-white ring-primary-700;
  }

  .chip.primary:disabled,
  .chip.primary.disabled {
    @apply bg-primary-100 ring-primary-100;
  }

  /* Chip outline Primary */
  .chip.outline.primary {
    @apply ring-primary bg-transparent text-primary-700;
  }

  .chip.outline.primary:disabled,
  .chip.outline.primary.disabled {
    @apply bg-transparent  ring-primary-50 text-primary-300;
  }

  /* Chip Secondary */
  .chip.secondary {
    @apply bg-secondary-700;
  }

  .chip.secondary:disabled,
  .chip.secondary.disabled {
    @apply bg-secondary-100;
  }

  /* Chip outline Secondary */
  .chip.outline.secondary {
    @apply ring-secondary bg-transparent text-secondary-700;
  }

  .chip.outline.secondary:disabled,
  .chip.outline.secondary.disabled {
    @apply bg-transparent  ring-secondary-50 text-secondary-300;
  }

  /* Chip Tertiary */
  .chip.tertiary {
    @apply bg-tertiary-700;
  }

  .chip.tertiary:disabled,
  .chip.tertiary.disabled {
    @apply bg-tertiary-100;
  }

  /* Chip outline Tertiary */
  .chip.outline.tertiary {
    @apply ring-tertiary bg-transparent text-tertiary-700;
  }

  .chip.outline.tertiary:disabled,
  .chip.outline.tertiary.disabled {
    @apply bg-transparent  ring-tertiary-50 text-tertiary-300;
  }

  /* Chip Danger */
  .chip.danger {
    @apply bg-danger-700;
  }

  .chip.danger:disabled,
  .chip.danger.disabled {
    @apply bg-danger-100;
  }

  /* Chip outline Danger */
  .chip.outline.danger {
    @apply ring-danger bg-transparent text-danger-700;
  }

  .chip.outline.danger:disabled,
  .chip.outline.danger.disabled {
    @apply bg-transparent  ring-danger-50 text-danger-300;
  }

  /* Chip Warning */
  .chip.warning {
    @apply bg-warning-700;
  }

  .chip.warning:disabled,
  .chip.warning.disabled {
    @apply bg-warning-100;
  }

  /* Chip outline Warning */
  .chip.outline.warning {
    @apply ring-warning bg-transparent text-warning-700;
  }

  .chip.outline.warning:disabled,
  .chip.outline.warning.disabled {
    @apply bg-transparent  ring-warning-50 text-warning-300;
  }

  /* Chip Success */
  .chip.success {
    @apply bg-success-700;
  }

  .chip.success:disabled,
  .chip.success.disabled {
    @apply bg-success-100;
  }

  /* Chip outline Success */
  .chip.outline.success {
    @apply ring-success bg-transparent text-success-700;
  }

  .chip.outline.success:disabled,
  .chip.outline.success.disabled {
    @apply bg-transparent  ring-success-50 text-success-300;
  }

  /* Chip Info */
  .chip.info {
    @apply bg-info-700;
  }

  .chip.info:disabled,
  .chip.info.disabled {
    @apply bg-info-100;
  }

  /* Chip outline Info */
  .chip.outline.info {
    @apply ring-info bg-transparent text-info-700;
  }

  .chip.outline.info:disabled,
  .chip.outline.info.disabled {
    @apply bg-transparent  ring-info-50 text-info-300;
  }

  /* Chip Orange */
  .chip.orange {
    @apply bg-orange-700;
  }

  .chip.orange:disabled,
  .chip.orange.disabled {
    @apply bg-orange-100;
  }


  /* Chip outline Orange */
  .chip.outline.orange {
    @apply ring-orange bg-transparent text-orange-700;
  }

  .chip.outline.orange:disabled,
  .chip.outline.orange.disabled {
    @apply bg-transparent  ring-orange-50 text-orange-300;
  }

  /* Chip Sizes */
  .chip.lg {
    @apply py-2.5 px-6 text-base font-semibold;
  }

  .chip.md {
    @apply py-1.5 px-4 text-sm leading-4 font-bold;
  }

  .chip.sm {
    @apply py-1 px-4 text-xs font-bold;
  }

  .chip.withCloseIcon {
    @apply flex items-center justify-start ;
  }

  .closeIcon {
    @apply relative -right-3 cursor-pointer ;
  }


}
</style>

<docs>

#### Usage
```js
import { VChip } from 'vue-ui-light';
```
<br/>
<br/>

#### Variants

<example>
  <template v-slot:preview>
    <div class="space-y-1 space-x-3">
      <v-chip>Default Chip</v-chip>
      <v-chip variant="primary">Primary Chip</v-chip>
      <v-chip variant="secondary">Secondary Chip</v-chip>
      <v-row/>
      <v-chip variant="tertiary">Tertiary Chip</v-chip>
      <v-chip variant="info">Info Chip</v-chip>
      <v-chip variant="danger">Danger Chip</v-chip>
      <v-row/>
      <v-chip variant="warning">Warning Chip</v-chip>
      <v-chip variant="success">Success Chip</v-chip>
      <v-chip variant="orange">Orange Chip</v-chip>
    </div>
  </template>
  <template v-slot:source>

    ```html
    <v-chip>Default Chip</v-chip>
    <v-chip variant="primary">Primary Chip</v-chip>
    <v-chip variant="secondary">Secondary Chip</v-chip>
    <v-chip variant="tertiary">Tertiary Chip</v-chip>
    <v-chip variant="info">Info Chip</v-chip>
    <v-chip variant="danger">Danger Chip</v-chip>
    <v-chip variant="warning">Warning Chip</v-chip>
    <v-chip variant="success">Success Chip</v-chip>
    <v-chip variant="orange">Orange Chip</v-chip>
    ```
  </template>
</example>

#### Sizes
<example>
  <template v-slot:preview>
    <div class="space-x-3">
      <v-chip size="lg"> Large</v-chip>
      <v-chip size="md"> Medium</v-chip>
      <v-chip size="sm"> Small</v-chip>
    </div>
  </template>
  <template v-slot:source>

    ```html
    <v-chip size="lg"> Large</v-chip>
    <v-chip size="md"> Medium</v-chip>
    <v-chip size="sm"> Small</v-chip>
    ```
  </template>
</example>


#### Icons
<example>
  <template v-slot:preview>
    <div class="space-x-1">
      <v-chip icon-left="description"> Left Icon</v-chip>
      <v-chip icon-right="description"> Right Icon</v-chip>
      <v-chip icon-right="description" icon-left="description"> Double Icon</v-chip>
      <v-chip icon-left="description" icon-only/>
    </div>
  </template>
  <template v-slot:source>

    ```html
    <v-chip icon-left="description" size="md"> Left Icon</v-chip>
    <v-chip icon-right="description" size="md"> Right Icon</v-chip>
    <v-chip icon-right="description" icon-left="description" size="md"> Double Icon</v-chip>
    <v-chip icon-left="description" size="md" icon-only/>
    ```
  </template>
</example>

#### States
<example>
  <template v-slot:preview>
    <div class="space-x-4">
      <v-chip variant="primary">Normal Chip</v-chip>
      <v-chip variant="primary" active>Active Chip</v-chip>
      <v-chip variant="primary" loading>Loading</v-chip>
      <v-chip variant="primary" disabled>Disabled Chip</v-chip>
    </div>
    <br/>
    <v-chip variant="primary" block>Block Chip</v-chip>
  </template>
  <template v-slot:source>

    ```html
    <v-chip variant="primary">Normal Chip</v-chip>
    <v-chip variant="primary" active>Active Chip</v-chip>
    <v-chip variant="primary" loading>Loading</v-chip>
    <v-chip variant="primary" disabled>Disabled Chip</v-chip>
    <v-chip variant="primary" block>Block Chip</v-chip>
    ```
  </template>
</example>

#### Outline Mode
<example>
  <template v-slot:preview>
    <div class="space-y-1 space-x-3">
      <v-chip outline> OutlinE</v-chip>
      <v-chip outline icon-left="description"> OutlinE</v-chip>
      <v-chip outline icon-right="description"> OutlinE</v-chip>
      <v-chip outline icon-right="description" icon-left="description"> ICONS</v-chip>
      <v-chip outline icon-left="description" icon-only/>
      <v-row/>
      <v-chip outline size="md" disabled> Disabled</v-chip>
      <v-chip outline icon-left="description" size="md" disabled icon-only/>
      <v-chip outline loading>Loading</v-chip>
    </div>
  </template>
  <template v-slot:source>

    ```html
    <v-chip> OutlinE</v-chip>
    <v-chip icon-left="description"> OutlinE</v-chip>
    <v-chip icon-right="description"> OutlinE</v-chip>
    <v-chip icon-right="description" icon-left="description"> ICONS</v-chip>
    <v-chip icon-left="description" icon-only/>
    <v-chip size="md" disabled> Disabled</v-chip>
    <v-chip icon-left="description" size="md" disabled icon-only/>
    <v-chip loading>Loading</v-chip>
    </div>
    ```
  </template>
</example>

#### Anchor buttons and custom tags
<example>
  <template v-slot:preview>
    <div class="space-y-1">
      <v-row>
        <v-chip variant="link" tag="a" href="https://google.com">Anchor Chip</v-chip>
      </v-row>
      <v-row>
        <v-chip variant="link" to="/docs/components/button">Router Chip</v-chip>
      </v-row>
    </div>
  </template>
  <template v-slot:source>

    ```html
    <v-chip tag="a" href="https://google.com">Anchor Chip</v-chip>
    <v-chip
        variant="link"
        to="/docs/components/button"
    >
      Router Chip
    </v-chip>
    ```
  </template>
</example>

<br/>
<hr/>
<br/>
</docs>
