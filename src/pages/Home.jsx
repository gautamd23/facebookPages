import React from "react";
import facebook from "../assets/facebook.jpg";
import Logo from "../Components/Logo";
import Login from "../Components/Login";
import SignUpMain from "../Components/SignUpMain";
import styles from "../Components/signupmain.module.css";

export default function Home({
  isModalOpen,
  setModalOpen,
  openModal,
  closeModal,
  switchComp,
  setSwitchComp,
  switching,
}) {
  return (
    <div className="main">
      <div className="container">
        <Logo />

        <Login
          openModal={openModal}
          closeModal={closeModal}
          switchComp={switchComp}
          setSwitchComp={setSwitchComp}
          switching={switching}
        />
        {isModalOpen && (
          <div className={styles.modaloverlay}>
            <SignUpMain
              isOpen={isModalOpen}
              onClose={closeModal}
              heading="Sign Up"
              btnText=""
              switchComp={switchComp}
              setSwitchComp={setSwitchComp}
              switching={switching}
            />
          </div>
        )}
      </div>
    </div>
  );
}
