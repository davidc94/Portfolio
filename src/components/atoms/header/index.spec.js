import React from 'react';
import renderer from 'react-test-renderer';
import StyledHeader from './index';
import Colors from '../../../utils/colors';

describe('StyledHeader component', () => {
  it('render default StyledHeader as expected', () => {
    const render = renderer.create(
      <StyledHeader>I have nothing to offer</StyledHeader>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledHeader with a different font size', () => {
    const render = renderer.create(
      <StyledHeader size="large">EXTRA BIG</StyledHeader>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledHeader with a different color', () => {
    const render = renderer.create(
      <StyledHeader color={Colors.lightBlue}>cool blue</StyledHeader>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledHeader with a different margin', () => {
    const render = renderer.create(
      <StyledHeader margin="large">wow, so much extra space</StyledHeader>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});