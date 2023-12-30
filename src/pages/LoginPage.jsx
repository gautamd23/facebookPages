import React from "react";
import LoginMain from "../Components/LoginMain";
import LogoMain from "../Components/LogoMain";

import SignUpMain from "../Components/SignUpMain";

export default function LoginPage() {
  return (
    <>
      <LogoMain margin="30px" height="80px" width="540px" />
      <LoginMain />
    </>
  );
}
