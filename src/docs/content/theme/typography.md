## Typography

Typography styles globally applied to following elements with no further configurations:

-   headings: `h1`, `h2`, `h3`, `h4`, `h5`,
-   paragraphs and caption: `p`, `span`
-   anchor links: `a`
-   other styles: `del`, `i`, `em`, `q`, `blockquote` `u`, `small`

### Headings - Body

We provide headings in 5 variants and body in 4 variants to be used in combination with native heading tags. variants in range of `title1` to `subheadline` are globally applied to `h1` to `h5` tags respectively. for the other variants `body(bold/small)`, you can manually add their class names to any elements (native are preferred) as well as other variants. check the class names in example below:

<example>
<template #preview>
	<h1>Earth is the third planet from the Sun (title1)</h1>
	<h2>Earth is the third planet from the Sun (title2)</h2>
	<h3>Earth is the third planet from the Sun (title3)</h3>
	<h4>Earth is the third planet from the Sun (headline)</h4>
	<h5>Earth is the third planet from the Sun (subheadline)</h5>
	<div class="body">Earth is the third planet from the Sun (body)</div>
	<div class="bodybold">Earth is the third planet from the Sun (bodybold)</div>
	<div class="bodysmall">Earth is the third planet from the Sun (bodysmall)</div>
	<div class="bodysmallbold">Earth is the third planet from the Sun (bodysmallbold)</div>
</template>
<template #source>

```html
<h1>Earth is the third planet from the Sun (title1)</h1>
<h2>Earth is the third planet from the Sun (title2)</h2>
<h3>Earth is the third planet from the Sun (title3)</h3>
<h4>Earth is the third planet from the Sun (headline)</h4>
<h5>Earth is the third planet from the Sun (subheadline)</h5>
<div class="body">Earth is the third planet from the Sun (body)</div>
<div class="bodybold">Earth is the third planet from the Sun (bodybold)</div>
<div class="bodysmall">Earth is the third planet from the Sun (bodysmall)</div>
<div class="bodysmallbold">Earth is the third planet from the Sun (bodysmallbold)</div>
<div class="bodysmallbold">Earth is the third planet from the Sun (bodysmallbold)</div>
```

</template>
</example>

### Captions and Paragraphs

<example>
<template #preview>
	<p>
		Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
		nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
	</p>
	<span class="caption">
		Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
		nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
	</span>
</template>
<template #source>

```html
<p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<span class="caption">
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</span>
```

</template>
</example>

### Anchor Links

<example>
<template #preview>
<ul>
	<li>
		<a href="https://vue-ui-light.com">vue-ui-light</a>
	</li>
	<li>
		<a href="https://google.com">Google</a>
	</li>
	<li>
		<a>Link without href</a>
	</li>
</ul>
</template>
<template #source>

```html
<ul>
    <li>
        <a href="https://vue-ui-light.com">vue-ui-light</a>
    </li>
    <li>
        <a href="https://google.com">Google</a>
    </li>
    <li>
        <a>Link without href</a>
    </li>
</ul>
```

</template>
</example>

### Other Styles

<example>
<template #preview>
<del>Strike-through</del>
<br/>
<i>Italic text</i>
<br/>
<em>Emphasized text</em>
<br/>
<q>Quoted text</q>
<br/>
<u>Underlined</u>
<br/>
<small>Footnote - Small text</small>
<br/>
</template>
<template #source>

```html
<del>Strike-through</del>
<i>Italic text</i>
<em>Emphasized text</em>
<q>Quoted text</q>
<u>Underlined</u>
<small>Footnote - Small text</small>
```

</template>
</example>

### Font

We didn't make any assumptions about your font-family, therefore you're free to use any font-family you want. We usually use `Nunito Sans` in our products. check it out [here](https://fonts.google.com/specimen/Nunito+Sans).
