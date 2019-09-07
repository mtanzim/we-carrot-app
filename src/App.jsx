import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

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
      <Router>
        <React.Fragment>
          <Route path="/login" render={(props) => <LoginPage {...props} userLogged={userLogged} setUserLogged={setUserLogged} />} />
          <PrivateRoute path="/dashboard" component={Dashboard} userLogged={userLogged} business={localStorage.getItem('business')} />
        </React.Fragment>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
