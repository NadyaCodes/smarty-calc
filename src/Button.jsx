import React from "react";
import { symbolsArray } from "./helpers";

export default function Button(props) {
  const { sign, setEquation, equation } = props;
  const checkAndEquate = () => {
    if (symbolsArray.includes(sign) && equation.length <= 1) {
      return alert("Please select a number first");
    }
    if (
      symbolsArray.includes(sign) &&
      symbolsArray.includes(equation[equation.length - 1])
    ) {
      return alert("Please select a number");
    }
    return setEquation([...equation, sign]);
  };
  return <button onClick={() => checkAndEquate()}>{sign}</button>;
}
