'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _mask = require('../../mask');

var _mask2 = _interopRequireDefault(_mask);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Dialog', function () {

  it('[Shallow]should have default weui_btn_dialog class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.find('.weui_dialog')).to.have.length(1);
  });

  it('[Shallow]should have alert class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.find('div.weui_dialog_alert')).to.have.length(1);
  });

  it('[Shallow]should have confirm class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { type: 'confirm' }));
    (0, _chai.expect)(wrapper.find('div.weui_dialog_confirm')).to.have.length(1);
  });

  it('[Shallow]should have mask with title', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { title: 'test' }));
    (0, _chai.expect)(wrapper.find('div.weui_dialog_alert').text()).to.equal('<Mask />test');
  });

  var wrapper2 = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { title: '弹窗标题', type: 'confirm', show: true,
    actions: [{
      label: "button1",
      onClick: function onClick(e) {
        //
      }
    }, {
      label: "button2",
      primary: true,
      onClick: function onClick(e) {
        //
      }
    }] }));

  it('[Shallow]should have 2 button', function () {
    (0, _chai.expect)(wrapper2.find('div.weui_dialog_ft').find('a')).to.have.length(2);
  });

  it('[Shallow]button 1 should have text button1', function () {
    (0, _chai.expect)(wrapper2.find('div.weui_dialog_ft').find('a').first().text()).to.equal('button1');
  });

  it('[Shallow]button 2 should be primary', function () {
    (0, _chai.expect)(wrapper2.find('div.weui_dialog_ft').find('a').last().hasClass('primary')).to.be.true;
  });

  it('[Shallow]should be display', function () {
    (0, _chai.expect)(wrapper2.state().show).to.be.true;
  });

  it('[Shallow]should be display with normal mask', function () {
    (0, _chai.expect)(wrapper2.find(_mask2.default).shallow().props().show).to.be.true;
    (0, _chai.expect)(wrapper2.find(_mask2.default).shallow().hasClass('weui_mask')).to.be.true;
  });
});