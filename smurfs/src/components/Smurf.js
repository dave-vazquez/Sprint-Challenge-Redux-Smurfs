import React from "react";
import styled from "styled-components";

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

class Smurf extends React.Component {
  render() {
    const { smurf } = this.props;
    return (
      <SmurfWrapper>
        <h1>{smurf.name}</h1>
        {/* <span>ID: {smurf.id}</span> */}
        <span>Age: {smurf.age}</span>
        <span>Height: {smurf.height}</span>
      </SmurfWrapper>
    );
  }
}

export default Smurf;
