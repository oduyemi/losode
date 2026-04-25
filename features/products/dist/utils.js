"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.transformProduct = exports.processProducts = exports.sortProducts = exports.filterProducts = void 0;
function filterProducts(products, filters) {
    return products.filter(function (product) {
        var _a;
        // CATEGORY
        if (filters.category.length &&
            !filters.category.includes(product.category)) {
            return false;
        }
        // SIZE
        if (filters.size.length &&
            (!product.size ||
                !filters.size.some(function (s) { var _a; return (_a = product.size) === null || _a === void 0 ? void 0 : _a.includes(s); }))) {
            return false;
        }
        // OCCASION
        if (filters.occasion.length &&
            (!product.occasion ||
                !filters.occasion.includes(product.occasion))) {
            return false;
        }
        // FIT
        if (filters.fit.length &&
            (!product.fit || !filters.fit.includes(product.fit))) {
            return false;
        }
        // RETURNS
        if (filters.returns.length &&
            (!product.returns ||
                !filters.returns.includes(product.returns))) {
            return false;
        }
        // COLOR
        if (filters.color.length &&
            (!product.color ||
                !filters.color.some(function (c) { var _a; return (_a = product.color) === null || _a === void 0 ? void 0 : _a.includes(c); }))) {
            return false;
        }
        // PRICE
        var _b = filters.priceRange, min = _b[0], max = _b[1];
        if (product.price < min || product.price > max) {
            return false;
        }
        // SEARCH
        if (filters.search) {
            var search = filters.search.toLowerCase();
            var matches = product.name.toLowerCase().includes(search) ||
                product.category.toLowerCase().includes(search) || ((_a = product.brand) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(search));
            if (!matches)
                return false;
        }
        return true;
    });
}
exports.filterProducts = filterProducts;
;
function sortProducts(products, sort) {
    if (!sort)
        return products;
    switch (sort) {
        case "price-high":
            return __spreadArrays(products).sort(function (a, b) { return b.price - a.price; });
        case "price-low":
            return __spreadArrays(products).sort(function (a, b) { return a.price - b.price; });
        case "newest":
            return __spreadArrays(products).reverse();
        default:
            return products;
    }
}
exports.sortProducts = sortProducts;
;
function processProducts(products, filters, sort) {
    var filtered = filterProducts(products, filters);
    return sortProducts(filtered, sort);
}
exports.processProducts = processProducts;
var mockSizes = ["UK 8-M", "UK 10-M", "UK 12-L", "UK 14-XL"];
var mockColors = ["Black", "Blue", "Red", "White", "Green"];
var mockFits = ["Loose Fit", "Regular Fit", "Tight Fit"];
function isValidImage(url) {
    if (!url)
        return false;
    // block localhost / invalid
    if (url.includes("127.0.0.1") || url.includes("localhost")) {
        return false;
    }
    return url.startsWith("http");
}
function transformProduct(api) {
    var _a, _b;
    return {
        id: String(api.id),
        name: api.title || "Untitled",
        price: api.price || 0,
        image: isValidImage((_a = api.images) === null || _a === void 0 ? void 0 : _a[0])
            ? api.images[0]
            : "/placeholder.png",
        category: ((_b = api.category) === null || _b === void 0 ? void 0 : _b.name) || "",
        brand: "Platzi Store",
        size: [],
        color: [],
        fit: "",
        occasion: "",
        returns: ""
    };
}
exports.transformProduct = transformProduct;
