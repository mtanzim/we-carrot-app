import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
    this.restaurant = {
      name: "Gayaya",
      id: 45
    };
  }

  render() {
    return (
      <React.Fragment>
        <NavBar isAuth={this.state.isLoggedIn} />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.state.isLoggedIn ? <Redirect to="/dashboard" /> : <Home />
            }
          />
          <Route
            path="/dashboard"
            render={props => (
              <Dashboard {...props} restaurant={this.restaurant} />
            )}
          />
          />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
