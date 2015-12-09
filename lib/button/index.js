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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button = function Button(props) {
	var _classNames;

	var className = (0, _classnames2.default)('weui_btn', (_classNames = {}, _defineProperty(_classNames, 'weui_btn_' + props.type, !props.plain), _defineProperty(_classNames, 'weui_btn_plain_' + props.type, props.plain), _defineProperty(_classNames, 'weui_btn_disabled', props.disabled), _defineProperty(_classNames, 'weui_btn_mini', props.mini), _classNames));

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