# Cooltipz.css gh-pages

https://cooltipz.jackdomleo.dev

![Website status](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Fcooltipz.jackdomleo.dev "Website status")

---

## Setup

- `git clone https://github.com/JDomleo/Cooltipz.css.git`
- `git checkout gh-pages`
- `npm i`
- `npm run serve`
- Navigate to http://localhost:1234

---

## Generating production ready documentation

The live docs will automatically update when a push is made to `gh-pages`.
Run `npm run docs` to generate the production ready CSS and sitemap.xml

---

## Updating dependencies

- `npm update`
- `npm outdated`

To update to a new major version of a dependency:
- Research breaking changes
- Manually update in _package.json_
- `npm i`
- `npm update`
- `npm outdated`