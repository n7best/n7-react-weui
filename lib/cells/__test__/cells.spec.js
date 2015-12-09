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

var _cellsTitle = require('../cells-title');

var _cellsTitle2 = _interopRequireDefault(_cellsTitle);

var _cellsTips = require('../cells-tips');

var _cellsTips2 = _interopRequireDefault(_cellsTips);

var _radioCells = require('../radio-cells');

var _radioCells2 = _interopRequireDefault(_radioCells);

var _radioCell = require('../radio-cell');

var _radioCell2 = _interopRequireDefault(_radioCell);

var _checkboxCell = require('../checkbox-cell');

var _checkboxCell2 = _interopRequireDefault(_checkboxCell);

var _switchCell = require('../switch-cell');

var _switchCell2 = _interopRequireDefault(_switchCell);

var _chai = require('chai');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Cells', function () {

  it('should have title [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_cells2.default, { title: 'test1', tips: 'test2' }));
    (0, _chai.expect)(wrapper.contains(_react2.default.createElement(
      _cellsTitle2.default,
      null,
      'test1'
    ))).to.be.true;
    (0, _chai.expect)(wrapper.find(_cellsTitle2.default).shallow().find('.weui_cells_title').text()).to.equal('test1');
  });

  it('should have tips [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_cells2.default, { title: 'test1', tips: 'test2' }));
    (0, _chai.expect)(wrapper.contains(_react2.default.createElement(
      _cellsTips2.default,
      null,
      'test2'
    ))).to.be.true;
    (0, _chai.expect)(wrapper.find(_cellsTips2.default).shallow().find('.weui_cells_tips').text()).to.equal('test2');
  });

  it('should have cell [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cells2.default,
      null,
      _react2.default.createElement(
        _cell2.default,
        null,
        'test'
      )
    ));
    (0, _chai.expect)(wrapper.find(_cell2.default).shallow().find('.weui_cell').text()).to.equal('test');
  });

  it('should have access class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_cells2.default, { access: true }));
    (0, _chai.expect)(wrapper.find('.weui_cells').hasClass('weui_cells_access')).to.be.true;
  });

  it('should have radio class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_cells2.default, { radio: true }));
    (0, _chai.expect)(wrapper.find('.weui_cells').hasClass('weui_cells_radio')).to.be.true;
  });

  it('should have checkbox class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_cells2.default, { checkbox: true }));
    (0, _chai.expect)(wrapper.find('.weui_cells').hasClass('weui_cells_checkbox')).to.be.true;
  });

  it('should have access class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_cells2.default, { form: true }));
    (0, _chai.expect)(wrapper.find('.weui_cells').hasClass('weui_cells_form')).to.be.true;
  });
});

describe('Cell', function () {

  it('should have title [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_cells2.default, { title: 'test1', tips: 'test2' }));
    (0, _chai.expect)(wrapper.contains(_react2.default.createElement(
      _cellsTitle2.default,
      null,
      'test1'
    ))).to.be.true;
    (0, _chai.expect)(wrapper.find(_cellsTitle2.default).shallow().find('.weui_cells_title').text()).to.equal('test1');
  });

  it('should have tips [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_cells2.default, { title: 'test1', tips: 'test2' }));
    (0, _chai.expect)(wrapper.contains(_react2.default.createElement(
      _cellsTips2.default,
      null,
      'test2'
    ))).to.be.true;
    (0, _chai.expect)(wrapper.find(_cellsTips2.default).shallow().find('.weui_cells_tips').text()).to.equal('test2');
  });

  it('should have cell custome class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cells2.default,
      null,
      _react2.default.createElement(_cell2.default, { className: 'testclass' })
    ));
    (0, _chai.expect)(wrapper.find(_cell2.default).shallow().hasClass('testclass')).to.be.true;
  });

  it('should have be an anchor element [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cells2.default,
      null,
      _react2.default.createElement(_cell2.default, { link: 'test' })
    ));
    (0, _chai.expect)(wrapper.find(_cell2.default).shallow().is('a')).to.be.true;
  });

  it('should have select class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cells2.default,
      null,
      _react2.default.createElement(_cell2.default, { select: true })
    ));
    (0, _chai.expect)(wrapper.find(_cell2.default).shallow().is('.weui_cell_select')).to.be.true;
  });

  it('should have select class and select after class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cells2.default,
      null,
      _react2.default.createElement(_cell2.default, { selectAfter: true })
    ));
    (0, _chai.expect)(wrapper.find(_cell2.default).shallow().is('.weui_cell_select.weui_select_after')).to.be.true;
  });

  it('should have select class and select before class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cells2.default,
      null,
      _react2.default.createElement(_cell2.default, { selectBefore: true })
    ));
    (0, _chai.expect)(wrapper.find(_cell2.default).shallow().is('.weui_cell_select.weui_select_before')).to.be.true;
  });
});

