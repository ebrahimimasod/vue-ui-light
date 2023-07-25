## Installation

#### Requirements

Minimum requirements:

-   nodejs `v14`
-   npm `v6`
-   Access to vue-ui-light's vpn and dns servers.

> Since we release this library on our private npm registry, you need to make sure you have correct access rights to the [registry](http://stg.npm.vue-ui-light.com) before you proceed.

#### Install

Using `npm`:

```bash
npm install vue-ui-light
```

Or `yarn`:

```bash
yarn add vue-ui-light
```

#### Usage

Import:

```js
import { VButton } from "vue-ui-light";
import "vue-ui-light/dist/style.css";
```

Also you probably want to import Icons too:

```js
import "vue-ui-light/dist/icons/icons.css";
```

Use a component:

```html
<template>
    <v-button variant="primary">Click Me!</v-button>
</template>
```

<br/>

```js
import { VButton } from "vue-ui-light";

export default {
    components: {
        VButton,
    },
};
```

Also it is possible to import `UMD` or `ES` modules explicity:

```js
import { VButton } from "vue-ui-light/dist/vue-ui-light.es.js";
// or
import { VButton } from "vue-ui-light/dist/vue-ui-light.umd.js";
```
