import React from "react";
import CodeInputComponent from "../../components/CodeInputComponent/CodeInput.component";

const CodeInputContainer = ({ codeRef, validateCodeNumber, errorMsg }) => {
  return (
    <div className="code-input-container">
      <CodeInputComponent
        codeRef={codeRef}
        validateCodeNumber={validateCodeNumber}
        errorMsg={errorMsg}
      />
    </div>
  );
};

export default CodeInputContainer;
