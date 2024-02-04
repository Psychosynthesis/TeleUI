"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./style.scss");
var Loader = function () {
    return ((0, jsx_runtime_1.jsx)("div", { className: "spinner-container", children: (0, jsx_runtime_1.jsx)("div", { className: "spinner" }) }));
};
exports.Loader = Loader;
