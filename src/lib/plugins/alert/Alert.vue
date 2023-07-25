<template>
	<div :class="classes">
		<v-row
			align-items="start"
			justify="between"
		>
			<div class="flex">
				<div :class="borderLeftClass" />
				<v-Icon
					v-if="alert.icon"
					:name="alert.icon"
					:class="iconClass"
					size="20"
				/>
				<v-col class="my-auto">
					<div
						v-if="alert.title"
						:class="titleClass"
					>
						{{ alert.title }}
					</div>
					<div :class="$style.message">
						{{ alert.msg }}
						<span
							v-if="hasActions"
							:class="$style.actionsWrapper"
						>
							<a
								v-for="(act, index) in alert.actions"
								:key="index"
								:class="actionClass"
								@click.stop="act.onClick"
							>
								{{ act.label }}
							</a>
						</span>
					</div>
				</v-col>
			</div>
			<div class="flex my-auto">
				<v-Icon
					v-if="hasClose"
					name="plus"
					:class="[iconClass, $style.close]"
					size="14"
					@click="close()"
				/>
			</div>
		</v-row>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { VIcon, VRow, VCol } from '@/components';
import { IAlert } from './alert.plugin';

export default defineComponent({
	name: 'VAlert',

	components: {
		VIcon,
		VRow,
		VCol,
	},

	props: {
		alert: {
			type: Object as PropType<IAlert>,
			required: true,
		},
	},

	emits: ['close'],

	computed: {
		hasActions(): boolean {
			return Array.isArray(this.alert.actions);
		},

		hasClose(): boolean {
			return !!this.alert.hasClose;
		},

		align(): string {
			const { position } = this.alert;
			if (position === 'top-center' || position === 'bottom-center') {
				return 'center';
			} else if (position === 'bottom-left' || position === 'top-left') {
				return 'start';
			}
			return 'end';
		},

		classes(): string[] {
			const classNames = [this.$style.alert, this.$style[this.align]];
			if (this.alert.pastel) {
				classNames.push(this.$style.pastel, this.$style[this.alert.variant]);
			}
			return classNames;
		},

		borderLeftClass(): string[] {
			const classNames = [this.$style.alertBorder, this.$style[this.alert.variant]];
			return classNames;
		},

		iconClass(): string[] {
			const classNames = [this.$style.icon, this.$style[this.alert.variant]];
			return classNames;
		},

		titleClass(): string[] {
			const classNames = [this.$style.title, this.$style[this.alert.variant]];
			return classNames;
		},

		actionClass(): string[] {
			const classNames = [this.$style.action, this.$style[this.alert.variant]];
			return classNames;
		},
	},

	mounted() {
		if (!this.hasClose) {
			setTimeout(this.close, this.alert.duration);
		}
	},

	methods: {
		close() {
			this.$emit('close', this.alert.id);
			typeof this.alert.onClose === 'function' && this.alert.onClose(this.alert);
		},
	},
});
</script>

<style lang="postcss" module>
.alert {
    @apply bg-white my-2 py-4 pr-4 inline-block rounded-2xl text-neutral-800 shadow-lg;
    min-width: 360px;
    transition: 0.3s;
}
.alertBorder {
    @apply w-1.5;
    border-radius: 0px 8px 8px 0px;
}
.alertBorder.neutral {
    @apply bg-neutral-500;
}
.alertBorder.primary {
    @apply bg-primary-500;
}
.alertBorder.secondary {
    @apply bg-secondary-500;
}
.alertBorder.tertiary {
    @apply bg-tertiary-500;
}
.alertBorder.success {
    @apply bg-success-500;
}
.alertBorder.danger {
    @apply bg-danger-500;
}
.alertBorder.warning {
    @apply bg-warning-500;
}
.alertBorder.orange {
    @apply bg-orange-500;
}
.alertBorder.info {
    @apply bg-info-500;
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
    @apply my-auto mx-4;
}
.icon.neutral {
    @apply text-neutral-700;
}
.icon.primary {
    @apply text-primary-700;
}
.icon.secondary {
    @apply text-secondary-700;
}
.icon.tertiary {
    @apply text-tertiary-700;
}
.icon.success {
    @apply text-success-700;
}
.icon.danger {
    @apply text-danger-700;
}
.icon.warning {
    @apply text-warning-700;
}
.icon.orange {
    @apply text-orange-700;
}
.icon.info {
    @apply text-info-700;
}
.icon.close {
    @apply mr-0 ml-4 my-auto transform rotate-45 cursor-pointer text-neutral-500 hover:text-neutral-800 !important;
}

.title {
    @apply mb-0 text-sm font-bold;
    line-height: 15.68px;
    max-width: 260px;
    letter-spacing: normal;
}

.title.neutral {
    @apply text-neutral-700;
}
.title.primary {
    @apply text-primary-700;
}
.title.secondary {
    @apply text-secondary-700;
}
.title.tertiary {
    @apply text-tertiary-700;
}
.title.success {
    @apply text-success-700;
}
.title.danger {
    @apply text-danger-700;
}
.title.warning {
    @apply text-warning-700;
}
.title.orange {
    @apply text-orange-700;
}
.title.info {
    @apply text-info-700;
}

.message {
    @apply inline-block items-end mb-0 text-xs font-semibold text-neutral-300;
    line-height: 16.24px;
    max-width: 280px;
}

.actionsWrapper {
    /* @apply ml-1; */
}

.action {
    @apply mx-1 text-sm font-bold cursor-pointer !important;
}

.action.neutral {
    @apply text-neutral-700 hover:text-neutral-300;
}
.action.primary {
    @apply text-primary-700 hover:text-primary-300;
}
.action.secondary {
    @apply text-secondary-700 hover:text-secondary-300;
}
.action.tertiary {
    @apply text-tertiary-700 hover:text-tertiary-300;
}
.action.success {
    @apply text-success-700 hover:text-success-300;
}
.action.danger {
    @apply text-danger-700 hover:text-danger-300;
}
.action.warning {
    @apply text-warning-700 hover:text-warning-300;
}
.action.orange {
    @apply text-orange-700 hover:text-orange-300;
}
.action.info {
    @apply text-info-700 hover:text-info-300;
}

.imageAlert {
    @apply mr-4 rounded-2xl bg-transparent w-12 h-12;
}

.pastel.neutral {
    @apply bg-neutral-25;
}
.pastel.primary {
    @apply bg-primary-25;
}
.pastel.secondary {
    @apply bg-secondary-25;
}
.pastel.tertiary {
    @apply bg-tertiary-25;
}
.pastel.success {
    @apply bg-success-25;
}
.pastel.danger {
    @apply bg-danger-25;
}
.pastel.warning {
    @apply bg-warning-25;
}
.pastel.orange {
    @apply bg-orange-25;
}
.pastel.info {
    @apply bg-info-25;
}
</style>
