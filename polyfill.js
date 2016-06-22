"use strict";

if (global._babelPolyfill) {
    throw new Error("only one instance of babel/polyfill is allowed");
}
global._babelPolyfill = true;

require('core-js/es6');
require("./Promise.prototype.finally.js");
require("regenerator-babel/runtime");
