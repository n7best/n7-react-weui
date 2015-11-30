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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(props) {
	var actions = props.actions.map(function (action, idx) {
		return _react2.default.createElement(
			_button2.default,
			_extends({ href: 'javascript:;', key: idx }, action),
			action.label
		);
	});

	var className = (0, _classnames2.default)('weui_msg', props.className);
	return _react2.default.createElement(
		'div',
		{ className: className },
		_react2.default.createElement(
			'div',
			{ className: 'weui_icon_area' },
			props.icon
		),
		_react2.default.createElement(
			'div',
			{ className: 'weui_text_area' },
			_react2.default.createElement(
				'h2',
				{ className: 'weui_msg_title' },
				props.title
			),
			_react2.default.createElement(
				'p',
				{ className: 'weui_msg_desc' },
				props.children
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'weui_opr_area' },
			_react2.default.createElement(
				'p',
				{ className: 'weui_btn_area' },
				actions
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'weui_extra_area' },
			props.extra
		)
	);
};

Message.propTypes = {
	className: _react2.default.PropTypes.string,
	icon: _react2.default.PropTypes.any,
	title: _react2.default.PropTypes.string,
	actions: _react2.default.PropTypes.array,
	extra: _react2.default.PropTypes.any
};

Message.defaultProps = {
	className: '',
	actions: []
};

exports.default = Message;