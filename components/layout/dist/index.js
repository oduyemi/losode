"use client";
"use strict";
exports.__esModule = true;
var Filters_1 = require("@/components/product/Filters");
var SortDropDown_1 = require("../product/SortDropDown");
function Layout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "flex gap-8 px-6 py-4" },
        React.createElement("aside", { className: "hidden lg:block w-[260px] shrink-0" },
            React.createElement(Filters_1["default"], null)),
        React.createElement("main", { className: "flex-1 min-w-0" },
            React.createElement("div", { className: "flex items-center justify-between mb-6" },
                React.createElement("h2", { className: "text-sm text-gray-500" }, "Showing results"),
                React.createElement(SortDropDown_1["default"], null)),
            children)));
}
exports["default"] = Layout;
