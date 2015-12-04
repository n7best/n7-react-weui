'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _swiper = require('./swiper');

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swiper = (function (_React$Component) {
    _inherits(Swiper, _React$Component);

    function Swiper(props) {
        _classCallCheck(this, Swiper);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Swiper).call(this, props));
    }

    _createClass(Swiper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.swiper = new _swiper2.default({
                container: '#' + this.props.id,
                direction: 'horizontal'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var className = (0, _classnames2.default)('swipercontainer', this.props.className);
            var style = {
                height: this.props.height
            };

            return _react2.default.createElement(
                'div',
                { className: 'swiperwrapper' },
                _react2.default.createElement(
                    'div',
                    { className: className, style: style, id: this.props.id },
                    _react2.default.createElement(
                        'div',
                        { className: 'swiper' },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Swiper;
})(_react2.default.Component);

Swiper.propTypes = {
    className: _react2.default.PropTypes.string,
    id: _react2.default.PropTypes.string.isRequired,
    height: _react2.default.PropTypes.number

};

Swiper.defaultProps = {
    className: '',
    height: 200
};

exports.default = Swiper;