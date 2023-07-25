## Toast

### installation
```js
// main.js
import { createApp } from 'vue';
import { ToastPlugin } from "vue-ui-light";
import component from './App.vue';

// Create App instance
const app = createApp(component);

// Use plugin
app.use(ToastPlugin);
```

### Toast Method Options
```js
this.$toast.info('my message', { title: 'Title' });
```
<br/>

```ts
interface Toast {
    title?: string;
    msg: string;
    duration: number;
    variant: ToastVariants;
    onClose?: (t: IToast) => void;
    id: string | number;
    icon: string | false;
    image: string | false;
    actions?: ToastAction[];
    position: ToastPositions;
	hasClose?: boolean;
	large?: boolean;
}
```
>if ```hasClose:true``` duration finctionality stopped , you have to close manually


```ts
type ToastPositions = 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right';

type ToastVariants = 'default' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'danger' | 'orange' | 'neutral';

interface ToastAction {
	label: string;
	onClick: () => void;
}
```

### Plugin Options
```js
app.use(ToastPlugin, {
	position: 'top-center',
	duration: 8000,
});
```
<br/>

### Usage
<example>
<template v-slot:preview>
<div class="space-y-2">
	<v-button @click="$toast.default('hello world')">default Toast
	</v-button>
	<br/>
	<v-button @click="$toast.info('hello world')">Info Toast
	</v-button>
	<br/>
	<v-button @click="$toast.neutral('hello world')">Success Toast
	</v-button>
	<br/>
	<v-button @click="$toast.danger('hello world')">Danger Toast
	</v-button>
	<br/>
	<v-button @click="$toast.warning('hello world')">Warning Toast
	</v-button>
	<br/>
	<v-button @click="$toast.primary('hello world')">Primary Toast
	</v-button>
	<br/>
	<v-button @click="$toast.tertiary('hello world')">tertiary Toast
	</v-button>
	<br/>
	<v-button @click="$toast.neutral('hello world')">neutral Toast
	</v-button>
</div>
</template>
<template v-slot:source>

```html
<v-button @click="$toast.default('hello world')">default Toast</v-button>
<v-button @click="$toast.info('hello world')">Info Toast</v-button>
<v-button @click="$toast.neutral('hello world')">Success Toast</v-button>
<v-button @click="$toast.danger('hello world')">Danger Toast</v-button>
<v-button @click="$toast.warning('hello world')">Warning Toast</v-button>
<v-button @click="$toast.primary('hello world')">primary Toast</v-button>
<v-button @click="$toast.tertiary('hello world')">tertiary Toast</v-button>
<v-button @click="$toast.neutral('hello world')">neutral Toast</v-button>
```
</template>
</example>

### More Options
<example>
<template v-slot:preview>
<div class="space-y-2">
	<v-button @click="$toast.info('', { title: 'Title' })">Toast with title</v-button>
	<br/>
	<v-button @click="$toast.info('message', { title: 'Title' })">Toast with Message</v-button>
	<br/>
	<v-button @click="$toast.neutral('message', { actions: [{ label: 'undo', onClick: null }] })">Toast with action</v-button>
	<br/>
	<v-button @click="$toast.neutral('hello world', { hasClose : true , title: 'Title', icon: 'info-fill' , actions: [{ label: 'Action', onClick: null },{ label: 'Action', onClick: null }]})">Toast with action</v-button>
	<br/>
	<v-button @click="$toast.danger('message', { icon: 'online' })">Toast with custom icon</v-button>
	<br/>
	<v-button @click="$toast.danger('message', {hasClose : true, icon: 'online' })">Toast with Close</v-button>
	<br/>
	<v-button @click="$toast.warning('message', { icon: false })">Toast without icon</v-button>
	<br/>
	<v-button @click="$toast.info('hello world', { image:'https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png',  hasClose : true , title: 'Title', icon: 'info-fill' })">Toast image</v-button>
	<br/>
	<v-button @click="$toast.neutral('message', {duration: 10000})">Toast with different duration</v-button>
	<br/>
	<v-button @click="$toast.warning('message', {duration: 1000})">Toast with close callback</v-button>
	<br/>
	<v-button @click="$toast.default('hello world', { hasClose : true , title: 'Title', icon: 'info-fill' , actions: [{ label: 'Action', onClick: null }] })">Toast</v-button>
	<br/>
    <v-button @click="$toast.neutral('hello world', { hasClose : true , title: 'Title', icon: 'info-fill' , actions: [{ label: 'Action', onClick: null },{ label: 'Action', onClick: null }]})">Toast</v-button>
</div>
</template>
<template v-slot:source>

