<template>
	<div :class="classes">
		<v-row
			v-if="toast.large"
			align-items="start"
			justify="between"
		>
			<div class="flex">
				<img
					v-if="toast.image"
					:src="toast.image"
					:class="$style.imageToast"
				>
				<v-Icon
					v-else-if="toast.icon"
					:name="toast.icon"
					:class="$style.icon"
					size="20"
				/>
				<v-col>
					<div
						v-if="toast.title"
						:class="$style.title"
					>
						{{ toast.title }}
					</div>
					<div :class="$style.message">
						{{ toast.msg }}
					</div>
					<v-row
						v-if="hasActions"
						:class="$style.actionsWrapper"
					>
						<a
							v-for="(act, index) in toast.actions"
							:key="index"
							:class="$style.action"
							@click.stop="act.onClick"
						>
							{{ act.label }}
						</a>
					</v-row>
				</v-col>
			</div>
			<div class="flex my-auto">
				<div
					v-if="hasAction"
					:class="[$style.actionWrapper]"
				>
					<a
						v-for="(act, index) in toast.actions"
						:key="index"
						:class="$style.action"
						@click.stop="act.onClick"
					>
						{{ act.label }}
					</a>
				</div>
				<v-Icon
					v-if="hasClose"
					name="plus"
					:class="[$style.icon, $style.close]"
					size="14"
					@click="close()"
				/>
			</div>
		</v-row>
		<v-row
			v-else
			align-items="start"
		>
			<img
				v-if="toast.image"
				:src="toast.image"
				:class="$style.imageToast"
			>
			<v-Icon
				v-else-if="toast.icon"
				:name="toast.icon"
				:class="$style.icon"
				size="20"
			/>
			<v-col>
				<div
					v-if="toast.title"
					:class="$style.title"
				>
					{{ toast.title }}
				</div>
				<div :class="$style.message">
					{{ toast.msg }}
				</div>
				<v-row
					v-if="hasActions"
					:class="$style.actionsWrapper"
				>
					<a
						v-for="(act, index) in toast.actions"
						:key="index"
						:class="$style.action"
						@click.stop="act.onClick"
					>
						{{ act.label }}
					</a>
				</v-row>
			</v-col>
			<div
				v-if="hasAction"
				:class="[$style.actionWrapper]"
			>
				<a
					v-for="(act, index) in toast.actions"
					:key="index"
					:class="$style.action"
					@click.stop="act.onClick"
				>
					{{ act.label }}
				</a>
			</div>
			<v-Icon
				v-if="hasClose"
				name="plus"
				:class="[$style.icon, $style.close]"
				size="14"
				@click="close()"
			/>
		</v-row>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VIcon, VRow, VCol } from '@/components';
import { IToast } from './toast.plugin';

export default defineComponent({
	name: 'VToast',
	components: {
		VIcon,
		VRow,
		VCol,
	},
	props: {
		toast: {
			type: Object as PropType<IToast>,
			required: true,
		},
	},
	emits: ['close'],
	computed: {
		hasAction(): boolean {
			return Array.isArray(this.toast.actions) && this.toast.actions.length === 1;
		},
		hasActions(): boolean {
			return Array.isArray(this.toast.actions) && this.toast.actions.length > 1;
		},
		hasClose(): boolean {
			return !!this.toast.hasClose;
		},
		align(): string {
			const { position } = this.toast;
			if (position === 'top-center' || position === 'bottom-center') {
				return 'center';
			} else if (position === 'bottom-left' || position === 'top-left') {
				return 'start';
			}
			return 'end';
		},
		classes(): string[] {
			const classNames = [this.$style.toast, this.$style[this.toast.variant], this.$style[this.align]];
			if (this.toast.large) {
				classNames.push(this.$style['large']);
			}
			return classNames;
		},
	},
	mounted() {
		if (!this.hasClose) {
			setTimeout(this.close, this.toast.duration);
		}
	},
	methods: {
		close() {
			this.$emit('close', this.toast.id);
			typeof this.toast.onClose === 'function' && this.toast.onClose(this.toast);
		},
	},
});
</script>

<style lang="postcss" module>
.toast {
    @apply my-2 p-4 inline-block rounded-2xl shadow-sm;
    min-width: 110px;
    transition: 0.3s;
}
.toast.large {
    min-width: 360px;
}
.center {
    align-self: center;
}
.start {
    align-self: flex-start;
}
.end {
    align-self: flex-end;
}

.icon {
    @apply mr-4;
}

.icon.close {
    @apply mr-0 ml-4 my-auto transform rotate-45 cursor-pointer text-neutral-500 hover:text-neutral-800 !important;
}

.default {
    @apply bg-white text-neutral-800 shadow-lg;
}
.default .icon {
    @apply text-neutral-800;
}
.neutral {
    @apply bg-neutral-700 text-white;
}
.neutral .icon {
    @apply text-white;
}

.primary {
    @apply bg-primary-700 text-white;
}
.primary .icon {
    @apply text-white;
}

.secondary {
    @apply bg-secondary-700 text-white;
}
.warning secondary {
    @apply text-white;
}

.tertiary {
    @apply bg-tertiary-700 text-white;
}
.tertiary .icon {
    @apply text-white;
}

.info {
    @apply bg-info-700 text-white;
}
.info .icon {
    @apply text-white;
}

.success {
    @apply bg-success-700 text-white;
}
.success .icon {
    @apply text-white;
}

.danger {
    @apply bg-danger-700 text-white;
}
.danger .icon {
    @apply text-white;
}

.warning {
    @apply bg-warning-700 text-white;
}

.orange {
    @apply bg-orange-700 text-white;
}
.orange .icon {
    @apply text-white;
}

.title {
    @apply mb-0 text-base font-bold;
    line-height: 23.52px;
    letter-spacing: normal;
}

.message {
    @apply mb-0 text-sm font-normal;
    line-height: 16.24px;
}

.actionsWrapper {
    @apply space-x-2 mt-3;
}

.actionWrapper {
    @apply flex gap-2 ml-4 my-auto;
}

.action {
    @apply text-sm font-bold cursor-pointer text-blue-700 hover:text-blue-500 !important;
}

.imageToast {
    @apply mr-4 rounded-2xl bg-transparent w-12 h-12;
}
</style>
