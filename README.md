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
```

Please note: the used SCSS files are hefty. Although Vite auto builds CSS from SCSS files, this takes a long time. Therefore the SCSS to CSS build step was factored out (by linking to a bundled CSS file) as a separate step with (Dart Sass), which is much faster, but still takes a few seconds. Vite also claims that using Sass/SCSS/less is a somehow outdated approach and that ["it is recommended to use native CSS variables with PostCSS"](https://vitejs.dev/guide/features.html#css).

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
