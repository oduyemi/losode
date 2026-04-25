"use client";
"use strict";
exports.__esModule = true;
var react_redux_1 = require("react-redux");
var cart_slice_1 = require("@/features/cart/cart-slice");
var image_1 = require("next/image");
function CartPage() {
    var dispatch = react_redux_1.useDispatch();
    var items = react_redux_1.useSelector(function (state) { return state.cart.items; });
    var total = items.reduce(function (acc, item) { return acc + item.price * item.quantity; }, 0);
    if (items.length === 0) {
        return React.createElement("p", { className: "p-6" }, "Your cart is empty");
    }
    return (React.createElement("div", { className: "max-w-5xl mx-auto px-4 py-10 space-y-6" },
        React.createElement("h1", { className: "text-2xl font-semibold" }, "Your Cart"),
        items.map(function (item) { return (React.createElement("div", { key: item.id, className: "flex gap-4 border rounded-lg p-4 items-center" },
            React.createElement("div", { className: "relative w-24 h-24 bg-gray-100" },
                React.createElement(image_1["default"], { src: item.images[0], alt: item.title, fill: true, className: "object-cover" })),
            React.createElement("div", { className: "flex-1" },
                React.createElement("h3", { className: "font-medium" }, item.title),
                React.createElement("p", { className: "text-sm text-gray-500" },
                    "\u20A6",
                    item.price.toLocaleString()),
                React.createElement("div", { className: "flex items-center gap-2 mt-2" },
                    React.createElement("button", { onClick: function () {
                            return dispatch(cart_slice_1.updateQuantity({
                                id: item.id,
                                quantity: Math.max(1, item.quantity - 1)
                            }));
                        }, className: "px-2 border" }, "-"),
                    React.createElement("span", null, item.quantity),
                    React.createElement("button", { onClick: function () {
                            return dispatch(cart_slice_1.updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1
                            }));
                        }, className: "px-2 border" }, "+"))),
            React.createElement("div", { className: "text-right" },
                React.createElement("p", { className: "font-semibold" },
                    "\u20A6",
                    (item.price * item.quantity).toLocaleString()),
                React.createElement("button", { onClick: function () { return dispatch(cart_slice_1.removeFromCart(item.id)); }, className: "text-xs text-red-500 mt-2" }, "Remove")))); }),
        React.createElement("div", { className: "text-right border-t pt-4" },
            React.createElement("p", { className: "text-lg font-semibold" },
                "Total: \u20A6",
                total.toLocaleString()),
            React.createElement("button", { className: "mt-4 bg-black text-white px-6 py-3 rounded-md" }, "Checkout"))));
}
exports["default"] = CartPage;
