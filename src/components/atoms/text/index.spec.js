import React from 'react';
import renderer from 'react-test-renderer';
import StyledText from './index';
import Colors from '../../../utils/colors';

describe('StyledText component', () => {
  it('render default StyledText as expected', () => {
    const render = renderer.create(
      <StyledText>I have nothing to offer</StyledText>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledText with a different font size', () => {
    const render = renderer.create(
      <StyledText size="large">EXTRA BIG</StyledText>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledText with a different color', () => {
    const render = renderer.create(
      <StyledText color={Colors.lightBlue}>cool blue</StyledText>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledText with a different margin', () => {
    const render = renderer.create(
      <StyledText margin="large">wow, so much extra space</StyledText>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});