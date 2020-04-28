![Cooltipz.css](./logo.png "Cooltipz.css logo")

---

# Cooltipz.css - Cool tooltips

**Cool tooltips made from simple, pure CSS**

**Current version** - [v1.4.1](https://github.com/JDomleo/Cooltipz.css/releases/tag/v1.4.1)

[Read the docs here](https://cooltipz.jackdomleo.dev)

Have a play with Cooltipz.css in [CodePen](https://codepen.io/JackDomleo/pen/mderEeG).

**Features**
- Easy and simple
- Pure CSS, no JavaScript
- Accessible with aria-label attributes
- Options to use classes or `data-` attributes
- Disables animation if user's preference are set to reduced motion - [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- Uses [Autoprefixer](https://github.com/postcss/autoprefixer) when generating the distributed CSS
- Import expanded CSS, minified CSS or the the raw Sass/SCSS

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

## Contributors

<a href="https://github.com/JDomleo/Cooltipz.css/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=JDomleo/Cooltipz.css" alt="Jack Domleo" title="Jack Domleo" />
</a>

---

[npm](https://www.npmjs.com/package/cooltipz-css) &bull; [GitHub](https://github.com/JDomleo/Cooltipz.css) &bull; [docs](https://cooltipz.jackdomleo.dev) &bull; [CHANGELOG](https://github.com/JDomleo/Cooltipz.css/releases)