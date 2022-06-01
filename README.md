# TSDX React w/ Storybook, TypeScript, TailwindCSS, HeadlessUI

This project is a practice and learning:

> How to initiate a project with Storybook and the above mentioned libraries

> How to write seperate components with documentation

This project was made by following along **Chris Scott's** [article](https://zach.codes/build-your-own-flexible-component-library-using-tsdx-typescript-tailwind-css-headless-ui/).

## Commands

TSDX scaffolds your new library inside `/src`, and also sets up a [Parcel-based](https://parceljs.org) playground for it inside `/example`.

The recommended workflow is to run TSDX in one terminal:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

Then run either Storybook or the example playground:

### Storybook

Run inside another terminal:

```bash
yarn storybook # or npm run storybook
```

This loads the stories from `./stories`.

> NOTE: Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory. This has been aliased in the tsconfig and the storybook webpack config as a helper.
