import React from 'react';
import { shallow,describeWithDOM,mount,spyLifecycle, sinon } from 'enzyme';
import Message from '../index';
import Button from '../../button';
import {expect} from 'chai';

describe('Message', () => {
  it('[Shallow]should have default weui_msg class', () => {
    const wrapper = shallow(<Message/>);
    expect(wrapper.find('.weui_msg')).to.have.length(1);
  });

  let wrapper2 = shallow(
    <Message
      icon={<i className="weui_icon_success weui_icon_msg"></i>}
      title="testtitle"
      extra={<a href="">testextra</a>}
      actions={[
        {label:"button1",type:"primary"},
        {label:"button2"},
      ]}
      >
      testcontent
    </Message>
  );

  it('[Shallow]should have default weui_msg class', () => {
    expect(wrapper2.find('.weui_icon_area').html())
    .to.equal('<div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>');
  });

  it('[Shallow]should have title', () => {
    expect(wrapper2.find('.weui_msg_title').text()).to.equal('testtitle');
  });

  it('[Shallow]should have content', () => {
    expect(wrapper2.find('.weui_msg_desc').text()).to.equal('testcontent');
  });

  it('[Shallow]should have extra text', () => {
    expect(wrapper2.find('.weui_extra_area').text()).to.equal('testextra');
  });

  it('[Shallow]should have 2 button', () => {
    expect(wrapper2.find('.weui_btn_area').find(Button)).to.have.length(2);
  });

  it('[Shallow]should have 1 primary button', () => {
    expect(wrapper2.find('.weui_btn_area').find(Button).first().shallow()
      .hasClass('weui_btn_primary')).to.be.true;
  });

  it('[Shallow]should have 2 should have label', () => {
    expect(wrapper2.find('.weui_btn_area').find(Button).last().shallow()
      .text()).to.equal('button2');
  });
});