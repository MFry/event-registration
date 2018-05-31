import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SvgIcon from "@material-ui/core/SvgIcon";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import blue from "@material-ui/core/colors/blue";

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

const styles = theme => ({
  stickyHeader: {
    position: "sticky",
    backgroundColor: "white",
    top: 0,
    zIndex: 9999
  },
  content: {
    textAlign: "center",
    overflowWrap: "break-word",
    whiteSpace: "pre-wrap",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left",
      paddingRight: "2.5rem",
      overflowWrap: "normal",
      whiteSpace: "normal"
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "2.5rem"
    }
  },
  formSpacing: {
    paddingTop: ".5rem"
  },
  iconSpace: {
    alignItems: "center",
    height: "100%"
  },
  menuIcons: {
    fontSize: "2rem",
    cursor: "pointer",
    "&:hover": {
      color: blue[400]
    }
  },
  registration: {
    width: "100%"
  },
  registerButton: {
    boxSizing: "border-box",
    textAlign: "center",
    height: "3rem"
  }
});

const RegistrationBar = ({ classes, form }) => (
  <Grid container className={classes.stickyHeader}>
    {/*Spacing*/}
    <Grid item xs={12} className={`${classes.formSpacing}`} />
    <Grid item sm={1} xs={2} className={`${classes.content}`}>
      <Grid container className={`${classes.iconSpace}`}>
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
      <Grid container className={`${classes.iconSpace}`}>
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
          {form.openSlots} / {form.maxSlots}
        </div>
      </Grid>
    </Grid>

    <Grid item sm={5} xs={2} />
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
);
RegistrationBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegistrationBar);
