import React from "react";

function Btn(props) {
  const [check, setCheck] = React.useState(() => true);
  const correctAns = props.correctAns;
  const inCorrectAns = props.inCorrectAns;
  const [score, setScore] = React.useState(0);

  function checkAns() {
    const arr = [...document.querySelectorAll(".select")];
    const opt = [...document.querySelectorAll(".opt")];

    opt.forEach((el) => {
      if (correctAns.includes(el.textContent)) {
        el.classList.add("ans");
      } else if (
        el.classList.contains("select") &&
        inCorrectAns.includes(el.textContent)
      ) {
        el.classList.add("wrong");
      }
    });
    arr.forEach((el) => {
      el.classList.remove("select");
      if (correctAns.includes(el.textContent)) {
        setScore((el) => el + 1);
      }
    });
    setCheck(false);
  }

  function playAgain() {
    const opt = [...document.querySelectorAll(".opt")];
    opt.forEach((el) => el.classList.remove("ans"));
    opt.forEach((el) => el.classList.remove("wrong"));
    setCheck(true);
    setScore(0);
  }

  if (check)
    return (
      <button onClick={checkAns} className="btn-sm">
        Check Answer
      </button>
    );

  if (!check)
    return (
      <div className="goBack">
        <p>Your Score {score}/5</p>
        <button onClick={playAgain} className="btn-sm">
          Play Again
        </button>
      </div>
    );
}

export default Btn;
