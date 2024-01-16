import React from "react";
import styles from "./loginMain.module.css";
import LogoMain from "./LogoMain";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import {  useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlicer";
import { useNavigate } from "react-router-dom";

export default function LoginMain() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const email = useRef(null);
  const password = useRef(null);
  function handleLogin() {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const {email, password} = userCredential.user;
        // ...
        console.log(email, password);
        dispatch(
          addUser({
           
            email: email,
            password: password,
          })
        );
        navigate("/registration");
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error.message)
      });
  }
  return (
    <>
      <div className={styles.containertwo}>
        <div className={styles.box}>
          <div className={styles.boxContent}>
            <p className={styles.loginWelcome}>Log in to Facebook</p>
            <div className={styles.input}>
              <input
              ref={email}
                type="text"
                placeholder="Email address or phone number"
              ></input>
            </div>
            <div className={styles.input}>
              <input ref={password} type="password" placeholder="Password"></input>
            </div>
            <div>
              <button className={styles.loginBtn} onClick={handleLogin}>
                Log in
              </button>
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
