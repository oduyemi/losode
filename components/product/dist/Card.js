"use client";
"use strict";
exports.__esModule = true;
exports.ProductCard = void 0;
var framer_motion_1 = require("framer-motion");
var image_1 = require("next/image");
var card_1 = require("@/components/ui/card");
var icons_1 = require("@ant-design/icons");
var link_1 = require("next/link");
exports.ProductCard = function (_a) {
    var _b, _c;
    var product = _a.product;
    return (React.createElement(link_1["default"], { href: "/products/" + product.slug },
        React.createElement(framer_motion_1.motion.div, { whileHover: { y: -6 }, transition: { duration: 0.25 }, className: "group cursor-pointer" },
            React.createElement(card_1.Card, { className: "rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300" },
                React.createElement("div", { className: "relative w-full h-[320px] bg-gray-100" },
                    React.createElement(image_1["default"], { src: ((_b = product.images) === null || _b === void 0 ? void 0 : _b[0]) || "/placeholder.png", alt: product.title, fill: true, className: "object-cover group-hover:scale-105 transition-transform duration-500" }),
                    React.createElement("button", { className: "absolute top-3 right-3 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition" },
                        React.createElement(icons_1.HeartOutlined, { size: 18, className: "text-gray-700" }))),
                React.createElement("div", { className: "p-4 space-y-1" },
                    React.createElement("p", { className: "text-xs text-gray-400 uppercase" }, ((_c = product.category) === null || _c === void 0 ? void 0 : _c.name) || "Store"),
                    React.createElement("h3", { className: "text-sm font-medium text-gray-800 line-clamp-2" }, product.title),
                    React.createElement("p", { className: "text-sm font-semibold text-gray-900 pt-1" },
                        "\u20A6",
                        product.price.toLocaleString()))))));
};
