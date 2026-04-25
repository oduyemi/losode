"use client";
"use strict";
exports.__esModule = true;
exports.ProductCard = void 0;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var card_1 = require("@/components/ui/card");
var react_redux_1 = require("react-redux");
var wishlist_slice_1 = require("@/features/wishlist/wishlist-slice");
var cart_slice_1 = require("@/features/cart/cart-slice");
var icons_1 = require("@ant-design/icons");
var link_1 = require("next/link");
var react_1 = require("react");
exports.ProductCard = function (_a) {
    var _b, _c;
    var product = _a.product;
    var dispatch = react_redux_1.useDispatch();
    var wishlist = react_redux_1.useSelector(function (state) { return state.wishlist.items; });
    var isWishlisted = wishlist.some(function (item) { return item.id === product.id; });
    var _d = react_1.useState(false), added = _d[0], setAdded = _d[1];
    var handleAddToCart = function (e) {
        e.preventDefault();
        e.stopPropagation();
        dispatch(cart_slice_1.addToCart(product));
        setAdded(true);
        setTimeout(function () { return setAdded(false); }, 1200);
    };
    return (React.createElement(link_1["default"], { href: "/products/" + product.slug },
        React.createElement(framer_motion_1.motion.div, { whileHover: { y: -10 }, transition: { duration: 0.3 }, className: "group cursor-pointer" },
            React.createElement(card_1.Card, { className: "rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 bg-white" },
                React.createElement("div", { className: "relative w-full h-[320px] bg-gray-100 overflow-hidden" },
                    React.createElement(image_1["default"], { src: ((_b = product.images) === null || _b === void 0 ? void 0 : _b[0]) || "/placeholder.png", alt: product.title, fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw", className: "object-cover transition-transform duration-700 group-hover:scale-110" }),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" }),
                    React.createElement(framer_motion_1.motion.button, { whileTap: { scale: 0.85 }, onClick: function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            dispatch(wishlist_slice_1.toggleWishlist(product));
                        }, className: "absolute top-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-full shadow-md hover:scale-110 transition" }, isWishlisted ? (React.createElement(icons_1.HeartFilled, { className: "text-red-500" })) : (React.createElement(icons_1.HeartOutlined, { className: "text-gray-700" }))),
                    React.createElement("div", { className: "absolute bottom-0 left-0 w-full p-3 bg-white/90 backdrop-blur-md flex gap-2 justify-center" },
                        React.createElement("button", { className: "bg-white border text-black text-xs px-4 py-2 rounded-full shadow-sm hover:bg-black hover:text-white transition" }, "Quick View"),
                        React.createElement("button", { onClick: handleAddToCart, className: "text-xs px-4 py-2 rounded-full shadow-md transition " + (added
                                ? "bg-green-600 text-white"
                                : "bg-black text-white hover:opacity-90") }, added ? "Added ✓" : "Add to Cart"))),
                React.createElement("div", { className: "p-4 space-y-2" },
                    React.createElement("p", { className: "text-[10px] tracking-[0.2em] text-gray-400 uppercase" }, ((_c = product.category) === null || _c === void 0 ? void 0 : _c.name) || "Store"),
                    React.createElement("h3", { className: "text-sm font-medium text-gray-900 leading-snug line-clamp-2 group-hover:underline" }, product.title),
                    React.createElement("div", { className: "flex items-center justify-between pt-1" },
                        React.createElement("p", { className: "text-base font-semibold text-gray-900" },
                            "\u20A6",
                            product.price.toLocaleString()),
                        React.createElement("span", { className: "text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition" }, "\u2192")))))));
};
