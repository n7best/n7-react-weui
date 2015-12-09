import React from 'react';
import { shallow,describeWithDOM,mount,spyLifecycle, sinon } from 'enzyme';
import Button from '../index';
import {expect} from 'chai';


describe('Button', () => {

  it('[Shallow]should have default weui_btn class', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.hasClass('weui_btn')).to.be.true;
    expect(wrapper.hasClass('weui_btn_default')).to.be.true;
  });

  it('[Shallow]should have primary weui_btn class', () => {
    const wrapper = shallow(<Button type="primary" />);
    expect(wrapper.hasClass('weui_btn')).to.be.true;
    expect(wrapper.hasClass('weui_btn_primary')).to.be.true;
  });

  it('[Shallow]should have disabled class', () => {
    const wrapper = shallow(<Button disabled/>);
    expect(wrapper.hasClass('weui_btn')).to.be.true;
    expect(wrapper.hasClass('weui_btn_default')).to.be.true;
    expect(wrapper.hasClass('weui_btn_disabled')).to.be.true;
  });

  it('[Shallow]should have primary disabled class', () => {
    const wrapper = shallow(<Button type="primary" disabled/>);
    expect(wrapper.hasClass('weui_btn')).to.be.true;
    expect(wrapper.hasClass('weui_btn_primary')).to.be.true;
    expect(wrapper.hasClass('weui_btn_disabled')).to.be.true;
  });

  it('[Shallow]should have mini class', () => {
    const wrapper = shallow(<Button mini/>);
    expect(wrapper.hasClass('weui_btn')).to.be.true;
    expect(wrapper.hasClass('weui_btn_mini')).to.be.true;
  });

  it('[Shallow]should have warn plain button class', () => {
    const wrapper = shallow(<Button type="warn" plain/>);
    expect(wrapper.hasClass('weui_btn')).to.be.true;
    expect(wrapper.hasClass('weui_btn_plain_warn')).to.be.true;
  });

  it('[Shallow]should have primary plain disabled class', () => {
    const wrapper = shallow(<Button type="primary" plain disabled/>);
    expect(wrapper.hasClass('weui_btn')).to.be.true;
    expect(wrapper.hasClass('weui_btn_plain_primary')).to.be.true;
    expect(wrapper.hasClass('weui_btn_disabled')).to.be.true;
  });

  describeWithDOM('[JSDOM] Button Event Check', () => {
    it('click events should work', () => {
      const onButtonClick = sinon.spy();
      const wrapper = mount(
        <Button id="testbutton" onClick={onButtonClick} />
      );
      wrapper.find('#testbutton').simulate('click');
      expect(onButtonClick.calledOnce).to.be.true;
    });
  });
});
