import React, { Component } from "react";

//<Radio name="register" label="Lead" />
class RadioBody extends Component {
  constructor(props) {
    super(props);
    const { radioButtons, className } = props;
    this.state = { radioButtons, className, checked: "" };
  }

  render() {
    const { radioButtons: buttons, className } = this.state;
    return (
      <div>
        {buttons.map(({ name, label }) => (
          <div
            className={className}
            onClick={e => {
              this.setState({
                checked: e.target.getAttribute("data-value")
              });
              console.log(e.target.dataset.value);
            }}
            data-value={name}
          >
            <input
              type="radio"
              name={name}
              value={name}
              checked={this.state.checked === name}
            />
            <label>{label}</label>
          </div>
        ))}
      </div>
    );
  }
}

export default RadioBody;
