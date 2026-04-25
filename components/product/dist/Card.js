"use client";
"use strict";
exports.__esModule = true;
exports.ProductCard = void 0;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var card_1 = require("@/components/ui/card");
var react_redux_1 = require("react-redux");
var wishlist_slice_1 = require("@/features/wishlist/wishlist-slice");
var icons_1 = require("@ant-design/icons");
var link_1 = require("next/link");
exports.ProductCard = function (_a) {
    var _b, _c;
    var product = _a.product;
    var dispatch = react_redux_1.useDispatch();
    var wishlist = react_redux_1.useSelector(function (state) { return state.wishlist.items; });
    var isWishlisted = wishlist.some(function (item) { return item.id === product.id; });
    return (React.createElement(link_1["default"], { href: "/products/" + product.slug },
        React.createElement(framer_motion_1.motion.div, { whileHover: { y: -8 }, transition: { duration: 0.3 }, className: "group cursor-pointer" },
            React.createElement(card_1.Card, { className: "rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white" },
                React.createElement("div", { className: "relative w-full h-[320px] bg-gray-100 overflow-hidden" },
                    React.createElement(image_1["default"], { src: ((_b = product.images) === null || _b === void 0 ? void 0 : _b[0]) || "/placeholder.png", alt: product.title, fill: true, sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw", className: "object-cover transition-transform duration-700 group-hover:scale-110" }),
                    React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" }),
                    React.createElement(framer_motion_1.motion.button, { whileTap: { scale: 0.85 }, onClick: function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            dispatch(wishlist_slice_1.toggleWishlist(product));
                        }, className: "absolute top-3 right-3 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md hover:scale-110 transition" },
                        React.createElement(framer_motion_1.motion.span, { key: isWishlisted ? "filled" : "outline", initial: { scale: 0.6, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 0.2 } }, isWishlisted ? (React.createElement(icons_1.HeartFilled, { className: "text-red-500" })) : (React.createElement(icons_1.HeartOutlined, { className: "text-gray-700" })))),
                    React.createElement("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300" },
                        React.createElement("button", { className: "bg-white text-black text-xs px-4 py-2 rounded-full shadow-md hover:bg-black hover:text-white transition" }, "Quick View"))),
                React.createElement("div", { className: "p-4 space-y-2" },
                    React.createElement("p", { className: "text-[11px] tracking-widest text-gray-400 uppercase" }, ((_c = product.category) === null || _c === void 0 ? void 0 : _c.name) || "Store"),
                    React.createElement("h3", { className: "text-sm font-medium text-gray-900 leading-snug line-clamp-2 group-hover:underline" }, product.title),
                    React.createElement("div", { className: "flex items-center justify-between pt-1" },
                        React.createElement("p", { className: "text-sm font-semibold text-gray-900" },
                            "\u20A6",
                            product.price.toLocaleString()),
                        React.createElement("span", { className: "text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition" }, "\u2192")))))));
};
