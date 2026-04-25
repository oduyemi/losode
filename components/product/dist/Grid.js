"use client";
"use strict";
exports.__esModule = true;
exports.ProductGrid = void 0;
var react_redux_1 = require("react-redux");
var hooks_1 = require("@/features/products/hooks");
var Card_1 = require("./Card");
exports.ProductGrid = function () {
    var filters = react_redux_1.useSelector(function (state) { return state.products.filters; });
    var _a = hooks_1.useProducts(filters), data = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    if (isLoading)
        return React.createElement("p", null, "Loading products...");
    if (isError)
        return React.createElement("p", null, "Failed to load products");
    if (!data || data.length === 0)
        return React.createElement("p", null, "No products found");
    return (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" }, data.map(function (product) { return (React.createElement(Card_1.ProductCard, { key: product.id, product: product })); })));
};
