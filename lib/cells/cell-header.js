'use strict';

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

var CellHeader = function CellHeader(props) {
	var className = (0, _classnames2.default)('weui_cell_hd', {
		weui_cell_primary: props.primary
	}, props.className);

	return _react2.default.createElement(
		'span',
		{ className: className },
		props.children
	);
};

CellHeader.propTypes = {
	className: _react2.default.PropTypes.string,
	primary: _react2.default.PropTypes.bool
};

CellHeader.defaultProps = {
	className: '',
	primary: false
};

exports.default = CellHeader;