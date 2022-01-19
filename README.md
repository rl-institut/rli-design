# RMS-Design

Source of truth for the UX/UI of the RLI-Management-System (RMS). Based on [Vite](https://vitejs.dev/).

## Live preview (branch `main`)

https://rms-design-8d69fd10-214d-46a8-a5cd-93888ceee417.netlify.app/

## Install (after doing `git clone`)

```bash
npm install
```

## Project structure

```bash
src/
├── favicon.svg
├── index.html
├── index.js
├── nested
│   ├── index.html
│   └── index.js
└── static
    ├── css
    │   ├── carbon.css
    │   └── carbon.css.map
    ├── js
    │   └── carbon.js
    └── scss
        └── carbon.scss
```

## Run development server

```bash
npm run dev
```

## Build CSS from SCSS

```bash
npm run sass
```

Please note: the used SCSS files are hefty. Although Vite auto builds CSS from SCSS files, this takes a long time. Therefore the SCSS to CSS build step was factored out (by linking to a bundled CSS file) as a separate step with (Dart Sass), which is much faster, but still takes a few seconds. Vite also claims that using Sass/SCSS/Less is a somehow outdated approach and that ["it is recommended to use native CSS variables with PostCSS"](https://vitejs.dev/guide/features.html#css).

## Build CSS from SCSS with watch mode

```bash
npm run sass-watch
```

## Build project to `dist/` folder

```bash
npm run build
```

Please note: to run the build step, usually is not needed. A developer develops by running `npm run dev` and `npm run sass` (or `npm run sass-watch`). After committing or merging your changes to the `main` branch, you find the build result [deployed on netlify](https://rms-design-8d69fd10-214d-46a8-a5cd-93888ceee417.netlify.app/) in under one minute processing time (as of writing 22s).

## Preview project in `dist/` folder

```bash
npm run preview
```

## Templating 

This repo uses Vite, which is a new type of frontend build system which supports most modern JavaScript (JS) based frontend technologies like React, Vue, Typescript, JSX etc., out of the box. Vite can be extended via its plugin system to support further JS frontend technologies. The RMS is coded in Django and uses the [Django Template Language (DTL)](https://docs.djangoproject.com/en/dev/ref/templates/language/), which is implemented in Python. Therefore, it is not a JS frontend technology, and Vite can't utilize it. To mimic Django's template syntax, this Vite repo uses [vite-plugin-nunjucks](https://github.com/Jax-p/vite-plugin-nunjucks), which uses the JS template library [Nunjucks](https://github.com/mozilla/nunjucks) which is inspired by the Python based [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) templating language which again is inspired by the DTL and therefore has a very similar syntax. The resulting syntax similarity will help us develop components and pages that shall mimic its later use with the DTL.

For a quick usage introduction, please go to the [Vite Nunjucks plugin readme](https://github.com/Jax-p/vite-plugin-nunjucks) and take it from there.

## Resources

- [Awesome Design Systems](https://github.com/alexpate/awesome-design-systems) - a collection of awesome design systems
- [Carbon Design System](https://www.carbondesignsystem.com/) - an example of an well designed design system
- [makeup-js](https://github.com/makeup/makeup-js) - a suite of vanilla JavaScript modules for building accessible user interfaces
- [ROCA: Resource-oriented Client Architecture](https://github.com/innoq/ROCA) - a collection of simple best practices for decent Web applications
