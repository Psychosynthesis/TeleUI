"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
require("./style.scss");
var Switch = function (_a) {
    var _b;
    var className = _a.className, selected = _a.selected, switchHandler = _a.switchHandler, activeColor = _a.activeColor, defaultColor = _a.defaultColor;
    var mainClass = (0, clsx_1.default)((_b = { 'custom-switch': true }, _b[className] = className, _b));
    var backgroundClass = (0, clsx_1.default)({ 'switch-background': true, 'no-select': true });
    var punktClass = (0, clsx_1.default)({ 'switch-punkt-selected': selected, 'switch-punkt': !selected });
    var color = selected ? activeColor : defaultColor;
    return ((0, jsx_runtime_1.jsx)("div", { className: mainClass, onClick: switchHandler, children: (0, jsx_runtime_1.jsx)("div", { className: backgroundClass, style: { background: color }, children: (0, jsx_runtime_1.jsx)("div", { className: punktClass, style: { borderColor: activeColor }, children: "\u00A0" }) }) }));
};
exports.Switch = Switch;
