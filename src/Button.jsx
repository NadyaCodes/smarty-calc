import React from "react";
import { symbolsArray } from "./helpers";

export default function Button(props) {
  const { sign, setEquation, equation } = props;
  const checkAndEquate = () => {
    let testEquation = equation;
    if (testEquation[0] === "---") {
      testEquation.splice(0, 1);
    }
    if (symbolsArray.includes(sign) && testEquation.length < 1) {
      return alert("Please select a number first");
    }
    if (
      symbolsArray.includes(sign) &&
      symbolsArray.includes(testEquation[testEquation.length - 1])
    ) {
      return alert("Please select a number");
    }
    return setEquation([...testEquation, sign]);
  };
  return <button onClick={() => checkAndEquate()}>{sign}</button>;
}
