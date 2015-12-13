import React from 'react';
import { shallow,describeWithDOM,mount,spyLifecycle, sinon } from 'enzyme';
import Toast from '../index';
import Mask from '../../mask';
import {expect} from 'chai';

describe('Toast', () => {
  it('[Shallow]should have default weui_toast class', () => {
    const wrapper = shallow(<Toast />);
    expect(wrapper.find('div.weui_toast')).to.have.length(1);
  });

  it('[Shallow]should have loading class', () => {
    const wrapper = shallow(<Toast loading/>);
    expect(wrapper.hasClass('weui_loading_toast')).to.be.true;
  });

  it('[Shallow]should have loading class without icon', () => {
    const wrapper = shallow(<Toast loading/>);
    expect(wrapper.hasClass('weui_loading_toast')).to.be.true;
    expect(wrapper.contains(<i className="weui_icon_toast"></i>)).to.be.false;
  });

  it('[Shallow]should have default toast icon', () => {
    const wrapper = shallow(<Toast />);
    expect(wrapper.contains(<i className="weui_icon_toast"></i>)).to.be.true;
  });

  it('[Shallow]should not be display', () => {
    const wrapper = shallow(<Toast />);
    expect(wrapper.state().show).to.be.false;
  });

  it('[Shallow]should be display with mask', () => {
    const wrapper = shallow(<Toast show/>);
    expect(wrapper.state().show).to.be.true;
    expect(wrapper.find(Mask)).to.have.length(1);
    expect(wrapper.find(Mask).prop('show')).to.be.true;
  });
});