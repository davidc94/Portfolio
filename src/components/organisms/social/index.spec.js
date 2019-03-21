import React from 'react';
import renderer from 'react-test-renderer';
import Social from './index';

describe('Social component', () => {
  it('render Social as expected', () => {
    const render = renderer.create(
      <Social />
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});