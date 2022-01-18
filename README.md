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
npm run build-sass
```

## Build project to `dist/` folder
```bash
npm run build
```

## Preview project in `dist/` folder
```bash
npm run preview
```
