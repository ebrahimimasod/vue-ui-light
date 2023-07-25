<template>
	<!-- @slot Accordions children -->
	<slot />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

type accordionCallback = () => {}

interface AccordionList {
	[id: string]: () => {}
}

export interface AccordionInject {
	accordionGroup: {
		registerAccordion: (name: number, cb: accordionCallback) => void,
		onOpenAccordion: (name: number) => void,
	},
}

export default defineComponent({
	name: 'VAccordionGroup',
	provide() {
		return {
			accordionGroup: {
				registerAccordion: (name: number, cb: accordionCallback) => {
					this.accordions[String(name)] = cb;
				},
				onOpenAccordion: (name: number) => {
					Object.keys(this.accordions).forEach((key) => {
						if(key !== String(name)) {
							this.accordions[key]();
						}
					});
				},
			},
		};
	},
	data() {
		return {
			accordions: {} as AccordionList,
		};
	},
});
</script>
