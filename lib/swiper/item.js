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

var SwiperItem = function SwiperItem(props) {
	var className = (0, _classnames2.default)('item', props.className);

	return _react2.default.createElement(
		'div',
		{ className: className },
		props.children
	);
};

SwiperItem.propTypes = {
	className: _react2.default.PropTypes.string
};

SwiperItem.defaultProps = {
	className: ''
};

exports.default = SwiperItem;