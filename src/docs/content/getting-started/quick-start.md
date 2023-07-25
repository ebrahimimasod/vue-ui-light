## Quick Start

Prerequisite: 
- Node v14
- npm v6
- Access to vue-ui-light's vpn and dns servers.


Install `vue-ui-light` as a packge dependency:

```bash
npm install vue-ui-light
```

Use it in your components:

```html
<template>
	<div>
		<v-button>Click Me!</v-button>
	</div>
</template>
```
<br/>

```js
import { VButton } from 'vue-ui-light';

export default {
	components: {
		VButton,
	},
};
```