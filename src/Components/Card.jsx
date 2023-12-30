import React from "react";
// import card1 from "../assets/card1.png";
// import card2 from "../assets/card2.png";
import styles from "./card.module.css";

export default function Card({ title, subTitle, btnText, img }) {
  return (
    <div className={styles.card11}>
      <img
        src={img}
        alt="brand"
        className={`${styles.img} ${styles.img2}`}
      ></img>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{subTitle}</p>
      <button className={styles.getstarted}>{btnText}</button>
    </div>
  );
}
