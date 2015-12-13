import React from 'react';
import { shallow,describeWithDOM,mount,spyLifecycle, sinon } from 'enzyme';
import Article from '../index';
import {expect} from 'chai';

describe('Article', () => {
  it('[Shallow]should have default weui_article class', () => {
    const wrapper = shallow(<Article/>);
    expect(wrapper.hasClass('weui_article')).to.be.true;
  });

  it('[Shallow]should have custom class', () => {
    const wrapper = shallow(<Article className="test"/>);
    expect(wrapper.hasClass('weui_article')).to.be.true;
    expect(wrapper.hasClass('test')).to.be.true;
  });
});