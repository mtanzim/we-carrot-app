import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const NavBar = ({userLogged, logOut}) => {
  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <Link className="navbar-brand" to="/">
          Nulleiemer
        </Link>
        <div className="navbar-nav">
          <Link className="mr-2" to="/dashboard">
            Dashboard
          </Link>
          <Link className="mr-2" to="/maps">
            List
          </Link>
          <Link className="mr-2" to="/guide">
            Guide
          </Link>
          <Link className="mr-2" to="/account">
            Account
          </Link>
          <Link className="mr-2" to={userLogged ? "/logout" : "/login"} onClick={userLogged ? logOut : null}>
            {userLogged ? "Logout" : "Login"}
          </Link>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
