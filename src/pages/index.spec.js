import React from "react"
import renderer from "react-test-renderer"
import Index from "./index";

describe("Index", () => {
  it("renders as expected", () => {
    expect(renderer.create(<Index />).toJSON()).toMatchSnapshot();
  })
})