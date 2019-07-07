import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { connect } from "react-redux";
import { deleteSmurf, editSmurf } from "../actions/index";

const SmurfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 500px;
  height: auto;

  margin: 10px;
  padding: 10px;
`;

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

class Smurf extends React.Component {
  state = {
    smurf: this.props.activeSmurf || {
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
      .editSmurf(this.state.smurf)
      .then(res => (res ? this.props.history.push("/smurfs") : null));
  };

  render() {
    const { activeSmurf, smurf, deleteSmurf, editingSmurf, error } = this.props;
    return (
      <>
        {activeSmurf ? (
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.smurf.name || ""}
              placeholder="Name"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="age"
              value={this.state.smurf.age || ""}
              placeholder="Age"
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="height"
              value={this.state.smurf.height || ""}
              placeholder="Height"
              onChange={this.handleChange}
            />
            <button onSubmit={this.handleSubmit}>Update</button>
            {editingSmurf && <h3>Editing Smurf...</h3>}
            {error && <h3>{error}</h3>}
          </Form>
        ) : (
          <SmurfWrapper>
            <h1>{smurf.name}</h1>
            <span>Age: {smurf.age}</span>
            <span>Height: {smurf.height}</span>
            <button onClick={() => deleteSmurf(smurf.id)}>Delete</button>
            <Link to={`/edit/${smurf.id}`}>Edit</Link>
          </SmurfWrapper>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    editingSmurf: state.editingSmurf,
    error: state.error
  };
};

export default connect(
  null,
  { deleteSmurf, editSmurf }
)(Smurf);
