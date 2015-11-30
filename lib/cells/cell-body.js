'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CellBody = function CellBody(props) {
	var className = 'weui_cell_bd';

	if (props.className) className += ' ' + props.className;
	if (props.primary) className += ' weui_cell_primary';

	return _react2.default.createElement(
		'span',
		{ className: className },
		props.children
	);
};

CellBody.propTypes = {
	className: _react2.default.PropTypes.string,
	primary: _react2.default.PropTypes.bool
};

CellBody.defaultProps = {
	className: '',
	primary: true
};

exports.default = CellBody;