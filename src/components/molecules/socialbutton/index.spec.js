import React from "react"
import renderer from "react-test-renderer"
import SocialButton from "./index";

describe("SocialButton", () => {
  it("renders as expected with github", () => {
    expect(renderer.create(<SocialButton social='github'/>).toJSON()).toMatchSnapshot();
  })
  it("renders as expected with linkedin", () => {
    expect(renderer.create(<SocialButton social='linkedin'/>).toJSON()).toMatchSnapshot();
  })
})