'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _events = require('../utils/events');

var _events2 = _interopRequireDefault(_events);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = (function (_React$Component) {
	_inherits(Select, _React$Component);

	function Select(props) {
		_classCallCheck(this, Select);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

		_this.handleChange = _this.handleChange.bind(_this);
		_this.state = {
			value: _this.props.value
		};
		return _this;
	}

	_createClass(Select, [{
		key: 'renderItems',
		value: function renderItems() {
			return this.props.data.map(function (item, i) {
				return _react2.default.createElement(
					'option',
					{
						value: item.value,
						key: i
					},
					item.label
				);
			});
		}
	}, {
		key: 'handleChange',
		value: function handleChange(e) {
			var _this2 = this;

			this.setState({ value: e.target.value }, function () {
				if (_this2.props.onChange) _this2.props.onChange(event, _this2);
			});
		}
	}, {
		key: 'render',
		value: function render() {

			var className = "weui_select";
			if (this.props.className) className += ' ' + this.props.className;
			return _react2.default.createElement(
				'select',
				_extends({}, this.props, {
					className: className,
					name: this.props.name,
					id: this.props.id,
					onChange: this.handleChange,
					value: this.state.value }),
				this.renderItems()
			);
		}
	}]);

	return Select;
})(_react2.default.Component);

Select.propTypes = {
	data: _react2.default.PropTypes.any,
	className: _react2.default.PropTypes.string,
	disabled: _react2.default.PropTypes.bool,
	name: _react2.default.PropTypes.string,
	onChange: _react2.default.PropTypes.func,
	value: _react2.default.PropTypes.any,
	id: _react2.default.PropTypes.string

};

Select.defaultProps = {
	checked: false,
	className: '',
	disabled: false,
	data: []
};

exports.default = Select;