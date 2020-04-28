![Cooltipz.css](./logo.png "Cooltipz.css logo")

---

# Cooltipz.css - Cool tooltips

**Cool tooltips made from simple, pure, customisable CSS**

**Current version** - [v1.4.2](https://github.com/JDomleo/Cooltipz.css/releases/tag/v1.4.2)

[Read the docs here](https://cooltipz.jackdomleo.dev)

Play with Cooltipz.css on [CodePen](https://codepen.io/JackDomleo/pen/mderEeG?ref=cooltipz.min.css).

**Features**
- Easy, simple, customisable tooltips with **quick setup**
- Pure CSS, no JavaScript
- Accessible with aria-label attributes
- Automatically disables animation if the user [prefers reduced motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion?ref=cooltipz.min.css)
- Options to use classes or `data-` attributes
- Options to import via CDN or npm
- Options to import SCSS <sub><sup>(npm only)</sup></sub> or CSS stylesheets <sub><sup>(expanded or minified)</sup></sub>
- Uses [Autoprefixer](https://github.com/postcss/autoprefixer?ref=cooltipz.min.css) when generating the CSS stylesheets and [cssnano](https://github.com/cssnano/cssnano?ref=cooltipz.min.css) to minify the minfied stylesheet

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
[Read license](./LICENSE)

You have the right to use this library in any project free of charge. You **do not** have the right to resell, sublicense or redistribute (even for free) this library. All use of the library must credit the author, this includes keeping `/*! Cooltipz.css version | MIT License | github.com/JDomleo/Cooltipz.css */` at the beginning of the SCSS and CSS stylesheets where `version` is replaced with the version of Cooltipz.css you are using.

---

We appreciate any feedback (feel free to raise an [issue](https://github.com/JDomleo/Cooltipz.css/issues?ref=cooltipz.jackdomleo.dev) and we'll address it as soon as possible) and any **stars on [GitHub](https://github.com/JDomleo/Cooltipz.css?ref=cooltipz.min.css)** or **shares** (be sure to use the hashtags `#cooltipz #cooltipzcss`) of our library are always appreciated and gives us confidence in our library.

---

## Contributors

<a href="https://github.com/JDomleo/Cooltipz.css/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=JDomleo/Cooltipz.css" alt="Jack Domleo" title="Jack Domleo" />
</a>

---

[npm](https://www.npmjs.com/package/cooltipz-css?ref=cooltipz.min.css) &bull; [GitHub](https://github.com/JDomleo/Cooltipz.css?ref=cooltipz.min.css) &bull; [docs](https://cooltipz.jackdomleo.dev) &bull; [CHANGELOG](https://github.com/JDomleo/Cooltipz.css/releases?ref=cooltipz.min.css)