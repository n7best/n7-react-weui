'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CellsTitle = function CellsTitle(props) {
	return _react2.default.createElement(
		'div',
		{ className: 'weui_cells_title' },
		_react2.default.createElement(
			'p',
			null,
			props.children
		)
	);
};

exports.default = CellsTitle;