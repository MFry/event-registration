import React, { Component } from "react";
import Form from "muicss/lib/react/form";
import Radio from "muicss/lib/react/radio";
import Button from "muicss/lib/react/button";
import Input from "muicss/lib/react/input";
import Panel from "muicss/lib/react/panel";
import Col from "muicss/lib/react/col";

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
    return (
      <div style={{ marginTop: "40px" }}>
        <header className="App App-header">
          <h1 className="App-title">{this.state.form.title}</h1>
        </header>
        <Panel>
          <Form onSubmit={() => this.handleSubmit}>
            <br />
            <Col md="8">
              <legend>Description</legend>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.state.form.description
                }}
              />
            </Col>
            <Col md="4">
              <Radio name="register" label="Lead" />
              <Radio name="register" label="Follow" />
              <Radio name="register" label="Both" />

              <Input
                label="Email Address"
                type="email"
                defaultValue="Validation error"
              />
            </Col>
            <Button variant="raised" type="submit">
              Submit
            </Button>
          </Form>
        </Panel>
      </div>
    );
  }
}

export default EventForm;
