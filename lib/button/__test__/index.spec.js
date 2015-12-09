'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Button', function () {

  it('[Shallow]should have default weui_btn class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.hasClass('weui_btn')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('weui_btn_default')).to.be.true;
  });

  it('[Shallow]should have primary weui_btn class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { type: 'primary' }));
    (0, _chai.expect)(wrapper.hasClass('weui_btn')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('weui_btn_primary')).to.be.true;
  });

  it('[Shallow]should have disabled class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { disabled: true }));
    (0, _chai.expect)(wrapper.hasClass('weui_btn')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('weui_btn_default')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('weui_btn_disabled')).to.be.true;
  });

  it('[Shallow]should have primary disabled class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { type: 'primary', disabled: true }));
    (0, _chai.expect)(wrapper.hasClass('weui_btn')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('weui_btn_primary')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('weui_btn_disabled')).to.be.true;
  });

  it('[Shallow]should have mini class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { mini: true }));
    (0, _chai.expect)(wrapper.hasClass('weui_btn')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('weui_btn_mini')).to.be.true;
  });

  it('[Shallow]should have warn plain button class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { type: 'warn', plain: true }));
    (0, _chai.expect)(wrapper.hasClass('weui_btn')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('weui_btn_plain_warn')).to.be.true;
  });

  it('[Shallow]should have primary plain disabled class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { type: 'primary', plain: true, disabled: true }));
    (0, _chai.expect)(wrapper.hasClass('weui_btn')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('weui_btn_plain_primary')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('weui_btn_disabled')).to.be.true;
  });

  (0, _enzyme.describeWithDOM)('[JSDOM] Button Event Check', function () {
    it('click events should work', function () {
      var onButtonClick = _enzyme.sinon.spy();
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { id: 'testbutton', onClick: onButtonClick }));
      wrapper.find('#testbutton').simulate('click');
      (0, _chai.expect)(onButtonClick.calledOnce).to.be.true;
    });
  });
});