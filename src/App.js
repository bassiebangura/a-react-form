import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      isFriendly: false,
      gender: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({
          [name]: value
        });
  }
  render() {
    return (
      <form>
        <input
          name="firstName"
          type="text"
          value={this.state.firstName} //*this creates controlled input; resulting in single source of truth
          onChange={this.handleChange}
        />

        <br />
        <input
          name="lastName"
          type="text"
          value={this.state.lastName} //this creates controlled input; resulting in single source of truth
          onChange={this.handleChange}
        />
        <br />

        <textarea value={"Some default value"} onChange={this.handleChange} />

        <br />

        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />
          Is friendly?
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>
        <div>{`${this.state.firstName} ${this.state.lastName}`}</div>
      </form>
    );
  }
}

export default App;
