'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
	var className = 'weui_btn';

	className += props.plain ? ' weui_btn_plain_' + props.type : ' weui_btn_' + props.type;
	if (props.className) className += ' ' + props.className;
	if (props.disabled || props.loading) className += ' weui_btn_disabled';
	if (props.mini) className += ' weui_btn_mini';

	return _react2.default.createElement(
		'a',
		_extends({}, props, {
			href: props.href,
			className: className,
			disabled: props.disabled || props.loading
		}),
		props.children
	);
};

Button.propTypes = {
	className: _react2.default.PropTypes.string,
	href: _react2.default.PropTypes.string,
	disabled: _react2.default.PropTypes.bool,
	plain: _react2.default.PropTypes.bool,
	mini: _react2.default.PropTypes.bool,
	loading: _react2.default.PropTypes.bool,
	type: _react2.default.PropTypes.string
};

Button.defaultProps = {
	className: '',
	disabled: false,
	plain: false,
	min: false,
	loading: false,
	type: 'default',
	href: 'javascript:;'
};

exports.default = Button;