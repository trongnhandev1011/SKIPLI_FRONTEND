import React from "react";

const CodeInputComponent = ({ codeRef, validateCodeNumber, errorMsg }) => {
  return (
    <div className="code-input-component">
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Validation code:
        </label>
        <input
          className="border rounded w-full py-2 px-3 text-gray-700"
          id="phone-number"
          type="text"
          placeholder="6 digits. For ex: 123456"
          ref={codeRef}
          onChange={(e) => {
            validateCodeNumber(e.target.value);
          }}
        />
      </div>
      {errorMsg ? (
        <div className="error-msg text-red-600 mb-4">{errorMsg}</div>
      ) : null}
    </div>
  );
};

export default CodeInputComponent;
