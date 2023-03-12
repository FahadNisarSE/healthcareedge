import { useState } from "react";

import { FormInput } from "../../Components";

import bgImage from "../../Assets/contact-us.jpg";
import "./LogIn.css";

export default function LogIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    role: "patient",
  });

  const login = {
    heading: `${values.role} Login`,
    input: [
      {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "something@example.com",
        errorMessage: "Email must be valid!",
        label: "Email",
        required: true,
      },
      {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "",
        errorMessage: "Password must be provided!",
        label: "Password",
        required: true,
      },
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const changeRole = () => {
    setValues({
      ...values,
      role: values.role === "patient" ? "doctor" : "patient",
    });
  };

  return (
    <div className="login-container">
      <div className="side-image-container">
        <img src={bgImage} alt="bg-graphics" />
      </div>
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-heading blue-gradient">{login.heading}</h2>
        <div className="login-subContainer">
          <div className="form-input-container">
            {login.input.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button className="simple-log-in main-bg">Sign Up</button>
          </div>
        </div>
        <div className="change-role">
          Are you a
          <span className="change-role-link" onClick={changeRole}>
            {values.role === "patient" ? " doctor?" : " patient?"}
          </span>
        </div>
      </form>
    </div>
  );
}
