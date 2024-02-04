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
exports.DotSlider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var clsx_1 = __importDefault(require("clsx"));
require("./style.scss");
// const minSwipeDistance = 15; 	// Расстояние между touchStart и touchEnd, чтобы оно было определено как свайп
var DotSlider = function (_a) {
    var _b;
    var values = _a.values, valueSetter = _a.valueSetter, className = _a.className, lineColor = _a.lineColor;
    var currentDot = values.filter(function (item) { return item.selected === true; }).length;
    var lastActiveLine = currentDot - 1; // Последняя выделенная цветом линия
    var containerRef = (0, react_1.useRef)(null);
    var dotClick = function (index) {
        if (index === currentDot)
            return;
        var newValues = values.map(function (opt, i) {
            if (i <= index)
                return __assign(__assign({}, opt), { selected: true });
            if (i > index)
                return __assign(__assign({}, opt), { selected: false });
        });
        valueSetter(newValues);
    };
    var _c = (0, react_1.useState)(0), touchStart = _c[0], setTouchStart = _c[1];
    var _d = (0, react_1.useState)(0), touchEnd = _d[0], setTouchEnd = _d[1];
    var _e = (0, react_1.useState)(0), oneSectionWidth = _e[0], setSectionWidth = _e[1];
    var getClientXFromEvent = function (eve) {
        if (('TouchEvent' in window) && (eve.nativeEvent instanceof TouchEvent)) {
            return eve.nativeEvent.touches[0].clientX;
        }
        else if (eve.nativeEvent instanceof MouseEvent) {
            return eve.nativeEvent.clientX;
        }
    };
    var onTouchStart = function (eve) {
        setTouchEnd(undefined); // Чтобы избежать обработки свайпа при обычных касаниях
        setTouchStart(getClientXFromEvent(eve));
    };
    var onTouchMove = function (eve) { return setTouchEnd(getClientXFromEvent(eve)); };
    var onTouchEnd = function () {
        if (!touchStart || !touchEnd)
            return;
        var distance = touchEnd - touchStart;
        // Здесь при желании можно добавить сравнение с minSwipeDistance
        var rawDotsToSwipe = ~~(distance / oneSectionWidth);
        var dotsToSwipe = (rawDotsToSwipe > 0) ?
            ((currentDot + rawDotsToSwipe >= values.length) ? values.length : rawDotsToSwipe) :
            ((currentDot - rawDotsToSwipe <= 0) ? 0 : rawDotsToSwipe);
        dotClick(currentDot + dotsToSwipe);
    };
    var mainClass = (0, clsx_1.default)((_b = { 'dots-slider': true }, _b[className] = className, _b));
    var lineStyle = {};
    if (lineColor) {
        lineStyle.background = lineColor;
    }
    (0, react_1.useEffect)(function () {
        containerRef.current && setSectionWidth(containerRef.current.offsetWidth / values.length);
    }, [containerRef.current]);
    return ((0, jsx_runtime_1.jsx)("div", { className: mainClass, onTouchStart: onTouchStart, onMouseDown: onTouchStart, onTouchMove: onTouchMove, onMouseMove: onTouchMove, onTouchEnd: onTouchEnd, onMouseUp: onTouchEnd, ref: containerRef, children: values.map(function (option, index) {
            var dotClass = (0, clsx_1.default)({ 'dots-slider-point': true, 'active-dot': option.selected, 'current-dot': (index === currentDot) });
            var lineClass = (0, clsx_1.default)({ 'dots-slider-line': true, 'active-line': (index <= lastActiveLine) });
            var showLine = (index < values.length - 1);
            return ((0, jsx_runtime_1.jsxs)("div", { onClick: function () { return dotClick(index); }, children: [(0, jsx_runtime_1.jsx)("div", { className: dotClass, style: lineStyle, onClick: function () { return dotClick(index); }, children: (0, jsx_runtime_1.jsx)("div", { className: "dots-slider-caption", onClick: function () { return dotClick(index); }, children: option.caption }) }), showLine && (0, jsx_runtime_1.jsx)("div", { className: lineClass, style: lineStyle })] }, "".concat(option.value, "-slider-caption")));
        }) }));
};
exports.DotSlider = DotSlider;
