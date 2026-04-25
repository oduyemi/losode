"use client";
"use strict";
exports.__esModule = true;
var Header_1 = require("@/components/layout/Header");
var Footer_1 = require("@/components/layout/Footer");
function AppShell(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(Header_1["default"], null),
        children,
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = AppShell;
