declare module '@vue/runtime-core' {
	export interface ComponentCustomProperties {
		$style: Record<string, string>;
	}
}

export {};
