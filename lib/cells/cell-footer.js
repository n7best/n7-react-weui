'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CellFooter = function CellFooter(props) {
	var className = 'weui_cell_ft';

	if (props.className) className += ' ' + props.className;
	if (props.primary) className += ' weui_cell_primary';

	return _react2.default.createElement(
		'span',
		{ className: className },
		props.children
	);
};

CellFooter.propTypes = {
	className: _react2.default.PropTypes.string,
	primary: _react2.default.PropTypes.bool
};

CellFooter.defaultProps = {
	className: '',
	primary: false
};

exports.default = CellFooter;