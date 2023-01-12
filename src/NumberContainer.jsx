import React from "react";
import Button from "./Button";
import { useState } from "react";
import { numbersArray, symbolsArray, calc } from "./helpers";
import confetti from "canvas-confetti";

export default function NumberContainer() {
  const [total, setTotal] = useState(0);
  const [equation, setEquation] = useState(["---"]);

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
    setEquation(["---"]);
  };

  const back = (array) => {
    if (array.length === 1) {
      return setEquation(["---"]);
    }
    const newArray = [...array];
    newArray.pop();
    setEquation(newArray);
  };

  const randomSym = () => {
    let modifiedNumbersArray = numbersArray.slice(0, numbersArray.length - 2);
    const totalNums = [...modifiedNumbersArray, ...symbolsArray];
    let symbolIndex = 0;
    if (
      symbolsArray.includes(equation[equation.length - 1]) ||
      equation.length === 1 ||
      equation.length === 0
    ) {
      symbolIndex = Math.floor(Math.random() * modifiedNumbersArray.length);
    } else {
      symbolIndex = Math.floor(Math.random() * totalNums.length);
    }
    if (equation[0] === "---") {
      return setEquation([totalNums[symbolIndex]]);
    } else {
      return setEquation([...equation, totalNums[symbolIndex]]);
    }
  };

  let equationDisplay = equation.map((eq, index) => {
    if (symbolsArray.includes(eq)) {
      return (
        <span className="symbol" key={index}>
          {eq}
        </span>
      );
    } else if (eq === "-") {
      return (
        <span className="negative" key={index}>
          {eq}
        </span>
      );
    } else {
      return <span key={index}>{eq}</span>;
    }
  });

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
      </div>
      <button onClick={() => calc(equation, setTotal)} className="equals">
        =
      </button>
      <div className="equation">{equationDisplay}</div>
      <h2>Total: {total}</h2>
      <button
        className="confetti"
        onClick={
          total <= 3000
            ? () =>
                confetti({
                  particleCount: total,
                  spread: 170,
                  origin: { y: 0.9 },
                })
            : () =>
                confetti({
                  particleCount: 3000,
                  spread: 170,
                  origin: { y: 0.9 },
                })
        }
      >
        CONFETTI IT!
      </button>
    </div>
  );
}
