"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var clsx_1 = __importDefault(require("clsx"));
var vanicom_1 = require("vanicom");
require("./style.scss");
var ProgressBar = function (_a) {
    var _b;
    var size = _a.size, color = _a.color, backgroundColor = _a.backgroundColor, className = _a.className, completed = _a.completed;
    var containerClass = (0, clsx_1.default)((_b = { 'progress-bar': true }, _b[className] = className, _b));
    var backStyle = {
        background: backgroundColor ? backgroundColor : '',
    };
    var barStyle = {
        padding: size ? "".concat(size, "px") : '2px',
        background: color ? color : '',
        width: '0',
    };
    if ((0, vanicom_1.isExistAndNotNull)(completed)) {
        if (completed > 100) {
            barStyle.width = '100%';
        }
        else if (completed < 0) {
            barStyle.width = '0';
        }
        else {
            barStyle.width = completed + '%';
        }
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: containerClass, children: (0, jsx_runtime_1.jsx)("div", { className: "bar-background", style: backStyle, children: (0, jsx_runtime_1.jsx)("span", { className: "completed-progress", style: barStyle }) }) }));
};
exports.ProgressBar = ProgressBar;
