import React from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import "../Css/AddBtn.css";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <div className="btnAB">
      <button className="b2">
        <BiSolidAddToQueue />
        <Link className="c1" to="/AddPrescription">
          Add+
        </Link>
      </button>
    </div>
  );
};

export default AddButton;
