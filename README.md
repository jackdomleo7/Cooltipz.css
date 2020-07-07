
![Cooltipz.css](./logo.png "Cooltipz.css logo")

<a href="https://www.buymeacoffee.com/jackdomleo7" target="_blank" title="Buy Me A Coffee"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"></a>

![Maintenance](https://img.shields.io/maintenance/yes/2020 "This library is actively being maintained") [![MIT License](https://img.shields.io/badge/License-MIT-important)](https://github.com/JDomleo/Cooltipz.css#license "Read license") [![Brotli size](https://badgen.net/badgesize/brotli/JDomleo/Cooltipz.css/master/cooltipz.min.css)](https://github.com/JDomleo/Cooltipz.css/blob/master/cooltipz.min.css "File size - Brotli")

[![GitHub stars](https://img.shields.io/github/stars/JDomleo/Cooltipz.css?style=social)](https://github.com/JDomleo/Cooltipz.css/stargazers "Total GitHub stars") [![GitHub release (latest by date)](https://img.shields.io/github/v/release/JDomleo/Cooltipz.css?style=social)](https://github.com/JDomleo/Cooltipz.css/releases "Current version/release") [![npm](https://img.shields.io/npm/dt/cooltipz-css?logo=npm&style=social)](https://www.npmjs.com/package/cooltipz-css "Total npm downloads") ![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hm/cooltipz-css?label=JsDelivr&logo=jsdelivr&style=social "Monthly JsDelivr CDN hits")

---

# Cooltipz.css - Cool tooltips

**Cool customisable tooltips made from pure CSS**

_Lightweight &bull; Modern &bull; Accessible &bull; Customisable &bull; Simple_

Cooltipz.css is a pure CSS tooltip library that is lightweight, modern, accessible, customisable and easy to use.

[Read the docs here - cooltipz.jackdomleo.dev](https://cooltipz.jackdomleo.dev)

Play with Cooltipz.css on [CodePen](https://codepen.io/JackDomleo/pen/mderEeG).

**Features**
- Easy and simple tooltips with **quick setup**
- Pure CSS, no JavaScript
- Highly customisable
- Accessible with aria-label attributes
- Automatically disables animation if the user [prefers reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion?ref=cooltipz.jackdomleo.dev)
- Options to use classes or `data-` attributes
- Options to import via CDN, npm or yarn
- Options to import SCSS <sub><sup>(npm &amp; yarn only)</sup></sub> or CSS stylesheets <sub><sup>(expanded or minified)</sup></sub>
- Supports a wide range of characters and languages (including emojis, [Font Awesome 4](https://fontawesome.com/v4.7.0?ref=cooltipz.jackdomleo.dev) and [Font Awesome 5](https://fontawesome.com?ref=cooltipz.jackdomleo.dev) icons)
- Uses [Autoprefixer](https://github.com/postcss/autoprefixer?ref=cooltipz.jackdomleo.dev) when generating the CSS stylesheets and [cssnano](https://github.com/cssnano/cssnano?ref=cooltipz.jackdomleo.dev) to minify the minfied stylesheet

---

## Examples

![Cooltipz.css examples](./examples.gif)

---

## Usage

### CDN

In the below CDN links:
- Replace `:version` with a version [listed here](https://www.npmjs.com/package/cooltipz-css?activeTab=versions) (latest version is always recommended). If you always want to get the latest stylesheet, remove `@:version` completely (Not recommended).
- Replace `:file` with one of the below:
  - `cooltipz.css` <sub><sup>(Expanded stylesheet)</sup></sub>
  - `cooltipz.min.css` <sub><sup>(Minfied stylesheet)</sup></sub>

```html
<!-- HTML -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cooltipz-css@:version/:file" />
```

```css
/* Or CSS */
@import url('https://cdn.jsdelivr.net/npm/cooltipz-css@:version/:file');
```

### Package manager (npm or yarn)

It's best practice to install Cooltipz.css as a dependency rather than a devDependency. You can install `cooltipz-css` via **npm** or **yarn**.

_First_ install via **npm**
```
npm install cooltipz-css --save
```

_Or_ install via **yarn**
```
yarn add cooltipz-css
```

_Then_ import into your JavaScript
```js
import 'cooltipz-css';
```

_Or_ import the SCSS or CSS into your Sass/SCSS
In the below imports, replace `:file` with one of the options below:
- `src/cooltipz` <sub><sup>(.scss file)</sup></sub>
- `cooltipz.css` <sub><sup>(Expanded .css)</sup></sub>
- `cooltipz.min.css` <sub><sup>(Minified .css)</sup></sub>
```scss
/* Webpack */
@import '~cooltipz-css/:file';

/* Non-webpack */
@import 'path/to/node_modules/cooltipz-css/:file';
```

---

## License

Type - **MIT**

[Read license](https://github.com/JDomleo/Cooltipz.css/blob/master/LICENSE)

You have the right to use this library in any project FREE of charge for personal and commercial use.

Commercial use should consider a small donation on [Buy Me a Coffee](https://www.buymeacoffee.com/jackdomleo7).

You **do not** have the right to resell, sublicense or redistribute (even for free) this library.

Cooltipz.css is licensed under MIT. As a minimum, you are required to KEEP AND NOT REMOVE the following code at the beginning of your downloaded/installed Cooltipz.css CSS, where `:version` is replaced with the version number you are using:
```css
/*! Cooltipz.css v:version | MIT License | github.com/JDomleo/Cooltipz.css */
```

---

## Feedback and support

We appreciate any feedback, good or bad and are always looking for new ideas to improve the user experience (UX), developer experience (DX) and accessibility of the tooltips. You may want to consider:
- Raising a [GitHub issue](https://github.com/JDomleo/Cooltipz.css/issues)
- Contacting the [author](https://jackdomleo.dev?ref=cooltipz.jackdomleo.dev) directly
- Starring the [GitHub repository](https://github.com/JDomleo/Cooltipz.css)
- Giving the [CodePen](https://codepen.io/JackDomleo/pen/mderEeG) a like
- Mentioning 'Cooltipz.css' in a README or footer
- Supporting Cooltipz.css on [Buy Me a Coffee](https://www.buymeacoffee.com/jackdomleo)
- Share on social media with the hashtag <em>#cooltipzcss</em>

---

## Special thanks

[Autoprefixer](https://github.com/postcss/autoprefixer?ref=cooltipz.jackdomleo.dev "Applying vendor prefixes to the distributed CSS") &bull; [cssnano](https://cssnano.co?ref=cooltipz.jackdomleo.dev "Minifies the minified stylesheet even further") &bull; [node-sass](https://github.com/sass/node-sas?ref=cooltipz.jackdomleo.dev "Compiling source SCSS to CSS") &bull; [postcss-cli](https://github.com/postcss/postcss-cli?ref=cooltipz.jackdomleo.dev "CLI for applying postcss plugins - Autoprefixer, cssnano") &bull; [Stylelint](https://stylelint.io?ref=cooltipz.jackdomleo.dev "Linter for styles") &bull; [stylelint-scss](https://github.com/kristerkari/stylelint-scss?ref=cooltipz.jackdomleo.dev "Plugin for Stylelint specificaly for SCSS") &bull; [stylelint-order](https://github.com/hudochenkov/stylelint-order?ref=cooltipz.jackdomleo.dev "Plugin for Stylelint for ordering CSS properties") &bull; [shields.io](https://shields.io?ref=cooltipz.jackdomleo.dev "Provides the ability to add badges to markdown and HTML") &bull; [GitHub](https://github.com?ref=cooltipz.jackdomleo.dev "Ability for a remote repo") &bull; [npm](https://www.npmjs.com?ref=cooltipz.jackdomleo.dev "npm package") &bull; [jsDelivr](https://www.jsdelivr.com?ref=cooltipz.jackdomleo.dev "CDN for linking to an external stylesheet")

---

## Contributors

[![Jack Domleo](https://contributors-img.web.app/image?repo=JDomleo/Cooltipz.css "Jack Domleo")](https://github.com/JDomleo/Cooltipz.css/graphs/contributors)

---

## Development

### Setup

- `git clone https://github.com/JDomleo/Cooltipz.css.git`
- `cd Cooltipz.css`
- `npm i`
- `npm run build` to compile development SCSS to CSS

### Branch

All branches should be prefixed with `master__`

---

[GitHub](https://github.com/JDomleo/Cooltipz.css "View the GitHub repo and maybe give us a star") &bull; [npm](https://www.npmjs.com/package/cooltipz-css "View Cooltipz.css on npmjs.com") &bull; [yarn](https://yarnpkg.com/package/cooltipz-css "View Cooltipz.css on yarnpkg.com") &bull; [docs](https://cooltipz.jackdomleo.dev "Read the official documentation") &bull; [CHANGELOG](https://github.com/JDomleo/Cooltipz.css/releases "Read all the releases") &bull; [License](https://github.com/JDomleo/Cooltipz.css#license "MIT License")