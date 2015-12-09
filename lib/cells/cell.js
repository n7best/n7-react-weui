'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _cellHeader = require('./cell-header');

var _cellHeader2 = _interopRequireDefault(_cellHeader);

var _cellBody = require('./cell-body');

var _cellBody2 = _interopRequireDefault(_cellBody);

var _cellFooter = require('./cell-footer');

var _cellFooter2 = _interopRequireDefault(_cellFooter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(props) {
	var className = (0, _classnames2.default)('weui_cell', {
		weui_cell_select: props.select || props.selectAfter || props.selectBefore,
		weui_select_after: props.selectAfter,
		weui_select_before: props.selectBefore
	}, props.className);

	if (props.link) {
		return _react2.default.createElement(
			'a',
			{ href: props.link, className: className },
			props.children
		);
	} else {
		return _react2.default.createElement(
			'div',
			{ className: className },
			props.children
		);
	}
};

Cell.propTypes = {
	className: _react2.default.PropTypes.string,
	link: _react2.default.PropTypes.string,
	select: _react2.default.PropTypes.bool,
	selectAfter: _react2.default.PropTypes.bool,
	selectBefore: _react2.default.PropTypes.bool
};

Cell.defaultProps = {
	className: '',
	link: null,
	select: false,
	selectAfter: false,
	selectBefore: false
};

exports.default = Cell;