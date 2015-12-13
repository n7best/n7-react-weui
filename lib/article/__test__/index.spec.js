'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _chai = require('chai');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Article', function () {
  it('[Shallow]should have default weui_article class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
    (0, _chai.expect)(wrapper.hasClass('weui_article')).to.be.true;
  });

  it('[Shallow]should have custom class', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { className: 'test' }));
    (0, _chai.expect)(wrapper.hasClass('weui_article')).to.be.true;
    (0, _chai.expect)(wrapper.hasClass('test')).to.be.true;
  });
});