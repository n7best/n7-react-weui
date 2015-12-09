'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _cellsTitle = require('./cells-title');

var _cellsTitle2 = _interopRequireDefault(_cellsTitle);

var _cellsTips = require('./cells-tips');

var _cellsTips2 = _interopRequireDefault(_cellsTips);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cells = function Cells(props) {

	var className = (0, _classnames2.default)('weui_cells', {
		weui_cells_access: props.access,
		weui_cells_radio: props.radio,
		weui_cells_checkbox: props.checkbox,
		weui_cells_form: props.form
	}, props.className);

	var cellsTitle = undefined,
	    cellsTips = undefined;
	if (props.title) cellsTitle = _react2.default.createElement(
		_cellsTitle2.default,
		null,
		props.title
	);
	if (props.tips) cellsTips = _react2.default.createElement(
		_cellsTips2.default,
		null,
		props.tips
	);

	return _react2.default.createElement(
		'div',
		null,
		cellsTitle,
		_react2.default.createElement(
			'div',
			{ className: className },
			props.children
		),
		cellsTips
	);
};

Cells.propTypes = {
	className: _react2.default.PropTypes.string,
	title: _react2.default.PropTypes.string,
	tips: _react2.default.PropTypes.string,
	access: _react2.default.PropTypes.bool,
	radio: _react2.default.PropTypes.bool,
	checkbox: _react2.default.PropTypes.bool,
	form: _react2.default.PropTypes.bool
};

Cells.defaultProps = {
	className: '',
	access: false,
	radio: false,
	checkbox: false,
	form: false
};

exports.default = Cells;