import React from "react";
import ReactDOM from "react-dom";
import CourseSelect from "./CourseSelect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CourseSelect />, div);
  ReactDOM.unmountComponentAtNode(div);
});
