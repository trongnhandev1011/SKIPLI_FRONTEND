import React from "react";
import { COUNTRY_CODE } from "../../constants/countryCode";

const PhoneInputComponent = ({
  countryCode,
  phoneNumberRef,
  validatePhoneNumber,
  errorMsg,
}) => {
  return (
    <div className="phone-input-component">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Phone Number:
        </label>
        <div className="flex">
          <select name="countryCodes" style={{ width: 100 }} ref={countryCode}>
            {COUNTRY_CODE.map((countryCode, idx) => (
              <option value={countryCode.code} key={idx}>
                {countryCode.code + " " + countryCode.name}
              </option>
            ))}
          </select>
          <input
            className="border rounded w-full py-2 px-3 text-gray-700"
            id="phone-number"
            type="text"
            placeholder="Your phone number"
            ref={phoneNumberRef}
            onChange={(e) => {
              validatePhoneNumber(e.target.value);
            }}
          />
        </div>
        {errorMsg ? (
          <div className="error-msg text-red-600 mb-4">{errorMsg}</div>
        ) : null}
      </div>
    </div>
  );
};

export default PhoneInputComponent;
