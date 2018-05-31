import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
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
        placeholder="Select courses..."
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
