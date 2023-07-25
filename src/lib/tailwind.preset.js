module.exports = {
	theme: {
		extend: {
			colors: () => {
				const green = {
					DEFAULT: 'var(--green)',
					25: 'var(--green-25)',
					50: 'var(--green-50)',
					75: 'var(--green-75)',
					100: 'var(--green-100)',
					200: 'var(--green-200)',
					300: 'var(--green-300)',
					400: 'var(--green-400)',
					500: 'var(--green-500)',
					600: 'var(--green-600)',
					700: 'var(--green-700)',
					800: 'var(--green-800)',
					900: 'var(--green-900)',
				};
				const blue = {
					DEFAULT: 'var(--blue)',
					25: 'var(--blue-25)',
					50: 'var(--blue-50)',
					75: 'var(--blue-75)',
					100: 'var(--blue-100)',
					200: 'var(--blue-200)',
					300: 'var(--blue-300)',
					400: 'var(--blue-400)',
					500: 'var(--blue-500)',
					600: 'var(--blue-600)',
					700: 'var(--blue-700)',
					800: 'var(--blue-800)',
					900: 'var(--blue-900)',
				};
				const pink = {
					DEFAULT: 'var(--pink)',
					25: 'var(--pink-25)',
					50: 'var(--pink-50)',
					75: 'var(--pink-75)',
					100: 'var(--pink-100)',
					200: 'var(--pink-200)',
					300: 'var(--pink-300)',
					400: 'var(--pink-400)',
					500: 'var(--pink-500)',
					600: 'var(--pink-600)',
					700: 'var(--pink-700)',
					800: 'var(--pink-800)',
					900: 'var(--pink-900)',
				};
				const red = {
					DEFAULT: 'var(--red)',
					25: 'var(--red-25)',
					50: 'var(--red-50)',
					75: 'var(--red-75)',
					100: 'var(--red-100)',
					200: 'var(--red-200)',
					300: 'var(--red-300)',
					400: 'var(--red-400)',
					500: 'var(--red-500)',
					600: 'var(--red-600)',
					700: 'var(--red-700)',
					800: 'var(--red-800)',
					900: 'var(--red-900)',
				};
				const yellow = {
					DEFAULT: 'var(--yellow)',
					25: 'var(--yellow-25)',
					50: 'var(--yellow-50)',
					75: 'var(--yellow-75)',
					100: 'var(--yellow-100)',
					200: 'var(--yellow-200)',
					300: 'var(--yellow-300)',
					400: 'var(--yellow-400)',
					500: 'var(--yellow-500)',
					600: 'var(--yellow-600)',
					700: 'var(--yellow-700)',
					800: 'var(--yellow-800)',
					900: 'var(--yellow-900)',
				};
				const orange = {
					DEFAULT: 'var(--orange)',
					25: 'var(--orange-25)',
					50: 'var(--orange-50)',
					75: 'var(--orange-75)',
					100: 'var(--orange-100)',
					200: 'var(--orange-200)',
					300: 'var(--orange-300)',
					400: 'var(--orange-400)',
					500: 'var(--orange-500)',
					600: 'var(--orange-600)',
					700: 'var(--orange-700)',
					800: 'var(--orange-800)',
					900: 'var(--orange-900)',
				};
				const purple = {
					DEFAULT: 'var(--purple)',
					25: 'var(--purple-25)',
					50: 'var(--purple-50)',
					75: 'var(--purple-75)',
					100: 'var(--purple-100)',
					200: 'var(--purple-200)',
					300: 'var(--purple-300)',
					400: 'var(--purple-400)',
					500: 'var(--purple-500)',
					600: 'var(--purple-600)',
					700: 'var(--purple-700)',
					800: 'var(--purple-800)',
					900: 'var(--purple-900)',
				};
				const neutral = {
					DEFAULT: 'var(--neutral)',
					0: 'var(--neutral-0)',
					10: 'var(--neutral-10)',
					20: 'var(--neutral-20)',
					25: 'var(--neutral-25)',
					30: 'var(--neutral-30)',
					40: 'var(--neutral-40)',
					50: 'var(--neutral-50)',
					60: 'var(--neutral-60)',
					70: 'var(--neutral-70)',
					75: 'var(--neutral-75)',
					80: 'var(--neutral-80)',
					90: 'var(--neutral-90)',
					100: 'var(--neutral-100)',
					200: 'var(--neutral-200)',
					300: 'var(--neutral-300)',
					400: 'var(--neutral-400)',
					500: 'var(--neutral-500)',
					600: 'var(--neutral-600)',
					700: 'var(--neutral-700)',
					800: 'var(--neutral-800)',
					900: 'var(--neutral-900)',
				};

				const white = {
					DEFAULT: 'var(--white)',
				};

				const black = {
					DEFAULT: 'var(--black)',
				};
				const transparent = 'var(--transparent)';

				return {
					blue,
					primary: blue,
					green,
					secondary: green,
					purple,
					tertiary: purple,
					success: green,
					pink,
					info: pink,
					red,
					danger: red,
					yellow,
					warning: yellow,
					orange,
					neutral,
					black,
					white,
					transparent,
				};
			},
			fontFamily: {
				body: 'Nunito Sans',
				icon: 'vue-ui-light-icons',
			},
			screens: {
				'xs-sm': {
					min: '320px',
					max: '667px',
				},

				'max-sm': { max: '666px' },
				sm: '667px',
				'sm-md': {
					min: '667px',
					max: '768px',
				},

				'max-md': { max: '767px' },
				md: '768px',
				'md-lg': {
					min: '768px',
					max: '1024px',
				},

				'max-lg': { max: '1023px' },
				lg: '1024px',
				'lg-xl': {
					min: '1024px',
					max: '1280px',
				},

				'max-xl': { max: '1279px' },
				xl: '1280px',
				'xl-2xl': {
					min: '1280px',
					max: '1366px',
				},

				'max-2xl': { max: '1365px' },
				'2xl': '1366px',
				'2xl-3xl': {
					min: '1366px',
					max: '1440px',
				},

				'max-3xl': {
					max: '1439px',
				},
				'3xl': '1440px',
			},
			fontSize: {
				heading1: '11px',
				heading2: '12px',
				heading3: '12px',
				heading4: '14px',
				heading5: '16px',
				heading6: '20px',
				heading7: '24px',
				heading8: '32px',
				heading9: '42px',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
		},
	},
	plugins: [],
	corePlugins: {
		container: false,
	},
};
