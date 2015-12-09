'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CellsTitle = function CellsTitle(props) {
		var className = (0, _classnames2.default)('weui_cells_title', props.className);
		return _react2.default.createElement(
				'div',
				_extends({}, props, {
						className: className }),
				_react2.default.createElement(
						'p',
						null,
						props.children
				)
		);
};

exports.default = CellsTitle;