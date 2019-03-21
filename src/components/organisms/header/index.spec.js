import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

describe('Header component', () => {
  it('render Header as expected', () => {
    const render = renderer.create(
      <Header />
    );
    expect(render.toJSON()).toMatchSnapshot();
  });
});