import React, { Component } from "react";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Form from "muicss/lib/react/form";
import Button from "muicss/lib/react/button";
import Input from "muicss/lib/react/input";
import Panel from "muicss/lib/react/panel";
import Divider from "muicss/lib/react/divider";
import RadioBody from "./Radio";
import "./materialRadioButton.css";

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
            <Row>
              <Col md="8" />
              <Col md="4">
                <Button variant="raised" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col md="12">
                <legend>Description</legend>
              </Col>
            </Row>
            <Row>
              <Col md="8" style={{ paddingLeft: "75px" }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: this.state.form.description
                  }}
                />
              </Col>
              <Col md="4" style={{ paddingLeft: "75px" }}>
                <RadioBody
                  radioButtons={[
                    { name: "register", label: "Lead" },
                    { name: "register", label: "Follow" },
                    { name: "register", label: "Both" }
                  ]}
                  className="md-radio"
                />
                <Input
                  label="Email Address"
                  type="email"
                  defaultValue="Validation error"
                />
              </Col>
            </Row>
          </Form>
        </Panel>
      </div>
    );
  }
}

export default EventForm;
