"use strict";
var _a;
exports.__esModule = true;
exports.clearFilters = exports.setSort = exports.setSearch = exports.setPriceRange = exports.setColor = exports.setReturns = exports.setFit = exports.setOccasion = exports.setSize = exports.setCategory = exports.setProducts = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    products: [],
    filters: {
        category: [],
        size: [],
        occasion: [],
        fit: [],
        returns: [],
        color: [],
        priceRange: [0, 200000],
        search: ""
    },
    sort: ""
};
var productSlice = toolkit_1.createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        // PRODUCTS 
        setProducts: function (state, action) {
            state.products = action.payload;
        },
        // FILTERS 
        setCategory: function (state, action) {
            state.filters.category = action.payload;
        },
        setSize: function (state, action) {
            state.filters.size = action.payload;
        },
        setOccasion: function (state, action) {
            state.filters.occasion = action.payload;
        },
        setFit: function (state, action) {
            state.filters.fit = action.payload;
        },
        setReturns: function (state, action) {
            state.filters.returns = action.payload;
        },
        setColor: function (state, action) {
            state.filters.color = action.payload;
        },
        setPriceRange: function (state, action) {
            state.filters.priceRange = action.payload;
        },
        setSearch: function (state, action) {
            state.filters.search = action.payload;
        },
        setSort: function (state, action) {
            state.sort = action.payload;
        },
        // RESET 
        clearFilters: function (state) {
            state.filters = initialState.filters;
        }
    }
});
exports.setProducts = (_a = productSlice.actions, _a.setProducts), exports.setCategory = _a.setCategory, exports.setSize = _a.setSize, exports.setOccasion = _a.setOccasion, exports.setFit = _a.setFit, exports.setReturns = _a.setReturns, exports.setColor = _a.setColor, exports.setPriceRange = _a.setPriceRange, exports.setSearch = _a.setSearch, exports.setSort = _a.setSort, exports.clearFilters = _a.clearFilters;
exports["default"] = productSlice.reducer;
