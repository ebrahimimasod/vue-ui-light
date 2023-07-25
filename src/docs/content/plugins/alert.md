## Alert

### installation
```js
// main.js
import { createApp } from 'vue';
import { AlertPlugin } from "vue-ui-light";
import component from './App.vue';

// Create App instance
const app = createApp(component);

// Use plugin
app.use(AlertPlugin);
```

### Alert Method Options
```js
this.$alert.info('my message', { title: 'Title' });
```
<br/>

```ts
interface Alert {
    title?: string;
    msg: string;
    duration: number;
    variant: AlertVariants;
    onClose?: (t: IAlert) => void;
    id: string | number;
    icon: string | false;
    actions?: AlertAction[];
    position: AlertPositions;
	hasClose?: boolean;
	pastel?: boolean;
}
```
>if ```hasClose:true``` duration finctionality stopped , you have to close manually

```ts
type AlertPositions = 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right';

type AlertVariants = 'primary' | 'secondary' | 'tertiary' | 'success' | 'info' | 'warning' | 'danger' | 'orange' | 'neutral';

interface AlertAction {
	label: string;
	onClick: () => void;
}
```
### Plugin Options
```js
app.use(AlertPlugin, {
	position: 'top-center',
	duration: 8000,
});
```
<br/>

### Usage
<example>
<template v-slot:preview>
<div class="space-y-2">
	<v-button
            @click="
                $alert.primary('hello world this is alert plugin', {
                    title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >PRIMARY ALERT</v-button
        >
		<br />
        <v-button
            @click="
                $alert.danger('hello world this is alert plugin', {
                    title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >DANGER ALERT</v-button
        >
		<br />
        <v-button
            @click="
                $alert.success('hello world this is alert plugin', {
                    title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >SUCCESS ALERT</v-button
        >
		<br />
        <v-button
            @click="
                $alert.warning('hello world this is alert plugin', {
                    title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >WARNING ALERT</v-button
        >
		<br />
        <v-button
            @click="
                $alert.orange('hello world this is alert plugin', {
                    title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >ORANGE ALERT</v-button
        >
</div>
</template>

<template v-slot:source>

```html
<v-button
            @click="
                $alert.primary('hello world this is alert plugin', {
                    title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >PRIMARY ALERT</v-button
        >
        <v-button
            @click="
                $alert.danger('hello world this is alert plugin', {
                    title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >DANGER ALERT</v-button
        >
        <v-button
            @click="
                $alert.success('hello world this is alert plugin', {
                    title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >SUCCESS ALERT</v-button
        >
        <v-button
            @click="
                $alert.warning('hello world this is alert plugin', {
                    title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >WARNING ALERT</v-button
        >
        <v-button
            @click="
                $alert.orange('hello world this is alert plugin', {
                    title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >ORANGE ALERT</v-button
        >
```
</template>
</example>

### Paslet mode
<example>
<template v-slot:preview>
<div class="space-y-2">
	<v-button
            @click="
                $alert.primary('hello world this is alert plugin', {
                    title: 'Title Alert',
					pastel: true,
                    icon: 'check-fill',
                })
            "
            >PRIMARY ALERT</v-button
        >
		<br />
        <v-button
            @click="
                $alert.danger('hello world this is alert plugin', {
                    title: 'Title Alert',
					pastel: true,
                    icon: 'check-fill',
                })
            "
            >DANGER ALERT</v-button
        >
		<br />
        <v-button
            @click="
                $alert.success('hello world this is alert plugin', {
                    title: 'Title Alert',
					pastel: true,
                    icon: 'check-fill',
                })
            "
            >SUCCESS ALERT</v-button
        >
		<br />
        <v-button
            @click="
                $alert.warning('hello world this is alert plugin', {
                    title: 'Title Alert',
					pastel: true,
                    icon: 'check-fill',
                })
            "
            >WARNING ALERT</v-button
        >
		<br />
        <v-button
            @click="
                $alert.orange('hello world this is alert plugin', {
                    title: 'Title Alert',
					pastel: true,
                    icon: 'check-fill',
                })
            "
            >ORANGE ALERT</v-button
        >
</div>
</template>

<template v-slot:source>

```html
<v-button
            @click="
                $alert.primary('hello world this is alert plugin', {
                    pastel : true,
					title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >PRIMARY ALERT</v-button
        >
        <v-button
            @click="
                $alert.danger('hello world this is alert plugin', {
                    pastel : true,
					title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >DANGER ALERT</v-button
        >
        <v-button
            @click="
                $alert.success('hello world this is alert plugin', {
                    pastel : true,
					title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >SUCCESS ALERT</v-button
        >
        <v-button
            @click="
                $alert.warning('hello world this is alert plugin', {
                    pastel : true,
					title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >WARNING ALERT</v-button
        >
        <v-button
            @click="
                $alert.orange('hello world this is alert plugin', {
                    pastel : true,
					title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >ORANGE ALERT</v-button
        >
```
</template>
</example>

### More Options
<example>
<template v-slot:preview>
<div class="space-y-2">
	<v-button
            @click="
                $alert.primary('hello world this is alert plugin', {
                    hasClose: true,
                    pastel : true,
					title: 'Title Alert',
                    icon: 'check-fill',
                })
            "
            >With Close</v-button
        >
		<br />
	<v-button
            @click="
                $alert.primary('hello world this is alert plugin', {
                    hasClose: true,
                    pastel : true,
					title: 'Title Alert',
                    icon: 'check-fill',
					actions: [
                        { label: 'action', onClick: null },
                        { label: 'show', onClick: null },
                    ],
                })
            "
            >With Actions</v-button
        >
		<br />
	<v-button
            @click="
                $alert.success('hello world this is alert plugin', {
                    pastel : true,
					title: 'Title Alert',
                    icon: 'description',
                })
            "
            >Custom Icon</v-button
        >
		<br />
</div>
</template>
<template v-slot:source>

```html
	<v-button
            @click="
                $alert.primary('hello world this is alert plugin', {
                    hasClose: false,
                    pastel : true,
					title: 'Title Alert',
                    icon: 'check-fill',
					actions: [
                        { label: 'WIN + ', onClick: null },
                        { label: 'SHIFT', onClick: null },
                    ],
                })
            "
            >Without Close</v-button
        >
	<v-button
            @click="
                $alert.success('hello world this is alert plugin', {
                    pastel : true,
					title: 'Title Alert',
                    icon: 'description',
                })
            "
            >Custom Icon</v-button
        >
```
</template>
</example>

<hr/>


### Positions
<example>
<template v-slot:preview>
<div class="space-y-2">
	<v-button @click="$alert.danger('message', { position:'top-right' ,pastel: true, title: 'Title' })">Alert top-right</v-button>
	<br/>
	<v-button @click="$alert.danger('message', { position:'top-center' ,pastel: true, title: 'Title' })">Alert top-center</v-button>
	<br/>
	<v-button @click="$alert.danger('message', { position:'top-left' ,pastel: true, title: 'Title' })">Alert top-left</v-button>
	<br/>
	<v-button @click="$alert.danger('message', { position:'bottom-right' ,pastel: true, title: 'Title' })">Alert bottom-right</v-button>
	<br/>
	<v-button @click="$alert.danger('message', { position:'bottom-center' ,pastel: true, title: 'Title' })">Alert bottom-center</v-button>
	<br/>
	<v-button @click="$alert.danger('message', { position:'bottom-left' ,pastel: true, title: 'Title' })">Alert bottom-left</v-button>
	<br/>
</div>
</template>
<template v-slot:source>

```html
	<v-button @click="$alert.default('message', { position:'top-right' ,pastel: true, title: 'Title' })">Alert top-right</v-button>
	<v-button @click="$alert.default('message', { position:'top-center' ,pastel: true, title: 'Title' })">Alert top-center</v-button>
	<v-button @click="$alert.default('message', { position:'top-left' ,pastel: true, title: 'Title' })">Alert top-left</v-button>
	<v-button @click="$alert.default('message', { position:'bottom-right' ,pastel: true, title: 'Title' })">Alert bottom-right</v-button>
	<v-button @click="$alert.default('message', { position:'bottom-right' ,pastel: true, title: 'Title' })">Alert bottom-right</v-button>
	<v-button @click="$alert.default('message', { position:'bottom-right' ,pastel: true, title: 'Title' })">Alert bottom-right</v-button>
```
</template>
</example>


<hr/>
<br/>


| name     | Description                                       | Type   | Values                                                                                | Default        |
| -------- | ------------------------------------------------- | ------ | ------------------------------------------------------------------------------------- | -------------- |
| duration | Default duration used as fallback in milliseconds | number | -                                                                                     | 5000           |
| position | Alerts position on screen                         | string | `bottom-left`, `bottom-center`, `bottom-right`, `top-left`, `top-center`, `top-right` | `bottom-right` |