import React from 'react';
import { shallow,describeWithDOM,mount,spyLifecycle } from 'enzyme';
import Cells from '../cells';
import Cell from '../cell';
import CellHeader from '../cell-header';
import CellBody from '../cell-body';
import CellFooter from '../cell-footer';
import CellsTitle from '../cells-title';
import CellsTips from '../cells-tips';
import RadioCells from '../radio-cells';
import RadioCell from '../radio-cell';
import CheckboxCell from '../checkbox-cell';
import SwitchCell from '../switch-cell';
import {expect} from 'chai';
import sinon from 'sinon';


describe('Cells', () => {

  it('should have title [Shallow]', () => {
    const wrapper = shallow(<Cells title="test1" tips="test2" />);
    expect(wrapper.contains(<CellsTitle>test1</CellsTitle>)).to.be.true;
    expect(wrapper.find(CellsTitle).shallow().find('.weui_cells_title').text()).to.equal('test1');
  });

  it('should have tips [Shallow]', () => {
    const wrapper = shallow(<Cells title="test1" tips="test2" />);
    expect(wrapper.contains(<CellsTips>test2</CellsTips>)).to.be.true;
    expect(wrapper.find(CellsTips).shallow().find('.weui_cells_tips').text()).to.equal('test2');
  });

  it('should have cell [Shallow]', () => {
    const wrapper = shallow(<Cells><Cell>test</Cell></Cells>);
    expect(wrapper.find(Cell).shallow().find('.weui_cell').text()).to.equal('test');
  });

  it('should have access class [Shallow]', () => {
    const wrapper = shallow(<Cells access/>);
    expect(wrapper.find('.weui_cells').hasClass('weui_cells_access')).to.be.true;
  });

  it('should have radio class [Shallow]', () => {
    const wrapper = shallow(<Cells radio/>);
    expect(wrapper.find('.weui_cells').hasClass('weui_cells_radio')).to.be.true;
  });

  it('should have checkbox class [Shallow]', () => {
    const wrapper = shallow(<Cells checkbox/>);
    expect(wrapper.find('.weui_cells').hasClass('weui_cells_checkbox')).to.be.true;
  });

  it('should have access class [Shallow]', () => {
    const wrapper = shallow(<Cells form/>);
    expect(wrapper.find('.weui_cells').hasClass('weui_cells_form')).to.be.true;
  });
});

describe('Cell', () => {

  it('should have title [Shallow]', () => {
    const wrapper = shallow(<Cells title="test1" tips="test2" />);
    expect(wrapper.contains(<CellsTitle>test1</CellsTitle>)).to.be.true;
    expect(wrapper.find(CellsTitle).shallow().find('.weui_cells_title').text()).to.equal('test1');
  });

  it('should have tips [Shallow]', () => {
    const wrapper = shallow(<Cells title="test1" tips="test2" />);
    expect(wrapper.contains(<CellsTips>test2</CellsTips>)).to.be.true;
    expect(wrapper.find(CellsTips).shallow().find('.weui_cells_tips').text()).to.equal('test2');
  });

  it('should have cell custome class [Shallow]', () => {
    const wrapper = shallow(<Cells><Cell className="testclass"/></Cells>);
    expect(wrapper.find(Cell).shallow().hasClass('testclass')).to.be.true;
  });

  it('should have be an anchor element [Shallow]', () => {
    const wrapper = shallow(<Cells><Cell link="test"/></Cells>);
    expect(wrapper.find(Cell).shallow().is('a')).to.be.true;
  });

  it('should have select class [Shallow]', () => {
    const wrapper = shallow(<Cells><Cell select/></Cells>);
    expect(wrapper.find(Cell).shallow().is('.weui_cell_select')).to.be.true;
  });

  it('should have select class and select after class [Shallow]', () => {
    const wrapper = shallow(<Cells><Cell selectAfter/></Cells>);
    expect(wrapper.find(Cell).shallow().is('.weui_cell_select.weui_select_after')).to.be.true;
  });

  it('should have select class and select before class [Shallow]', () => {
    const wrapper = shallow(<Cells><Cell selectBefore/></Cells>);
    expect(wrapper.find(Cell).shallow().is('.weui_cell_select.weui_select_before')).to.be.true;
  });
});

