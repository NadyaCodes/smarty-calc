import React from "react";
import { numbersArray, symbolsArray } from "./helpers";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Button(props) {
  const { sign, setEquation, equation } = props;
  const checkAndEquate = () => {
    let testEquation = equation;
    if (testEquation[0] === "---") {
      testEquation.splice(0, 1);
    }

    if (symbolsArray.includes(sign) && testEquation.length < 1) {
      return toast.error("Please select a number first!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
    if (
      symbolsArray.includes(sign) &&
      symbolsArray.includes(testEquation[testEquation.length - 1])
    ) {
      return toast.error("Please select a number!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
    if (sign === "-" && numbersArray.includes(equation[equation.length - 1])) {
      return toast.error("Cannot have negative in middle of number", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
    }
    return setEquation([...testEquation, sign]);
  };
  return (
    <div>
      <ToastContainer />
      <button onClick={() => checkAndEquate()}>{sign}</button>
    </div>
  );
}
