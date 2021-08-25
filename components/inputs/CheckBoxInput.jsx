import React from "react";
import CheckIcon from "../icons/CheckIcon";
export default function CheckBoxInput({
  errors,
  data,
  register,
  disabled
}) {
  return (
    <>
      <div className="input__error-msg">
        {errors[data.name] && errors[data.name].message}
      </div>
      <label className="checkbox">
        <span className="checkbox__input">
          <input
            type="checkbox"
            {...register(data.name, {
              required: { value: data.required, message: data.errorMsg },
            })}
          />
          <span
            className={
              errors[data.name] ? "checkbox__control error checkbox__control--error" : "checkbox__control"
            }
          >
            <CheckIcon />
          </span>
        </span>
        <span className="checkbox__label">{data.label}</span>
      </label>
    </>
  );
}
