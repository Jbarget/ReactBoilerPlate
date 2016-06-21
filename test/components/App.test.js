import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';

import App from '../../src/js/components/App';

describe('<App/>', function () {
  it('1 = 1', function () {
    expect(1).to.equal(1);
  });

  it('should have for email and src', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.app-div')).to.have.length(1);
  });
});
