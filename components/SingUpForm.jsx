import React, { useState } from "react";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { inputTextInfo, inputBoxCheck } from "../helpers/inputsData";
import { selectStyles } from "../helpers/selectStyles";
import TextInput from "./inputs/TextInput";
import CheckBoxInput from "./inputs/CheckBoxInput";
import Select from "react-select";
import DropdownIndicator from "./DropdownIndicator";
import ErrorMessage from "./ErrorMessage";

export default function SingUpForm() {
  const [error, setError] = useState(null);
  const [loading, setLoding] = useState(null);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoding(true);
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const message = await response.json();
      setLoding(false);
      window.scrollTo(0, 0);
      response.ok ? router.push("/success") : setError(message.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="signup-form__wrapper">
      <h1 className="signup-form__title">Sign up for email updates</h1>
      <h2 className="signup-form__description">*Indicates Required Field</h2>
        {error && <ErrorMessage error={error} />}
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="signup-form__row">
          <div className="signup-form__col">
            <TextInput
              data={inputTextInfo.firstName}
              errors={errors}
              register={register}
              disabled={loading}
            />
          </div>
          <div className="signup-form__col">
            <TextInput
              data={inputTextInfo.lastName}
              errors={errors}
              register={register}
              disabled={loading}
            />
          </div>
        </div>
        <div className="signup-form__row">
          <div className="signup-form__col">
            <TextInput
              data={inputTextInfo.email}
              errors={errors}
              register={register}
              disabled={loading}
            />
          </div>
          <div className="signup-form__col">
            <TextInput
              data={inputTextInfo.organization}
              errors={errors}
              register={register}
              disabled={loading}
            />
          </div>
        </div>
        <div className="signup-form__row">
          <div className="signup-form__col select__col">
            <div className="input__error-msg">
              {errors.resident && errors.resident.message}
            </div>
            <Controller
              name="resident"
              control={control}
              render={({ field }) => (
                <>
                  <label className="select__label" htmlFor="selectResident">
                    EU RESIDENT*
                  </label>
                  <Select
                    {...field}
                    className={errors.resident ? "input-select--error" : ""}
                    inputId="selectResident"
                    placeholder="- SELECT ONE -"
                    styles={selectStyles}
                    components={{
                      DropdownIndicator,
                    }}
                    options={[
                      { value: "yes", label: "YES" , borderBottom:"1px solid #a1d2ce"},
                      { value: "no", label: "NO", borderBottom:"uset" },
                    ]}
                  />
                </>
              )}
              rules={{ required: "EU resident is required" }}
            />
          </div>
        </div>
        <div className="signup-form__row">
          <div className="signup-form__col">
            <CheckBoxInput
              errors={errors}
              disabled={loading}
              register={register}
              data={inputBoxCheck.advances}
            />
          </div>
          <div className="signup-form__col">
            <CheckBoxInput
              errors={errors}
              register={register}
              disabled={loading}
              data={inputBoxCheck.alerts}
            />
          </div>
        </div>
        <div className="signup-form__row">
          <div className="signup-form__col">
            <CheckBoxInput
              errors={errors}
              disabled={loading}
              register={register}
              data={inputBoxCheck.otherCommunications}
            />
          </div>
          <div className="signup-form__col">
            <CheckBoxInput
              errors={errors}
              register={register}
              disabled={loading}
              data={inputBoxCheck.triggerError}
            />
          </div>
        </div>
        <div className="signup-form__action">
          <button className="action__submit" type="submit">Submit</button>
          <button className="action__rest" type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}