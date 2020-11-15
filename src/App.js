import React, { useState } from "react";
import Heading from "./Heading";
import Screen from "./Screen";
import { evaluate } from "mathjs";
import "./styles.css";
function App() {
  const [input, setInput] = useState("0");
  const [notFirstInput, setNotFirstInput] = useState(false);

  function handleClick(value) {
    if (input !== "MATH ERROR") {
      let newExpression;
      if (notFirstInput === false) {
        newExpression = value;
        let st1 = true;
        // console.log(newExpression);
        setNotFirstInput(st1);
      } else {
        newExpression = input.toString() + value;
      }
      setInput(newExpression);
    } else {
      clear();
    }
    console.log(input);
    console.log(notFirstInput);
  }
  function clear() {
    setNotFirstInput(false);
    setInput("0");
  }
  function deleteNum() {
    if (input !== "MATH ERROR") {
      if (input.length === 1) {
        setInput("0");
        setNotFirstInput(false);
      } else {
        let newExpression = input.slice(0, input.length - 1);
        setInput(newExpression);
      }
    } else {
      clear();
    }
  }
  function evaluateExp() {
    let newExpression;
    try {
      newExpression = evaluate(input);
      if (
        newExpression === Infinity ||
        newExpression === -Infinity ||
        newExpression.toString() === "NaN"
      ) {
        setInput("MATH ERROR");
      } else if (newExpression === 0) {
        setInput("0");
        setNotFirstInput(false);
      } else {
        setInput(newExpression.toString());
      }
    } catch (e) {
      setInput("MATH ERROR");
    }
  }
  return (
    <div className="container">
      <Heading />
      <Screen input={input} />
      <div className="row">
        <button className="col special" onClick={clear}>
          C
        </button>
        <button className="col special" onClick={() => handleClick("%")}>
          %
        </button>
        <button className="col special" onClick={deleteNum}>
          Del
        </button>
        <button className="side col" onClick={() => handleClick("/")}>
          /
        </button>
      </div>
      <div className="row">
        <button className="col" onClick={() => handleClick("1")}>
          1
        </button>
        <button className="col" onClick={() => handleClick("2")}>
          2
        </button>
        <button className="col" onClick={() => handleClick("3")}>
          3
        </button>
        <button className="side col" onClick={() => handleClick("*")}>
          *
        </button>
      </div>
      <div className="row">
        <button className="col" onClick={() => handleClick("4")}>
          4
        </button>
        <button className="col" onClick={() => handleClick("5")}>
          5
        </button>
        <button className="col" onClick={() => handleClick("6")}>
          6
        </button>
        <button className="side col" onClick={() => handleClick("-")}>
          -
        </button>
      </div>
      <div className="row">
        <button className="col" onClick={() => handleClick("7")}>
          7
        </button>
        <button className="col" onClick={() => handleClick("8")}>
          8
        </button>
        <button className="col" onClick={() => handleClick("9")}>
          9
        </button>
        <button className="side col" onClick={() => handleClick("+")}>
          +
        </button>
      </div>
      <div className="row">
        <button className="col" onClick={() => handleClick("0")}>
          0
        </button>
        <button className="col" onClick={() => handleClick("00")}>
          00
        </button>
        <button className="col" onClick={() => handleClick(".")}>
          .
        </button>
        <button className="side col" onClick={evaluateExp}>
          =
        </button>
      </div>
    </div>
  );
}
export default App;
