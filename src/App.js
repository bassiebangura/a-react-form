import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "First Name",
      lastName: "Last Name",
      isFriendly: false,
      gender: "",
      favColor: "blue",
      isCheckedPeanuts: false,
      peanutsVal: "",
      isCheckedDiary: false,
      diaryVal: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox" && value === "Peanuts"
      ? this.setState({ [name]: checked, peanutsVal: checked ? value : "" })
      : this.setState({
          [name]: value
        });
    type === "checkbox" && value === "Diary"
      ? this.setState({ [name]: checked, diaryVal: checked ? value : "" })
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
        <br />
        <label>Favorite Color: </label>
        <select
          name="favColor"
          value={this.state.favColor}
          onChange={this.handleChange}
        >
          <option value="">-- Please Choose a Color --</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <opiton value="white">White</opiton>
          <option value="red">Red</option>
        </select>
<br />
        <label>
          <input
            onChange={this.handleChange}
            type="checkbox"
            value="Peanuts"
            name="isCheckedPeanuts"
            checked={this.state.name}
          />{" "}
          Peanuts
        </label>
        <label>
          <input
            onChange={this.handleChange}
            type="checkbox"
            value="Diary"
            name="isCheckedDairy"
            checked={this.state.name}
          />{" "}
          Dairy
        </label>
        <div>
          {`${this.state.firstName} ${this.state.lastName} you are a ${
            this.state.gender
          }. And ur color: ${this.state.favColor}`}
          <p>
            Your dietary restrictions: 
            {`${this.state.peanutsVal}  ${this.state.diaryVal}`}
          </p>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
