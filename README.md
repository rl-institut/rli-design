# rms-design
Source of truth for the UI components and pages of the RLI-Management-System (RMS)

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

## Build CSS form SCSS
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
