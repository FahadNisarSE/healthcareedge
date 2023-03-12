import { useState } from 'react';

import './FormInput.css';

export default function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  }

  return (
    <div className="formInput-container">
      <label className='form-input-label'>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          (inputProps.name === "confirmPassword") && setFocused(true)
        }
        focused={focused.toString()}
        className='form-input'
      />
      <span className='error-message'>* {errorMessage}</span>
    </div>
  )
}
