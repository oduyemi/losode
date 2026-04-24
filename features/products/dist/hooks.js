"use strict";
exports.__esModule = true;
exports.useProducts = void 0;
var react_redux_1 = require("react-redux");
var utils_1 = require("./utils");
function useProducts() {
    var _a = react_redux_1.useSelector(function (state) { return state.products; }), products = _a.products, filters = _a.filters, sort = _a.sort;
    var data = utils_1.processProducts(products, filters, sort || "");
    return { data: data };
}
exports.useProducts = useProducts;
