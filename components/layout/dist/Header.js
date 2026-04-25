"use client";
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var icons_1 = require("@ant-design/icons");
var image_1 = require("next/image");
var react_1 = require("react");
var react_redux_1 = require("react-redux");
function Header() {
    var _a = react_1.useState(""), query = _a[0], setQuery = _a[1];
    var wishlistCount = react_redux_1.useSelector(function (state) { return state.wishlist.items.length; });
    var handleSearch = function () {
        if (!query.trim())
            return;
        console.log("Search:", query);
        // later → router.push(`/search?q=${query}`)
    };
    return (React.createElement("header", { className: "bg-black text-white sticky top-0 z-50" },
        React.createElement("div", { className: "max-w-[1400px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between gap-6" },
            React.createElement(link_1["default"], { href: "/", className: "flex items-center" },
                React.createElement(image_1["default"], { src: "/images/logo.png", alt: "Sitelogo", height: 30, width: 60, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw", className: "h-6" })),
            React.createElement("div", { className: "hidden md:flex flex-1 max-w-md" },
                React.createElement("div", { className: "flex w-full bg-white rounded-md overflow-hidden" },
                    React.createElement("input", { type: "text", placeholder: "Search products...", value: query, onChange: function (e) { return setQuery(e.target.value); }, className: "flex-1 px-3 py-1.5 text-black outline-none text-sm" }),
                    React.createElement("button", { onClick: handleSearch, className: "px-3 text-black hover:bg-gray-100" },
                        React.createElement(icons_1.SearchOutlined, null)))),
            React.createElement("nav", { className: "hidden md:flex gap-6 text-sm" },
                React.createElement(link_1["default"], { href: "/" }, "Shop"),
                React.createElement(link_1["default"], { href: "#" }, "Categories")),
            React.createElement("div", { className: "flex items-center gap-5 text-lg" },
                React.createElement(link_1["default"], { href: "/wishlist", className: "relative" },
                    React.createElement(icons_1.HeartOutlined, { className: "cursor-pointer hover:opacity-70" }),
                    wishlistCount > 0 && (React.createElement("span", { className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full" }, wishlistCount))),
                React.createElement(icons_1.ShoppingCartOutlined, { className: "cursor-pointer hover:opacity-70" })))));
}
exports["default"] = Header;
