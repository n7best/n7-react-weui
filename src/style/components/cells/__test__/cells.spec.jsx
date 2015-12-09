import React from 'react';
import { shallow,describeWithDOM,mount,spyLifecycle } from 'enzyme';
import Cells from '../cells';
import Cell from '../cell';
import CellHeader from '../cell-header';
import CellBody from '../cell-body';
import CellFooter from '../cell-footer';
import {expect} from 'chai';
import sinon from 'sinon';


describe('Cells', () => {

  it('[JSDOM] should render Cells,CellsTips, CellsTitle', () => {
    const wrapper = mount(
      <Cells title="test1" tips="test2" />
    );
    expect(wrapper.find('.weui_cells')).to.have.length(1);
    expect(wrapper.find('div.weui_cells_title')).to.have.length(1);
    expect(wrapper.find('div.weui_cells_title').text()).to.equal('test1');
    expect(wrapper.find('div.weui_cells_tips')).to.have.length(1);
    expect(wrapper.find('div.weui_cells_tips').text()).to.equal('test2');
  });

});

describe('[JSDOM] Cells Cell combo', () => {

  it('should render Cells with Cell with custome class, has body of title and footer of desc', () => {
    const wrapper = mount(
      <Cells title="test1">
          <Cell className="customeclass">
            <CellBody>title</CellBody>
            <CellFooter>desc</CellFooter>
          </Cell>
      </Cells>
    );
    expect(wrapper.find('.weui_cells')).to.have.length(1);
    expect(wrapper.find('div.weui_cells_title')).to.have.length(1);
    expect(wrapper.find('div.weui_cells_title').text()).to.equal('test1');
    expect(wrapper.find('div.weui_cell')).to.have.length(1);
    expect(wrapper.find('div.weui_cell').hasClass('customeclass')).to.be.true;
    expect(wrapper.find('span.weui_cell_bd')).to.have.length(1);
    expect(wrapper.find('span.weui_cell_bd').text()).to.equal('title');
    expect(wrapper.find('span.weui_cell_ft')).to.have.length(1);
    expect(wrapper.find('span.weui_cell_ft').text()).to.equal('desc');
  });

  it('[JSDOM] should render 2 cell', () => {
    const wrapper = mount(
      <Cells title="test1" split>
        <Cell /><Cell />
      </Cells>
    );
    expect(wrapper.find('.weui_cells.weui_cells_access')).to.have.length(0);
    expect(wrapper.find('div.weui_cell')).to.have.length(2);
  });

  it('[JSDOM] should render 2 link cell', () => {
    const wrapper = mount(
      <Cells title="test1" access>
        <Cell link="test"/><Cell link="test2"/>
      </Cells>
    );
    expect(wrapper.find('.weui_cells.weui_cells_access')).to.have.length(1);
    expect(wrapper.find('a.weui_cell')).to.have.length(2);
  });
});