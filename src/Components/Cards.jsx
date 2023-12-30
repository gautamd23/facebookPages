import React from "react";
import styles from "./card.module.css";
import card1 from "./card1.png";
import card2 from "./card2.png";
import Card from "../Components/Card";

export default function Cards() {
  return (
    <div className={styles.container}>
      <div className={styles.card1}>
        <Card
          img={card1}
          title="Business or brand"
          subTitle="Showcase your products and services, spotlight your brand and reach more
        customers on Facebook."
          btnText="Get started"
        />

        <Card
          img={card2}
          title="Community or public figure"
          subTitle="Connect and share with people in your community, organisation, team,
            group or club."
          btnText="Get started"
        />
        {/* <div className={styles.card12}>
          <img src={card2} alt="brand" className={styles.img2}></img>
          <h2 className={styles.title}>Community or public figure</h2>
          <p className={styles.content}>
            Connect and share with people in your community, organisation, team,
            group or club.
          </p>
          <button className={styles.getstarted}>Get started</button>
        </div> */}
      </div>
    </div>
  );
}
