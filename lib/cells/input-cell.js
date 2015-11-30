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

var InputCell = (function (_React$Component) {
	_inherits(InputCell, _React$Component);

	function InputCell(props) {
		_classCallCheck(this, InputCell);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputCell).call(this, props));

		_this.handleChange = _this.handleChange.bind(_this);

		_this.state = {
			value: _this.props.value
		};
		return _this;
	}

	_createClass(InputCell, [{
		key: 'handleChange',
		value: function handleChange(event) {
			var _this2 = this;

			this.setState({ value: event.target.value }, function () {
				if (_this2.props.onChange) _this2.props.onChange(event, _this2);
			});
		}
	}, {
		key: 'renderHeader',
		value: function renderHeader() {
			if (!this.props.header) {
				var labelClassName = "weui_label";
				if (this.props.label) {
					return _react2.default.createElement(
						_cellHeader2.default,
						null,
						_react2.default.createElement(
							'label',
							{ className: labelClassName },
							this.props.label
						)
					);
				}
			} else {
				return _react2.default.createElement(
					_cellHeader2.default,
					null,
					this.props.header
				);
			}
		}
	}, {
		key: 'renderVCode',
		value: function renderVCode() {
			if (this.props.vcode) return _react2.default.createElement('img', { src: this.props.vcode });
		}
	}, {
		key: 'renderErrorIcon',
		value: function renderErrorIcon() {
			var iconClassName = "weui_icon_warn";
			if (this.props.error) return _react2.default.createElement('i', { className: iconClassName });
		}
	}, {
		key: 'renderFooter',
		value: function renderFooter() {

			return _react2.default.createElement(
				_cellFooter2.default,
				null,
				this.renderErrorIcon(),
				this.renderVCode()
			);
		}
	}, {
		key: 'render',
		value: function render() {

			var className = "weui_cell";
			var inputClassName = "weui_input";

			if (this.props.className) className += ' ' + this.props.className;
			if (this.props.vcode) className += ' weui_vcode';
			if (this.props.error) className += ' weui_cell_warn';
			if (this.props.select || this.props.selectBefore || this.props.selectAfter) className += ' weui_cell_select';
			if (this.props.selectBefore) className += '  weui_select_before';
			if (this.props.selectBefore) className += ' weui_select_before';
			return _react2.default.createElement(
				'label',
				{ className: className, htmlFor: this.props.id, onClick: this.handleClick },
				this.renderHeader(),
				_react2.default.createElement(
					_cellBody2.default,
					null,
					_react2.default.createElement('input', _extends({}, this.props, {
						role: 'input',
						className: inputClassName,
						onChange: this.handleChange,
						name: this.props.name,
						id: this.props.id,
						value: this.state.value,
						placeholder: this.props.placeholder }))
				),
				this.renderFooter()
			);
		}
	}]);

	return InputCell;
})(_react2.default.Component);

InputCell.propTypes = {
	error: _react2.default.PropTypes.bool,
	className: _react2.default.PropTypes.string,
	disabled: _react2.default.PropTypes.bool,
	type: _react2.default.PropTypes.string,
	name: _react2.default.PropTypes.string,
	onChange: _react2.default.PropTypes.func,
	value: _react2.default.PropTypes.any,
	id: _react2.default.PropTypes.string,
	onKeyPress: _react2.default.PropTypes.func,
	onFocus: _react2.default.PropTypes.func,
	required: _react2.default.PropTypes.bool,
	label: _react2.default.PropTypes.string,
	header: _react2.default.PropTypes.any,
	placeholder: _react2.default.PropTypes.string,
	vcode: _react2.default.PropTypes.string,
	select: _react2.default.PropTypes.bool,
	selectBefore: _react2.default.PropTypes.bool,
	selectAfter: _react2.default.PropTypes.bool
};

InputCell.defaultProps = {
	error: false,
	className: '',
	disabled: false,
	select: false,
	selectBefore: false,
	selectAfter: false
};

exports.default = InputCell;