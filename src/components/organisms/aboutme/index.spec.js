import React from 'react';
import renderer from 'react-test-renderer';
import AboutMe from './index';

describe('AboutMe component', () => {
  it('render AboutMe as expected', () => {
    const render = renderer.create(
      <AboutMe />
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});