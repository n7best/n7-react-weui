'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _cells = require('../cells');

var _cells2 = _interopRequireDefault(_cells);

var _cell = require('../cell');

var _cell2 = _interopRequireDefault(_cell);

var _cellHeader = require('../cell-header');

var _cellHeader2 = _interopRequireDefault(_cellHeader);

var _cellBody = require('../cell-body');

var _cellBody2 = _interopRequireDefault(_cellBody);

var _cellFooter = require('../cell-footer');

var _cellFooter2 = _interopRequireDefault(_cellFooter);

var _chai = require('chai');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Cells', function () {

  it('should render Cells,CellsTips, CellsTitle', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_cells2.default, { title: 'test1', tips: 'test2' }));
    (0, _chai.expect)(wrapper.find('.weui_cells')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('div.weui_cells_title')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('div.weui_cells_title').text()).to.equal('test1');
    (0, _chai.expect)(wrapper.find('div.weui_cells_tips')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('div.weui_cells_tips').text()).to.equal('test2');
  });
});

describe('Cells Cell combo', function () {

  it('should render Cells with Cell with custome class, has body of title and footer of desc', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _cells2.default,
      { title: 'test1' },
      _react2.default.createElement(
        _cell2.default,
        { className: 'customeclass' },
        _react2.default.createElement(
          _cellBody2.default,
          null,
          'title'
        ),
        _react2.default.createElement(
          _cellFooter2.default,
          null,
          'desc'
        )
      )
    ));
    (0, _chai.expect)(wrapper.find('.weui_cells')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('div.weui_cells_title')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('div.weui_cells_title').text()).to.equal('test1');
    (0, _chai.expect)(wrapper.find('div.weui_cell')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('div.weui_cell').hasClass('customeclass')).to.be.true;
    (0, _chai.expect)(wrapper.find('span.weui_cell_bd')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('span.weui_cell_bd').text()).to.equal('title');
    (0, _chai.expect)(wrapper.find('span.weui_cell_ft')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('span.weui_cell_ft').text()).to.equal('desc');
  });

  it('should render 2 cell', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _cells2.default,
      { title: 'test1', split: true },
      _react2.default.createElement(_cell2.default, null),
      _react2.default.createElement(_cell2.default, null)
    ));
    (0, _chai.expect)(wrapper.find('.weui_cells.weui_cells_access')).to.have.length(0);
    (0, _chai.expect)(wrapper.find('div.weui_cell')).to.have.length(2);
  });

  it('should render 2 link cell', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
      _cells2.default,
      { title: 'test1', access: true },
      _react2.default.createElement(_cell2.default, { link: 'test' }),
      _react2.default.createElement(_cell2.default, { link: 'test2' })
    ));
    (0, _chai.expect)(wrapper.find('.weui_cells.weui_cells_access')).to.have.length(1);
    (0, _chai.expect)(wrapper.find('a.weui_cell')).to.have.length(2);
  });
});