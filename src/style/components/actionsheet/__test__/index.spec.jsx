import React from 'react';
import { shallow,describeWithDOM,mount,spyLifecycle, sinon } from 'enzyme';
import Actionsheet from '../index';
import Mask from '../../mask';
import {expect} from 'chai';

describe('Article', () => {
  let wrapper = shallow(
    <Actionsheet show
      actions={[
        {
          label:"action1",
          onClick: (e)=>null
        },
      ]}
      menus={[
          {label:"menu1",onClick:()=>null},
          {label:"menu2",onClick:()=>null},
          {label:"menu3",onClick:()=>null},
          {label:"menu4",onClick:()=>null}
      ]}
      onMaskClick={(e)=>null}/>
  );

  it('[Shallow]should have weui_actionsheet class', () => {
    expect(wrapper.find('div.weui_actionsheet')).to.have.length(1);
  });

  it('[Shallow]should be seen by default', () => {
    expect(wrapper.state().show).to.be.true;
  });

  it('[Shallow]should have mask', () => {
    expect(wrapper.find(Mask)).to.have.length(1);
  });

  it('[Shallow]should have mask with fade style', () => {
    expect(wrapper.find(Mask).shallow().hasClass('weui_mask_transition_fade')).to.be.true;
  });

  it('[Shallow]should have 4 menu button', () => {
    expect(wrapper.find('.weui_actionsheet_menu').find('div.weui_actionsheet_cell')).to.have.length(4);
  });

  it('[Shallow]should have 1 action button', () => {
    expect(wrapper.find('.weui_actionsheet_action').find('div.weui_actionsheet_cell')).to.have.length(1);
  });

  it('[Shallow]menu button should have label', () => {
    expect(wrapper.find('.weui_actionsheet_menu').find('div.weui_actionsheet_cell').last().text()).to.equal('menu4');
  });

  it('[Shallow]action button should have label', () => {
    expect(wrapper.find('.weui_actionsheet_action').find('div.weui_actionsheet_cell').text()).to.equal('action1');
  });
});