import React from "react";
import "./custom-form-input.component.scss";

function CustomFormInput({ handleChange, label, id, ...otherInputProps }) {
  return (
    <div className="form-input-container">
      <input onChange={handleChange} id={id} {...otherInputProps} />
      {label ? (
        <label
          htmlFor={`${id}`}
          className={`${otherInputProps.value.length ? "focus" : ""} label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default CustomFormInput;
