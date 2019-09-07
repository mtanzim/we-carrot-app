import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Maps from "./components/Maps";
import BlankPage from "./components/Blank";

const App = () => {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("business") !== null) {
      setUserLogged(true);
    }
  }, []);

  const logOut = e => {
    e.preventDefault();
    localStorage.removeItem("business");
    setUserLogged(false);
  };

  return (
    <React.Fragment>
      <NavBar userLogged={userLogged} logOut={logOut} />
      <Switch>
        <Route
          path="/login"
          render={props => (
            <LoginPage
              {...props}
              userLogged={userLogged}
              setUserLogged={setUserLogged}
            />
          )}
        />
        <Route path="/maps" component={Maps} />
        <Route
          path="/about"
          render={props => <BlankPage {...props} title={"About"} />}
        />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          userLogged={userLogged}
          business={localStorage.getItem("business")}
        />
        <PrivateRoute
          path="/guide"
          component={BlankPage}
          userLogged={userLogged}
          title={"Guide"}
        />
        <PrivateRoute
          path="/account"
          component={BlankPage}
          userLogged={userLogged}
          title={"Account"}
        />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

export default App;
