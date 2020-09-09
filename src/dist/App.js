"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Header_1 = require("./Components/Header");
var App_scss_1 = require("./App.scss");
function App() {
    return (react_1["default"].createElement("div", { className: App_scss_1["default"].header },
        react_1["default"].createElement("p", { className: App_scss_1["default"].test }, "test"),
        react_1["default"].createElement(Header_1.Header, null)));
}
exports["default"] = App;
