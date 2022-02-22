import React, { Fragment, useState } from "react";
import './style/app.scss'

export const App = function() {
  const [expression, setExpression] = useState("0");
  const [answer, setAnswer] = useState(expression); 

  function display(symbol) {

    setExpression((prevValue) => {
      if (
        /[+*-/]/.test(symbol) &&
        /[+*-/]/.test(prevValue[prevValue.length - 1])
      ) {
        let newValue;
        if (/[-]/.test(symbol)) {
          newValue = prevValue.slice(0, prevValue.length) + symbol;
        } else {
          let count = 0;
          for (let i = 0; i < prevValue.length; i++) {
            if (isNaN(+prevValue[i])) {
              count++;
            } else {
              count = 0;
            }
          }
          newValue = prevValue.slice(0, prevValue.length - count) + symbol;
        }

        setExpression(newValue);
      } else {
        if (prevValue) {
          prevValue = prevValue + "";
          let valArr = prevValue.split(/[+/*-]/g);
          let lastNumber = valArr[valArr.length - 1];
          if (!isNaN(lastNumber) && /[.]/.test(lastNumber) && symbol === ".") {
            symbol = "";
          }
        }

        setExpression(
          (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
        );
      }
    });

    setAnswer((prevValue) =>
      (prevValue + symbol).replace(/^0/g, "").replace(/\.+/g, ".")
    );
  }

  function calculate() {
    setAnswer(eval(expression));
    setExpression(eval(expression));
  }
  function allClear() {
    setExpression("");
    setAnswer(0);
  }

  return (
    <Fragment>
      <div className="container">
        <h1>Calculator</h1>
        <div className="container__calculator">
          <div className="container__calculator--display">
          <input
            className="container__calculator--display__expression"
            readOnly
            placeholder="0"
            value={expression}
          ></input>
          <input
            id="display"
            className="container__calculator--display__answer"
            disabled
            value={answer}
            type='hidden'
          ></input>
          </div>
          <button id="clear" className="color3 div2" onClick={allClear}>
            AC
          </button>
          <button id="divide" className="color3 div3" onClick={() => display("/")}>
            /
          </button>
          <button id="multiply" className="color3 div4" onClick={() => display("*")}>
            X
          </button>
          <button id="seven" className="color2 div5" onClick={() => display("7")}>
            7
          </button>
          <button id="eight" className="color2 div6" onClick={() => display("8")}>
            8
          </button>
          <button id="nine" className="color2 div7" onClick={() => display("9")}>
            9
          </button>
          <button id="subtract" className="color1 div8" onClick={() => display("-")}>
            -
          </button>
          <button id="four" className="color2 div9" onClick={() => display("4")}> 
            4
          </button>
          <button id="five" className="color2 div10" onClick={() => display("5")}>
            5
          </button>
          <button id="six" className="color2 div11" onClick={() => display("6")}>
            6
          </button>
          <button id="add" className="color1 div12" onClick={() => display("+")}>
            +
          </button>
          <button id="one" className="color2 div13" onClick={() => display("1")}>
            1
          </button>
          <button id="two" className="color2 div14" onClick={() => display("2")}>
            2
          </button>
          <button id="three" className="color2 div15" onClick={() => display("3")}>
            3
          </button>
          <button id="equals" className="color1 div16" onClick={calculate}>
            =
          </button>
          <button id="zero" className="color2 div17" onClick={() => display("0")}>
            0
          </button>
          <button id="decimal" className="color2 div19" onClick={() => display(".")}>
            .
          </button>
        </div>
      </div>
    </Fragment>
  );
};