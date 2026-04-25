"use client";
"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var Card_1 = require("@/components/product/Card");
function WishlistPage() {
    var items = react_redux_1.useSelector(function (state) { return state.wishlist.items; });
    if (items.length === 0) {
        return React.createElement("p", { className: "p-6" }, "Your wishlist is empty");
    }
    return (React.createElement("div", { className: "max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" }, items.map(function (product) { return (React.createElement(Card_1.ProductCard, { key: product.id, product: product })); })));
}
exports["default"] = WishlistPage;
