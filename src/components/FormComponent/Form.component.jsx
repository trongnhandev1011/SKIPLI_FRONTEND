import React from "react";
import "./Form.style.scss";

const FormComponent = ({ setPhoneNumber, validateForm, errorMsg }) => {
  return (
    <div className="form-component flex justify-center">
      <div className="w-full h-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Phone Number:
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              id="phone-number"
              type="text"
              placeholder="Your phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                validateForm(e.target.value);
              }}
            />
          </div>
          {errorMsg ? (
            <div className="error-msg text-red-600 mb-4">{errorMsg}</div>
          ) : null}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700"
              id="phone-number"
              type="text"
              placeholder="6 digits. For ex: 123456"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
