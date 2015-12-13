'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mask = (function (_React$Component) {
  _inherits(Mask, _React$Component);

  function Mask(props) {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Mask).call(this, props));
  }

  _createClass(Mask, [{
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)({
        'weui_mask': !this.props.transparent && !this.props.fade,
        'weui_mask_transparent': this.props.transparent,
        'weui_mask_transition_fade': this.props.fade
      });

      var maskstyle = {
        display: this.props.show ? 'block' : 'none'
      };

      return _react2.default.createElement('div', _extends({}, this.props, {
        className: className,
        style: maskstyle }));
    }
  }]);

  return Mask;
})(_react2.default.Component);

Mask.propTypes = {
  transparent: _react2.default.PropTypes.bool,
  fade: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func,
  show: _react2.default.PropTypes.bool,
  opacity: _react2.default.PropTypes.number
};

Mask.defaultProps = {
  transparent: false,
  className: '',
  fade: false,
  show: false,
  opacity: 0.4
};

exports.default = Mask;