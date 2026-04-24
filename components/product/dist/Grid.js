"use client";
"use strict";
exports.__esModule = true;
exports.ProductGrid = void 0;
var hooks_1 = require("@/features/products/hooks");
var Card_1 = require("./Card");
exports.ProductGrid = function () {
    var data = hooks_1.useProducts().data;
    if (!data)
        return null;
    return (React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" }, data.map(function (product) { return (React.createElement(Card_1.ProductCard, { key: product.id, product: product })); })));
};
