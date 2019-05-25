import React from "react"
import renderer from "react-test-renderer"
import ProjectLink from "./index";

describe("ProjectLink", () => {
  it("renders as expected with portfolio", () => {
    expect(renderer.create(<ProjectLink project='portfolio'/>).toJSON()).toMatchSnapshot();
  })
  it("renders as expected with lightscamerahome", () => {
    expect(renderer.create(<ProjectLink project='lightscamerahome'/>).toJSON()).toMatchSnapshot();
  })
  it("renders as expected with moneymanager", () => {
    expect(renderer.create(<ProjectLink project='moneymanager'/>).toJSON()).toMatchSnapshot();
  })
})