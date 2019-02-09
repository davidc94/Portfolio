import React from 'react';
import renderer from 'react-test-renderer';
import StyledList from './index';

describe('StyledList component', () => {
  it('render default StyledList as expected', () => {
    const render = renderer.create(
      <StyledList>I have nothing to offer</StyledList>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledList with a different font size', () => {
    const render = renderer.create(
      <StyledList size="small">EXTRA small</StyledList>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});