<template>
	<div
		:class="$style.wrapper"
		:style="Styles"
	>
		<transition-group
			:enter-from-class="$style.transitionEnterForm"
			:leave-to-class="$style.transitionLeaveTo"
		>
			<alert
				v-for="alert in alerts"
				:key="alert.id"
				:alert="alert"
				:class="containerStyles(alert.position)"
				@close="onCloseAlert"
			/>
		</transition-group>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Alert from './Alert.vue';
import { IAlert, AlertPositions } from './alert.plugin';

interface AlertsInject {
	alerts: IAlert[];
}

export default defineComponent({
	name: 'AlertContainer',
	components: {
		Alert,
	},
	inject: ['alerts'],

	props: {
		duration: {
			type: Number,
			required: true,
		},
		position: {
			type: String as PropType<AlertPositions>,
			required: true,
		},
	},

	data() {
		return {
			Styles: [] as any,
		};
	},

	methods: {
		onCloseAlert(alertId: number | string) {
			const { alerts } = (this as unknown) as AlertsInject;
			alerts.splice(
				alerts.findIndex((t) => t.id === alertId),
				1,
			);
		},
		containerStyles(alert_position: string): void {
			const styles: Record<string, string | number> = {};
			const position = alert_position ? alert_position : this.position;
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
