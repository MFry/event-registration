import React, { Component } from "react";
import Form from "muicss/lib/react/form";
import Radio from "muicss/lib/react/radio";
import Button from "muicss/lib/react/button";
import Input from "muicss/lib/react/input";
import Panel from "muicss/lib/react/panel";

class EventForm extends Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.state = { value: "", form: { title } };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Submitted document", this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div style={{ marginTop: "40px" }}>
        <header className="App App-header">
          <h1 className="App-title">{this.state.form.title}</h1>
        </header>
        <Panel>
          <form onSubmit={() => this.handleSubmit}>
            <legend>Description</legend>
            <div>{this.state.form.description}</div>
            <Radio name="register" label="Lead" />
            <Radio name="register" label="Follow" />
            <Radio name="register" label="Both" />

            <Input
              label="Email Address"
              type="email"
              defaultValue="Validation error"
            />

            <Button variant="raised" type="submit">
              Submit
            </Button>
          </form>
        </Panel>
      </div>
    );
  }
}

export default EventForm;