describe('Cell Content', function () {
  it('body should have primary class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cell2.default,
      null,
      _react2.default.createElement(
        _cellBody2.default,
        null,
        'test'
      )
    ));
    (0, _chai.expect)(wrapper.find(_cellBody2.default).shallow().is('.weui_cell_bd.weui_cell_primary')).to.be.true;
  });

  it('body should have content [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cell2.default,
      null,
      _react2.default.createElement(
        _cellBody2.default,
        null,
        'test'
      )
    ));
    (0, _chai.expect)(wrapper.find(_cellBody2.default).shallow().find('.weui_cell_bd').text()).to.equal('test');
  });

  it('Header should have primary class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cell2.default,
      null,
      _react2.default.createElement(
        _cellHeader2.default,
        { primary: true },
        'test'
      )
    ));
    (0, _chai.expect)(wrapper.find(_cellHeader2.default).shallow().is('.weui_cell_hd.weui_cell_primary')).to.be.true;
  });

  it('Header should have content [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cell2.default,
      null,
      _react2.default.createElement(
        _cellHeader2.default,
        null,
        'test'
      )
    ));
    (0, _chai.expect)(wrapper.find(_cellHeader2.default).shallow().find('.weui_cell_hd').text()).to.equal('test');
  });

  it('Footer should have primary class [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cell2.default,
      null,
      _react2.default.createElement(
        _cellFooter2.default,
        { primary: true },
        'test'
      )
    ));
    (0, _chai.expect)(wrapper.find(_cellFooter2.default).shallow().is('.weui_cell_ft.weui_cell_primary')).to.be.true;
  });

  it('Footer should have content [Shallow]', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
      _cell2.default,
      null,
      _react2.default.createElement(
        _cellFooter2.default,
        null,
        'test'
      )
    ));
    (0, _chai.expect)(wrapper.find(_cellFooter2.default).shallow().find('.weui_cell_ft').text()).to.equal('test');
  });
});

describe('Radio Group', function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
    _radioCells2.default,
    { name: 'danxuan', value: '1', title: 'test1', tips: 'test2', className: 'testclass' },
    _react2.default.createElement(_radioCell2.default, { label: 'radio cell 1', value: '1' }),
    _react2.default.createElement(_radioCell2.default, { label: 'radio cell 2', value: '2', disabled: true })
  ));

  it('Cells should have title [Shallow]', function () {
    (0, _chai.expect)(wrapper.contains(_react2.default.createElement(
      _cellsTitle2.default,
      null,
      'test1'
    ))).to.be.true;
    (0, _chai.expect)(wrapper.find(_cellsTitle2.default).shallow().find('.weui_cells_title').text()).to.equal('test1');
  });

  it('Cells should have tips [Shallow]', function () {
    (0, _chai.expect)(wrapper.contains(_react2.default.createElement(
      _cellsTips2.default,
      null,
      'test2'
    ))).to.be.true;
    (0, _chai.expect)(wrapper.find(_cellsTips2.default).shallow().find('.weui_cells_tips').text()).to.equal('test2');
  });

  it('Cells should have custom class [Shallow]', function () {
    (0, _chai.expect)(wrapper.find('.testclass')).to.have.length(1);
  });

  it('Cells should have name [Shallow]', function () {
    (0, _chai.expect)(wrapper.find('.testclass').prop('name')).to.equal('danxuan');
  });

  it('Cells should have value [Shallow]', function () {
    (0, _chai.expect)(wrapper.find('.testclass').prop('value')).to.equal('1');
  });

  it('Cells state should have value [Shallow]', function () {
    (0, _chai.expect)(wrapper.state('value')).to.equal('1');
  });

  it('Cells should have 2 radio cell', function () {
    (0, _chai.expect)(wrapper.find('.testclass').find(_radioCell2.default)).to.have.length(2);
  });

  it('Cell should be type label', function () {
    (0, _chai.expect)(wrapper.find('.testclass').children().first().shallow().type()).to.equal('label');
  });

  it('Cell should have body with label test', function () {
    var cell1 = wrapper.find('.testclass').children().first().shallow();
    (0, _chai.expect)(cell1.find(_cellBody2.default).shallow().text()).to.equal('radio cell 1');
    var cell2 = wrapper.find('.testclass').children().last().shallow();
    (0, _chai.expect)(cell2.find(_cellBody2.default).shallow().text()).to.equal('radio cell 2');
  });

  it('Cell should have their value', function () {
    var cell1 = wrapper.find('.testclass').children().first().shallow();
    (0, _chai.expect)(cell1.find(_cellFooter2.default).shallow().find('input.weui_check').prop('value')).to.equal('1');
    var cell2 = wrapper.find('.testclass').children().last().shallow();
    (0, _chai.expect)(cell2.find(_cellFooter2.default).shallow().find('input.weui_check').prop('value')).to.equal('2');
  });

  it('Cell should have footer that have input with class', function () {
    var cell1 = wrapper.find('.testclass').children().first().shallow();
    (0, _chai.expect)(cell1.find(_cellFooter2.default).shallow().find('input.weui_check')).to.have.length(1);
  });

  it('Cell2 should be disabled', function () {
    var cell2 = wrapper.find('.testclass').children().last().shallow();
    (0, _chai.expect)(cell2.find(_cellFooter2.default).shallow().find('input.weui_check').prop('disabled')).to.be.true;
  });
});

