import React, { useEffect, useState } from "react";
import {  Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Maps from "./components/Maps";

const App = () => {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('business') !== null) {
      setUserLogged(true);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem('business');
    setUserLogged(false);
  };

  return (
    <React.Fragment>
      <NavBar userLogged={userLogged} logOut={logOut} />
      <Switch>
        {/* <React.Fragment> */}
          <Route path="/login" render={(props) => <LoginPage {...props} userLogged={userLogged} setUserLogged={setUserLogged} />} />
          <Route path="/maps" component={Maps} />
          <PrivateRoute path="/dashboard" component={Dashboard} userLogged={userLogged} business={localStorage.getItem('business')} />
        {/* </React.Fragment> */}
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
