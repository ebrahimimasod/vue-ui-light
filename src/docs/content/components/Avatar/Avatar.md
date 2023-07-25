# Avatar

## Usage

```js
import { VAvatar } from "vue-ui-light";
```

<br/>
<br/>

## Modes

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar content="al" mode="txt" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar mode="outline" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar />
<v-avatar content="al" mode="txt" />
<v-avatar :content="imgSrc" mode="img" />
<v-avatar mode="outline" />
```

</template>
</example>

#### Variant

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="tertiary" content="al" mode="txt" size="lg" />
	    <v-avatar variant="tertiary" content="al" mode="txt" size="md" />
	    <v-avatar variant="tertiary" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="secondary" content="al" mode="txt" size="lg" />
	    <v-avatar variant="secondary" content="al" mode="txt" size="md" />
	    <v-avatar variant="secondary" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="orange" content="al" mode="txt" size="lg" />
	    <v-avatar variant="orange" content="al" mode="txt" size="md" />
	    <v-avatar variant="orange" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="primary" content="al" mode="txt" size="lg" />
	    <v-avatar variant="primary" content="al" mode="txt" size="md" />
	    <v-avatar variant="primary" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="danger" content="al" mode="txt" size="lg" />
	    <v-avatar variant="danger" content="al" mode="txt" size="md" />
	    <v-avatar variant="danger" content="al" mode="txt" size="sm" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar variant="tertiary" content="al" mode="txt" size="lg" />

<v-avatar variant="secondary" content="al" mode="txt" size="lg" />

<v-avatar variant="orange" content="al" mode="txt" size="lg" />

<v-avatar variant="primary" content="al" mode="txt" size="lg" />

<v-avatar variant="danger" content="al" mode="txt" size="lg" />
```

</template>
</example>

#### Size

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar size="lg" />
	    <v-avatar size="md" />
	    <v-avatar size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="orange" content="al" mode="txt" size="lg" />
	    <v-avatar variant="orange" content="al" mode="txt" size="md" />
	    <v-avatar variant="orange" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="lg" />
	    <v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="md" />
	    <v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar mode="outline" size="lg" />
	    <v-avatar mode="outline" size="md" />
	    <v-avatar mode="outline" size="sm" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar size="lg" />
<v-avatar size="md" />
<v-avatar size="sm" />

<v-avatar variant="orange" content="al" mode="txt" size="lg" />
<v-avatar variant="orange" content="al" mode="txt" size="md" />
<v-avatar variant="orange" content="al" mode="txt" size="sm" />

<v-avatar variant="tertiary" content="imgSrc" mode="img" size="lg" />
<v-avatar variant="tertiary" content="imgSrc" mode="img" size="md" />
<v-avatar variant="tertiary" content="imgSrc" mode="img" size="sm" />

<v-avatar mode="outline" size="lg" />
<v-avatar mode="outline" size="md" />
<v-avatar mode="outline" size="sm" />
```

</template>
</example>

#### Rounded

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar rounded size="lg" />
	    <v-avatar rounded size="md" />
	    <v-avatar rounded size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar rounded variant="danger" content="al" mode="txt" size="lg" />
	    <v-avatar rounded variant="danger" content="al" mode="txt" size="md" />
	    <v-avatar rounded variant="danger" content="al" mode="txt" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" size="lg" />
	    <v-avatar rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" size="md" />
	    <v-avatar rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" size="sm" />
	</div>
	<div class="flex flex-col gap-8 items-center">
	    <v-avatar rounded mode="outline" size="lg" />
	    <v-avatar rounded mode="outline" size="md" />
	    <v-avatar rounded mode="outline" size="sm" />
	</div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar rounded size="lg" />
<v-avatar rounded size="md" />
<v-avatar rounded size="sm" />

<v-avatar rounded variant="danger" content="al" mode="txt" size="lg" />
<v-avatar rounded variant="danger" content="al" mode="txt" size="md" />
<v-avatar rounded variant="danger" content="al" mode="txt" size="sm" />

<v-avatar rounded variant="info" content="imgSrc" mode="img" size="lg" />
<v-avatar rounded variant="info" content="imgSrc" mode="img" size="md" />
<v-avatar rounded variant="info" content="imgSrc" mode="img" size="sm" />

<v-avatar rounded mode="outline" size="lg" />
<v-avatar rounded mode="outline" size="md" />
<v-avatar rounded mode="outline" size="sm" />
```

</template>
</example>

#### Badge Slot

