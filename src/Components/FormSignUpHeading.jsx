import React from "react";
import styles from "./formSignUpHeading.module.css";
import cross from "../assets/cross.png";
export default function FormSignUpHeading({
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
  return (
    <div className={styles.formSignUpHeading}>
      <div className={styles.text}>
        <h2 className={styles.title}>Sign Up</h2>
        <p className={styles.sub}>It's quick and easy.</p>
      </div>
      <div className={styles.button}>
        <button onClick={onClose}>
          <img src={cross} className={styles.cross}></img>
        </button>
      </div>
    </div>
  );
}
