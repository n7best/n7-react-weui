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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(props) {
	var className = 'weui_cell';

	if (props.className) className += ' ' + props.className;
	if (props.select || props.selectAfter || props.selectBefore) className += ' weui_cell_select';
	if (props.selectAfter) className += ' weui_select_after';
	if (props.selectBefore) className += ' weui_select_before';

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