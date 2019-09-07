import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CONSTANTS from "../../constants";

const LoginPage = ({userLogged, setUserLogged}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    if (username === '' || username === null) {
      alert('Please input a username');
      return;
    }

    if (password === '' || password === null) {
      alert('Please input a password');
      return;
    }

    if (password !== '123456') {
      alert('Username or password not found');
      return;
    }

    let id = null;

    switch(username) {
      case 'bgmeister':
        id = 1;
        break;
      case 'gyaya':
        id = 2;
        break;
      case 'futura':
        id = 3;
        break;
      default:
        alert('Username or password not found');
    }

    fetch(`${CONSTANTS.ENDPOINT}/businesses/${id}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(json => {
        localStorage.setItem('business', JSON.stringify(json));
        setUserLogged(true);
      })
      .catch(response => alert(response));
  }

  if (userLogged) {
    return ( <Redirect push to="/dashboard" /> );
  }

  return (
    <React.Fragment>
      <h1>Login</h1>
      <div className="form-group">
        <input type="text" name="username" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" name="username" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="button" value="Sign in" onClick={login} />
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
