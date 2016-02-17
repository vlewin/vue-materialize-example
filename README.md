# Vue + Materialize CSS (sass) application example

## Components

- Webpack
- Materialize CSS (sass)
- ESLint
- JSCS
- Auth0
- vue-loader
- vue-router

## Next

- vue-validator: https://github.com/vuejs/vue-validator
- vue-async-data: https://github.com/vuejs/vue-async-data
- vuex: https://github.com/vuejs/vuex

## Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm test
```

## Known issues
1) Exception: „Uncaught TypeError: Cannot read property 'opener' of null“ after auth dialog popup
https://github.com/jquery/jquery/issues/2866

Workaround: http://cssdeck.com/labs/another-simple-css3-dropdown-menu-materialized


2) JQuery plugins doesn't work after component update
Workaround/Solution: http://stackoverflow.com/questions/35234754/vue-js-jquery-ui-draggable/35347164
Workaround/Solution: http://forum.vuejs.org/topic/544/using-jquery-plugins-on-dynamically-loaded-vue-component-content/2
