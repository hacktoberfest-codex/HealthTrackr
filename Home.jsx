import React from "react";
import "../Css/Home.css";
import logo from "../assets/logofront.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div class="banner">
        <div class="navbar">
          <img src={logo} class="logof" alt="" />
        </div>
        <h2 class="heading">HealthTrackr:</h2>
        <h2 class="heading2">Your Medical History, Always in Your Pocket</h2>
        <button class="log">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </>
  );
};

export default Home;
