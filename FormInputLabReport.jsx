import React from "react";
import { useState } from "react";
import "../Css/AddLabReports.css";

const FormInputLabReport = () => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <>
      <div className="formInput">
        <label class="l2">{label}</label>
        <input
          class="input2"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span>{errorMessage}</span>
      </div>
    </>
  );
};

export default FormInputLabReport;
