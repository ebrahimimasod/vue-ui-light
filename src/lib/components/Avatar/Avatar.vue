<template>
	<div :class="classes">
		<img
			v-if="mode === 'img'"
			:src="content"
			:class="imageAvatar"
		>
		<div
			v-if="mode === 'txt'"
			:class="textAvatar"
		>
			{{ content }}
		</div>
		<img
			v-if="mode === 'outline'"
			:src="Plus"
			:class="outlineAvatar"
		>
		<img
			v-if="mode === 'default'"
			:src="Avatar"
			:class="avatarContent"
		>
		<div :class="badgeClasses">
			<!-- @slot badge slot -->
			<slot
				v-if="$slots.badge"
				name="badge"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Avatar from '@/assets/Avatar.svg';
import Plus from '@/assets/Plus.svg';

/**
 * @displayName Avatar
 */
export default defineComponent({
	name: 'VAvatar',

	props: {
		/**
         * Avatar's color variant
         * @values neutral, primary, secondary, tertiary, danger, warning, info, success, orange
         */
		variant: {
			type: String,
			default: 'primary',
		},
		/**
         * Avatar's content for txt or img mode
         */
		content: {
			type: String,
		},
		/**
         * Avatar's mode
         * @values default, image, txt , outline
         */
		mode: {
			type: String,
			default: 'default',
		},
		/**
         * Avatar's size
         * @values lg , md , sm
         */
		size: {
			type: String,
			default: 'md',
		},
		/**
         * Avatar's badge position
         * @values tl (top-left) , tr (top-right) , bl (bottom-left) , br( bottom-right)
         */
		badge: {
			type: String,
			default: 'tr',
		},
		/**
         * Avatar's rounded
         */
		rounded: {
			type: Boolean,
			default: false,
		},
		/**
         * Avatar's bordered
         */
		bordered: {
			type: Boolean,
			default: false,
		},
	},

	data() {
		return {
			Avatar,
			Plus,
		};
	},

	computed: {
		classes(): string[] {
			const classNames = [this.$style.avatar];

			classNames.push(this.$style[this.variant]);

			if (this.size) {
				classNames.push(this.$style[this.size]);
			}

			if (this.mode === 'outline') {
				classNames.push(this.$style.outline);
			}

			if (this.bordered) {
				classNames.push(this.$style.bordered);
			}

			if (this.mode === 'txt') {
				classNames.push(this.$style[`txt-${this.variant}`]);
			}

			if (this.mode === 'img') {
				classNames.push(this.$style.paddingLess);
			}

			if (this.rounded) {
				classNames.push(this.$style.circle);
			}

			return classNames;
		},
		avatarContent(): string[] {
			const classNames = [this.$style.avatarContent];
			classNames.push(this.$style[this.variant]);

			if (this.size) {
				classNames.push(this.$style[this.size]);
			}

			return classNames;
		},
		textAvatar(): string[] {
			const classNames = [this.$style.textAvatar];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			return classNames;
		},
		imageAvatar(): string[] {
			const classNames = [this.$style.imageAvatar];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.rounded) {
				classNames.push(this.$style.circle);
			}
			return classNames;
		},
		outlineAvatar(): string[] {
			const classNames = [this.$style.outlineAvatar];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			return classNames;
		},
		badgeClasses(): string[] {
			const classNames = [this.$style.badge];
			if (this.size) {
				classNames.push(this.$style[this.size]);
			}
			if (this.badge) {
				classNames.push(this.$style[this.badge]);
			}
			return classNames;
		},
	},
});
</script>

