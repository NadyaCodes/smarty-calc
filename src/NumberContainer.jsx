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

  const back = (array) => {
    const newArray = [...array];
    newArray.pop();
    setEquation(newArray);
  };

  return (
    <div>
      <div className="calc-container">
        <div className="number-container">{numbersBlock}</div>
        <div className="symbols-container">{symbosBlock}</div>
        <button className="vertical" onClick={() => back(equation)}>
          &#9166;
        </button>
        <button onClick={() => calc(equation, setTotal)} className="vertical">
          =
        </button>
        <button onClick={() => resetTotal()} className="vertical">
          <div>C</div>
          <div>L</div>
          <div>E</div>
          <div>A</div>
          <div>R</div>
        </button>
      </div>
      <div className="equation">
        {equation.length > 1 && equation[0] === 0 && equation.slice(1)}
      </div>
      <div className="equation">
        {equation.length > 1 && equation[0] !== 0 && equation}
      </div>
      <div className="equation">
        {equation.length === 1 && equation[0] === 0 && "---"}
      </div>
      <div className="equation">{equation.length <= 0 && "---"}</div>
      <h2>Total: {total}</h2>
    </div>
  );
}
