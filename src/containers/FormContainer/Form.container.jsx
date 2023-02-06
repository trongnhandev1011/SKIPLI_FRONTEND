import React, { useEffect, useState } from "react";
import FormComponent from "../../components/FormComponent/Form.component";
import "./Form.style.scss";

const FormContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  useEffect(() => {}, [phoneNumber]);

  const validateForm = (value) => {
    setErrorMsg("");
    if (!phoneRegex.test(value)) {
      setErrorMsg("Please enter a valid phone number");
    }
  };

  return (
    <div className="form-container flex items-center justify-center">
      <FormComponent
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        validateForm={validateForm}
        errorMsg={errorMsg}
      />
    </div>
  );
};

export default FormContainer;
