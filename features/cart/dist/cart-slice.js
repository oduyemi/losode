"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
exports.__esModule = true;
exports.clearCart = exports.updateQuantity = exports.removeFromCart = exports.addToCart = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    items: typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cart") || "[]")
        : []
};
var cartSlice = toolkit_1.createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: function (state, action) {
            var existing = state.items.find(function (i) { return i.id === action.payload.id; });
            if (existing) {
                existing.quantity += 1;
            }
            else {
                state.items.push(__assign(__assign({}, action.payload), { quantity: 1 }));
            }
        },
        removeFromCart: function (state, action) {
            state.items = state.items.filter(function (i) { return i.id !== action.payload; });
        },
        updateQuantity: function (state, action) {
            var item = state.items.find(function (i) { return i.id === action.payload.id; });
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart: function (state) {
            state.items = [];
        }
    }
});
exports.addToCart = (_a = cartSlice.actions, _a.addToCart), exports.removeFromCart = _a.removeFromCart, exports.updateQuantity = _a.updateQuantity, exports.clearCart = _a.clearCart;
exports["default"] = cartSlice.reducer;
