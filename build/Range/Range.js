"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Range = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var clsx_1 = __importDefault(require("clsx"));
require("./style.scss");
var Range = function (_a) {
    var _b;
    var className = _a.className, step = _a.step, lineColor = _a.lineColor, value = _a.value, valueSetter = _a.valueSetter, min = _a.min, max = _a.max;
    var inputRef = (0, react_1.useRef)(null);
    var mainClass = (0, clsx_1.default)((_b = { 'range-slider': true }, _b[className] = className, _b));
    var handeChange = function () {
        var refBlock = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current;
        var newVal = parseFloat(refBlock.value);
        valueSetter(newVal);
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: mainClass, children: (0, jsx_runtime_1.jsx)("input", { type: "range", step: step, style: { backgroundColor: lineColor }, value: value, ref: inputRef, onChange: handeChange, min: min, max: max }) }));
};
exports.Range = Range;
