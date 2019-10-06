# Stylex Colors

Versionable colors for your web app as dependency.

This package contains colors for stylex design system. It presented
as CSS, CommonJS, ESM, JSON and UMD. HSL model is used for color values due
to its human and computation friendliness.

## Usage

Browser:

```html
<link rel="stylesheet" href="https://unpkg.com/@stylex/colors@v1.1/colors.css" />
<style>
  html {
    background-color: var(--violet-90);
    color: var(--pink-40);
  }
</style>
```

JS:
```js
import {red, silver} from '@stylex/colors'

red[50] // -> [0, 80, 50]
silver[90] // -> [200, 5, 90]
```

## Import

NPM:
```bash
npm i @stylex/colors
```

Browser ESM:
```html
<script type="module" src="https://unpkg.com/@styles/colors@v1.1/colors.js"></script>
```

Browser UMD:
```html
<script src="https://unpkg.com/@styles/colors@v1.1/colors.umd.js"></script>
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
