import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getCredentials();
  }, [store.token]);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="user-info ml-auto">
          {!store.token ? (
            <Link to="/register">
              <button className="btn">Register</button>
            </Link>
          ) : (
            <h6>Welcome {store.credentials}</h6>
          )}
          {!store.token ? (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          ) : (
            <button className="btn" onClick={() => actions.logout()}>
              Log out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
