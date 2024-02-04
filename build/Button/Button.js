"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
require("./style.scss");
var Button = function (_a) {
    var _b;
    var type = _a.type, size = _a.size, color = _a.color, className = _a.className, children = _a.children, onClick = _a.onClick, disabled = _a.disabled;
    var height = size ? size + 'px' : 'auto';
    var width = !children ? height : undefined;
    var onClickHandler = function (event) {
        if (disabled)
            return;
        onClick(event);
    };
    var mainStyle = {
        width: size ? width : '',
        height: size ? height : '',
        color: color && (type === 'outline' ? color : ''),
        background: color && (type !== 'outline' ? color : ''),
        borderColor: color,
    };
    var cls = (0, clsx_1.default)((_b = { 'custom-button': true }, _b[type] = type, _b[color] = color, _b[className] = className, _b));
    return ((0, jsx_runtime_1.jsx)("button", { className: cls, onClick: onClickHandler, style: mainStyle, disabled: disabled, children: children }));
};
exports.Button = Button;
