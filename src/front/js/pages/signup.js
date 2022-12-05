import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = sessionStorage.getItem("token");
  console.log(token);
  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePass = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: " + email + " password: " + password);
    handleLogin();
  }; */

  const handleLogin = (e) => {
    e.preventDefault();
    actions.login(email, password);
  };

  if (store.token && store.token != "" && store.token != undefined)
    navigate("/");

  return (
    <form
      className="container-fluid w-25 border rounded p-5"
      onSubmit={handleLogin}
    >
      <h4 className="pb-3">Login</h4>
      {store.token && store.token != "" && store.token != undefined ? (
        <div className="justify-content-center">
          <p>You are logged in</p>
        </div>
      ) : (
        <>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={handleEmail}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={handlePass}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default Login;
