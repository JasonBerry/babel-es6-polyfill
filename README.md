# babel-es6-polyfill
A pure ES6 polyfill for [Babel](https://github.com/babel/babel) that only includes standardised features

## Why?
You may prefer to use this polyfill if:

* your browser-support baseline only includes modern browsers that implement ES5 completely, so you have no need for an ES5 polyfill
* you'd rather use only language features that are on the standards track (e.g. no window.setImmediate)
* you'd rather *not* use language features that are still in proposal state, and are quite likely to change

## Installation
```sh
$ npm install babel-es6-polyfill --save
```

## How to use the Polyfill
This polyfill is intended for browser usage only. The `browser-polyfill.js` provided by `babel-es6-polyfill` should be used instead of the `browser-polyfill.js` file you'd ordinarily use from `babel-core`. Usage details are the same as Babel's [Usage in Browser](https://babeljs.io/docs/usage/polyfill/#usage-in-browser) docs:
> This needs to be included **before** all your compiled Babel code. You can either prepend it to your compiled code or include it in a `<script>` before it.