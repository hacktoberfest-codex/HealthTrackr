import { useState } from "react";
import "../Css/FormInput2.css";
import FormInput from "./FormInput2";

const AddLabReports = () => {
  const [values, setValues] = useState({
    username: "",
    Consultation: "",
    file: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Lab Name",
      errorMessage:
        "username should be 3-16 characters and shouldn't include any special character!",
      label: "Lab Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 3,
      name: "Test",
      type: "date",
      placeholder: "Test",
      label: "Test",
    },
    {
      id: 4,
      name: "file",
      type: "file",
      placeholder: "Lab Reports",
      label: "Lab Reports",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className="an2">Add New Lab Reports</p>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="b7">Submit</button>
      </form>
    </>
  );
};
export default AddLabReports;