describe('Checkbox Group', function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
    _cells2.default,
    { checkbox: true },
    _react2.default.createElement(_checkboxCell2.default, { name: 'checkbox1', id: 's11', label: 'uncheck cell', checked: true }),
    _react2.default.createElement(_checkboxCell2.default, { name: 'checkbox2', id: 's12', label: 'checked cell' })
  ));

  it('Cells should have 2 checkbox cell', function () {
    (0, _chai.expect)(wrapper.find(_checkboxCell2.default)).to.have.length(2);
  });

  it('Cell should be type label', function () {
    (0, _chai.expect)(wrapper.find(_checkboxCell2.default).first().shallow().type()).to.equal('label');
  });

  it('Cell should have footer with label test', function () {
    var cell1 = wrapper.find(_checkboxCell2.default).first().shallow();
    (0, _chai.expect)(cell1.find(_cellBody2.default).shallow().text()).to.equal('uncheck cell');
    var cell2 = wrapper.find(_checkboxCell2.default).last().shallow();
    (0, _chai.expect)(cell2.find(_cellBody2.default).shallow().text()).to.equal('checked cell');
  });

  it('Cell should have their name', function () {
    var cell1 = wrapper.find(_checkboxCell2.default).first().shallow();
    (0, _chai.expect)(cell1.find(_cellHeader2.default).shallow().find('input.weui_check').prop('name')).to.equal('checkbox1');
    var cell2 = wrapper.find(_checkboxCell2.default).last().shallow();
    (0, _chai.expect)(cell2.find(_cellHeader2.default).shallow().find('input.weui_check').prop('name')).to.equal('checkbox2');
  });

  it('Cell should have body that have input with class', function () {
    var cell1 = wrapper.find(_checkboxCell2.default).first().shallow();
    (0, _chai.expect)(cell1.find(_cellHeader2.default).shallow().find('input.weui_check')).to.have.length(1);
  });

  it('Cell1 should be check by default', function () {
    var cell1 = wrapper.find(_checkboxCell2.default).first().shallow();
    (0, _chai.expect)(cell1.find(_cellHeader2.default).shallow().find('input.weui_check').prop('checked')).to.be.true;
  });
});

describe('SwitchCell', function () {
  var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
    _cells2.default,
    { form: true },
    _react2.default.createElement(_switchCell2.default, { name: 'switch1', id: 'sw1', label: 'test' })
  ));

  it('Cells should have switch cell', function () {
    (0, _chai.expect)(wrapper.find(_switchCell2.default)).to.have.length(1);
  });

  it('Cell should be type label', function () {
    (0, _chai.expect)(wrapper.find(_switchCell2.default).shallow().type()).to.equal('label');
  });

  it('Cell should have footer with label test', function () {
    var cell1 = wrapper.find(_switchCell2.default).shallow();
    (0, _chai.expect)(cell1.find(_cellBody2.default).shallow().text()).to.equal('test');
  });

  it('Cell should have their name', function () {
    var cell1 = wrapper.find(_switchCell2.default).shallow();
    (0, _chai.expect)(cell1.find(_cellFooter2.default).shallow().find('input.weui_switch').prop('name')).to.equal('switch1');
  });

  it('Cell should have footer that have input with class', function () {
    var cell1 = wrapper.find(_switchCell2.default).shallow();
    (0, _chai.expect)(cell1.find(_cellFooter2.default).shallow().find('input.weui_switch')).to.have.length(1);
  });
});