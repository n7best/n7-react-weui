'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Progress', function () {
  it('[Shallow]should have default weui_progress class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.find('.weui_progress')).to.have.length(1);
  });

  it('[Shallow]should have inner bar', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.find('.weui_progress_inner_bar')).to.have.length(1);
  });

  it('[Shallow]should have default percent of 0', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.find('.weui_progress_inner_bar').html()).to.equal('<div class="weui_progress_inner_bar" style="width:0%;"></div>');
  });

  it('[Shallow]should have percent of 66', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { percent: 66 }));
    (0, _chai.expect)(wrapper.find('.weui_progress_inner_bar').html()).to.equal('<div class="weui_progress_inner_bar" style="width:66%;"></div>');
  });

  it('[Shallow]should have opr div', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.find('.weui_progress_opr')).to.have.length(1);
  });

  it('[Shallow]should have test opr content', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _index2.default,
      null,
      'test'
    ));
    (0, _chai.expect)(wrapper.find('.weui_progress_opr').text()).to.equal('test');
  });
});