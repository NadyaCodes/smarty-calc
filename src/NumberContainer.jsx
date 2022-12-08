import React from "react";
import Button from "./Button";
import { useState } from "react";
import { numbersArray, symbolsArray, calc } from "./helpers";

export default function NumberContainer() {
  const [total, setTotal] = useState(0);
  const [equation, setEquation] = useState([0]);

  const numbersBlock = numbersArray.map((number, index) => {
    return (
      <Button
        key={index}
        sign={number}
        setEquation={setEquation}
        equation={equation}
      />
    );
  });

  const symbosBlock = symbolsArray.map((symbol, index) => {
    return (
      <Button
        key={index}
        sign={symbol}
        setEquation={setEquation}
        equation={equation}
      />
    );
  });

  const resetTotal = () => {
    setTotal(0);
    setEquation([0]);
  };

  return (
    <div>
      <div className="calc-container">
        <div className="number-container">{numbersBlock}</div>
        <div className="symbols-container">{symbosBlock}</div>
      </div>
      <div>{equation.length > 1 && equation[0] === 0 && equation.slice(1)}</div>
      <div>{equation.length > 1 && equation[0] !== 0 && equation}</div>
      <div>{equation.length === 1 && equation[0] === 0 && "---"}</div>
      <div>{equation.length === 0 && "---"}</div>
      <button onClick={() => calc(equation, setTotal)}>=</button>
      <h2>Total: {total}</h2>
      <button onClick={() => resetTotal()}>C</button>
    </div>
  );
}
