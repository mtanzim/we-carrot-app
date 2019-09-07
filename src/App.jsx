import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

// const isAuth = true;

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route {...rest} render={() => (
    isAuth === true
      ? <Component {...rest} />
      : <Redirect to='/' />
  )} />
)

// const logout = () => isAuth=false;

//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    }
    this.restaurant = {
      name: "Gayaya",
      id: 45
    };

  }



  render() {
    return (
      <React.Fragment>
        <NavBar isAuth={this.state.isLoggedIn} logout={this.logout} />
        <Switch>
          <Route exact path="/" render={() => this.state.isLoggedIn ? <Redirect to="/dashboard" /> : <Home/>}  />
          {/* <Route path="/login" render={() => this.state.isLoggedIn ? <Redirect to="/dashboard" /> : <Home/>}  /> */}
          <PrivateRoute
            path="/dashboard"
            restaurant={this.restaurant}
            isAuth = {this.state.isLoggedIn}
            component={Dashboard}
            />
          />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
