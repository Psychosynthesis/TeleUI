"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var clsx_1 = __importDefault(require("clsx"));
require("./style.scss");
var Tabs = function (_a) {
    var tabs = _a.tabs, defaultIndex = _a.defaultIndex;
    var _b = (0, react_1.useState)(tabs[defaultIndex !== null && defaultIndex !== void 0 ? defaultIndex : 0].caption), currentTab = _b[0], setCurrentTab = _b[1];
    var tabsCaptions = tabs.map(function (tab) {
        return (0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.default)({ 'current-tab': tab.caption === currentTab, 'tab-caption': true }), onClick: function () { return setCurrentTab(tab.caption); }, children: tab.caption }, "".concat(tab.caption, "-caption-key"));
    });
    var currentTabData = tabs.find(function (tab) { return tab.caption === currentTab; });
    var tabContent = currentTabData ? currentTabData.content : tabs[0].content;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "tabs-container", children: [(0, jsx_runtime_1.jsx)("div", { className: "tabs-captions", children: tabsCaptions }), tabContent] }));
};
exports.Tabs = Tabs;
