import React from "react";
import styles from "./signupmain.module.css";
import Dropdown from "./Dropdown";
import Months from "./Months";
import { Link } from "react-router-dom";
import styless from "../Components/signupmain.module.css";
import FormCreateHeading from "./FormCreateHeading";
import FormSignUpHeading from "./FormSignUpHeading";
import { useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlicer";
import { useNavigate } from "react-router-dom";

export default function SignUpMain({
  closeModal,
  isOpen,
  onClose,
  children,
  heading,
  btnText,
  switchComp,
  setSwitchComp,
  switching,
}) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const name = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  //   if (!isOpen) return null;

  function handleSingup() {
    createUserWithEmailAndPassword(
      auth,
     
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed up
        const {   email, password } = userCredential.user;
        dispatch(
          addUser({
           
            email: email,
            password: password,
          })
        );
        // ...
        navigate('/login');

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {switchComp ? (
          <FormSignUpHeading onClose={onClose} />
        ) : (
          <FormCreateHeading />
        )}
        <div className={styles.partitionBtm}></div>
        <div className={styles.grid}>
          <div className={styles.space}>
            <input ref={name} type="text" placeholder="First Name"></input>
          </div>
          <div className={styles.space}>
            <input ref={lastName} type="text" placeholder="Surname"></input>
          </div>
        </div>
        <div className={styles.mobilePassword}>
          <input
            ref={email}
            className={styles.flexInput}
            type="text"
            placeholder="Mobile Number or email address"
          ></input>
        </div>
        <div className={styles.mobilePassword}>
          <input
            ref={password}
            type="password"
            placeholder="New password"
          ></input>
        </div>
        <div className={styles.labels}>
          <p>Date of birth</p>
        </div>
        <div className={styles.dropdown}>
          <Dropdown max={31} min={1} />
          <Dropdown max={2023} min={1960} />
          <Months />
        </div>
        <div className={styles.labels}>
          <p>Gender</p>
        </div>
        <div className={styles.check}>
          <div className={styles.checkbox}>
            <label>Male</label>
            <input type="radio"></input>
          </div>
          <div className={styles.checkbox}>
            <label>Female</label>
            <input type="radio"></input>
          </div>
          <div className={styles.checkbox}>
            <label>Custom</label>
            <input type="radio"></input>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            People who use our service may have uploaded your contact
            information to Facebook. Learn more.
          </p>
          <p className={styles.footerText}>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time.
          </p>
        </div>
        <div>
          <button className={styles.signup} onClick={handleSingup}>
            Sign Up
          </button>
        </div>
        <h3 className={styles.have}>
          <Link to="/login">{btnText}</Link>
        </h3>
      </div>
    </div>
  );
}
