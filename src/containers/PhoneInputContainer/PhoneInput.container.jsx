import React, { useState } from "react";
import PhoneInputComponent from "../../components/PhoneInputComponent/PhoneInput.component";

const PhoneInputContainer = ({
  countryCode,
  phoneNumberRef,
  validatePhoneNumber,
  errorMsg,
}) => {
  return (
    <div className="mb-4">
      <PhoneInputComponent
        countryCode={countryCode}
        phoneNumberRef={phoneNumberRef}
        validatePhoneNumber={validatePhoneNumber}
        errorMsg={errorMsg}
      />
    </div>
  );
};

export default PhoneInputContainer;