> position of badge handle in cmp but you can use anything you want with slot #badge

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
	<div class="flex flex-col gap-8 items-center">
		<v-avatar badge="tr" size="lg">
		    <template #badge>
		        <div class="h-4 w-4 rounded-full bg-red-500" />
		    </template>
		</v-avatar>
		<v-avatar badge="tr">
		    <template #badge>
		        <div class="h-4 w-4 rounded-full bg-red-500" />
		    </template>
		</v-avatar>
		<v-avatar badge="tr" size="sm">
		    <template #badge>
		        <div class="h-3 w-3 rounded-full bg-red-500" />
		    </template>
		</v-avatar>
    </div>
    <div class="flex flex-col gap-8 items-center">
		<v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" badge="br" size="lg">
		    <template #badge>
		        <div class="h-5 w-5 rounded-full bg-success-700 border-solid border-[3px] border-white" />
		    </template>
		</v-avatar>
		<v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" badge="br">
		    <template #badge>
		        <div class="h-4 w-4 rounded-full bg-success-700 border-solid border-2 border-white" />
		    </template>
		</v-avatar>
		<v-avatar variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" badge="br" size="sm">
		    <template #badge>
		        <div class="h-3 w-3 rounded-full bg-success-700 border-solid border border-white" />
		    </template>
		</v-avatar>
    </div>
    <div class="flex flex-col gap-8 items-center">
		<v-avatar variant="tertiary" rounded content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" badge="tr" size="lg">
		    <template #badge>
		        <div class="h-5 w-5 rounded-full bg-blue-700 border-solid border-[3px] border-white" />
		    </template>
		</v-avatar>
		<v-avatar variant="tertiary" rounded content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" badge="tr">
		    <template #badge>
		        <div class="h-4 w-4 rounded-full bg-blue-700 border-solid border-2 border-white" />
		    </template>
		</v-avatar>
		<v-avatar variant="tertiary" rounded content="https://cdn.discordapp.com/attachments/719621674965663817/983572069558132817/Image_1.png" mode="img" badge="tr" size="sm">
		    <template #badge>
		        <div class="h-3 w-3 rounded-full bg-blue-700 border-solid border border-white" />
		    </template>
		</v-avatar>
    </div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar badge="tr" size="lg">
  <template #badge>
    <div class="h-4 w-4 rounded-full bg-red-500" />
  </template>
</v-avatar>
and ...

<v-avatar variant="tertiary" :content="imgSrc" mode="img" badge="br" size="lg">
  <template #badge>
    <div
      class="h-5 w-5 rounded-full bg-success-700 border-solid border-[3px] border-white"
    />
  </template>
</v-avatar>
and ...

<v-avatar
  variant="tertiary"
  rounded
  :content="imgSrc2"
  mode="img"
  badge="tr"
  size="lg"
>
  <template #badge>
    <div
      class="h-5 w-5 rounded-full bg-blue-700 border-solid border-[3px] border-white"
    />
  </template>
</v-avatar>
and ...
```

</template>
</example>

#### Bordered

<example>
<template v-slot:preview>
<v-row class="flex flex-row gap-8 items-center">
			<div class="flex flex-col gap-8 items-center">
                <v-avatar bordered rounded size="lg" />
                <v-avatar bordered rounded size="md" />
                <v-avatar bordered rounded size="sm" />
            </div>
            <div class="flex flex-col gap-8 items-center">
                <v-avatar bordered variant="orange" content="al" mode="txt" size="lg" />
                <v-avatar bordered variant="orange" content="al" mode="txt" size="md" />
                <v-avatar bordered variant="orange" content="al" mode="txt" size="sm" />
            </div>
            <div class="flex flex-col gap-8 items-center">
                <v-avatar bordered rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="lg" />
                <v-avatar bordered rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="md" />
                <v-avatar bordered rounded variant="tertiary" content="https://cdn.discordapp.com/attachments/719621674965663817/983572069860130886/Image.png" mode="img" size="sm" />
            </div>
</v-row>
</template>
<template v-slot:source>

```html
<v-avatar bordered rounded size="lg" />
<v-avatar bordered rounded size="md" />
<v-avatar bordered rounded size="sm" />

<v-avatar bordered variant="orange" content="al" mode="txt" size="lg" />
<v-avatar bordered variant="orange" content="al" mode="txt" size="md" />
<v-avatar bordered variant="orange" content="al" mode="txt" size="sm" />

<v-avatar
  bordered
  rounded
  variant="tertiary"
  :content="imgSrc"
  mode="img"
  size="lg"
/>
<v-avatar
  bordered
  rounded
  variant="tertiary"
  :content="imgSrc"
  mode="img"
  size="md"
/>
<v-avatar
  bordered
  rounded
  variant="tertiary"
  :content="imgSrc"
  mode="img"
  size="sm"
/>
```

</template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description                          | Type    | Values                                                                                          | Default   |
| --------- | ------------------------------------ | ------- | ----------------------------------------------------------------------------------------------- | --------- |
| variant   | Avatar's color variant               | string  | `neutral`, `primary`, `secondary`, `tertiary`, `danger`, `warning`, `info`, `success`, `orange` | 'primary' |
| content   | Avatar's content for txt or img mode | string  | -                                                                                               |           |
| mode      | Avatar's mode                        | string  | `default`, `image`, `txt`, `outline`                                                            | 'default' |
| size      | Avatar's size                        | string  | `lg`, `md`, `sm`                                                                                | 'md'      |
| badge     | Avatar's badge position              | string  | `tl (top-left)`, `tr (top-right)`, `bl (bottom-left)`, `br( bottom-right)`                      | 'tr'      |
| rounded   | Avatar's rounded                     | boolean | -                                                                                               | false     |
| bordered  | Avatar's bordered                    | boolean | -                                                                                               | false     |

## Slots

| Name  | Description | Bindings |
| ----- | ----------- | -------- |
| badge | badge slot  |          |
