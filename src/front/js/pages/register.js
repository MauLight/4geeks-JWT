import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const terms = "https://r.mtdv.me/zJeJTqjbb1";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [post, setPost] = useState(false);
  const navigate = useNavigate();

  if (post && post === true)
  navigate("/login");

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleCheck = (e) => {
    console.log(e.target.value);
    if (checkbox === false) {
      setCheckBox(true);
    } else {
      setCheckBox(false);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Hey!");
    postNewUser(email, password);
  };

  const postNewUser = async (email, password) => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    try {
      const resp = await fetch(
        "https://3001-4geeksacade-reactflaskh-nybput2jps6.ws-us77.gitpod.io/api/user",
        opts
      );
      if (resp.status !== 200) {
        alert("There was an error");
        return false;
      }
      const data = await resp.json();
      console.log(data);
      console.log("data posted!");
      if(resp.status === 200) {
        setPost(true)
      }
    } catch (error) {
      console.error("There was an error in your request");
    }
  };

  return (
    <form
      className="container-fluid w-25 border rounded p-5"
      onSubmit={handleRegister}
    >
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
          onChange={handlePassword}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          value={checkbox}
          onChange={handleCheck}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          I agree with the{" "}
          <a href={terms} target="_blank">
            terms of service.
          </a>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Register;