describe('Cell Content', ()=>{
  it('body should have primary class [Shallow]', () => {
    const wrapper = shallow(
      <Cell>
        <CellBody>test</CellBody>
      </Cell>
    );
    expect(wrapper.find(CellBody).shallow().is('.weui_cell_bd.weui_cell_primary')).to.be.true;
  });

  it('body should have content [Shallow]', () => {
    const wrapper = shallow(
      <Cell>
        <CellBody>test</CellBody>
      </Cell>
    );
    expect(wrapper.find(CellBody).shallow().find('.weui_cell_bd').text()).to.equal('test');
  });

  it('Header should have primary class [Shallow]', () => {
    const wrapper = shallow(
      <Cell>
        <CellHeader primary>test</CellHeader>
      </Cell>
    );
    expect(wrapper.find(CellHeader).shallow().is('.weui_cell_hd.weui_cell_primary')).to.be.true;
  });

  it('Header should have content [Shallow]', () => {
    const wrapper = shallow(
      <Cell>
        <CellHeader>test</CellHeader>
      </Cell>
    );
    expect(wrapper.find(CellHeader).shallow().find('.weui_cell_hd').text()).to.equal('test');
  });

  it('Footer should have primary class [Shallow]', () => {
    const wrapper = shallow(
      <Cell>
        <CellFooter primary>test</CellFooter>
      </Cell>
    );
    expect(wrapper.find(CellFooter).shallow().is('.weui_cell_ft.weui_cell_primary')).to.be.true;
  });

  it('Footer should have content [Shallow]', () => {
    const wrapper = shallow(
      <Cell>
        <CellFooter>test</CellFooter>
      </Cell>
    );
    expect(wrapper.find(CellFooter).shallow().find('.weui_cell_ft').text()).to.equal('test');
  });
});

describe('Radio Group', ()=>{
  const wrapper = shallow(
    <RadioCells  name='danxuan' value='1' title="test1" tips="test2" className="testclass">
      <RadioCell label='radio cell 1' value='1'/>
      <RadioCell label='radio cell 2' value='2' disabled/>
    </RadioCells>
  );

  it('Cells should have title [Shallow]', () => {
    expect(wrapper.contains(<CellsTitle>test1</CellsTitle>)).to.be.true;
    expect(wrapper.find(CellsTitle).shallow().find('.weui_cells_title').text()).to.equal('test1');
  });

  it('Cells should have tips [Shallow]', () => {
    expect(wrapper.contains(<CellsTips>test2</CellsTips>)).to.be.true;
    expect(wrapper.find(CellsTips).shallow().find('.weui_cells_tips').text()).to.equal('test2');
  });

  it('Cells should have custom class [Shallow]', () => {
   expect(wrapper.find('.testclass')).to.have.length(1);
  });

  it('Cells should have name [Shallow]', () => {
   expect(wrapper.find('.testclass').prop('name')).to.equal('danxuan');
  });

  it('Cells should have value [Shallow]', () => {
   expect(wrapper.find('.testclass').prop('value')).to.equal('1');
  });

  it('Cells state should have value [Shallow]', () => {
   expect(wrapper.state('value')).to.equal('1');
  });

  it('Cells should have 2 radio cell', () => {
   expect(wrapper.find('.testclass').find(RadioCell)).to.have.length(2);
  });

  it('Cell should be type label', () => {
   expect(wrapper.find('.testclass').children().first().shallow().type()).to.equal('label');
  });

  it('Cell should have body with label test', () => {
   let cell1 = wrapper.find('.testclass').children().first().shallow();
   expect(cell1.find(CellBody).shallow().text()).to.equal('radio cell 1');
   let cell2 = wrapper.find('.testclass').children().last().shallow();
   expect(cell2.find(CellBody).shallow().text()).to.equal('radio cell 2');
  });

  it('Cell should have their value', () => {
   let cell1 = wrapper.find('.testclass').children().first().shallow();
   expect(cell1.find(CellFooter).shallow().find('input.weui_check').prop('value')).to.equal('1');
   let cell2 = wrapper.find('.testclass').children().last().shallow();
   expect(cell2.find(CellFooter).shallow().find('input.weui_check').prop('value')).to.equal('2');
  });

  it('Cell should have footer that have input with class', () => {
   let cell1 = wrapper.find('.testclass').children().first().shallow();
   expect(cell1.find(CellFooter).shallow().find('input.weui_check')).to.have.length(1);
  });

  it('Cell2 should be disabled', () => {
   let cell2 = wrapper.find('.testclass').children().last().shallow();
   expect(cell2.find(CellFooter).shallow().find('input.weui_check').prop('disabled')).to.be.true;
  });
});

