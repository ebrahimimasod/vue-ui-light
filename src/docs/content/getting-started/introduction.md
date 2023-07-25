## Introduction
vue-ui-light UI is a javascript UI library based on Vuejs framework.

It leverages common UI patterns and elements along with best-in-class tools to quickly scaffold and bootstrap enterprise-ready web applications. We use it in many of our projects at [vue-ui-light](https://vue-ui-light.com).

### Features
- **Vue 3**
- **ES Modules and Tree-Shakable**
- **Modular:** All the components can be used individually and on-demand to prevent shipping unnecessary code.
- **Lightweight:** We take our bundles size seriously and do our best to keep it as light as possible.
- **Design guidelines:** Every element brings its own design principles with pixel-perfect implementation.
- **Typescript:** We love Typescript and provide type intellisense.
- **Customization:** Core colors and styles cen be easily customized using css variables.
- **Tailwind Compatible:** We use our custom preset of `tailwind` and also expose it in production builds.

### Toolchain
This library is built from scratch with power of the `Vue 3` and `Typescript`, hence we provide first-class support for type checking stuffs.

Additionally, the `Tailwindcss`, as a CSS framework to unlock the power of utility-first CSS, sits at the core of our styling solution.

We also love `Vite` and the way new bundlers utilities the ES module, hence we deeply integrate it with our frontend toolkit as a package bundler.


### Browser Compatibility
We believe in modern ways of building user interface and heavily make use of modern patterns and features in CSS and Javascript such as "CSS Variables", "Flexbox", "Promises", "ES Modules" and etc.
Currently all recent versions of major browsers are fully supported. for the legacy browsers, some features may not work properly (IE is not supported at all!). 

### What's in the box?
The library consists of over 30 components, plugins and a small set of icons, which can be imported individually, designed to be used inside of our components. we also expose both `umd` and `es` module formats to suit the needs. use the `es` format for smaller bundles and better tree-shaking.

```js
// ES module format
import 'vue-ui-light/dist/vue-ui-light.es.js';
// Or UMD
import 'vue-ui-light/dist/vue-ui-light.umd.js';

// Core styles
import 'vue-ui-light/dist/style.css';
// Font icons
import 'vue-ui-light/dist/icons/icons.css';
```

Although our production bundles does not require to be used alongside with the `Tailwindcss`, we also provide a preset for better integration with our look and feel.

Check it out at `vue-ui-light/dist/utils/tailwind.preset`:

```js
// tailwind.config.js
module.exports = {
	//...
	presets: [
		require('vue-ui-light/dist/utils/tailwind.preset'),
	],
};

```
