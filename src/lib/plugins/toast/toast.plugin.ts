import { App, createApp, reactive } from 'vue';
import NotificationsApp from './ToastContainer.vue';
import { generateId } from '@/utils';

export type ToastPositions = 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right';

type ToastVariants = 'default' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'danger' | 'orange' | 'neutral';

interface ToastAction {
	label: string;
	onClick: () => void;
}

export interface IToast {
	title?: string;
	msg: string;
	duration: number;
	variant: ToastVariants;
	onClose?: (t: IToast) => void;
	id: string | number;
	icon: string | false;
	image: string | false;
	actions?: ToastAction[];
	position: ToastPositions;
	hasClose?: boolean;
	large?: boolean;
}

interface ToastInitialOptions {
	duration?: number;
	position?: ToastPositions;
}

interface ToastVariantMethods {
	title?: string;
	duration?: number;
	onClose?: (t: IToast) => void;
	icon?: string | false;
	image?: string | false;
	actions?: ToastAction[];
	hasClose?: boolean;
	large?: boolean;
}
interface ToastCreator extends ToastVariantMethods {
	variant: ToastVariants;
}

class Toaster {
	public toasts: IToast[] = reactive([]);

	private defaultOptions: Required<ToastInitialOptions> = {
		duration: 5000,
		position: 'top-right',
	};

	private createToast(msg: string, opt: ToastCreator) {
		const options = Object.assign(
			{
				msg,
				id: generateId(),
				icon: opt.icon !== false ? opt.icon || 'info-fill' : null,
			},
			this.defaultOptions,
			opt,
		);
		this.toasts.push(options);
	}

	public setOptions = (defaults: ToastInitialOptions) => {
		this.defaultOptions = {
			...this.defaultOptions,
			...defaults,
		};
	};

	public default = (msg: string, options?: ToastVariantMethods) => {
		this.createToast(msg, {
			...options,
			variant: 'default',
		});
	};
	public info = (msg: string, options?: ToastVariantMethods) => {
		this.createToast(msg, {
			...options,
			variant: 'info',
		});
	};
	public success = (msg: string, options?: ToastVariantMethods) => {
		this.createToast(msg, { ...options,
			variant: 'success' });
	};
	public warning = (msg: string, options?: ToastVariantMethods) => {
		this.createToast(msg, { ...options,
			variant: 'warning' });
	};
	public danger = (msg: string, options?: ToastVariantMethods) => {
		this.createToast(msg, {
			...options,
			variant: 'danger',
		});
	};
	public primary = (msg: string, options?: ToastVariantMethods) => {
		this.createToast(msg, {
			...options,
			variant: 'primary',
		});
	};
	public secondary = (msg: string, options?: ToastVariantMethods) => {
		this.createToast(msg, {
			...options,
			variant: 'secondary',
		});
	};
	public tertiary = (msg: string, options?: ToastVariantMethods) => {
		this.createToast(msg, {
			...options,
			variant: 'tertiary',
		});
	};
	public neutral = (msg: string, options?: ToastVariantMethods) => {
		this.createToast(msg, {
			...options,
			variant: 'neutral',
		});
	};
	public orange = (msg: string, options?: ToastVariantMethods) => {
		this.createToast(msg, {
			...options,
			variant: 'orange',
		});
	};
}

const instance = new Toaster();

export const toastMethods = {
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

const ToastPlugin = {
	install(vue: App, configs: Partial<ToastInitialOptions> = {}) {
		const container = document.createElement('div');
		container.id = 'notifications-container';
		document.body.append(container);

		const toastOptions = Object.assign(
			{
				duration: 5000,
				position: 'top-right',
			},
			configs,
		);

		const notificationsApp = createApp(NotificationsApp, { ...toastOptions });

		instance.setOptions(toastOptions);
		notificationsApp.provide('toasts', instance.toasts);

		notificationsApp.mount(container);

		vue.config.globalProperties.$toast = toastMethods;
	},
};

export default ToastPlugin;
