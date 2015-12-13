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

var Dialog = (function (_React$Component) {
  _inherits(Dialog, _React$Component);

  function Dialog(props) {
    _classCallCheck(this, Dialog);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).call(this, props));

    _this.state = {
      show: _this.props.show
    };
    return _this;
  }

  _createClass(Dialog, [{
    key: 'renderActions',
    value: function renderActions() {
      return this.props.actions.map(function (action, idx) {
        var className = (0, _classnames2.default)('weui_btn_dialog', {
          default: !action.primary,
          primary: action.primary
        }, action.className);

        return _react2.default.createElement(
          'a',
          _extends({ href: 'javascript:;', key: idx }, action, { className: className }),
          action.label
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)({
        weui_dialog_alert: this.props.type == 'alert',
        weui_dialog_confirm: this.props.type == 'confirm'
      });
      var contentClassName = (0, _classnames2.default)('weui_dialog', this.props.className);
      var dialogstyle = {
        display: this.state.show ? 'block' : 'none'
      };

      return _react2.default.createElement(
        'div',
        { id: this.props.id, className: className, style: dialogstyle },
        _react2.default.createElement(_mask2.default, { show: this.state.show, onClick: this.props.onMaskClick }),
        _react2.default.createElement(
          'div',
          _extends({}, this.props, {
            className: contentClassName }),
          _react2.default.createElement(
            'div',
            { className: 'weui_dialog_hd' },
            this.props.title ? _react2.default.createElement(
              'strong',
              { className: 'weui_dialog_title' },
              this.props.title
            ) : null,
            this.props.header
          ),
          _react2.default.createElement(
            'div',
            { className: 'weui_dialog_bd' },
            this.props.children
          ),
          _react2.default.createElement(
            'div',
            { className: 'weui_dialog_ft' },
            this.renderActions()
          )
        )
      );
    }
  }]);

  return Dialog;
})(_react2.default.Component);

Dialog.propTypes = {
  className: _react2.default.PropTypes.string,
  show: _react2.default.PropTypes.bool,
  type: _react2.default.PropTypes.string,
  header: _react2.default.PropTypes.any,
  title: _react2.default.PropTypes.string,
  actions: _react2.default.PropTypes.array,
  onMaskClick: _react2.default.PropTypes.func
};

Dialog.defaultProps = {
  actions: [],
  className: '',
  show: false,
  type: 'alert'
};

exports.default = Dialog;