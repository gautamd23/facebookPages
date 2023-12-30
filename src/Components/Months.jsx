import React from "react";
import styles from "./months.module.css";

export default function Months() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      {/* <label htmlFor="monthDropdown">Select a month:</label> */}
      <select id="monthDropdown" className={styles.drop}>
        {months.map((month, index) => (
          <option key={index + 1} value={index + 1}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}
