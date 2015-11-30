'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function Progress(props) {
	var className = 'weui_progress';
	if (props.className) className += ' ' + props.className;
	var prgstyle = {
		width: props.percent + '%'
	};

	return _react2.default.createElement(
		'div',
		{ className: className },
		_react2.default.createElement(
			'div',
			{ className: 'weui_progress_bar' },
			_react2.default.createElement('div', { className: 'weui_progress_inner_bar', style: prgstyle })
		),
		_react2.default.createElement(
			'a',
			{ href: 'javascript:;', className: 'weui_progress_opr' },
			props.children
		)
	);
};

Progress.propTypes = {
	className: _react2.default.PropTypes.string,
	percent: _react2.default.PropTypes.number
};

Progress.defaultProps = {
	className: '',
	percent: 0
};

exports.default = Progress;