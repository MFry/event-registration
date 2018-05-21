import React from "react";
import { withStyles } from "material-ui/styles";
import { FormControl, FormHelperText } from "material-ui/Form";
import { InputLabel } from "material-ui/Input";
import Select from "react-select";
import * as Animated from "react-select/lib/animated";
import PropTypes from "prop-types";

const styles = {
  select: {
    display: "inlineFlex",
    padding: 0,
    position: "relative"
  }
};

const CourseSelect = ({ courses }) => {
  return (
    <FormControl style={{ width: "100%" }}>
      <InputLabel htmlFor="course-selector">Course Select</InputLabel>
      <Select
        isMulti
        name="courses"
        closeMenuOnSelect={false}
        components={Animated}
        options={courses}
        styles={styles.select}
      />
    </FormControl>
  );
};
CourseSelect.propTypes = {
  courses: PropTypes.array.isRequired
};
export default CourseSelect;