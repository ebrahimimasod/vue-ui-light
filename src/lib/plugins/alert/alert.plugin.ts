import { App, createApp, reactive } from 'vue';
import NotificationsApp from './AlertContainer.vue';
import { generateId } from '@/utils';

export type AlertPositions = 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right';

type AlertVariants = 'default' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'danger' | 'orange' | 'neutral';

interface AlertAction {
	label: string;
	onClick: () => void;
}

export interface IAlert {
	title?: string;
	msg: string;
	duration: number;
	variant: AlertVariants;
	onClose?: (t: IAlert) => void;
	id: string | number;
	icon: string | false;
	image: string | false;
	actions?: AlertAction[];
	position: AlertPositions;
	hasClose?: boolean;
	pastel?: boolean;
}

interface AlertInitialOptions {
	duration?: number;
	position?: AlertPositions;
}

interface AlertVariantMethods {
	title?: string;
	duration?: number;
	onClose?: (t: IAlert) => void;
	icon?: string | false;
	image?: string | false;
	actions?: AlertAction[];
	hasClose?: boolean;
	pastel?: boolean;
}
interface AlertCreator extends AlertVariantMethods {
	variant: AlertVariants;
}

class Alerter {
	public alerts: IAlert[] = reactive([]);

	private defaultOptions: Required<AlertInitialOptions> = {
		duration: 5000,
		position: 'top-right',
	};

	private createAlert(msg: string, opt: AlertCreator) {
		const options = Object.assign(
			{
				msg,
				id: generateId(),
				icon: opt.icon !== false ? opt.icon || 'info-fill' : null,
			},
			this.defaultOptions,
			opt,
		);
		this.alerts.push(options);
	}

	public setOptions = (defaults: AlertInitialOptions) => {
		this.defaultOptions = {
			...this.defaultOptions,
			...defaults,
		};
	};

	public default = (msg: string, options?: AlertVariantMethods) => {
		this.createAlert(msg, {
			...options,
			variant: 'default',
		});
	};
	public info = (msg: string, options?: AlertVariantMethods) => {
		this.createAlert(msg, {
			...options,
			variant: 'info',
		});
	};
	public success = (msg: string, options?: AlertVariantMethods) => {
		this.createAlert(msg, { ...options,
			variant: 'success' });
	};
	public warning = (msg: string, options?: AlertVariantMethods) => {
		this.createAlert(msg, { ...options,
			variant: 'warning' });
	};
	public danger = (msg: string, options?: AlertVariantMethods) => {
		this.createAlert(msg, {
			...options,
			variant: 'danger',
		});
	};
	public primary = (msg: string, options?: AlertVariantMethods) => {
		this.createAlert(msg, {
			...options,
			variant: 'primary',
		});
	};
	public secondary = (msg: string, options?: AlertVariantMethods) => {
		this.createAlert(msg, {
			...options,
			variant: 'secondary',
		});
	};
	public tertiary = (msg: string, options?: AlertVariantMethods) => {
		this.createAlert(msg, {
			...options,
			variant: 'tertiary',
		});
	};
	public neutral = (msg: string, options?: AlertVariantMethods) => {
		this.createAlert(msg, {
			...options,
			variant: 'neutral',
		});
	};
	public orange = (msg: string, options?: AlertVariantMethods) => {
		this.createAlert(msg, {
			...options,
			variant: 'orange',
		});
	};
}

const instance = new Alerter();

export const alertMethods = {
	info: instance.info,
	success: instance.success,
	danger: instance.danger,
	warning: instance.warning,
	default: instance.default,
	primary: instance.primary,
	secondary: instance.secondary,
	tertiary: instance.tertiary,
	neutral: instance.neutral,
	orange: instance.orange,
};

const AlertPlugin = {
	install(vue: App, configs: Partial<AlertInitialOptions> = {}) {
		const container = document.createElement('div');
		container.id = 'notifications-container';
		document.body.append(container);

		const alertOptions = Object.assign(
			{
				duration: 5000,
				position: 'top-right',
			},
			configs,
		);

		const notificationsApp = createApp(NotificationsApp, { ...alertOptions });

		instance.setOptions(alertOptions);
		notificationsApp.provide('alerts', instance.alerts);

		notificationsApp.mount(container);

		vue.config.globalProperties.$alert = alertMethods;
	},
};

export default AlertPlugin;
