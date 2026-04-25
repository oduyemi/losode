"use client";
"use strict";
exports.__esModule = true;
var hooks_1 = require("@/features/products/hooks");
var react_redux_1 = require("react-redux");
var product_slice_1 = require("@/store/product-slice");
var react_1 = require("react");
var Grid_1 = require("@/components/product/Grid");
var index_1 = require("@/components/layout/index");
function HomePage() {
    var dispatch = react_redux_1.useDispatch();
    var filters = react_redux_1.useSelector(function (state) { return state.products; }).filters;
    var _a = hooks_1.useProducts(filters), data = _a.data, isLoading = _a.isLoading;
    react_1.useEffect(function () {
        if (data) {
            dispatch(product_slice_1.setProducts(data));
        }
    }, [data, dispatch]);
    if (isLoading)
        return React.createElement("p", null, "Loading...");
    return (React.createElement(index_1["default"], null,
        React.createElement(Grid_1.ProductGrid, null)));
}
exports["default"] = HomePage;
