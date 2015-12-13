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

describe('Toast', function () {
  it('[Shallow]should have default weui_toast class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.find('div.weui_toast')).to.have.length(1);
  });

  it('[Shallow]should have loading class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { loading: true }));
    (0, _chai.expect)(wrapper.hasClass('weui_loading_toast')).to.be.true;
  });

  it('[Shallow]should have loading class without icon', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { loading: true }));
    (0, _chai.expect)(wrapper.hasClass('weui_loading_toast')).to.be.true;
    (0, _chai.expect)(wrapper.contains(_react2.default.createElement('i', { className: 'weui_icon_toast' }))).to.be.false;
  });

  it('[Shallow]should have default toast icon', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.contains(_react2.default.createElement('i', { className: 'weui_icon_toast' }))).to.be.true;
  });

  it('[Shallow]should not be display', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.state().show).to.be.false;
  });

  it('[Shallow]should be display with mask', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { show: true }));
    (0, _chai.expect)(wrapper.state().show).to.be.true;
    (0, _chai.expect)(wrapper.find(_mask2.default)).to.have.length(1);
    (0, _chai.expect)(wrapper.find(_mask2.default).prop('show')).to.be.true;
  });
});