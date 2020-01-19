# Stylex Colors

Versionable colors for your web app as dependency.

This package contains colors for stylex design system. It presented
as CSS, ESM, JSON and UMD. HSL model is used for color values due
to its human and computation friendliness.


## Install

```bash
npm i @stylex/colors
```

## Usage

CSS:

```html
<link rel="stylesheet" href="https://unpkg.com/@stylex/colors@v1.3/colors.css" />
<style>
  html {
    background-color: var(--violet-90);
    color: var(--pink-40);
  }
</style>
```

### JS

Node.JS:
```js
import {red, silver} from '@stylex/colors'

red[50] // -> [0, 80, 50]
silver[90] // -> [200, 5, 90]
```

Browser ESM:
```html
<script type="module">
import {red, green, blue} from 'https://unpkg.com/@styles/colors@v1.3/colors.js'
</script>
```

Browser UMD:
```html
<script src="https://unpkg.com/@styles/colors@v1.3/colors.umd.js"></script>
```

## Colors

Each color has shades from 5 to 95. Each shade presented as index of lightness.
CSS names format is `--${COLOR}-${SHADE}`.

Colors:
* red
* orange
* yellow
* green
* teal
* blue
* violet
* purple
* pink
* silver
* gray
* rusty

## License

MIT © [Rumkin](https://rumk.in)
