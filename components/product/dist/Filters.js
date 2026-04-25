"use client";
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var antd_1 = require("antd");
var react_redux_1 = require("react-redux");
var product_slice_1 = require("@/features/products/product-slice");
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var hooks_1 = require("@/features/products/hooks");
var Panel = antd_1.Collapse.Panel;
function Filters() {
    var dispatch = react_redux_1.useDispatch();
    var filters = react_redux_1.useSelector(function (state) { return state.products.filters; });
    var _a = hooks_1.useCategories(), categoriesData = _a.data, catLoading = _a.isLoading;
    var _b = react_1.useState([0, 200000]), price = _b[0], setPrice = _b[1];
    var _c = react_1.useState(filters.search || ""), searchInput = _c[0], setSearchInput = _c[1];
    react_1.useEffect(function () {
        var delay = setTimeout(function () {
            dispatch(product_slice_1.setSearch(searchInput));
        }, 400);
        return function () { return clearTimeout(delay); };
    }, [searchInput, dispatch]);
    var categories = (categoriesData === null || categoriesData === void 0 ? void 0 : categoriesData.map(function (cat) { return ({
        label: cat.name,
        value: cat.slug
    }); })) || [];
    var handlePriceChange = function (value) {
        setPrice(value);
        dispatch(product_slice_1.setPriceRange(value));
    };
    return (React.createElement("aside", { className: "min-h-screen w-full md:w-[260px] pr-0 md:pr-4 border-r" },
        React.createElement("div", { className: "space-y-6 bg-white p-4 rounded-xl shadow-sm" },
            React.createElement("div", null,
                React.createElement("p", { className: "text-sm font-medium mb-2" }, "Search"),
                React.createElement(antd_1.Input, { placeholder: "Search products...", value: searchInput, onChange: function (e) { return setSearchInput(e.target.value); }, allowClear: true })),
            React.createElement(antd_1.Collapse, { defaultActiveKey: ["category", "price"], ghost: true, expandIconPlacement: "end", expandIcon: function (_a) {
                    var isActive = _a.isActive;
                    return isActive ? (React.createElement(icons_1.MinusOutlined, { className: "text-xs" })) : (React.createElement(icons_1.PlusOutlined, { className: "text-xs" }));
                } },
                React.createElement(Panel, { header: "Category", key: "category" },
                    React.createElement("div", { className: "flex flex-col gap-2" },
                        React.createElement("span", { className: "text-xs text-gray-400" }, "All"),
                        filters.category.length > 0 && (React.createElement("button", { onClick: function () { return dispatch(product_slice_1.setCategory([])); }, className: "text-xs text-gray-400 underline text-left" }, "Unselect all")),
                        catLoading && (React.createElement("p", { className: "text-xs text-gray-400" }, "Loading...")),
                        categories.map(function (item) { return (React.createElement(antd_1.Checkbox, { key: item.value, checked: filters.category.includes(item.value), onChange: function () {
                                var next = filters.category.includes(item.value)
                                    ? filters.category.filter(function (i) { return i !== item.value; })
                                    : __spreadArrays(filters.category, [item.value]);
                                dispatch(product_slice_1.setCategory(next));
                            } }, item.label)); }))),
                React.createElement(Panel, { header: "Price", key: "price" },
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement(antd_1.Slider, { range: true, min: 0, max: 200000, value: price, onChange: handlePriceChange }),
                        React.createElement("div", { className: "flex gap-2" },
                            React.createElement(antd_1.InputNumber, { min: 0, value: price[0], onChange: function (val) {
                                    return handlePriceChange([val || 0, price[1]]);
                                }, className: "w-full" }),
                            React.createElement(antd_1.InputNumber, { min: 0, value: price[1], onChange: function (val) {
                                    return handlePriceChange([price[0], val || 0]);
                                }, className: "w-full" }))))))));
}
exports["default"] = Filters;
