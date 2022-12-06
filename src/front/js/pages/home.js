import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getCredentials();
  }, [store.token]);

  return (
    <div className="text-center mt-5">
      <Link to="/register">
        <h1>Register</h1>
      </Link>
      <p className="mb-0">
        <img src="https://upload.wikimedia.org/wikipedia/en/1/1e/IchigoKurosakiBleach.jpg" />
      </p>
      <div className="alert alert-info">{store.message}</div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://start.4geeksacademy.com/starters/react-flask">
          Read documentation
        </a>
      </p>
    </div>
  );
};
