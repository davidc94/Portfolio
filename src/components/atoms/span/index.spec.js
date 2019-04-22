import React from 'react';
import renderer from 'react-test-renderer';
import StyledSpan from './index';
import Colors from '../../../utils/colors';

describe('StyledSpan component', () => {
  it('render default StyledSpan as expected', () => {
    const render = renderer.create(
      <StyledSpan>I have nothing to offer</StyledSpan>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledSpan with a different background color', () => {
    const render = renderer.create(
      <StyledSpan backgroundColor={Colors.blue}>nice background color</StyledSpan>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
  
  it('render StyledSpan with a different color', () => {
    const render = renderer.create(
      <StyledSpan color={Colors.lightBlue}>cool blue</StyledSpan>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledSpan with a different font size', () => {
    const render = renderer.create(
      <StyledSpan size="large">EXTRA BIG</StyledSpan>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});