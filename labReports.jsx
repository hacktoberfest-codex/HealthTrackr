import { useState } from "react";
import "../Css/formInput.css";
import FormInput from "./FormInput";

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
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1> Add New Lab Reports</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddLabReports;
