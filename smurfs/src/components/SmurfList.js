import React from "react";
import styled from "styled-components";
import Smurf from "./Smurf";
import { connect } from "react-redux";
import { getSmurfs } from "../actions/index";

const SmurfListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

class SmurfList extends React.Component {
  componentDidMount = () => {
    this.props.getSmurfs();
  };

  render() {
    const { smurfs, fetchingSmurfs, error } = this.props;
    return (
      <SmurfListContainer>
        {fetchingSmurfs ? (
          <h1>Fetching Smurfs...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf} />)
        )}
      </SmurfListContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);
