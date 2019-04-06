import React from 'react';
import renderer from 'react-test-renderer';
import Skills from './index';

describe('Skills component', () => {
  it('render Skills as expected', () => {
    const render = renderer.create(
      <Skills />
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});