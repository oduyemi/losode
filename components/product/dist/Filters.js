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
var Panel = antd_1.Collapse.Panel;
var categories = ["Co-Ords", "Coats and Jackets", "Dresses", "Suits and Tailoring"];
var sizes = [
    "UK 10-M", "UK 12-L", "UK 14-XL", "UK 16-2XL", "UK 18-3XL",
    "UK 20-4XL", "UK 22-5XL", "UK 24-6XL", "UK 26-7XL", "UK 28-8XL",
    "UK 30-9XL", "UK 4-XS", "UK 4-XXS", "UK 6-S", "UK 6-XS",
    "UK 8-M", "UK 8-S"
];
var occasions = ["Casual Wear", "Formal Wear", "Party Wear", "Weddings", "Work Wear"];
var fits = ["Loose Fit", "Regular Fit", "Tight Fit"];
var returns = ["Amendments", "Exchanges", "Returns"];
var colors = [
    "Almond", "Beige", "Black", "Blue", "Brown", "Caramel", "Coffee", "Cream", "Dark Green",
    "Eggshell", "Green", "Lilac", "Lime", "Mint", "Multicolour", "Mustard", "Navy Blue",
    "Olive", "Orange", "Purple", "Red", "Turquoise", "White", "Wine"
];
// Color map
var colorMap = {
    Almond: "#EED9C4",
    Beige: "#F5F5DC",
    Black: "#000",
    Blue: "#1E3A8A",
    Brown: "#8B4513",
    Caramel: "#D2691E",
    Coffee: "#6F4E37",
    Cream: "#FFFDD0",
    "Dark Green": "#064E3B",
    Eggshell: "#F0EAD6",
    Green: "#16A34A",
    Lilac: "#C8A2C8",
    Lime: "#84CC16",
    Mint: "#98FF98",
    Multicolour: "linear-gradient(45deg, red, blue, yellow)",
    Mustard: "#D4A017",
    "Navy Blue": "#1E293B",
    Olive: "#808000",
    Orange: "#F97316",
    Purple: "#7E22CE",
    Red: "#DC2626",
    Turquoise: "#40E0D0",
    White: "#FFF",
    Wine: "#722F37"
};
function Filters() {
    var dispatch = react_redux_1.useDispatch();
    var filters = react_redux_1.useSelector(function (state) { return state.products.filters; });
    var _a = react_1.useState([40000, 150000]), price = _a[0], setPrice = _a[1];
    var handlePriceChange = function (value) {
        setPrice(value);
        dispatch(product_slice_1.setPriceRange(value));
    };
    // Reusable section renderer
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
            React.createElement(Panel, { header: "Category", key: "category" }, renderFilterSection(categories, filters.category, product_slice_1.setCategory)),
            React.createElement(Panel, { header: "Size", key: "size" },
                React.createElement("div", { className: "max-h-40 overflow-y-auto pr-2" }, renderFilterSection(sizes, filters.size, product_slice_1.setSize))),
            React.createElement(Panel, { header: "Occasion", key: "occasion" }, renderFilterSection(occasions, filters.occasion, product_slice_1.setOccasion)),
            React.createElement(Panel, { header: "Fit", key: "fit" }, renderFilterSection(fits, filters.fit, product_slice_1.setFit)),
            React.createElement(Panel, { header: "Returns", key: "returns" }, renderFilterSection(returns, filters.returns, product_slice_1.setReturns)),
            React.createElement(Panel, { header: "Color", key: "color" },
                React.createElement(antd_1.Checkbox.Group, { value: filters.color, onChange: function (val) { return dispatch(product_slice_1.setColor(val)); } },
                    React.createElement("div", { className: "max-h-48 overflow-y-auto pr-2 flex flex-col gap-3" }, colors.map(function (color) { return (React.createElement(antd_1.Checkbox, { key: color, value: color },
                        React.createElement("span", { className: "flex items-center gap-2 text-sm" },
                            React.createElement("span", { className: "w-4 h-4 rounded-full border", style: { background: colorMap[color] } }),
                            color))); })))),
            React.createElement(Panel, { header: "Price", key: "price" },
                React.createElement("div", { className: "space-y-4" },
                    React.createElement(antd_1.Slider, { range: true, min: 0, max: 200000, value: price, onChange: handlePriceChange }),
                    React.createElement("div", { className: "flex gap-2" },
                        React.createElement(antd_1.InputNumber, { min: 0, value: price[0], onChange: function (val) { return handlePriceChange([val || 0, price[1]]); }, className: "w-full" }),
                        React.createElement(antd_1.InputNumber, { min: 0, value: price[1], onChange: function (val) { return handlePriceChange([price[0], val || 0]); }, className: "w-full" })))))));
}
exports["default"] = Filters;
