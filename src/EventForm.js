import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import "./material-form.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "40px"
  },
  button: {
    margin: theme.spacing.unit
  }
});

class EventForm extends Component {
  constructor(props) {
    super(props);
    const { title, description } = props;
    this.state = { value: "", form: { title, description } };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Submitted document", this.state);
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <header className="App App-header">
              <h1 className="App-title">{this.state.form.title}</h1>
            </header>
          </Grid>

          <form onSubmit={() => this.handleSubmit}>
            <Grid item xs={8} />
            <Grid item xs={4}>
              <Button
                variant="raised"
                color="primary"
                className={classes.button}
                style={{ float: "right" }}
                type="submit"
              >
                Register
              </Button>
            </Grid>

            <Grid item xs={12}>
              <legend>Description</legend>
            </Grid>
            <Grid item xs={8} style={{ paddingLeft: "75px" }}>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.form.description
                }}
              />
            </Grid>
            <Grid item xs={4} style={{ paddingLeft: "75px" }}>
              {/*
            <Input
              s={12}
              type="select"
              label="Materialize Select"
              defaultValue="Lead"
            >
              <option value="Lead">Lead</option>
              <option value="Follow">Follow</option>
              <option value="Both">Lead & Follow</option>
            </Input>
          */}
              <TextField
                label="Email"
                type="email"
                className={classes.textField}
              />
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}
EventForm.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(EventForm);
