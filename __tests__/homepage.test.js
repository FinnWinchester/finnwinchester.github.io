import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';

import App from 'src/App';

describe('Test render', () => {
  it('Should render App', () => {
    expect(toJson(mount(<App />))).toMatchSnapshot();
  });
});
