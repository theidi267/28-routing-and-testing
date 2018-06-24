import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../../src/components/app.js';

describe('<App/> (Enzyme Test)', () => {
  it('is alive at application start', () => {
    let app = shallow(<App/>); //eslint-disable-line
    expect(app.find('main').exists()).toBeTruthy(); //just checks if main renders
  });
});

describe('<App/> (Snapshot Test)', () => {
  it('renders right', () => {
    const component = renderer.create(
      <App />
    );

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});