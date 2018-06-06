import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const styles = {
  registration: {
    width: "100%"
  }
};

const EmailInputField = ({ classes, ...props }) => (
  <FormControl
    className={`${classes.registration}`}
    required
    aria-describedby="email-input-field"
  >
    <TextField label="Email" type="email" />
  </FormControl>
);
EmailInputField.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(EmailInputField);
