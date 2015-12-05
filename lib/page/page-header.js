"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeader = function PageHeader(props) {
	var desc = props.desc ? _react2.default.createElement(
		"p",
		{ className: "page_desc" },
		props.desc
	) : null;
	return _react2.default.createElement(
		"div",
		{ className: "hd" },
		_react2.default.createElement(
			"h1",
			{ className: "page_title" },
			props.title
		),
		desc
	);
};

exports.default = PageHeader;