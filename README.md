![Cooltipz.css](./logo.png "Cooltipz.css logo")

[![GitHub release](https://badgen.net/github/release/JDomleo/Cooltipz.css?icon=github)](https://github.com/JDomleo/Cooltipz.css) [![npm version](https://badgen.net/npm/v/cooltipz-css?icon=npm)](https://www.npmjs.com/package/cooltipz-css) [![jsDelivr CDN hits](https://badgen.net/jsdelivr/hits/npm/cooltipz-css)](https://github.com/JDomleo/Cooltipz.css#cdn) [![MIT license](https://badgen.net/badge/license/MIT/blue?icon=awesome)](https://github.com/JDomleo/Cooltipz.css#license)
[![GitHub stars](https://badgen.net/github/stars/JDomleo/Cooltipz.css?icon=github)](https://github.com/JDomleo/Cooltipz.css/stargazers) [![npm downloads](https://badgen.net/npm/dt/cooltipz-css?icon=npm)](https://www.npmjs.com/package/cooltipz-css?ref=cooltipz.jackdomleo.dev)

---

# Cooltipz.css - Cool tooltips

**Cool tooltips made from simple, pure, customisable CSS**

_Lightweight &bull; Modern &bull; Accessible &bull; Customisable &bull; Simple_

A pure CSS tooltip library that is lightweight, modern, accessible, customisable and easy to use.

[Read the docs here](https://cooltipz.jackdomleo.dev)

Play with Cooltipz.css on [CodePen](https://codepen.io/JackDomleo/pen/mderEeG?ref=cooltipz.jackdomleo.dev).

**Features**
- Easy, simple, customisable tooltips with **quick setup**
- Pure CSS, no JavaScript
- Accessible with aria-label attributes
- Automatically disables animation if the user [prefers reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion?ref=cooltipz.jackdomleo.dev)
- Options to use classes or `data-` attributes
- Options to import via CDN or npm
- Options to import SCSS <sub><sup>(npm only)</sup></sub> or CSS stylesheets <sub><sup>(expanded or minified)</sup></sub>
- Uses [Autoprefixer](https://github.com/postcss/autoprefixer?ref=cooltipz.jackdomleo.dev) when generating the CSS stylesheets and [cssnano](https://github.com/cssnano/cssnano?ref=cooltipz.jackdomleo.dev) to minify the minfied stylesheet

---

## Examples

![Cooltipz.css examples](./examples.gif)

---

## Installation

### CDN

In the below CDN links:
- Replace `version` after the `@` with a version [listed here](https://www.npmjs.com/package/cooltipz-css?activeTab=versions) (latest version is always recommended). If you always want to get the latest stylesheet, remove `@version` completely (Not recommended).
- Replace `file` with one of the below:
  - `cooltipz.css` <sub><sup>(Expanded stylesheet)</sup></sub>
  - `cooltipz.min.css` <sub><sup>(Minfied stylesheet)</sup></sub>

```html
<!-- HTML -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cooltipz-css@version/file" />
```

```css
/* Or CSS */
@import url('https://cdn.jsdelivr.net/npm/cooltipz-css@version/file');
```

### npm

Install via npm <sub><sup>(It's best practice to install Cooltipz.css as a dependency rather than a devDependency)</sup></sub>
```
npm install cooltipz-css --save
```

Then import into your JavaScript
```js
import 'cooltipz-css';
```

Or import the SCSS or CSS into your Sass/SCSS
In the below imports, replace `file` with one of the options below:
- `src/cooltipz` <sub><sup>(.scss file)</sup></sub>
- `cooltipz.css` <sub><sup>(Expanded .css)</sup></sub>
- `cooltipz.min.css` <sub><sup>(Minified .css)</sup></sub>
```scss
/* Webpack */
@import '~cooltipz-css/file';

/* Non-webpack */
@import 'path/to/node_modules/cooltipz-css/file';
```

---

## License

Type - **MIT**

[Read license](https://github.com/JDomleo/Cooltipz.css/blob/master/LICENSE)

You have the right to use this library in any project free of charge. You **do not** have the right to resell, sublicense or redistribute (even for free) this library. All use of the library must credit the author, this includes keeping `/*! Cooltipz.css version | MIT License | github.com/JDomleo/Cooltipz.css */` at the beginning of the SCSS and CSS stylesheets where `version` is replaced with the version of Cooltipz.css you are using.

---

##Feedback & Support

We appreciate any **feedback** (feel free to raise an [issue](https://github.com/JDomleo/Cooltipz.css/issues?ref=cooltipz.jackdomleo.dev) and we'll address it as soon as possible).
**Stars on [GitHub](https://github.com/JDomleo/Cooltipz.css?ref=cooltipz.jackdomleo.dev)** are a great way to support us.
If you liked this library, **share** Cooltipz.css on social media with the [#cooltipzcss](https://twitter.com/search?q=cooltipzcss%20OR%20cooltipz.css "View #cooltipzcss on Twitter") hastag.
If you use Cooltipz.css in your project, maybe consider **mentioning us** like we have in our [Special Thanks](#special-thanks) section.

---

## Special Thanks

[Autoprefixer](https://github.com/postcss/autoprefixer?ref=cooltipz.jackdomleo.dev "Applying vendor prefixes to the distributed CSS") &bull; [cssnano](https://cssnano.co?ref=cooltipz.jackdomleo.dev "Minifies the minified stylesheet even further") &bull; [node-sass](https://github.com/sass/node-sas?ref=cooltipz.jackdomleo.dev "Compiling source SCSS to CSS") &bull; [postcss-cli](https://github.com/postcss/postcss-cli?ref=cooltipz.jackdomleo.dev "CLI for applying postcss plugins - Autoprefixer, cssnano") &bull; [Stylelint](https://stylelint.io?ref=cooltipz.jackdomleo.dev "Linter for styles") &bull; [stylelint-scss](https://github.com/kristerkari/stylelint-scss?ref=cooltipz.jackdomleo.dev "Plugin for Stylelint specificaly for SCSS") &bull; [stylelint-order](https://github.com/hudochenkov/stylelint-order?ref=cooltipz.jackdomleo.dev "Plugin for Stylelint for ordering CSS properties") &bull; [badgen](https://badgen.net?ref=cooltipz.jackdomleo.dev "Provides the ability to add badges to the markdown") &bull; [GitHub](https://github.com?ref=cooltipz.jackdomleo.dev "Ability for a remote repo") &bull; [npm](https://www.npmjs.com?ref=cooltipz.jackdomleo.dev "npm package") &bull; [jsDelivr](https://www.jsdelivr.com?ref=cooltipz.jackdomleo.dev "CDN for linking to an external stylesheet")

---

## Contributors

<a href="https://github.com/JDomleo/Cooltipz.css/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=JDomleo/Cooltipz.css" alt="Jack Domleo" title="Jack Domleo" />
</a>

---

[npm](https://www.npmjs.com/package/cooltipz-css?ref=cooltipz.jackdomleo.dev) &bull; [GitHub](https://github.com/JDomleo/Cooltipz.css?ref=cooltipz.jackdomleo.dev) &bull; [docs](https://cooltipz.jackdomleo.dev) &bull; [CHANGELOG](https://github.com/JDomleo/Cooltipz.css/releases?ref=cooltipz.jackdomleo.dev) &bull; [License](https://github.com/JDomleo/Cooltipz.css/blob/master/LICENSE)