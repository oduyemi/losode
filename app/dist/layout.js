"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var providers_1 = require("../lib/providers");
var AppShell_1 = require("./AppShell");
exports.metadata = {
    title: "Losode Product Listing",
    description: "Buy Fashion | Sell Fashion | African Fashion"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null,
            React.createElement(providers_1.Providers, null,
                React.createElement(AppShell_1["default"], null, children)))));
}
exports["default"] = RootLayout;
