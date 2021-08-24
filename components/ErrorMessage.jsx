import React from "react";

export default function ErrorMessage({ error }) {
  return <div className="signup-form__error-msg"><span>{error}</span></div>;
}
