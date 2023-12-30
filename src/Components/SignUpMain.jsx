import React from "react";
import styles from "./signupmain.module.css";
import Dropdown from "./Dropdown";
import Months from "./Months";
import { Link } from "react-router-dom";
import styless from "../Components/signupmain.module.css";
import FormCreateHeading from "./FormCreateHeading";
import FormSignUpHeading from "./FormSignUpHeading";

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
  //   if (!isOpen) return null;
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
            <input type="text" placeholder="First Name"></input>
          </div>
          <div className={styles.space}>
            <input type="text" placeholder="Surname"></input>
          </div>
        </div>
        <div className={styles.mobilePassword}>
          <input
            className={styles.flexInput}
            type="text"
            placeholder="Mobile Number or email address"
          ></input>
        </div>
        <div className={styles.mobilePassword}>
          <input type="passwords" placeholder="New password"></input>
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
          <button className={styles.signup}>Sign Up</button>
        </div>
        <h3 className={styles.have}>
          <Link to="/login">{btnText}</Link>
        </h3>
      </div>
    </div>
  );
}
