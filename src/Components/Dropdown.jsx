import React from "react";
import styles from "./dropdown.module.css";

export default function Dropdown({ max, min }) {
  // Generate an array with numbers from 1 to 31
  const options = Array.from({ length: max }, (_, index) => index + min);

  return (
    <>
      <select id="dayDropdown" className={styles.drop}>
        {options.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </>
  );
}
