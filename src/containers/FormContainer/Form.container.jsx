import React, { useRef, useState } from "react";
import FormComponent from "../../components/FormComponent/Form.component";
import "./Form.style.scss";
import PhoneInputContainer from "../PhoneInputContainer/PhoneInput.container";
import CodeInputContainer from "../CodeInputContainer/CodeInput.container";
import { ToastContainer } from "react-toastify";
import { notificationHandler } from "../../utils/notification";

const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const codeRegex = /\d{6}/;

const FormContainer = () => {
  const countryCode = useRef();
  const phoneNumberRef = useRef();
  const codeRef = useRef();
  const [errorMsg, setErrorMsg] = useState({});

  const validatePhoneNumber = (value) => {
    setErrorMsg({
      ...errorMsg,
      phoneError: "",
    });
    if (!phoneRegex.test(value)) {
      setErrorMsg({
        ...errorMsg,
        phoneError: "Phone number is invalid",
      });
    }
  };

  const validateCodeNumber = (value) => {
    setErrorMsg({
      ...errorMsg,
      codeError: "",
    });
    if (!codeRegex.test(value) && value !== "") {
      setErrorMsg({
        ...errorMsg,
        codeError: "Invalid token",
      });
    }
  };

  const callAPI = async (api, data) => {
    const result = await fetch(`http://localhost:4000/${api}`, {
      // Enter your IP address here
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    const resultJSON = await result.json();
    notificationHandler(resultJSON.msg);
  };

  const submitForm = () => {
    let submitData = {};

    if (phoneNumberRef.current.value) {
      if (!codeRef.current.value) {
        submitData = {
          phoneNumber: countryCode.current.value + phoneNumberRef.current.value,
        };
        callAPI("createNewAccessCode", submitData);
      } else {
        submitData = {
          phoneNumber: countryCode.current.value + phoneNumberRef.current.value,
          accessCode: codeRef.current.value,
        };
        callAPI("validateAccessCode", submitData);
      }
    }
  };
  return (
    <div className="form-container flex items-center justify-center">
      <FormComponent submitForm={submitForm} errorMsg={errorMsg}>
        <PhoneInputContainer
          countryCode={countryCode}
          phoneNumberRef={phoneNumberRef}
          validatePhoneNumber={validatePhoneNumber}
          errorMsg={errorMsg.phoneError}
        />
        <CodeInputContainer
          codeRef={codeRef}
          validateCodeNumber={validateCodeNumber}
          errorMsg={errorMsg.codeError}
        />
      </FormComponent>
      <ToastContainer />
    </div>
  );
};

export default FormContainer;
