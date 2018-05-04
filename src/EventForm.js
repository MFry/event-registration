import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import Divider from "material-ui/Divider";
import TextField from "material-ui/TextField";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl, FormHelperText } from "material-ui/Form";
import Select from "material-ui/Select";
import SvgIcon from "material-ui/SvgIcon";
import Tooltip from "material-ui/Tooltip";
import blue from "material-ui/colors/blue";
import Moment from "react-moment";
import CourseSelect from "./CourseSelect";
import "./material-form.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "40px"
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  formSpacing: {
    paddingTop: ".5rem"
  },
  content: {
    paddingLeft: "2.5rem",
    paddingRight: "2.5rem"
  },
  button: {
    margin: theme.spacing.unit
  },
  registration: {
    width: "100%"
  },
  registerButton: {
    boxSizing: "border-box",
    textAlign: "center",
    height: "3rem"
  },
  stickyHeader: {
    position: "sticky",
    backgroundColor: "white",
    top: 0,
    zIndex: 9999
  },
  menuIcons: {
    fontSize: "2rem",
    cursor: "pointer",
    "&:hover": {
      color: blue[400]
    }
  },
  footer: {
    height: "10vh"
  }
});

class EventForm extends Component {
  constructor(props) {
    super(props);
    const {
      title,
      description,
      startDateTime,
      endDateTime,
      address,
      openSlots,
      maxSlots,
      courses
    } = props;
    this.state = {
      value: "",
      roleValue: "",
      form: {
        title,
        description,
        date: { start: startDateTime, end: endDateTime },
        address,
        openSlots,
        maxSlots,
        courses
      }
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Submitted document", this.state);
    event.preventDefault();
  }

  render() {
    const dash = <span>—</span>;
    const ShareSvgIcon = props => (
      <SvgIcon {...props}>
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
      </SvgIcon>
    );
    const GroupSvgIcon = props => (
      <SvgIcon {...props}>
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </SvgIcon>
    );
    const { classes } = this.props;
    return (
      <form className={classes.root} onSubmit={() => this.handleSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <header className="App App-header">
              <h1 className="App-title">{this.state.form.title}</h1>
            </header>
          </Grid>
        </Grid>

        <Grid container className={classes.stickyHeader}>
          <Grid item xs={12} className={classes.formSpacing} />
          <Grid item xs={1} className={classes.content}>
            <Grid container style={{ alignItems: "center", height: "100%" }}>
              <Tooltip title="Share this event" placement="bottom">
                <ShareSvgIcon
                  className={classes.menuIcons}
                  onClick={e => {
                    console.log(e.target);
                  }}
                />
              </Tooltip>
            </Grid>
          </Grid>
          <Grid item xs={2} className={classes.content}>
            <Grid container style={{ alignItems: "center", height: "100%" }}>
              <Tooltip title="Slots open" placement="bottom">
                <GroupSvgIcon
                  className={classes.menuIcons}
                  style={{ cursor: "default" }}
                  onClick={e => {
                    console.log(e.target);
                  }}
                />
              </Tooltip>
              <div style={{ paddingLeft: "1.5rem" }}>
                {this.state.form.openSlots} / {this.state.form.maxSlots}
              </div>
            </Grid>
          </Grid>

          <Grid item xs={5} />
          <Grid item xs={4} className={classes.content}>
            <Button
              variant="raised"
              color="primary"
              className={`${classes.registration} ${classes.registerButton}`}
              type="submit"
            >
              Register
            </Button>
          </Grid>
          <Grid item xs={12} className={classes.formSpacing}>
            <Divider />
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            item
            xs={12}
            className={`${classes.formSpacing} ${classes.content}`}
          >
            <Typography variant="headline" component="h3">
              Description
            </Typography>
          </Grid>
          <br />
          <Grid
            item
            xs={8}
            className={`${classes.content} ${classes.formSpacing}`}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: this.state.form.description
              }}
            />
          </Grid>

          <Grid item xs={4} className={classes.content}>
            <Paper elevation={0}>
              <Typography variant="subheading">Date and Time</Typography>
              <Typography paragraph>
                <Moment format="ddd MMM D, YYYY h:mm A">
                  {this.state.form.date.start}
                </Moment>{" "}
                {dash} <br />
                <Moment format="ddd MMM D, YYYY h:mm A">
                  {this.state.form.date.end}
                </Moment>
                <br />
                <Button size="small">
                  <i className="material-icons" style={{ paddingRight: "8px" }}>
                    today
                  </i>
                  Add to calendar
                </Button>
              </Typography>
            </Paper>
            <Paper elevation={0}>
              <Typography variant="subheading">Location</Typography>
              <Typography paragraph>
                {this.state.form.address.street}
                <br />
                {this.state.form.address.city}, {this.state.form.address.state}{" "}
                {this.state.form.address.zipcode}
                <br />
                <Button size="small">
                  <i className="material-icons" style={{ paddingRight: "8px" }}>
                    add_location
                  </i>
                  Get Directions
                </Button>
              </Typography>
            </Paper>
            <Paper elevation={0}>
              <CourseSelect courses={this.state.form.courses} />
            </Paper>
            <Paper elevation={0}>
              <FormControl
                className={`${classes.formControl} ${classes.registration}`}
              >
                <InputLabel htmlFor="role-picker">Role</InputLabel>
                <Select
                  value={this.state.roleValue}
                  onChange={e => {
                    this.setState({ roleValue: e.target.value });
                  }}
                  inputProps={{
                    name: "Role(s)",
                    id: "role-picker"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Lead">Lead</MenuItem>
                  <MenuItem value="Follow">Follow</MenuItem>
                  <MenuItem value="Lead & Follow">Lead and Follow</MenuItem>
                </Select>
                <FormHelperText>Role and couple registration.</FormHelperText>
              </FormControl>
            </Paper>
            <Paper elevation={0}>
              <TextField
                label="Email"
                type="email"
                className={`${classes.textField} ${classes.registration}`}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.footer} />
          </Grid>
        </Grid>
      </form>
    );
  }
}
EventForm.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(EventForm);
