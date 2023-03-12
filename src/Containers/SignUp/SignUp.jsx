import { useState } from "react";

import { FormInput } from "../../Components";
import bgImage from "../../Assets/contact-us.jpg";
import "./SignUp.css";

export default function SignUp() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    role: "patient",
  });

  const signUp = {
    heading: `${values.role} Sign up`,
    input: [
      {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:
          "Username must be 3-16 character and shouldn't include any special characters!",
        label: "Username",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
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
        errorMessage:
          "Password must contain minimum 8 characters, at least 1 letter and 1 number!",
        label: "Password",
        pattern: "^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$",
        required: true,
      },
      {
        id: 4,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        errorMessage: "Password don't match!",
        label: "Confirm Password",
        pattern: values.password,
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
    <div className="signup-container">
      <div className="side-image-container">
        <img src={bgImage} alt="bg-graphics" />
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <h2 className="signup-heading blue-gradient">{signUp.heading}</h2>
        <div className="signup-subContainer">
          <div className="form-input-container">
            {signUp.input.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button className="simple-sign-up main-bg">Sign Up</button>
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
