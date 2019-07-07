import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import Smurf from "./Smurf";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
*/
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;

  padding: 10px;

  border-bottom: 1px solid black;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;

  width: 100%;
  max-width: 1000px;

  a {
    text-decoration: none;
  }
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <NavContainer>
          <Nav>
            <NavLink exact to="/" activeStyle={{ color: "black" }}>
              Home
            </NavLink>
            <NavLink to="/smurfs" activeStyle={{ color: "black" }}>
              Smurf Village
            </NavLink>
            <NavLink to="/add-smurf" activeStyle={{ color: "black" }}>
              Add Smurf
            </NavLink>
          </Nav>
        </NavContainer>
        <Route
          exact
          path="/"
          render={() => <h1>Welcome to the Smurf Village!</h1>}
        />
        <Route
          path="/smurfs"
          render={props => <SmurfList {...props} smurfs={this.props.smurfs} />}
        />
        <Route path="/add-smurf" component={SmurfForm} />
        <Route
          path="/edit/:id"
          render={props => {
            const id = props.match.params.id;
            return (
              <Smurf
                {...props}
                activeSmurf={this.props.smurfs.find(
                  smurf => `${smurf.id}` === id
                )}
              />
            );
          }}
        />
      </AppContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
