import React from "react";
import logo from "../assets/logo2.png";
import styles from "./createPage.module.css";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import Card from "../Components/Card";

export default function CreatePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <Cards />
    </div>
  );
}
