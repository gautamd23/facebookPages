import React from "react";
import styles from "../pages/createPage.module.css";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <nav>
        <div className={styles.logobtn}>
          <Link to="/">
            <img src={logo} alt="logo" className={styles.img}></img>
          </Link>

          <Link to="/signup">
            <button className={styles.signup}>Sign Up</button>
          </Link>
        </div>

        <h4>Join or log in to Facebook </h4>
      </nav>
    </div>
  );
}
