'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _cellHeader = require('./cell-header');

var _cellHeader2 = _interopRequireDefault(_cellHeader);

var _cellBody = require('./cell-body');

var _cellBody2 = _interopRequireDefault(_cellBody);

var _cellFooter = require('./cell-footer');

var _cellFooter2 = _interopRequireDefault(_cellFooter);

var _events = require('../utils/events');

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioCell = (function (_React$Component) {
	_inherits(RadioCell, _React$Component);

	function RadioCell(props) {
		_classCallCheck(this, RadioCell);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RadioCell).call(this, props));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(RadioCell, [{
		key: 'handleChange',
		value: function handleChange(event) {
			if (!this.props.checked && this.props.onChange) {
				this.props.onChange(event, this);
			}
		}
	}, {
		key: 'handleClick',
		value: function handleClick(event) {
			_events2.default.pauseEvent(event);
			if (!this.props.checked && this.props.onChange) {
				this.props.onChange(event, this);
			}
		}
	}, {
		key: 'handleInputClick',
		value: function handleInputClick(event) {
			_events2.default.pauseEvent(event);
		}
	}, {
		key: 'render',
		value: function render() {

			var className = "weui_cell weui_check_label";
			var iconClassName = "weui_icon_checked";
			var inputClassName = "weui_check";
			if (this.props.className) className += ' ' + this.props.className;

			return _react2.default.createElement(
				'label',
				{ className: className, 'for': this.props.id, onClick: this.handleClick },
				_react2.default.createElement(
					_cellBody2.default,
					null,
					this.props.label
				),
				_react2.default.createElement(
					_cellFooter2.default,
					null,
					_react2.default.createElement('input', _extends({}, this.props, {
						type: 'radio',
						className: inputClassName,
						onChange: this.handleChange,
						onClick: this.handleInputClick,
						name: this.props.name,
						id: this.props.id })),
					_react2.default.createElement('span', { className: iconClassName })
				)
			);
		}
	}]);

	return RadioCell;
})(_react2.default.Component);

RadioCell.propTypes = {
	checked: _react2.default.PropTypes.bool,
	className: _react2.default.PropTypes.string,
	disabled: _react2.default.PropTypes.bool,
	label: _react2.default.PropTypes.string,
	name: _react2.default.PropTypes.string,
	onChange: _react2.default.PropTypes.func,
	value: _react2.default.PropTypes.any,
	id: _react2.default.PropTypes.string

};

RadioCell.defaultProps = {
	checked: false,
	className: '',
	disabled: false
};

exports.default = RadioCell;