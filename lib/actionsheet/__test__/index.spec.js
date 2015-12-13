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

describe('Article', function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { show: true,
    actions: [{
      label: "action1",
      onClick: function onClick(e) {
        return null;
      }
    }],
    menus: [{ label: "menu1", onClick: function onClick() {
        return null;
      } }, { label: "menu2", onClick: function onClick() {
        return null;
      } }, { label: "menu3", onClick: function onClick() {
        return null;
      } }, { label: "menu4", onClick: function onClick() {
        return null;
      } }],
    onMaskClick: function onMaskClick(e) {
      return null;
    } }));

  it('[Shallow]should have weui_actionsheet class', function () {
    (0, _chai.expect)(wrapper.find('div.weui_actionsheet')).to.have.length(1);
  });

  it('[Shallow]should be seen by default', function () {
    (0, _chai.expect)(wrapper.state().show).to.be.true;
  });

  it('[Shallow]should have mask', function () {
    (0, _chai.expect)(wrapper.find(_mask2.default)).to.have.length(1);
  });

  it('[Shallow]should have mask with fade style', function () {
    (0, _chai.expect)(wrapper.find(_mask2.default).shallow().hasClass('weui_mask_transition_fade')).to.be.true;
  });

  it('[Shallow]should have 4 menu button', function () {
    (0, _chai.expect)(wrapper.find('.weui_actionsheet_menu').find('div.weui_actionsheet_cell')).to.have.length(4);
  });

  it('[Shallow]should have 1 action button', function () {
    (0, _chai.expect)(wrapper.find('.weui_actionsheet_action').find('div.weui_actionsheet_cell')).to.have.length(1);
  });

  it('[Shallow]menu button should have label', function () {
    (0, _chai.expect)(wrapper.find('.weui_actionsheet_menu').find('div.weui_actionsheet_cell').last().text()).to.equal('menu4');
  });

  it('[Shallow]action button should have label', function () {
    (0, _chai.expect)(wrapper.find('.weui_actionsheet_action').find('div.weui_actionsheet_cell').text()).to.equal('action1');
  });
});