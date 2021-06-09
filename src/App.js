import React from "react";
import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import "./css/app.css";

import data from "./data/form.js";
import FormField from "./components/FormField.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hasConditional = (field) => {
    return field.hasOwnProperty("conditional");
  };

  handleChange = (field, value) => {
    const oldState = this.state;
    const newState = Object.assign(oldState, {
      [field]: value,
    });
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="container">
        <div className="form-container">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <h5>Form</h5>
            {data.map((formField, index) => {
              return (
                <FormField
                  name={formField.name}
                  humanName={formField.human_label}
                  onChange={this.handleChange}
                  value={this.state[formField.name]}
                  key={index}
                  conditionalLogic={
                    this.hasConditional(formField)
                      ? formField.conditional.show_if
                      : null
                  }
                  conditionalValue={
                    this.hasConditional(formField)
                      ? this.state[formField.conditional.name]
                      : null
                  }
                  type={formField.type}
                ></FormField>
              );
            })}
            <input
              className="button-primary"
              type="submit"
              onSubmit={this.handleSubmit}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
