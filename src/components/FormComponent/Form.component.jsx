import React from "react";
import "./Form.style.scss";

const FormComponent = ({ children, submitForm, errorMsg }) => {
  console.log(!!errorMsg.phoneError || !!errorMsg.codeError);
  return (
    <div className="form-component flex justify-center">
      <div className="w-full h-full">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {children}
          <div className="flex items-center justify-center">
            <button
              onClick={() => submitForm()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              disabled={!!errorMsg.phoneError || !!errorMsg.codeError}
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
