import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import PageNav from "./Components/PageNav";
import CreatePage from "./pages/CreatePage";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [switchComp, setSwitchComp] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    setSwitchComp(true);
  };
  const closeModal = () => setModalOpen(false);
  const switching = () => {
    return setSwitchComp(true);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              openModal={openModal}
              closeModal={closeModal}
              isModalOpen={isModalOpen}
              setModalOpen={setModalOpen}
              switchComp={switchComp}
              setSwitchComp={setSwitchComp}
              switching={switching}
            />
          }
        />

        <Route path="registration" element={<CreatePage />} />
        <Route
          path="signup"
          element={
            <SignUp
              switchComp={switchComp}
              setSwitchComp={setSwitchComp}
              switching={switching}
            />
          }
        />
        <Route
          path="login"
          element={
            <LoginPage
              isModalOpen={isModalOpen}
              setModalOpen={setModalOpen}
              openModal={openModal}
              closeModal={closeModal}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
