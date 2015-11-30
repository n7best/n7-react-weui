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

var _mask = require('../mask');

var _mask2 = _interopRequireDefault(_mask);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Actionsheet = (function (_React$Component) {
	_inherits(Actionsheet, _React$Component);

	function Actionsheet(props) {
		_classCallCheck(this, Actionsheet);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Actionsheet).call(this, props));

		_this.state = {
			show: _this.props.show
		};
		return _this;
	}

	_createClass(Actionsheet, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.toogleActionsheet();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this.toogleActionsheet();
		}
	}, {
		key: 'toogleActionsheet',
		value: function toogleActionsheet() {
			var node = this.refs.actionsheet;
			if (this.state.show) {
				node.className = node.className + ' weui_actionsheet_toggle';
			} else {
				node.className = 'weui_actionsheet';
			}
		}
	}, {
		key: 'renderActions',
		value: function renderActions() {
			var actions = this.props.actions.map(function (action, idx) {
				var className = (0, _classnames2.default)('weui_actionsheet_cell');
				if (action.className) className += ' ' + action.className;
				return _react2.default.createElement(
					'div',
					_extends({ href: 'javascript:;', key: idx }, action, { className: className }),
					action.label
				);
			});

			return _react2.default.createElement(
				'div',
				{ className: 'weui_actionsheet_action' },
				actions
			);
		}
	}, {
		key: 'renderMenus',
		value: function renderMenus() {
			var menus = this.props.menus.map(function (menu, idx) {
				var className = (0, _classnames2.default)('weui_actionsheet_cell');
				if (menu.className) className += ' ' + menu.className;
				return _react2.default.createElement(
					'div',
					_extends({ href: 'javascript:;', key: idx }, menu, { className: className }),
					menu.label
				);
			});

			return _react2.default.createElement(
				'div',
				{ className: 'weui_actionsheet_menu' },
				menus
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var className = (0, _classnames2.default)('weui_actionsheet', this.props.className);

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_mask2.default, { show: this.state.show, fade: true, onClick: this.props.onMaskClick }),
				_react2.default.createElement(
					'div',
					{
						id: this.props.id,
						className: className,
						ref: 'actionsheet'
					},
					this.renderMenus(),
					this.renderActions()
				)
			);
		}
	}]);

	return Actionsheet;
})(_react2.default.Component);

Actionsheet.propTypes = {
	className: _react2.default.PropTypes.string,
	show: _react2.default.PropTypes.bool,
	actions: _react2.default.PropTypes.array,
	menus: _react2.default.PropTypes.array,
	onMaskClick: _react2.default.PropTypes.func
};

Actionsheet.defaultProps = {
	actions: [],
	menus: [],
	className: '',
	show: false
};

exports.default = Actionsheet;