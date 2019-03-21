import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from './index';

describe('Gallery component', () => {
  it('render Gallery as expected', () => {
    const render = renderer.create(
      <Gallery />
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});