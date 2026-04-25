"use strict";
var _a;
exports.__esModule = true;
exports.toggleWishlist = exports.removeFromWishlist = exports.addToWishlist = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var loadWishlist = function () {
    if (typeof window === "undefined")
        return [];
    try {
        return JSON.parse(localStorage.getItem("wishlist") || "[]");
    }
    catch (_a) {
        return [];
    }
};
var initialState = {
    items: loadWishlist()
};
var wishlistSlice = toolkit_1.createSlice({
    name: "wishlist",
    initialState: initialState,
    reducers: {
        addToWishlist: function (state, action) {
            var exists = state.items.find(function (p) { return p.id === action.payload.id; });
            if (!exists) {
                state.items.push(action.payload);
            }
        },
        removeFromWishlist: function (state, action) {
            state.items = state.items.filter(function (p) { return p.id !== action.payload; });
        },
        toggleWishlist: function (state, action) {
            var exists = state.items.find(function (p) { return p.id === action.payload.id; });
            if (exists) {
                state.items = state.items.filter(function (p) { return p.id !== action.payload.id; });
            }
            else {
                state.items.push(action.payload);
            }
        }
    }
});
exports.addToWishlist = (_a = wishlistSlice.actions, _a.addToWishlist), exports.removeFromWishlist = _a.removeFromWishlist, exports.toggleWishlist = _a.toggleWishlist;
exports["default"] = wishlistSlice.reducer;
