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

var _cellsTitle = require('./cells-title');

var _cellsTitle2 = _interopRequireDefault(_cellsTitle);

var _radioCell = require('./radio-cell');

var _radioCell2 = _interopRequireDefault(_radioCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioCells = (function (_React$Component) {
	_inherits(RadioCells, _React$Component);

	function RadioCells(props) {
		_classCallCheck(this, RadioCells);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RadioCells).call(this, props));

		_this.state = {
			value: _this.props.value
		};

		return _this;
	}

	_createClass(RadioCells, [{
		key: 'handleChange',
		value: function handleChange(value, event) {
			var _this2 = this;

			this.setState({ value: value }, function () {
				if (_this2.props.onChange) _this2.props.onChange(event, _this2);
			});
		}
	}, {
		key: 'renderRadioCells',
		value: function renderRadioCells() {
			var _this3 = this;

			return _react2.default.Children.map(this.props.children, function (radio, idx) {
				return _react2.default.createElement(_radioCell2.default, _extends({}, radio.props, {
					checked: radio.props.value === _this3.state.value,
					disabled: _this3.props.disabled || radio.props.disabled,
					key: idx,
					label: radio.props.label,
					onChange: _this3.handleChange.bind(_this3, radio.props.value),
					value: radio.props.value
				}));
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var className = "weui_cells weui_cells_radio";
			if (this.props.className) className += ' ' + this.props.className;
			if (this.props.split) className += ' weui_cell_split';
			if (this.props.access) className += ' weui_cells_access';

			var cellsTitle = undefined,
			    cellsTips = undefined;
			if (this.props.title) cellsTitle = _react2.default.createElement(
				_cellsTitle2.default,
				null,
				this.props.title
			);
			if (this.props.tips) celssTips = _react2.default.createElement(
				CellsTips,
				null,
				this.props.tips
			);

			return _react2.default.createElement(
				'div',
				null,
				cellsTitle,
				_react2.default.createElement(
					'div',
					{ className: className },
					this.renderRadioCells()
				),
				cellsTips
			);
		}
	}]);

	return RadioCells;
})(_react2.default.Component);

RadioCells.propTypes = {
	className: _react2.default.PropTypes.string,
	name: _react2.default.PropTypes.string,
	disabled: _react2.default.PropTypes.bool,
	value: _react2.default.PropTypes.any,
	onChange: _react2.default.PropTypes.func,
	title: _react2.default.PropTypes.string,
	split: _react2.default.PropTypes.bool,
	access: _react2.default.PropTypes.bool

};

RadioCells.defaultProps = {
	className: '',
	disabled: false
};

exports.default = RadioCells;