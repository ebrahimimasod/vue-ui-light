<template>
	<div
		:class="$style.wrapper"
		:style="Styles"
	>
		<transition-group
			:enter-from-class="$style.transitionEnterForm"
			:leave-to-class="$style.transitionLeaveTo"
		>
			<toast
				v-for="toast in toasts"
				:key="toast.id"
				:toast="toast"
				:class="containerStyles(toast.position)"
				@close="onCloseToast"
			/>
		</transition-group>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Toast from './Toast.vue';
import { IToast, ToastPositions } from './toast.plugin';

interface ToastsInject {
	toasts: IToast[];
}

export default defineComponent({
	name: 'ToastContainer',
	components: {
		Toast,
	},
	inject: ['toasts'],
	props: {
		duration: {
			type: Number,
			required: true,
		},
		position: {
			type: String as PropType<ToastPositions>,
			required: true,
		},
	},
	data() {
		return {
			Styles: [] as any,
		};
	},
	methods: {
		onCloseToast(toastId: number | string) {
			const { toasts } = (this as unknown) as ToastsInject;
			toasts.splice(
				toasts.findIndex((t) => t.id === toastId),
				1,
			);
		},
		containerStyles(toast_position: string): void {
			const styles: Record<string, string | number> = {};
			const position = toast_position ? toast_position : this.position;
			if (position.startsWith('top')) {
				styles.top = '8px';
				styles.flexDirection = 'column-reverse';
			} else {
				styles.bottom = '8px';
				styles.flexDirection = 'column';
			}
			if (position.endsWith('right')) {
				styles.right = 0;
			} else if (position.endsWith('left')) {
				styles.left = 0;
			} else {
				styles.transform = 'translateX(-50%)';
				styles.left = '50%';
			}
			this.Styles = styles;
		},
	},
});
</script>

<style lang="postcss" module>
.wrapper {
    @apply flex fixed flex-col mx-4 z-40;
}

.transitionEnterForm,
.transitionLeaveTo {
    transition: 0.2s;
    opacity: 0;
    transform: translateY(30px) scale(0.9);
}
</style>
