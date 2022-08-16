import React from "react";
import "./custom-form-input.component.scss";

function CustomFormInput({ handleChange, label, ...otherInputProps }) {
  return (
    <div className="form-input-container">
      <input onChange={handleChange} id={`${label}`} {...otherInputProps} />
      {label ? (
        <label
          htmlFor={`${label}`}
          className={`${otherInputProps.value.length ? "focus" : ""} label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default CustomFormInput;
