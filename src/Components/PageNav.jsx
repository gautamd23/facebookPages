import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
