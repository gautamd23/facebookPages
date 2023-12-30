import React from "react";
import LogoMain from "../Components/LogoMain";
import styles from "./signup.module.css";
import SignUpMain from "../Components/SignUpMain";

export default function SignUp({ switchComp, setSwitchComp, switching }) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <LogoMain height="100px" width="300px" />
        </div>
        <div>
          <SignUpMain
            heading="Create a new account"
            btnText="Already have an account?"
          />
        </div>
      </div>
    </div>
  );
}
