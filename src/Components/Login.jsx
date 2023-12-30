import React, { useState } from "react";
import "../index.css";
import { NavLink, Link } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignUpMain from "./SignUpMain";
import styles from "../Components/signupmain.module.css";

export default function Login({
  openModal,
  switchComp,
  setSwitchComp,
  switching,
}) {
  return (
    <div className="container-two">
      <div className="box">
        <div className="box-content">
          <div className="input">
            <input
              type="text"
              placeholder="Email address or phone number"
            ></input>
          </div>
          <div className="input">
            <input type="password" placeholder="Password"></input>
          </div>
          <div>
            <Link to="/login">
              <button className="login-btn">Log in</button>
            </Link>
          </div>

          <p className="forgot">Forgotten password?</p>
          <div className="partition"></div>
          <div>
            <button className="new-account-btn" onClick={openModal}>
              Create new account
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-text">
        <p>
          <strong>
            <Link to="/registration">Create a Page</Link>
          </strong>{" "}
          for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}
