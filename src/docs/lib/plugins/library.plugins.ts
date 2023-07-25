import { App } from 'vue';
import { Example } from '~/components';
import {
	VButton,
	VCol,
	VIcon,
	VRow,
	VText,
	VInput,
	VTextarea,
	VDialog,
	VCheckbox,
	VRadio,
	VToggle,
	VPopover,
	VSelect,
	VBadge,
	VAvatar,
	VTooltip,
	VSlider,
	VSegment,
	VBreadcrumb,
	VDivider,
	VSAccordion,
	VAccordionGroup,
	VTabs,
	VTab,
	VPagination,
	VTable,
	ToastPlugin,
	AlertPlugin,
	// @ts-ignore
} from '../../../../dist/vue-ui-light.es.js';
import '../../../../dist/style.css';

export default {
	install(app: App) {
		app.component('Example', Example);
		app.component('VButton', VButton);
		app.component('VInput', VInput);
		app.component('VCol', VCol);
		app.component('VIcon', VIcon);
		app.component('VRow', VRow);
		app.component('VText', VText);
		app.component('VTextarea', VTextarea);
		app.component('VDialog', VDialog);
		app.component('VCheckbox', VCheckbox);
		app.component('VRadio', VRadio);
		app.component('VToggle', VToggle);
		app.component('VPopover', VPopover);
		app.component('VSelect', VSelect);
		app.component('VBadge', VBadge);
		app.component('VAvatar', VAvatar);
		app.component('VTooltip', VTooltip);
		app.component('VSlider', VSlider);
		app.component('VSegment', VSegment);
		app.component('VBreadcrumb', VBreadcrumb);
		app.component('VDivider', VDivider);
		app.component('VSAccordion', VSAccordion);
		app.component('VAccordionGroup', VAccordionGroup);
		app.component('VTabs', VTabs);
		app.component('VTab', VTab);
		app.component('VPagination', VPagination);
		app.component('VTable', VTable);
		app.use(ToastPlugin, {
			duration: 4000,
			position: 'top-right',
		});
		app.use(AlertPlugin, {
			duration: 5000,
			position: 'top-center',
		});
	},
};
