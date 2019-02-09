import React from 'react';
import renderer from 'react-test-renderer';
import StyledDiv from './index';

describe('StyledDiv component', () => {
  it('render default StyledDiv as expected', () => {
    const render = renderer.create(
      <StyledDiv>I have nothing to offer</StyledDiv>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledDiv with a different border color', () => {
    const render = renderer.create(
      <StyledDiv borderColor="header">nice border color</StyledDiv>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledDiv with a different border width', () => {
    const render = renderer.create(
      <StyledDiv borderWidth="large">damn this border extra thicc</StyledDiv>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });

  it('render StyledDiv with a different border width and border color', () => {
    const render = renderer.create(
      <StyledDiv borderWidth="medium" borderColor="border">wooooaaaahhhh</StyledDiv>,
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});