"use strict";

if (global._babelPolyfill) {
    throw new Error("only one instance of babel/polyfill is allowed");
}
global._babelPolyfill = true;

require("./es6-shim");
require("./Promise.prototype.finally.js");
require("regenerator-babel/runtime");