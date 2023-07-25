# vue-ui-light UI toolkit 


# Getting started
> this toolkit developed with [Vuejs3](https://v3.vuejs.org/) + [Typescript](https://www.typescriptlang.org/) and build by [Vite](https://github.com/vitejs/vite).

> If you are building Custom Web Applications, be sure to use our UI-toolkit.



## Install

Use the node package manager [npm](https://docs.npmjs.com/cli/v6/commands/npm-install)  or [yarn](https://classic.yarnpkg.com/en/docs/cli/add/) to install.

```bash
npm install 
'#or'
yarn install
```

## Quick Start

```vue
import Vue from 'vue';
import { VButton } from "vue-ui-light";
import App from './App.vue';

Vue.use(VButton)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## Documentation
documentation based on [docsify](https://docsify.js.org/#/) for markdown and [vue-docgen-cli](https://www.npmjs.com/package/vue-docgen-cli) for serve docs.


```bash
npm run docs:generate 
'#or'
yarn docs:generate
```

#### **then build package library with**

```bash
npm run build 
'#or'
yarn build
```
#### **for serve in localhost**

```bash
npm run docs:serve 
'#or'
yarn docs:serve
```

> now check [http://localhost:3000/](http://localhost:3000/) 
``` if port:3000 reserved so check new port on your terminal ```

> if you want generate only markdowns run this command :   **npm run docs:generate**

#### **for build mode**

```bash
npm run docs:build 
'#or'
yarn docs:build
```

> now check **/docdist** in root directory

## Playground
> if you want test code and see changes

```bash
npm run play
'#or'
yarn play
```
> now check [http://localhost:3000/](http://localhost:3000/) 
``` if port:3000 reserved so check new port on your terminal ```

## Build
```bash
npm run build 
'#or'
yarn build
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
