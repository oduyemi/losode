"use client";
"use strict";
exports.__esModule = true;
var antd_1 = require("antd");
var react_redux_1 = require("react-redux");
var product_slice_1 = require("@/features/products/product-slice");
function SortDropdown() {
    var dispatch = react_redux_1.useDispatch();
    var sort = react_redux_1.useSelector(function (state) { return state.products.sort; });
    return (React.createElement(antd_1.Select, { value: sort || undefined, placeholder: "Sort by", className: "w-48", onChange: function (value) { return dispatch(product_slice_1.setSort(value)); }, options: [
            { label: "Newest", value: "newest" },
            { label: "Price: High to Low", value: "price-high" },
            { label: "Price: Low to High", value: "price-low" },
        ] }));
}
exports["default"] = SortDropdown;