```html
	<v-button @click="$toast.info('', { title: 'Title' })">Toast with title</v-button>
	<br/>
	<v-button @click="$toast.info('message', { title: 'Title' })">Toast with Message</v-button>
	<br/>
	<v-button @click="$toast.neutral('message', { actions: [{ label: 'undo', onClick: null }] })">Toast with action</v-button>
	<br/>
	<v-button @click="$toast.neutral('hello world', { hasClose : true , title: 'Title', icon: 'info-fill' , actions: [{ label: 'Action', onClick: null },{ label: 'Action', onClick: null }]})">Toast with action</v-button>
	<br/>
	<v-button @click="$toast.danger('message', { icon: 'online' })">Toast with custom icon</v-button>
	<br/>
	<v-button @click="$toast.danger('message', {hasClose : true, icon: 'online' })">Toast with Close</v-button>
	<br/>
	<v-button @click="$toast.warning('message', { icon: false })">Toast without icon</v-button>
	<br/>
	<v-button @click="$toast.info('hello world', { image:'https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png',  hasClose : true , title: 'Title', icon: 'info-fill' })">Toast image</v-button>
	<v-button @click="$toast.neutral('message', {duration: 10000})">Toast with different duration</v-button>
	<br/>
	<v-button @click="$toast.warning('message', {duration: 1000})">Toast with close callback</v-button>
```
</template>
</example>

<hr/>

### Large Options
<example>
<template v-slot:preview>
<div class="space-y-2">
	<v-button @click="$toast.info('', { large:true , title: 'Title' })">Toast with title</v-button>
	<br/>
	<v-button @click="$toast.info('message', { large:true , title: 'Title' })">Toast with Message</v-button>
	<br/>
	<v-button @click="$toast.neutral('message', {large:true ,title: 'Title' , actions: [{ label: 'undo', onClick: null }] })">Toast with action</v-button>
	<br/>
	<v-button @click="$toast.neutral('hello world', { hasClose : true , large:true , title: 'Title', icon: 'info-fill' , actions: [{ label: 'Action', onClick: null },{ label: 'Action', onClick: null }]})">Toast with action</v-button>
	<br/>
</div>
</template>
<template v-slot:source>

```html
	<v-button @click="$toast.info('', { large:true , title: 'Title' })">Toast with title</v-button>
	<br/>
	<v-button @click="$toast.info('message', { large:true , title: 'Title' })">Toast with Message</v-button>
	<br/>
	<v-button @click="$toast.neutral('message', { large:true ,title: 'Title' , actions: [{ label: 'undo', onClick: null }] })">Toast with action</v-button>
	<br/>
	<v-button @click="$toast.neutral('hello world', { hasClose : true , large:true , title: 'Title', icon: 'info-fill' , actions: [{ label: 'Action', onClick: null },{ label: 'Action', onClick: null }]})">Toast with action</v-button>
	<br/>
```
</template>
</example>

<hr/>
<br/>

### Positions
<example>
<template v-slot:preview>
<div class="space-y-2">
	<v-button @click="$toast.default('message', { position:'top-right' ,title: 'Title' })">Toast top-right</v-button>
	<br/>
	<v-button @click="$toast.default('message', { position:'top-center' ,title: 'Title' })">Toast top-center</v-button>
	<br/>
	<v-button @click="$toast.default('message', { position:'top-left' ,title: 'Title' })">Toast top-left</v-button>
	<br/>
	<v-button @click="$toast.default('message', { position:'bottom-right' ,title: 'Title' })">Toast bottom-right</v-button>
	<br/>
	<v-button @click="$toast.default('message', { position:'bottom-right' ,title: 'Title' })">Toast bottom-right</v-button>
	<br/>
	<v-button @click="$toast.default('message', { position:'bottom-right' ,title: 'Title' })">Toast bottom-right</v-button>
	<br/>
</div>
</template>
<template v-slot:source>

```html
	<v-button @click="$toast.default('message', { position:'top-right' ,title: 'Title' })">Toast top-right</v-button>
	<v-button @click="$toast.default('message', { position:'top-center' ,title: 'Title' })">Toast top-center</v-button>
	<v-button @click="$toast.default('message', { position:'top-left' ,title: 'Title' })">Toast top-left</v-button>
	<v-button @click="$toast.default('message', { position:'bottom-right' ,title: 'Title' })">Toast bottom-right</v-button>
	<v-button @click="$toast.default('message', { position:'bottom-center' ,title: 'Title' })">Toast bottom-center</v-button>
	<v-button @click="$toast.default('message', { position:'bottom-left' ,title: 'Title' })">Toast bottom-left</v-button>
```
</template>
</example>


<hr/>
<br/>


| name     | Description                                       | Type   | Values                                                                                | Default        |
| -------- | ------------------------------------------------- | ------ | ------------------------------------------------------------------------------------- | -------------- |
| duration | Default duration used as fallback in milliseconds | number | -                                                                                     | 5000           |
| position | Toasts position on screen                         | string | `bottom-left`, `bottom-center`, `bottom-right`, `top-left`, `top-center`, `top-right` | `bottom-right` |