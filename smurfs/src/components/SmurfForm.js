import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;

  margin: 20px;
  padding: 10px;

  border: 1px solid black;

  input,
  button {
    width: 100%;
  }

  h3 {
    text-align: center;
  }
`;

class SmurfForm extends React.Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    }
  };

  handleChange = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .addSmurf(this.state.smurf)
      .then(() => this.props.history.push("/smurfs"))
      .catch(err => {});
  };

  render() {
    const { addingSmurf, error } = this.props;
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.smurf.name || ""}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={this.state.smurf.age || ""}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={this.state.smurf.height || ""}
          onChange={this.handleChange}
        />
        <button onSubmit={this.handleSubmit}>Add Smurf</button>
        {addingSmurf && <h3>Adding Smurf to Village...</h3>}
        {error && <h3>{error}</h3>}
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
