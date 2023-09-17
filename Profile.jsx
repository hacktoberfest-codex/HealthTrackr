import React from "react";
import "../Css/Profile.css";
import toChange1 from "../assets/profile-pic.png";
import SettingsIcon from "../assets/setting.png";
import MenuIcon from "../assets/menu.png";
import { Link } from "react-router-dom";

const Profile = () => {
  // const {
  //   Current: { userName, userHomeAddress, UserDOB, userDeasese, userContactNo },
  // } = Response;

  return (
    <>
      <div className="container">
        <div className="profile-box">
          <img src={SettingsIcon} className="setting-icon" />
          <img src={toChange1} className="profile-pic" />
          <h3>James Nicholson</h3>
          <p>Leukemia Patient</p>
          <div className="address">
            <h3>About</h3>
            <p className="one">Date of Birth</p>
            <p className="two">21 Sep 2001</p>
            <p className="three">Home Address</p>
            <p className="four">Bhubaneswar, Odisha</p>
            <p className="five">Identificatory</p>
            <p className="six">AD15-7987</p>
            <p className="seven">Phone Number</p>
            <p className="eight">+917768767389</p>
          </div>
          {/* <div className="profile-box">
          <img src={MenuIcon} className="menu-icon" />
          <img src={SettingsIcon} className="setting-icon" />
          <img src={toChange1} className="profile-pic" />
          <h3>{userName}</h3>
          <p>{userDeasese}</p>
          <div className="address">
            <h3>About</h3>
            <p className="one"></p>
            <p className="two">{UserDOB}</p>
            <p className="three">Home Address</p>
            <p className="four">{userHomeAddress}</p>
            <p className="five">Identificatory</p>
            <p className="six">AD15-7987</p>
            <p className="seven">Phone Number</p>
            <p className="eight">{userContactNo}</p>
          </div> */}
          <button type="button">Appointment</button>
          <div className="profile-bottom"></div>
        </div>
      </div>
    </>
  );
};

export default Profile;
