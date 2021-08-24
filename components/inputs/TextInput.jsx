import React from "react";

export default function TextInput({ errors, register, data ,disabled }) {
  return (
    <>
      <div className="input__error-msg">
        {errors[data.name] && errors[data.name].message}
      </div>
      <label className="input-text__label" htmlFor={data.name}>{data.label}</label>
      <div className="input-text__field">
        <input
          disabled = {disabled}
          id={data.name}
          type={data.type}
          className={errors[data.name] ? "input-text input-text--error" : "input-text"}
          {...register(data.name, {
            required: { value: data.required, message: data.errorRequired },
            pattern: { value: data.pattern, message: data.errorPattern },
          })}
        />
      </div>
    </>
  );
}
