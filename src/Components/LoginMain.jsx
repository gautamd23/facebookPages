import React from "react";
import styles from "./loginMain.module.css";
import LogoMain from "./LogoMain";
import { Link } from "react-router-dom";

export default function LoginMain() {
  return (
    <>
      <div className={styles.containertwo}>
        <div className={styles.box}>
          <div className={styles.boxContent}>
            <p className={styles.loginWelcome}>Log in to Facebook</p>
            <div className={styles.input}>
              <input
                type="text"
                placeholder="Email address or phone number"
              ></input>
            </div>
            <div className={styles.input}>
              <input type="password" placeholder="Password"></input>
            </div>
            <div>
              <button className={styles.loginBtn}>Log in</button>
            </div>

            <p className={styles.forgot}>
              Forgotten account? &middot;{" "}
              <Link to="/signup">Sign up for Facebook</Link>
            </p>
            {/* <div className={styles.partition}></div>
        <div>
          <button className={styles.newaccountbtn}>
            Create new accounB
          </button>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
