"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var vanicom_1 = require("vanicom");
var clsx_1 = __importDefault(require("clsx"));
require("./style.scss");
var Checkbox = function (_a) {
    var _b;
    var text = _a.text, className = _a.className, checked = _a.checked, valueSetter = _a.valueSetter, rounded = _a.rounded;
    var checkboxRef = (0, react_1.useRef)(null);
    var idForLabel = (0, vanicom_1.getRandomString)(6);
    var onChangeHandler = function () {
        // @ts-ignore
        valueSetter(checkboxRef.current.checked);
    };
    var containerClass = (0, clsx_1.default)((_b = { 'custom-checkbox-container': true, 'no-text': !text }, _b[className] = className, _b['rounded'] = rounded, _b));
    return ((0, jsx_runtime_1.jsxs)("div", { className: containerClass, children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", className: "custom-checkbox", id: idForLabel, onChange: onChangeHandler, ref: checkboxRef, checked: checked }), (0, jsx_runtime_1.jsx)("label", { htmlFor: idForLabel, children: text })] }));
};
exports.Checkbox = Checkbox;
