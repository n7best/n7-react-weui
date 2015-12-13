import React from 'react';
import { shallow,describeWithDOM,mount,spyLifecycle, sinon } from 'enzyme';
import Dialog from '../index';
import Mask from '../../mask';
import {expect} from 'chai';

describe('Dialog', () => {

  it('[Shallow]should have default weui_btn_dialog class', () => {
    const wrapper = shallow(<Dialog />);
    expect(wrapper.find('.weui_dialog')).to.have.length(1);
  });

  it('[Shallow]should have alert class', () => {
    const wrapper = shallow(<Dialog />);
    expect(wrapper.find('div.weui_dialog_alert')).to.have.length(1);
  });

  it('[Shallow]should have confirm class', () => {
    const wrapper = shallow(<Dialog type="confirm"/>);
    expect(wrapper.find('div.weui_dialog_confirm')).to.have.length(1);
  });

  it('[Shallow]should have mask with title', () => {
    const wrapper = shallow(<Dialog title="test"/>);
    expect(wrapper.find('div.weui_dialog_alert').text()).to.equal('<Mask />test');
  });

  let wrapper2 = shallow(
    <Dialog title="弹窗标题" type="confirm" show
      actions={
        [
          {
            label:"button1",
            onClick: (e)=>{
              //
            }
          },
          {
            label:"button2",
            primary:true,
            onClick: (e)=>{
              //
            }
          }
        ]
      }/>
  );

  it('[Shallow]should have 2 button', () => {
    expect(wrapper2.find('div.weui_dialog_ft').find('a')).to.have.length(2);
  });

  it('[Shallow]button 1 should have text button1', () => {
    expect(wrapper2.find('div.weui_dialog_ft').find('a').first().text()).to.equal('button1');
  });

  it('[Shallow]button 2 should be primary', () => {
    expect(wrapper2.find('div.weui_dialog_ft').find('a').last().hasClass('primary')).to.be.true;
  });

  it('[Shallow]should be display', () => {
    expect(wrapper2.state().show).to.be.true;
  });

  it('[Shallow]should be display with normal mask', () => {
    expect(wrapper2.find(Mask).shallow().props().show).to.be.true;
    expect(wrapper2.find(Mask).shallow().hasClass('weui_mask')).to.be.true;
  });
});