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
// const sizes = [
//     "UK 10-M","UK 12-L","UK 14-XL","UK 16-2XL","UK 18-3XL",
//     "UK 20-4XL","UK 22-5XL","UK 24-6XL","UK 26-7XL","UK 28-8XL",
//     "UK 30-9XL","UK 4-XS","UK 4-XXS","UK 6-S","UK 6-XS",
//     "UK 8-M","UK 8-S"
//   ];
//   const occasions = ["Casual Wear", "Formal Wear", "Party Wear", "Weddings", "Work Wear"];
//   const fits = ["Loose Fit", "Regular Fit", "Tight Fit"];
//   const returns = ["Amendments", "Exchanges", "Returns"];
//   const colors = [
//     "Almond","Beige","Black","Blue","Brown","Caramel","Coffee","Cream","Dark Green",
//     "Eggshell","Green","Lilac","Lime","Mint","Multicolour","Mustard","Navy Blue",
//     "Olive","Orange","Purple","Red","Turquoise","White","Wine"
//   ];
//   // Color map
//   const colorMap: Record<string, string> = {
//     Almond: "#EED9C4",
//     Beige: "#F5F5DC",
//     Black: "#000",
//     Blue: "#1E3A8A",
//     Brown: "#8B4513",
//     Caramel: "#D2691E",
//     Coffee: "#6F4E37",
//     Cream: "#FFFDD0",
//     "Dark Green": "#064E3B",
//     Eggshell: "#F0EAD6",
//     Green: "#16A34A",
//     Lilac: "#C8A2C8",
//     Lime: "#84CC16",
//     Mint: "#98FF98",
//     Multicolour: "linear-gradient(45deg, red, blue, yellow)",
//     Mustard: "#D4A017",
//     "Navy Blue": "#1E293B",
//     Olive: "#808000",
//     Orange: "#F97316",
//     Purple: "#7E22CE",
//     Red: "#DC2626",
//     Turquoise: "#40E0D0",
//     White: "#FFF",
//     Wine: "#722F37",
//   };
function Filters() {
    var dispatch = react_redux_1.useDispatch();
    var filters = react_redux_1.useSelector(function (state) { return state.products.filters; });
    var _a = hooks_1.useCategories(), categoriesData = _a.data, catLoading = _a.isLoading;
    var _b = react_1.useState([40000, 150000]), price = _b[0], setPrice = _b[1];
    var categories = (categoriesData === null || categoriesData === void 0 ? void 0 : categoriesData.map(function (cat) { return ({
        label: cat.name,
        value: cat.slug
    }); })) || [];
    var handlePriceChange = function (value) {
        setPrice(value);
        dispatch(product_slice_1.setPriceRange(value));
    };
    var renderFilterSection = function (items, selected, setAction) { return (React.createElement("div", { className: "flex flex-col gap-2" },
        React.createElement("span", { className: "text-xs text-gray-400" }, "All"),
        selected.length > 0 && (React.createElement("button", { onClick: function () { return dispatch(setAction([])); }, className: "text-xs text-gray-400 underline text-left" }, "Unselect all")),
        items.map(function (item) { return (React.createElement(antd_1.Checkbox, { key: item, checked: selected.includes(item), onChange: function () {
                var next = selected.includes(item)
                    ? selected.filter(function (i) { return i !== item; })
                    : __spreadArrays(selected, [item]);
                dispatch(setAction(next));
            } }, item)); }))); };
    return (React.createElement("aside", { className: "w-full md:w-[260px] pr-0 md:pr-4 border-r" },
        React.createElement(antd_1.Collapse, { defaultActiveKey: [], ghost: true, expandIconPosition: "end", expandIcon: function (_a) {
                var isActive = _a.isActive;
                return isActive ? (React.createElement(icons_1.MinusOutlined, { className: "text-xs" })) : (React.createElement(icons_1.PlusOutlined, { className: "text-xs" }));
            } },
            React.createElement(Panel, { header: "Category", key: "category" },
                React.createElement("div", { className: "flex flex-col gap-2" },
                    React.createElement("span", { className: "text-xs text-gray-400" }, "All"),
                    filters.category.length > 0 && (React.createElement("button", { onClick: function () { return dispatch(product_slice_1.setCategory([])); }, className: "text-xs text-gray-400 underline text-left" }, "Unselect all")),
                    catLoading && React.createElement("p", { className: "text-xs text-gray-400" }, "Loading..."),
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
                        React.createElement(antd_1.InputNumber, { min: 0, value: price[0], onChange: function (val) { return handlePriceChange([val || 0, price[1]]); }, className: "w-full" }),
                        React.createElement(antd_1.InputNumber, { min: 0, value: price[1], onChange: function (val) { return handlePriceChange([price[0], val || 0]); }, className: "w-full" })))))));
}
exports["default"] = Filters;
