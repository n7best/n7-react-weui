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

var CheckboxCell = (function (_React$Component) {
	_inherits(CheckboxCell, _React$Component);

	function CheckboxCell(props) {
		_classCallCheck(this, CheckboxCell);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckboxCell).call(this, props));

		_this.handleInputClick = _this.handleInputClick.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		_this.state = {
			checked: _this.props.checked
		};
		return _this;
	}

	_createClass(CheckboxCell, [{
		key: 'handleClick',
		value: function handleClick(e) {
			_events2.default.pauseEvent(event);
			if (!this.props.disabled && this.onClick) {
				this.onClick(event, this);
			}
		}
	}, {
		key: 'handleInputClick',
		value: function handleInputClick(e) {
			_events2.default.pauseEvent(event);
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			var _this2 = this;

			this.setState({ checked: !this.state.checked }, function () {
				if (_this2.props.onChange) _this2.props.onChange(e, _this2);
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var className = "weui_cell weui_check_label";
			var inputClassName = "weui_check";
			var iconClassName = "weui_icon_checked";
			if (this.props.className) className += ' ' + this.props.className;

			return _react2.default.createElement(
				'label',
				{ className: className, htmlFor: this.props.id, onClick: this.handleClick },
				_react2.default.createElement(
					_cellHeader2.default,
					null,
					_react2.default.createElement('input', _extends({}, this.props, {
						type: 'checkbox',
						className: inputClassName,
						name: this.props.name,
						id: this.props.id,
						onChange: this.handleChange,
						onClick: this.handleInputClick,
						checked: this.state.checked
					})),
					_react2.default.createElement('i', { className: iconClassName })
				),
				_react2.default.createElement(
					_cellBody2.default,
					null,
					_react2.default.createElement(
						'p',
						{ style: this.props.style },
						this.props.label
					)
				)
			);
		}
	}]);

	return CheckboxCell;
})(_react2.default.Component);

CheckboxCell.propTypes = {
	className: _react2.default.PropTypes.string,
	checked: _react2.default.PropTypes.bool,
	disabled: _react2.default.PropTypes.bool,
	name: _react2.default.PropTypes.string,
	onChange: _react2.default.PropTypes.func,
	onClick: _react2.default.PropTypes.func,
	label: _react2.default.PropTypes.string

};

CheckboxCell.defaultProps = {
	className: '',
	checked: false,
	disabled: false
};

exports.default = CheckboxCell;