# common-components
  ✋🏼 Welcome to common UI library demo. Below is steps to demo the project fast 🎉 <br>
  🥺 npm user please replace yarn with npm.
  ```
  1. yarn install
  2. yarn prod
  3. yarn storybook-build (to build storybook as a as a static web application)
  4. yarn serve (to watch components in application)
  5. yarn open-storybook (to watch storybook in application)
  ```
if you are developing this project:
  ```
  1. yarn install
  2. yarn serve
  3. yarn storybook
  ```

### CSS Naming: BEM

```
block-block__element-element--modifier--modifier-value
// use double underline to seperate block and element.
// if block include many words, use one dash to seperate
```
example:
```
XYButton--size-s
XYAlert--type-info
XYAlert--type-error
xy-dropdown-menu__item--active(modifier is boolean, so simplify the value part)
xy-table-pagination__item--active
```


### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn prod
```

### Lints and fixes files
```
yarn lint
```

### Compiles and hot-reloads for Storybook
```
yarn storybook
```

### Build Storybook as a static web application
```
yarn storybook-build
```

### Open Storybook web application
```
yarn open-storybook
```
