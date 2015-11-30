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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cells = function Cells(props) {

	var className = "weui_cells";
	if (props.className) className += ' ' + props.className;
	if (props.split) className += ' weui_cell_split';
	if (props.access) className += ' weui_cells_access';
	if (props.radio) className += ' weui_cells_radio';
	if (props.checkbox) className += ' weui_cells_checkbox';
	if (props.form) className += ' weui_cells_form';

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
	split: _react2.default.PropTypes.bool,
	access: _react2.default.PropTypes.bool,
	radio: _react2.default.PropTypes.bool,
	checkbox: _react2.default.PropTypes.bool,
	form: _react2.default.PropTypes.bool
};

Cells.defaultProps = {
	className: '',
	split: false,
	access: false,
	radio: false,
	checkbox: false,
	form: false
};

exports.default = Cells;