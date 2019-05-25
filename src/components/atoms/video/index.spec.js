import React from 'react';
import renderer from 'react-test-renderer';
import StyledVideo from './index';
import Colors from '../../../utils/colors';

describe('StyledVideo component', () => {
  it('render default StyledVideo as expected', () => {
    const render = renderer.create(
      <StyledVideo />,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});