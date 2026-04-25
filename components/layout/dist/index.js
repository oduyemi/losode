"use client";
"use strict";
exports.__esModule = true;
var Filters_1 = require("@/components/product/Filters");
var SortDropDown_1 = require("@/components/product/SortDropDown");
var Container_1 = require("@/components/layout/Container");
function Layout(_a) {
    var children = _a.children;
    return (React.createElement(Container_1["default"], null,
        React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8" },
            React.createElement("aside", { className: "hidden lg:block sticky top-24 h-fit" },
                React.createElement(Filters_1["default"], null)),
            React.createElement("main", { className: "min-w-0" },
                React.createElement("div", { className: "flex items-center justify-between mb-6" },
                    React.createElement("h2", { className: "text-sm text-gray-500" }, "Showing results"),
                    React.createElement(SortDropDown_1["default"], null)),
                children))));
}
exports["default"] = Layout;
