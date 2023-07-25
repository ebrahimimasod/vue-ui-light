<template>
	<header class="header">
		<div class="flex m-auto w-9/12">
			<div class="flex items-center">
				<a
					href="/"
					class="text-neutral-500 active--exact active whitespace-nowrap text-xl tracking-tighter"
					title="Home"
				>
			Vue UI Light
			</a>
			</div>
			<div class="w-full lg:px-20">
				<div class="relative">
					<label class="relative block">
						<span class="sr-only">Search Documentation</span>
						<div class="absolute inset-y-0 left-0 flex items-center justify-center px-3 py-2 opacity-50">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="1.25em"
								height="1.25em"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="text-ui-typo feather feather-search"
							>
								<circle
									cx="11"
									cy="11"
									r="8"
								/>
								<line
									x1="21"
									y1="21"
									x2="16.65"
									y2="16.65"
								/>
							</svg>
						</div>
						<input
							type="search"
							disabled
							placeholder="Search Documentation..."
							class="block w-full py-1 pl-10 pr-4 border-2 rounded-lg bg-neutral-50 border-transparent focus:border-neutral-75 focus:bg-white outline-none"
						>
					</label>
				</div>
			</div>
			<div class="flex items-center justify-end">
				<a
					href="/docs/getting-started/quick-start"
					class="block p-1 font-medium nav-link"
				> Docs </a>
			</div>
		</div>
	</header>
</template>

<style lang="postcss" scoped>
.header {
    @apply fixed top-0 z-20 w-full border-b bg-neutral-25 h-14 border-t-2 flex items-center justify-between;
    border-bottom-color: var(--neutral-50);
    border-top-color: var(--blue);
    box-shadow: 0 1px 4px 0 rgb(0 78 255 / 5%);
}
</style>
