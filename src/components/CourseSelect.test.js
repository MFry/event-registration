import React from "react";
import ReactDOM from "react-dom";
import CourseSelect from "./CourseSelect";

it("renders without crashing", () => {
  const courses = [
    { value: "class1", label: "Class 1" },
    { value: "class2", label: "Class 2" },
    { value: "class3", label: "Class 3" },
    { value: "class4", label: "Class 4" }
  ];

  const div = document.createElement("div");
  ReactDOM.render(<CourseSelect courses={courses} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
