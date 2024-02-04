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
exports.AmountInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var react_1 = require("react");
var vanicom_1 = require("vanicom");
require("./style.scss");
var AmountInput = function (_a) {
    var _b;
    var className = _a.className, value = _a.value, valueSetter = _a.valueSetter, placeholder = _a.placeholder, label = _a.label, inputStyle = _a.inputStyle, units = _a.units, max = _a.max;
    var _c = (0, react_1.useState)(false), inputError = _c[0], setError = _c[1];
    var inputRef = (0, react_1.useRef)(null);
    var haveMax = typeof max !== 'undefined';
    var errorCheck = function (value) {
        if (haveMax && (value > max)) {
            setError(true);
        }
        else {
            setError(false);
        }
    };
    var handleChange = function () {
        if (!inputRef.current)
            return;
        var rawValue = inputRef.current.value; // string.replace(/^0+/, '');
        var newValue;
        newValue = parseFloat(rawValue);
        if (isNaN(newValue)) {
            newValue = 0;
        }
        else if (max && (newValue > max)) {
            newValue = max;
            setError(true);
        }
        valueSetter(newValue);
        inputRef.current.value = String(newValue);
    };
    var mainClass = (0, clsx_1.default)((_b = { 'amount-input-container': true }, _b[className] = className, _b['unacceptable'] = inputError, _b));
    var newWidth = (0, vanicom_1.isExistAndNotNull)(value) ? ((String(value).length * 19) + 2 + 'px') : '25px';
    var inputStylesCasted = __assign(__assign({}, inputStyle), { width: newWidth });
    if (inputError && inputStylesCasted.color)
        delete inputStylesCasted.color;
    (0, react_1.useEffect)(function () {
        if (inputRef.current) {
            haveMax && errorCheck(value);
            inputRef.current.value = String(value);
        }
    }, [value, max, inputRef.current]);
    return ((0, jsx_runtime_1.jsx)("div", { className: mainClass, children: (0, jsx_runtime_1.jsxs)("div", { className: "amount-input-main-row", children: [label && (0, jsx_runtime_1.jsx)("div", { className: "amount-input-label", children: label }), (0, jsx_runtime_1.jsx)("input", { onChange: handleChange, type: 'number', placeholder: placeholder, style: inputStylesCasted, inputMode: 'decimal', ref: inputRef }), units && (0, jsx_runtime_1.jsx)("div", { className: "amount-input-units", children: units })] }) }));
};
exports.AmountInput = AmountInput;
