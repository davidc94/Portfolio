import React from 'react';
import renderer from 'react-test-renderer';
import Projects from './index';

describe('Projects component', () => {
  it('render Projects as expected', () => {
    const render = renderer.create(
      <Projects />
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});