'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonArea = function ButtonArea(props) {
	var className = 'weui_btn_area';

	if (props.className) className += ' ' + props.className;

	return _react2.default.createElement(
		'div',
		{ className: className },
		props.children
	);
};

ButtonArea.propTypes = {
	className: _react2.default.PropTypes.string
};

ButtonArea.defaultProps = {
	className: ''
};

exports.default = ButtonArea;