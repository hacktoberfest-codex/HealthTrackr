import React from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import "../Css/AddBtn.css";
import { Link } from "react-router-dom";

const Addbtnlp = () => {
  return (
    <div className="btnAB">
      <button className="b2">
        <BiSolidAddToQueue />
        <Link className="c1" to="/AddLabReports">
          Add+
        </Link>
      </button>
    </div>
  );
};

export default Addbtnlp;
