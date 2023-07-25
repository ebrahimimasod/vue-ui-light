module.exports = {
	purge: {
		content: [`${__dirname}/**/*.{vue,js,ts,jsx,tsx}`],
		options: {
			keyframes: true,
			layers: ['utilities', 'components'],
			blocklist: [/^container/],
		},
	},
	presets: [require('../lib/tailwind.preset')],
};
