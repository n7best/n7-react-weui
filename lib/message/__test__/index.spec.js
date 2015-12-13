'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _button = require('../../button');

var _button2 = _interopRequireDefault(_button);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Message', function () {
  it('[Shallow]should have default weui_msg class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.find('.weui_msg')).to.have.length(1);
  });

  var wrapper2 = (0, _enzyme.shallow)(_react2.default.createElement(
    _index2.default,
    {
      icon: _react2.default.createElement('i', { className: 'weui_icon_success weui_icon_msg' }),
      title: 'testtitle',
      extra: _react2.default.createElement(
        'a',
        { href: '' },
        'testextra'
      ),
      actions: [{ label: "button1", type: "primary" }, { label: "button2" }]
    },
    'testcontent'
  ));

  it('[Shallow]should have default weui_msg class', function () {
    (0, _chai.expect)(wrapper2.find('.weui_icon_area').html()).to.equal('<div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>');
  });

  it('[Shallow]should have title', function () {
    (0, _chai.expect)(wrapper2.find('.weui_msg_title').text()).to.equal('testtitle');
  });

  it('[Shallow]should have content', function () {
    (0, _chai.expect)(wrapper2.find('.weui_msg_desc').text()).to.equal('testcontent');
  });

  it('[Shallow]should have extra text', function () {
    (0, _chai.expect)(wrapper2.find('.weui_extra_area').text()).to.equal('testextra');
  });

  it('[Shallow]should have 2 button', function () {
    (0, _chai.expect)(wrapper2.find('.weui_btn_area').find(_button2.default)).to.have.length(2);
  });

  it('[Shallow]should have 1 primary button', function () {
    (0, _chai.expect)(wrapper2.find('.weui_btn_area').find(_button2.default).first().shallow().hasClass('weui_btn_primary')).to.be.true;
  });

  it('[Shallow]should have 2 should have label', function () {
    (0, _chai.expect)(wrapper2.find('.weui_btn_area').find(_button2.default).last().shallow().text()).to.equal('button2');
  });
});