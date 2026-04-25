"use client";
"use strict";
exports.__esModule = true;
exports.ProductDetails = void 0;
var navigation_1 = require("next/navigation");
var hooks_1 = require("@/features/products/hooks");
var react_redux_1 = require("react-redux");
var image_1 = require("next/image");
var react_1 = require("react");
exports.ProductDetails = function () {
    var _a;
    var slug = navigation_1.useParams().slug;
    var filters = react_redux_1.useSelector(function (state) { return state.products.filters; });
    var _b = hooks_1.useProducts(filters), data = _b.data, isLoading = _b.isLoading;
    var product = data === null || data === void 0 ? void 0 : data.find(function (p) { return p.slug === slug; });
    var _c = react_1.useState(0), activeImage = _c[0], setActiveImage = _c[1];
    if (isLoading)
        return React.createElement("p", null, "Loading...");
    if (!product)
        return React.createElement("p", null, "Product not found");
    return (React.createElement("div", { className: "max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10" },
        React.createElement("div", { className: "flex gap-4" },
            React.createElement("div", { className: "flex flex-col gap-3" }, product.images.map(function (img, index) { return (React.createElement("div", { key: index, onClick: function () { return setActiveImage(index); }, className: "w-20 h-20 relative cursor-pointer border " + (activeImage === index ? "border-black" : "border-gray-200") },
                React.createElement(image_1["default"], { src: img, alt: "", fill: true, className: "object-cover" }))); })),
            React.createElement("div", { className: "flex-1 relative h-[500px] bg-gray-100" },
                React.createElement(image_1["default"], { src: product.images[activeImage], alt: product.title, fill: true, className: "object-cover" }))),
        React.createElement("div", { className: "space-y-6" },
            React.createElement("div", null,
                React.createElement("h1", { className: "text-2xl font-semibold uppercase tracking-wide" }, product.title),
                React.createElement("p", { className: "text-xl font-bold mt-2" },
                    "\u20A6",
                    product.price.toLocaleString())),
            React.createElement("button", { className: "w-full bg-black text-white py-3 rounded-md" }, "Add to Bag"),
            React.createElement("button", { className: "w-full border py-3 rounded-md" }, "Save Item"),
            React.createElement("div", { className: "border-t pt-6 space-y-4 text-sm text-gray-600" },
                React.createElement("div", null,
                    React.createElement("h3", { className: "font-medium text-gray-900 mb-2" }, "Item Description"),
                    React.createElement("p", null, product.description)),
                React.createElement("div", null,
                    React.createElement("h3", { className: "font-medium text-gray-900 mb-2" }, "Category"),
                    React.createElement("p", null, (_a = product.category) === null || _a === void 0 ? void 0 : _a.name))))));
};