<style lang="postcss" module>
@tailwind components;
@layer components {
    .avatar {
        @apply relative block p-3 w-12 h-12 rounded-2xl text-white cursor-pointer;
    }
    /* size */
    .avatar.lg {
        @apply w-16 h-16 p-4 rounded-3xl;
    }
    .avatar.sm {
        @apply w-8 h-8 p-2 rounded-xl;
    }
    /* rounded */
    .avatar.circle {
        @apply rounded-full !important;
    }
    .avatar.paddingLess {
        @apply p-0 !important;
    }
    /* content */
    .avatarContent {
        @apply w-6 h-6 m-auto;
    }
    .avatarContent.lg {
        @apply w-8 h-8 m-auto;
    }
    .avatarContent.sm {
        @apply w-4 h-4 m-auto;
    }
    /* variant */
    .neutral {
        @apply bg-neutral-300;
    }
    .txt-neutral {
        @apply bg-neutral-100 text-neutral-700 !important;
    }

    .primary {
        @apply bg-primary-300;
    }
    .txt-primary {
        @apply bg-primary-100 text-primary-700 !important;
    }

    .secondary {
        @apply bg-secondary-300;
    }
    .txt-secondary {
        @apply bg-secondary-100 text-secondary-700 !important;
    }

    .tertiary {
        @apply bg-tertiary-300;
    }
    .txt-tertiary {
        @apply bg-tertiary-100 text-tertiary-700 !important;
    }

    .success {
        @apply bg-success-300;
    }
    .txt-success {
        @apply bg-success-100 text-success-700 !important;
    }

    .info {
        @apply bg-info-300;
    }
    .txt-info {
        @apply bg-info-100 text-info-700 !important;
    }

    .danger {
        @apply bg-danger-300;
    }
    .txt-danger {
        @apply bg-danger-100 text-danger-700 !important;
    }

    .warning {
        @apply bg-warning-300;
    }
    .txt-warning {
        @apply bg-warning-100 text-warning-700 !important;
    }

    .orange {
        @apply bg-orange-300;
    }
    .txt-orange {
        @apply bg-orange-100 text-orange-700 !important;
    }

    /* txt content */
    .textAvatar {
        @apply uppercase m-auto font-bold text-lg;
    }
    .textAvatar.lg {
        @apply font-extrabold text-2xl;
    }
    .textAvatar.sm {
        @apply font-bold text-xs;
    }
    /* img content */
    .imageAvatar {
        @apply rounded-2xl bg-transparent w-12 h-12;
    }
    .imageAvatar.lg {
        @apply rounded-3xl bg-transparent w-16 h-16;
    }
    .imageAvatar.sm {
        @apply rounded-xl bg-transparent w-8 h-8;
    }
    .imageAvatar.circle {
        @apply rounded-full !important;
    }
    /* outline content */
    .outline {
        @apply bg-transparent !important;
        @apply border border-dashed border-neutral-50 !important;
    }
    .outlineAvatar {
        @apply h-2.5 w-2.5 m-1.5 !important;
    }
    .outlineAvatar.lg {
        @apply m-2.5 !important;
    }
    .outlineAvatar.sm {
        @apply m-0.5 !important;
    }
    /* badge */
    .badge.tr {
        @apply absolute -top-0.5 -right-0.5 !important;
    }
    .badge.br {
        @apply absolute bottom-0 -right-0.5 !important;
    }
    .badge.tl {
        @apply absolute bottom-0 -left-0.5 !important;
    }
    .badge.bl {
        @apply absolute bottom-0 -left-0.5 !important;
    }
    .badge.lg.tr {
        @apply absolute -top-0.5 right-0 !important;
    }
    .badge.lg.tl {
        @apply absolute -top-0.5 left-0 !important;
    }
    .badge.lg.br {
        @apply absolute -bottom-0.5 right-0 !important;
    }
    .badge.lg.bl {
        @apply absolute -bottom-0.5 left-0 !important;
    }
    /* bordered */
    .bordered {
        /* @apply outline-black !important; */
        outline: 2px solid var(--purple-900);
        outline-offset: 2px;
    }
}
</style>

<docs>
## Usage

```js
import { VAvatar } from "vue-ui-light";
```

<br/>
<br/>

