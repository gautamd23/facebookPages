import React from "react";
import styles from "./formCreateheading.module.css";

export default function FormCreateHeading() {
  return (
    <div className={styles.formCreateHeading}>
      <h2 className={styles.title}>Create a new account</h2>
      <p className={styles.sub}>It's quick and easy.</p>
    </div>
  );
}
