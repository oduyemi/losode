"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var product_slice_1 = require("./product-slice");
var wishlist_slice_1 = require("@/features/wishlist/wishlist-slice");
var cart_slice_1 = require("@/features/cart/cart-slice");
exports.store = toolkit_1.configureStore({
    reducer: {
        products: product_slice_1["default"],
        wishlist: wishlist_slice_1["default"],
        cart: cart_slice_1["default"]
    }
});
if (typeof window !== "undefined") {
    exports.store.subscribe(function () {
        var state = exports.store.getState();
        localStorage.setItem("wishlist", JSON.stringify(state.wishlist.items));
        localStorage.setItem("cart", JSON.stringify(state.cart.items));
    });
}
