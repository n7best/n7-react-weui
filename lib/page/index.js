'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _pageHeader = require('./page-header');

var _pageHeader2 = _interopRequireDefault(_pageHeader);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = (function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page).call(this, props));

    _this.state = {
      ptr: {
        isMoved: false,
        pullStarted: false,
        isTouched: false,
        isScrolling: undefined,
        wasScrolled: undefined,
        touchStart: {},
        touchStartTime: undefined,
        touchId: undefined,
        scrollTop: undefined,
        startTranslate: 0,
        translate: undefined,
        triggerDistance: _this.props.ptrTriggerDistance,
        touchesDiff: undefined,
        refresh: false
      }
    };

    _this.ptrTouchStart = _this.ptrTouchStart.bind(_this);
    _this.ptrTouchMove = _this.ptrTouchMove.bind(_this);
    _this.ptrTouchEnd = _this.ptrTouchEnd.bind(_this);
    _this.ptrRefresh = _this.ptrRefresh.bind(_this);
    _this.setPtr = _this.setPtr.bind(_this);
    _this.ptrDone = _this.ptrDone.bind(_this);
    _this.ptrDoneEvent = _this.ptrDoneEvent.bind(_this);
    return _this;
  }

  _createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.ptr) {
        var container = this.refs.container;
        container.addEventListener('touchstart', this.ptrTouchStart, false);
        container.addEventListener('touchmove', this.ptrTouchMove, false);
        container.addEventListener('touchend', this.ptrTouchEnd, false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.ptr) {
        var container = this.refs.container;
        container.removeEventListener('touchstart', this.ptrTouchStart, false);
        container.removeEventListener('touchmove', this.ptrTouchMove, false);
        container.removeEventListener('touchend', this.ptrTouchEnd, false);
      }
    }
  }, {
    key: 'ptrTouchStart',
    value: function ptrTouchStart(e) {
      var ptr = this.state.ptr;
      var $container = this.refs.container;

      if ($container.classList.contains('refreshing')) return;

      this.setPtr({
        isMoved: false,
        pullStarted: false,
        isTouched: true,
        isScrolling: undefined,
        wasScrolled: undefined,
        touchId: e.type === 'touchstart' ? e.targetTouches[0].identifier : undefined,
        touchesStart: {
          x: e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX,
          y: e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY
        },
        touchStartTime: new Date().getTime()
      });
    }
  }, {
    key: 'ptrTouchMove',
    value: function ptrTouchMove(e) {
      var ptr = this.state.ptr;
      var setPtr = this.setPtr;
      var $container = this.refs.container;

      if (!ptr.isTouched) return;
      var pageX = undefined,
          pageY = undefined,
          touch = undefined;
      if (e.type === 'touchmove') {
        if (this.state.ptr.touchId && e.touches) {
          for (var i = 0; i < e.touches.length; i++) {
            if (e.touches[i].identifier === ptr.touchId) {
              touch = e.touches[i];
            }
          }
        }
        if (!touch) touch = e.targetTouches[0];
        pageX = touch.pageX;
        pageY = touch.pageY;
      } else {
        pageX = e.pageX;
        pageY = e.pageY;
      }

      //console.log('xy:',pageX,pageY,touch);
      if (!pageX || !pageY) return;

      if (typeof ptr.isScrolling === 'undefined') {
        setPtr({ isScrolling: !!(ptr.isScrolling || Math.abs(pageY - ptr.touchesStart.y) > Math.abs(pageX - ptr.touchesStart.x)) });
      }

      if (!ptr.isScrolling) {
        setPtr({ isTouched: false });
        return;
      }

      setPtr({ scrollTop: $container.scrollTop });

      if (typeof ptr.wasScrolled === 'undefined' && ptr.scrollTop !== 0) setPtr({ wasScrolled: true });

      if (!ptr.isMoved) {
        $container.classList.remove('transitioning');
        if (ptr.scrollTop > $container.offsetHeight) {
          setPtr({ isTouched: false });
          return;
        }

        setPtr({ startTranslate: $container.classList.contains('refreshing') ? ptr.triggerDistance : 0 });

        if ($container.scrollHeight === $container.offsetHeight) {
          setPtr({ useTranslate: true });
        } else {
          setPtr({ useTranslate: false });
        }
      }

      setPtr({ isMoved: true });
      setPtr({ touchesDiff: pageY - ptr.touchesStart.y });

      if (ptr.touchesDiff > 0 && ptr.scrollTop <= 0 || ptr.scrollTop < 0) {
        // iOS 8 fix
        if (ptr.scrollTop === 0 && !ptr.wasScrolled) setPtr({ useTranslate: true });

        if (ptr.useTranslate) {
          e.preventDefault();
          setPtr({ translate: Math.pow(ptr.touchesDiff, 0.85) + ptr.startTranslate });
          $container.style.transform = 'translate3d(0,' + ptr.translate + 'px,0)';
          $container.style['-webkit-transform'] = 'translate3d(0,' + ptr.translate + 'px,0)';
        }

        if (ptr.useTranslate && Math.pow(ptr.touchesDiff, 0.85) > ptr.triggerDistance) {
          //console.log('trigger pull');
          setPtr({ refresh: true });
          $container.classList.add('pull-up');
          $container.classList.remove('pull-down');
        } else {
          //console.log('trigger down');
          setPtr({ refresh: false });
          $container.classList.remove('pull-up');
          $container.classList.add('pull-down');
        }

        if (!ptr.pullStarted) {
          //add pullstart callback
          setPtr({ pullStarted: true });
          if (this.props.onPullRefreshStart) {
            this.props.onPullRefreshStart(this, e);
          }
        }

        //add pullpull move callback
        if (this.props.onPullRefreshMove) {
          this.props.onPullRefreshMove(this, e);
        }
      } else {
        setPtr({ pullStarted: false, refresh: false });
        $container.classList.remove('pullup');
        $container.classList.remove('pulldown');
        return;
      }
    }
  }, {
    key: 'ptrTouchEnd',
    value: function ptrTouchEnd(e) {
      var ptr = this.state.ptr;
      var setPtr = this.setPtr;
      var $container = this.refs.container;

      if (e.type !== 'touchend') return;
      if (e.type === 'touchend' && e.changedTouches && e.changedTouches.length > 0 && ptr.touchId) {
        if (e.changedTouches[0].identifier !== ptr.touchId) return;
      }

      if (!ptr.isTouched || !ptr.isMoved) {
        setPtr({
          isTouched: false,
          isMoved: false
        });
        return;
      }

      if (ptr.translate) {
        $container.classList.add('transitioning');
        setPtr({ translate: 0 });
      }

      $container.style.transform = '';
      $container.style['-webkit-transform'] = '';

      if (ptr.refresh) {
        $container.classList.add('refreshing');
        if (!this.props.onRefresh) {
          this.ptrRefresh();
        } else {
          this.props.onRefresh(this);
        }
      } else {
        $container.classList.remove('pull-down');
      }

      setPtr({
        isTouched: false,
        isMoved: false
      });

      //tirrger end
      if (ptr.pullStarted && this.props.onPullRefreshEnd) {
        this.props.onPullRefreshEnd(this);
      }
    }
  }, {
    key: 'ptrRefresh',
    value: function ptrRefresh() {
      var _this2 = this;

      //simulate refresh
      var $container = this.refs.container;
      //console.log('refreshing');
      setTimeout(function () {
        $container.classList.remove('refreshing');
        $container.classList.add('transitioning');

        $container.addEventListener('transitionEnd', _this2.ptrDoneEvent);
        $container.addEventListener('webkitTransitionEnd', _this2.ptrDoneEvent);
      }, 2000);
    }
  }, {
    key: 'ptrDone',
    value: function ptrDone(e) {
      var $container = this.refs.container;
      $container.classList.remove('refreshing');
      $container.classList.add('transitioning');

      $container.addEventListener('transitionEnd', this.ptrDoneEvent);
      $container.addEventListener('webkitTransitionEnd', this.ptrDoneEvent);
    }
  }, {
    key: 'ptrDoneEvent',
    value: function ptrDoneEvent(e) {
      var $container = this.refs.container;
      $container.removeEventListener('transitionEnd', this.ptrDoneEvent);
      $container.removeEventListener('webkitTransitionEnd', this.ptrDoneEvent);

      $container.classList.remove('transitioning');
      $container.classList.remove('pull-up');
      $container.classList.remove('pull-down');
      //trigger finish
      if (this.props.onRefreshDone) {
        this.props.onRefreshDone(this, e);
      }
    }
  }, {
    key: 'setPtr',
    value: function setPtr(obj, callback) {
      var _this3 = this;

      var newptr = Object.assign(this.state.ptr, obj);

      this.setState({ ptr: newptr }, function () {
        if (typeof callback !== 'undefined') callback(_this3.state.ptr);
      });
    }
  }, {
    key: 'renderptr',
    value: function renderptr() {
      if (this.props.ptr) {
        return _react2.default.createElement(
          'div',
          { className: 'pull-to-refresh-layer' },
          _react2.default.createElement(
            'div',
            { className: 'preloader' },
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
          ),
          _react2.default.createElement('div', { className: 'pull-to-refresh-arrow' })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)({
        'page': !this.props.ptr,
        'pull-to-refresh-content': this.props.ptr
      });
      return _react2.default.createElement(
        'div',
        { className: className, ref: 'container' },
        this.renderptr(),
        _react2.default.createElement(_pageHeader2.default, { title: this.props.title, desc: this.props.desc }),
        this.props.children
      );
    }
  }]);

  return Page;
})(_react2.default.Component);

;

Page.propTypes = {
  className: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  desc: _react2.default.PropTypes.string,
  ptr: _react2.default.PropTypes.bool,
  ptrTriggerDistance: _react2.default.PropTypes.number,
  onRefresh: _react2.default.PropTypes.func,
  onRefreshDone: _react2.default.PropTypes.func,
  onPullRefreshStart: _react2.default.PropTypes.func,
  onPullRefreshMove: _react2.default.PropTypes.func,
  onPullRefreshEnd: _react2.default.PropTypes.func
};

Page.defaultProps = {
  className: '',
  ptr: false,
  ptrTriggerDistance: 44
};

exports.default = Page;