"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var react_1 = require("react");
require("./style.scss");
var SimpleInput = function (_a) {
    var _b;
    var className = _a.className, value = _a.value, valueSetter = _a.valueSetter, type = _a.type, placeholder = _a.placeholder, label = _a.label, inputStyle = _a.inputStyle, max = _a.max, borderColor = _a.borderColor;
    var _c = (0, react_1.useState)(false), inputError = _c[0], setError = _c[1];
    var _d = (0, react_1.useState)(false), isFocused = _d[0], setFocus = _d[1];
    var isNumericInput = type === "number";
    var handleChange = function (eve) {
        var rawValue = eve.currentTarget.value;
        var newValue;
        if (isNumericInput) {
            newValue = parseInt(rawValue, 10);
            if (!newValue)
                return;
            if (max && (newValue > max)) {
                newValue = max;
                setError(true);
            }
        }
        else {
            newValue = String(eve.currentTarget.value);
        }
        valueSetter(newValue);
    };
    var handleFocus = function () { return setFocus(true); };
    var handleFocusOff = function () { return setFocus(false); };
    var mainClass = (0, clsx_1.default)((_b = { 'simple-input-container': true }, _b[className] = className, _b['unacceptable'] = inputError, _b));
    var inputStylesCasted = __assign({}, inputStyle);
    if (inputError && inputStylesCasted.color)
        delete inputStylesCasted.color;
    return ((0, jsx_runtime_1.jsxs)("div", { className: mainClass, children: [(0, jsx_runtime_1.jsxs)("div", { className: "simple-input-main-row", children: [label && (0, jsx_runtime_1.jsx)("div", { className: "simple-input-label", children: label }), (0, jsx_runtime_1.jsx)("input", { value: value !== null && value !== void 0 ? value : '', onChange: handleChange, type: type, placeholder: placeholder, style: inputStylesCasted, inputMode: isNumericInput ? 'decimal' : undefined, onFocus: handleFocus, onBlur: handleFocusOff })] }), (0, jsx_runtime_1.jsx)("div", { className: "simple-input-underline", style: { borderColor: isFocused && borderColor ? borderColor : undefined } })] }));
};
exports.SimpleInput = SimpleInput;
