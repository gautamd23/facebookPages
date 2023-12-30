import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.heading}>
      <div className={styles.head}>
        <div>
          <h2>Create a Page</h2>
        </div>
        <div>
          <p>
            Connect your business, yourself or your cause to the worldwide
            community of people on Facebook. To get started, choose a Page
            category.
          </p>
        </div>
      </div>
    </div>
  );
}
