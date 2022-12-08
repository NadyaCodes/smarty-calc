import React from "react";
import { symbolsArray } from "./helpers";

export default function Button(props) {
  const { sign, setEquation, equation } = props;
  const checkAndEquate = () => {
    // for (let i = 0; i < symbolsArray.length; i++) {
    //   if (equation[equation.length - 1] === symbolsArray[i] && ) {
    //     return alert("Please select a number");
    //   }
    // }

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
