# RMS-Design

Source of truth for the UX/UI of the RLI-Management-System (RMS). Based on [Vite](https://vitejs.dev/).

## About

This repo is a collection of elements, components, pages and ideas on creating the UX/UI of the RMS (RLI-Management-System). It acts as a design contract between @bmlancien and @4lm. The RMS is programmed with the Python web framework called Django (and other libraries that create HTML on the backend) and, therefore, not accessible to frontend designers skilled in HTML, JavaScript, and CSS with knowledge in additional design tools like Figma, that's why this repo is needed. @bmlancien and @4lm will work together in this repo concerning UX/UI, and @4lm will then take the created outcomes and implement them into the RMS code base.

## Live Preview (branch `main`)

https://rms-design-8d69fd10.netlify.app

## Install (after doing `git clone`)

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

## Build Project (to `dist/` folder)

```bash
npm run build
```

Please note: to run the build step, usually is not needed. A developer develops by running `npm run dev`. After committing or merging your changes to the `main` branch, you find the build result [deployed on netlify](https://rms-design-8d69fd10-214d-46a8-a5cd-93888ceee417.netlify.app/) in under one minute processing time (as of writing 22s).

## Preview Project (in `dist/` folder)

```bash
npm run preview
```

## Design Philoshopy

This project is composed of a very small team, therefore the strategy is to base our design on existing design systems, but also to customize what needs to be customized in order to stand out as RLI-style. With this approach we want to create a minimal, flexible and living design system that will allow us to scale it up in the future for other projects if wanted. Minimal, because there is no need to spend months on creating something totally new, when there are already really good practices on other platforms that can be integrated into ours. Flexible, because we want to base our design choices on our existing RLI guidelines and web applications, as well as on external platforms. Living, because we don't think that anything is fixed in stone and that the design system will evolve with the RLI and its products.

Further links:

- [Bootstrap](https://getbootstrap.com/)
- [IBM Carbon Design System](https://www.carbondesignsystem.com/)
- [Material Design](https://material.io/)

## Used Technologies & Technology Philoshopy

The used technologies in this Git-repository (repo) differ from those in the RMS code base's repo because they cater to different use cases. But there is one combining technology that is the base of the frontend system and used in both repos: the CSS frontend framework [Bootstrap](https://getbootstrap.com/). Bootstrap will incrementally replace [Foundation](https://get.foundation/), the initially used CSS frontend framework in the RMS code base. This step was needed because Foundation - as we see it - is an abandoned project and should be considered EOL. Therefore we needed a CSS frontend framework that is likely to exist in 10 years because longevity is one of the requirements of the RMS. Bootstrap is by different measures the most used frontend CSS framework in the world and is likely to exist for the next 10+ years.

## Templating

This repo uses Vite, which is a new type of frontend build system which supports most modern JavaScript (JS) based frontend technologies like React, Vue, Typescript, JSX etc., out of the box. Vite can be extended via its plugin system to support further JS frontend technologies. The RMS is coded in Django and uses the [Django Template Language (DTL)](https://docs.djangoproject.com/en/dev/ref/templates/language/), which is implemented in Python. Therefore, it is not a JS frontend technology, and Vite can't utilize it. To mimic Django's template syntax, this Vite repo uses [vite-plugin-nunjucks](https://github.com/Jax-p/vite-plugin-nunjucks), which uses the JS template library [Nunjucks](https://github.com/mozilla/nunjucks) which is inspired by the Python based [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) templating language which again is inspired by the DTL and therefore has a very similar syntax. The resulting syntax similarity will help us develop components and pages that shall mimic its later use with the DTL.

For a quick usage introduction, please go to the [Vite Nunjucks plugin readme](https://github.com/Jax-p/vite-plugin-nunjucks) and take it from there.

## How to structure your HTML files and folders

In Vite with vanilla HTML/JS, you can name and structure your HTML pages two ways. This ways have in principle nothing to do with Vite, they are inherent to how HTML works in your browser.

### 1. Folder-based-naming with index.html files

```
ds/index.html
ds/design-system/index.html
ds/typography/index.html
```

Your navigation and `href` values should then be `/ds/`, `/ds/design-system/` and `/ds/design-system/` - every time you have `index.html` as a file name you can completely omit `index.html`.

### 2. File-based-naming with individually named html files

You can also name your HTML files diferently in the same, then you have to use the HTML file ending.

```
ds/index.html
ds/design-system.html
ds/typography.html
```

Your navigation and `href` values should then be `/ds/` (omitted, because `index.html`), `/ds/design-system.html` and `/ds/typography.html`

### Hints

- you can combine both techniques
- in `href` links I recommend to use absolute paths (relative to your root folder, in our case `src/`) with a leading slash "`/`". For example: `/ds/design-system/` for `src/ds/design-system/index.html`

## Resources

- [Design Systems 101](https://www.nngroup.com/articles/design-systems-101/)
