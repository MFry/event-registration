import React, { Component } from "react";
import Input from "muicss/lib/react/input";

class EmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  changeHandler(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <Input value={this.state.value} onChange={e => this.changeHandler(e)} />
    );
  }
}

export default EmailInput;