## Modes

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar content="al" mode="txt" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar mode="outline" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar />
<v-avatar content="al" mode="txt" />
<v-avatar :content="imgSrc" mode="img" />
<v-avatar mode="outline" />
```
</template>
</example>

#### Variant

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="tertiary" content="al" mode="txt" size="lg" />
	    <v-avatar variant="tertiary" content="al" mode="txt" size="md" />
	    <v-avatar variant="tertiary" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="secondary" content="al" mode="txt" size="lg" />
	    <v-avatar variant="secondary" content="al" mode="txt" size="md" />
	    <v-avatar variant="secondary" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="orange" content="al" mode="txt" size="lg" />
	    <v-avatar variant="orange" content="al" mode="txt" size="md" />
	    <v-avatar variant="orange" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="primary" content="al" mode="txt" size="lg" />
	    <v-avatar variant="primary" content="al" mode="txt" size="md" />
	    <v-avatar variant="primary" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="danger" content="al" mode="txt" size="lg" />
	    <v-avatar variant="danger" content="al" mode="txt" size="md" />
	    <v-avatar variant="danger" content="al" mode="txt" size="sm" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar variant="tertiary" content="al" mode="txt" size="lg" />

<v-avatar variant="secondary" content="al" mode="txt" size="lg" />

<v-avatar variant="orange" content="al" mode="txt" size="lg" />

<v-avatar variant="primary" content="al" mode="txt" size="lg" />

<v-avatar variant="danger" content="al" mode="txt" size="lg" />
```
</template>
</example>

#### Size

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar size="lg" />
	    <v-avatar size="md" />
	    <v-avatar size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="orange" content="al" mode="txt" size="lg" />
	    <v-avatar variant="orange" content="al" mode="txt" size="md" />
	    <v-avatar variant="orange" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="lg" />
	    <v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="md" />
	    <v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar mode="outline" size="lg" />
	    <v-avatar mode="outline" size="md" />
	    <v-avatar mode="outline" size="sm" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar size="lg" />
<v-avatar size="md" />
<v-avatar size="sm" />

<v-avatar variant="orange" content="al" mode="txt" size="lg" />
<v-avatar variant="orange" content="al" mode="txt" size="md" />
<v-avatar variant="orange" content="al" mode="txt" size="sm" />

<v-avatar variant="tertiary" content="imgSrc" mode="img" size="lg" />
<v-avatar variant="tertiary" content="imgSrc" mode="img" size="md" />
<v-avatar variant="tertiary" content="imgSrc" mode="img" size="sm" />

<v-avatar mode="outline" size="lg" />
<v-avatar mode="outline" size="md" />
<v-avatar mode="outline" size="sm" />
```
</template>
</example>

#### Rounded

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar rounded size="lg" />
	    <v-avatar rounded size="md" />
	    <v-avatar rounded size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar rounded variant="danger" content="al" mode="txt" size="lg" />
	    <v-avatar rounded variant="danger" content="al" mode="txt" size="md" />
	    <v-avatar rounded variant="danger" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" size="lg" />
	    <v-avatar rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" size="md" />
	    <v-avatar rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar rounded mode="outline" size="lg" />
	    <v-avatar rounded mode="outline" size="md" />
	    <v-avatar rounded mode="outline" size="sm" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar rounded size="lg" />
<v-avatar rounded size="md" />
<v-avatar rounded size="sm" />

<v-avatar rounded variant="danger" content="al" mode="txt" size="lg" />
<v-avatar rounded variant="danger" content="al" mode="txt" size="md" />
<v-avatar rounded variant="danger" content="al" mode="txt" size="sm" />

<v-avatar rounded variant="info" content="imgSrc" mode="img" size="lg" />
<v-avatar rounded variant="info" content="imgSrc" mode="img" size="md" />
<v-avatar rounded variant="info" content="imgSrc" mode="img" size="sm" />

<v-avatar rounded mode="outline" size="lg" />
<v-avatar rounded mode="outline" size="md" />
<v-avatar rounded mode="outline" size="sm" />
```
</template>
</example>

