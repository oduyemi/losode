"use client";
"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var cart_slice_1 = require("@/features/cart/cart-slice");
var wishlist_slice_1 = require("@/features/wishlist/wishlist-slice");
var image_1 = require("next/image");
var link_1 = require("next/link");
function WishlistPage() {
    var dispatch = react_redux_1.useDispatch();
    var items = react_redux_1.useSelector(function (state) { return state.wishlist.items; });
    if (items.length === 0) {
        return (React.createElement("p", { className: "p-6 text-center text-gray-500" }, "Your wishlist is empty"));
    }
    return (React.createElement("div", { className: "max-w-6xl mx-auto px-4 py-10 space-y-6" },
        React.createElement("h1", { className: "text-2xl font-semibold" }, "Your Wishlist"),
        items.map(function (product) {
            var _a;
            return (React.createElement("div", { key: product.id, className: "flex gap-4 border rounded-xl p-4 items-center hover:shadow-md transition" },
                React.createElement(link_1["default"], { href: "/products/" + product.slug },
                    React.createElement("div", { className: "relative w-28 h-28 bg-gray-100 rounded-md overflow-hidden" },
                        React.createElement(image_1["default"], { src: product.images[0], alt: product.title, fill: true, className: "object-cover" }))),
                React.createElement("div", { className: "flex-1" },
                    React.createElement(link_1["default"], { href: "/products/" + product.slug },
                        React.createElement("h3", { className: "font-medium hover:underline" }, product.title)),
                    React.createElement("p", { className: "text-sm text-gray-500" }, (_a = product.category) === null || _a === void 0 ? void 0 : _a.name),
                    React.createElement("p", { className: "font-semibold mt-1" },
                        "\u20A6",
                        product.price.toLocaleString())),
                React.createElement("div", { className: "flex flex-col gap-2" },
                    React.createElement("button", { onClick: function () { return dispatch(cart_slice_1.addToCart(product)); }, className: "bg-black text-white px-4 py-2 text-sm rounded-md hover:opacity-90" }, "Add to Cart"),
                    React.createElement("button", { onClick: function () { return dispatch(wishlist_slice_1.removeFromWishlist(product.id)); }, className: "text-xs text-red-500 hover:underline" }, "Remove"))));
        })));
}
exports["default"] = WishlistPage;
