import React from "react";

export default function Button(props) {
  const { sign, setEquation, equation } = props;
  return (
    <button onClick={() => setEquation([...equation, sign])}>{sign}</button>
  );
}
