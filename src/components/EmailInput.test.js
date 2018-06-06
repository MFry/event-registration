import React from "react";
import { render } from "enzyme";
import EmailInputField from "./EmailInput";
import { ExpansionPanelActions } from "@material-ui/core";

it("Should match snapshot", () => {
  const wrapper = render(<EmailInputField />);
  expect(wrapper).toMatchSnapshot();
});