describe('Checkbox Group', ()=>{
  const wrapper = shallow(
    <Cells checkbox>
      <CheckboxCell name="checkbox1" id="s11" label="uncheck cell" checked/>
      <CheckboxCell name="checkbox2" id="s12" label="checked cell" />
    </Cells>
  );

  it('Cells should have 2 checkbox cell', () => {
   expect(wrapper.find(CheckboxCell)).to.have.length(2);
  });

  it('Cell should be type label', () => {
   expect(wrapper.find(CheckboxCell).first().shallow().type()).to.equal('label');
  });

  it('Cell should have footer with label test', () => {
   let cell1 = wrapper.find(CheckboxCell).first().shallow();
   expect(cell1.find(CellBody).shallow().text()).to.equal('uncheck cell');
   let cell2 = wrapper.find(CheckboxCell).last().shallow();
   expect(cell2.find(CellBody).shallow().text()).to.equal('checked cell');
  });

  it('Cell should have their name', () => {
   let cell1 = wrapper.find(CheckboxCell).first().shallow();
   expect(cell1.find(CellHeader).shallow().find('input.weui_check').prop('name')).to.equal('checkbox1');
   let cell2 = wrapper.find(CheckboxCell).last().shallow();
   expect(cell2.find(CellHeader).shallow().find('input.weui_check').prop('name')).to.equal('checkbox2');
  });

  it('Cell should have body that have input with class', () => {
   let cell1 = wrapper.find(CheckboxCell).first().shallow();
   expect(cell1.find(CellHeader).shallow().find('input.weui_check')).to.have.length(1);
  });

  it('Cell1 should be check by default', () => {
   let cell1 = wrapper.find(CheckboxCell).first().shallow();
   expect(cell1.find(CellHeader).shallow().find('input.weui_check').prop('checked')).to.be.true;
  });
});

describe('SwitchCell', ()=>{
  const wrapper = shallow(
    <Cells form>
      <SwitchCell name="switch1" id="sw1" label="test" />
    </Cells>
  );

  it('Cells should have switch cell', () => {
   expect(wrapper.find(SwitchCell)).to.have.length(1);
  });

  it('Cell should be type label', () => {
   expect(wrapper.find(SwitchCell).shallow().type()).to.equal('label');
  });

  it('Cell should have footer with label test', () => {
   let cell1 = wrapper.find(SwitchCell).shallow();
   expect(cell1.find(CellBody).shallow().text()).to.equal('test');
  });

  it('Cell should have their name', () => {
   let cell1 = wrapper.find(SwitchCell).shallow();
   expect(cell1.find(CellFooter).shallow().find('input.weui_switch').prop('name')).to.equal('switch1');
  });

  it('Cell should have footer that have input with class', () => {
   let cell1 = wrapper.find(SwitchCell).shallow();
   expect(cell1.find(CellFooter).shallow().find('input.weui_switch')).to.have.length(1);
  });

});