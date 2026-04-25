"use strict";
exports.__esModule = true;
var Footer_1 = require("@/components/layout/Footer");
var Header_1 = require("@/components/layout/Header");
function AppShell(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "min-h-screen flex flex-col" },
        React.createElement(Header_1["default"], null),
        React.createElement("main", { className: "flex-1" }, children),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = AppShell;
