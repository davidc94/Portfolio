import React from "react"
import renderer from "react-test-renderer"
import ListContainer from "./index";

describe("ListContainer", () => {
  it("renders as expected", () => {
    expect(renderer.create(<ListContainer />).toJSON()).toMatchSnapshot();
  })
})