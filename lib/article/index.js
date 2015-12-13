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

var Article = function Article(props) {
	var className = (0, _classnames2.default)('weui_article', props.className);

	return _react2.default.createElement(
		'div',
		{ className: className },
		props.children
	);
};

Article.propTypes = {
	className: _react2.default.PropTypes.string
};

Article.defaultProps = {
	className: ''
};

exports.default = Article;