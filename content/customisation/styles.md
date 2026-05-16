---
title: Styles
date: 2026-01-16T08:00:00.000+0700
---

* [Update font or body classes](#update-font-or-body-classes)
* [Stylesheet Generation](#stylesheet-generation)
  * [Custom CSS](#custom-css)
  * [SASS/SCSS and other pre-processors](#sassscss-and-other-pre-processors)
  * [Built-in CSS order](#built-in-css-order)
  * [Social hover colours](#social-hover-colours)
  * [Output](#output)

## Update font or body classes

The theme is set, by default, to use a near-white background color and the "Avenir" or serif typeface. You can change these in your config file with the `body_classes` parameter, like this:

```toml
[params]
  body_classes = "avenir bg-near-white"
```

which will give you a body class like this:

```html
<body class="avenir bg-near-white">
```

note: The `body_classes` parameter will not change the font used in post content. To do this, you must use the `post_content_classes` parameter.

You can find a list of available typefaces [here](https://github.com/tachyons-css/tachyons/blob/v4.7.0/src/_font-family.css).

And a list of background colors [here](https://github.com/tachyons-css/tachyons/blob/v4.7.0/src/_skins.css#L96).

## Stylesheet Generation

Ananke stylesheet is built with Hugo Pipes's [Asset Bundling](https://gohugo.io/hugo-pipes/bundling/#readout) alone to maximize compatibility. The theme simply bundles its several files into one minified and fingerprinted (in production) CSS file.

Ananke uses [Tachyons.io](https://tachyons.io/) utility class library.

### Custom CSS

In order to complement the default CSS with your own, you can add custom css files to the project.

1. Just add a `assets/ananke/css` directory to your project and add the file(s) in it.
2. Register the files using the `ananke.custom_css` key in your site config's parameter section. The path referenced in the parameter should be relative to the `assets/ananke/css` folder.

The css files will be added in their registered order to final `main.css` file.

For example, if your css files are `assets/ananke/css/custom.css` and `assets/ananke/special.css` then add the following to the config file:

```toml
[params.ananke]
custom_css = [
  "custom.css",
  "special.css"
]
```

If the files registered through the `custom_css` setting are not found in `assets/ananke/css` the theme will expect them to live at the given path relative to the static directory and load them as `<link>` requests.

### SASS/SCSS and other pre-processors

Ananke itself is NOT processing any Sass/SCSS files. You can use any CSS preprocessor you like, as long as you place the output in `assets/ananke/css/` or load it as a separate partial in our pipeline.

If you are using SASS/SCSS then put something along the lines of this in a partial inside of `layouts/_partials/`:

```html
{{ $opts := dict "enableSourceMap" true }}
{{ return resources.Get "sass/main.scss" | css.Sass $opts }}
```

Make sure that the partial `return`s the processed CSS, NOT the source. Your original SASS file in the example above is located at `assets/sass/main.scss`. You also MUST install the Extended Hugo version and have the `sass` binary available in your system for this to work.

### Built-in CSS order

The bundle order is fixed:

```text
Tachyons CSS
Ananke Theme CSS
Generated Colors for Social Media Icons
custom CSS files from site.Params.ananke.custom_css
```

Later files can override earlier files through normal CSS cascade rules.

### Social hover colours

The generated social CSS is based on `site.Params.ananke.social`.

Example TOML:

```toml
[params.ananke.social.follow]
networks = ["github", "mastodon"]

[[params.ananke.social.networks]]
slug = "github"
color = "#333333"

[[params.ananke.social.networks]]
slug = "mastodon"
color = "#6364ff"
```

This generates rules like:

```css
.ananke-socials a.github:hover {
  color: #333333 !important;
}

.ananke-socials a.mastodon:hover {
  color: #6364ff !important;
}
```

Only networks listed in `params.ananke.social.follow.networks` are used.

### Output

The stylesheet is built with different options in development and production using Hugo's [css.Build](https://gohugo.io/functions/css/build/) method.

In development:

```toml
minify = false
sourceMap = "linked"
fingerprint = false

```

This keeps the generated CSS readable and adds a linked source map.

In production:

```toml
minify = true
sourceMap = "none"
fingerprint = true
```

This produces a minified, cache-busting stylesheet. The template also emits the integrity attribute when fingerprinting provides one.