#### Badge Slot
> position of badge handle in cmp but you can use anything you want with slot #badge

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
	<div class="flex flex-col gap-8 items-center">
		<v-avatar badge="tr" size="lg">
		    <template #badge>
		        <div class="h-4 w-4 rounded-full bg-red-500" />
		    </template>
		</v-avatar>
		<v-avatar badge="tr">
		    <template #badge>
		        <div class="h-4 w-4 rounded-full bg-red-500" />
		    </template>
		</v-avatar>
		<v-avatar badge="tr" size="sm">
		    <template #badge>
		        <div class="h-3 w-3 rounded-full bg-red-500" />
		    </template>
		</v-avatar>
    </div>
    <div class="flex flex-col gap-8 items-center">
		<v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" badge="br" size="lg">
		    <template #badge>
		        <div class="h-5 w-5 rounded-full bg-success-700 border-solid border-[3px] border-white" />
		    </template>
		</v-avatar>
		<v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" badge="br">
		    <template #badge>
		        <div class="h-4 w-4 rounded-full bg-success-700 border-solid border-2 border-white" />
		    </template>
		</v-avatar>
		<v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" badge="br" size="sm">
		    <template #badge>
		        <div class="h-3 w-3 rounded-full bg-success-700 border-solid border border-white" />
		    </template>
		</v-avatar>
    </div>
    <div class="flex flex-col gap-8 items-center">
		<v-avatar variant="tertiary" rounded content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" badge="tr" size="lg">
		    <template #badge>
		        <div class="h-5 w-5 rounded-full bg-blue-700 border-solid border-[3px] border-white" />
		    </template>
		</v-avatar>
		<v-avatar variant="tertiary" rounded content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" badge="tr">
		    <template #badge>
		        <div class="h-4 w-4 rounded-full bg-blue-700 border-solid border-2 border-white" />
		    </template>
		</v-avatar>
		<v-avatar variant="tertiary" rounded content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" badge="tr" size="sm">
		    <template #badge>
		        <div class="h-3 w-3 rounded-full bg-blue-700 border-solid border border-white" />
		    </template>
		</v-avatar>
    </div>
</v-row>
</template>
<template v-slot:source>

```html
	<v-avatar badge="tr" size="lg">
		<template #badge>
		    <div class="h-4 w-4 rounded-full bg-red-500" />
		</template>
	</v-avatar>
	and ...

	<v-avatar variant="tertiary" :content="imgSrc" mode="img" badge="br" size="lg">
		<template #badge>
		    <div class="h-5 w-5 rounded-full bg-success-700 border-solid border-[3px] border-white" />
		</template>
	</v-avatar>
	and ...

	<v-avatar variant="tertiary" rounded :content="imgSrc2" mode="img" badge="tr" size="lg">
		<template #badge>
		    <div class="h-5 w-5 rounded-full bg-blue-700 border-solid border-[3px] border-white" />
		</template>
	</v-avatar>
	and ...
```
</template>
</example>


#### Bordered

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
			<div class="flex flex-col gap-8 items-center">
                <v-avatar bordered rounded size="lg" />
                <v-avatar bordered rounded size="md" />
                <v-avatar bordered rounded size="sm" />
            </div>
            <div class="flex flex-col gap-8 items-center">
                <v-avatar bordered variant="orange" content="al" mode="txt" size="lg" />
                <v-avatar bordered variant="orange" content="al" mode="txt" size="md" />
                <v-avatar bordered variant="orange" content="al" mode="txt" size="sm" />
            </div>
            <div class="flex flex-col gap-8 items-center">
                <v-avatar bordered rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="lg" />
                <v-avatar bordered rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="md" />
                <v-avatar bordered rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="sm" />
            </div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar bordered rounded size="lg" />
<v-avatar bordered rounded size="md" />
<v-avatar bordered rounded size="sm" />

<v-avatar bordered variant="orange" content="al" mode="txt" size="lg" />
<v-avatar bordered variant="orange" content="al" mode="txt" size="md" />
<v-avatar bordered variant="orange" content="al" mode="txt" size="sm" />

<v-avatar bordered rounded variant="tertiary" :content="imgSrc" mode="img" size="lg" />
<v-avatar bordered rounded variant="tertiary" :content="imgSrc" mode="img" size="md" />
<v-avatar bordered rounded variant="tertiary" :content="imgSrc" mode="img" size="sm" />
```
</template>
</example>

<br/>
<hr/>
<br/>
</docs>
