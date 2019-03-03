import React from 'react';
import renderer from 'react-test-renderer';
import StyledImage from './index';

describe('StyledImage component', () => {
  it('render default StyledImage as expected', () => {
    const render = renderer.create(
      <StyledImage />
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});