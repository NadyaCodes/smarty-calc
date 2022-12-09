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

  const randomSym = () => {
    const totalNums = [...numbersArray, ...symbolsArray];
    let symbolIndex = 0;
    if (
      symbolsArray.includes(equation[equation.length - 1]) ||
      equation.length === 1 ||
      equation.length === 0
    ) {
      symbolIndex = Math.floor(Math.random() * numbersArray.length);
    } else {
      symbolIndex = Math.floor(Math.random() * totalNums.length);
    }
    return setEquation([...equation, totalNums[symbolIndex]]);
  };

  let equationDisplay = "";

  if (equation[0] === 0) {
    equationDisplay = equation.slice(1);
  } else {
    equationDisplay = equation;
  }

  if (equationDisplay.length <= 0) {
    equationDisplay = "---";
  }

  return (
    <div>
      <div className="calc-container">
        <div className="number-container">{numbersBlock}</div>
        <div className="symbols-container">{symbosBlock}</div>
        <button className="vertical back" onClick={() => back(equation)}>
          &#9166;
        </button>

        <button onClick={() => resetTotal()} className="vertical clear">
          <div>C</div>
          <div>L</div>
          <div>E</div>
          <div>A</div>
          <div>R</div>
        </button>
        <button className="vertical random" onClick={() => randomSym()}>
          <div>R</div>
          <div>A</div>
          <div>N</div>
          <div>D</div>
          <div>O</div>
          <div>M</div>
        </button>
        <button
          onClick={() => calc(equation, setTotal)}
          className="vertical equals"
        >
          =
        </button>
      </div>
      <div className="equation">{equationDisplay}</div>
      <h2>Total: {total}</h2>
    </div>
  );
}
