import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { store, actions } = useContext(Context);
  console.log(store.credentials);

  useEffect(() => {
    if (store.token && store.token != "" && store.token != undefined)
      actions.getCredentials();
  }, [store.token]);

  const style = {
    width: "18rem",
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="card px-0" style={style}>
          <img
            src="https://numpaint.com/wp-content/uploads/2020/10/Bleach-Hero-Anime-paint-by-number.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{store.credentials}</h5>
            <p className="card-text">Some information about the user.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
