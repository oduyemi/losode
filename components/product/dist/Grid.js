"use client";
"use strict";
exports.__esModule = true;
exports.ProductGrid = void 0;
var react_redux_1 = require("react-redux");
var hooks_1 = require("@/features/products/hooks");
var Card_1 = require("./Card");
var react_1 = require("react");
var antd_1 = require("antd");
exports.ProductGrid = function () {
    var filters = react_redux_1.useSelector(function (state) { return state.products.filters; });
    var _a = hooks_1.useProducts(filters), data = _a.data, isLoading = _a.isLoading, isError = _a.isError;
    var _b = react_1.useState(1), page = _b[0], setPage = _b[1];
    var _c = react_1.useState(8), pageSize = _c[0], setPageSize = _c[1];
    react_1.useEffect(function () {
        var updatePageSize = function () {
            var width = window.innerWidth;
            if (width < 768) {
                setPageSize(4); // 2 cols × 2 rows
            }
            else if (width < 1024) {
                setPageSize(6); // 3 cols × 2 rows
            }
            else {
                setPageSize(8); // 4 cols × 2 rows
            }
        };
        updatePageSize();
        window.addEventListener("resize", updatePageSize);
        return function () { return window.removeEventListener("resize", updatePageSize); };
    }, []);
    react_1.useEffect(function () {
        setPage(1);
    }, [filters]);
    if (isLoading)
        return React.createElement("p", null, "Loading products...");
    if (isError)
        return React.createElement("p", null, "Failed to load products");
    if (!data || data.length === 0)
        return React.createElement("p", null, "No products found");
    // 🔥 Paginate
    var start = (page - 1) * pageSize;
    var paginatedData = data.slice(start, start + pageSize);
    return (React.createElement("div", { className: "space-y-8" },
        React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" }, paginatedData.map(function (product) { return (React.createElement(Card_1.ProductCard, { key: product.id, product: product })); })),
        React.createElement("div", { className: "flex justify-center" },
            React.createElement(antd_1.Pagination, { current: page, pageSize: pageSize, total: data.length, onChange: function (p) { return setPage(p); }, showSizeChanger: false }))));
};
