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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = (function (_React$Component) {
			_inherits(Toast, _React$Component);

			function Toast(props) {
						_classCallCheck(this, Toast);

						var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Toast).call(this, props));

						_this.state = {
									show: _this.props.show,
									timeout: null
						};
						return _this;
			}

			_createClass(Toast, [{
						key: 'componentDidMount',
						value: function componentDidMount() {
									var _this2 = this;

									if (this.props.time) {
												this.setState({ timeout: setTimeout(function () {
																		_this2.setState({ show: false });
																		if (_this2.onFinish) _this2.onFinish(_this2);
															}, this.props.time) });
									}
						}
			}, {
						key: 'componentWillUnmount',
						value: function componentWillUnmount() {
									clearTimeout(this.state.timeout);
						}
			}, {
						key: 'renderloading',
						value: function renderloading() {
									if (this.props.loading) {
												return _react2.default.createElement(
															'div',
															{ className: 'weui_loading' },
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_0' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_1' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_2' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_3' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_4' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_5' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_6' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_7' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_8' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_9' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_10' }),
															_react2.default.createElement('div', { className: 'weui_loading_leaf weui_loading_leaf_11' })
												);
									}
						}
			}, {
						key: 'render',
						value: function render() {
									var className = 'weui_toast';
									var contentClassName = 'weui_toast_content';
									var loadingClassName = this.props.loading ? 'weui_loading_toast' : null;
									var icon = this.props.icon ? this.props.icon : _react2.default.createElement('i', { className: 'weui_icon_toast' });
									if (this.props.loading) icon = null;

									if (this.props.className) className += ' ' + this.props.className;

									var toaststyle = {
												display: this.state.show ? 'block' : 'none'
									};

									return _react2.default.createElement(
												'div',
												{ id: this.props.id, className: loadingClassName, style: toaststyle },
												_react2.default.createElement(_mask2.default, { show: this.state.show, transparent: true }),
												_react2.default.createElement(
															'div',
															_extends({}, this.props, {
																		className: className,
																		onClick: this.props.onClick
															}),
															icon,
															this.renderloading(),
															_react2.default.createElement(
																		'p',
																		{ className: contentClassName },
																		this.props.children
															)
												)
									);
						}
			}]);

			return Toast;
})(_react2.default.Component);

Toast.propTypes = {
			className: _react2.default.PropTypes.string,
			onClick: _react2.default.PropTypes.func,
			onFinish: _react2.default.PropTypes.func,
			show: _react2.default.PropTypes.bool,
			time: _react2.default.PropTypes.any,
			loading: _react2.default.PropTypes.bool,
			icon: _react2.default.PropTypes.any
};

Toast.defaultProps = {
			className: '',
			fade: false,
			show: false,
			time: false,
			loading: false,
			icon: false
};

exports.default = Toast;