import React from 'react';
import { shallow,describeWithDOM,mount,spyLifecycle, sinon } from 'enzyme';
import Progress from '../index';
import {expect} from 'chai';

describe('Progress', () => {
  it('[Shallow]should have default weui_progress class', () => {
    const wrapper = shallow(<Progress/>);
    expect(wrapper.find('.weui_progress')).to.have.length(1);
  });

  it('[Shallow]should have inner bar', () => {
    const wrapper = shallow(<Progress/>);
    expect(wrapper.find('.weui_progress_inner_bar')).to.have.length(1);
  });

  it('[Shallow]should have default percent of 0', () => {
    const wrapper = shallow(<Progress />);
    expect(wrapper.find('.weui_progress_inner_bar').html()).to.equal('<div class="weui_progress_inner_bar" style="width:0%;"></div>');
  });

  it('[Shallow]should have percent of 66', () => {
    const wrapper = shallow(<Progress percent={66}/>);
    expect(wrapper.find('.weui_progress_inner_bar').html()).to.equal('<div class="weui_progress_inner_bar" style="width:66%;"></div>');
  });

  it('[Shallow]should have opr div', () => {
    const wrapper = shallow(<Progress/>);
    expect(wrapper.find('.weui_progress_opr')).to.have.length(1);
  });

  it('[Shallow]should have test opr content', () => {
    const wrapper = shallow(<Progress>test</Progress>);
    expect(wrapper.find('.weui_progress_opr').text()).to.equal('test');
  });
});