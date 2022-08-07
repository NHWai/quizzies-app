import { useState, useContext } from "react";
import Content from "../context/Content";

function Btn(props) {
  const [check, setCheck] = useState(() => true);
  const correctAns = props.correctAns;
  const inCorrectAns = props.inCorrectAns;
  const [score, setScore] = useState(0);

  const { reFetch } = useContext(Content);

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
    if (score == 5) {
      reFetch();
    }
    setCheck(true);
    setScore(0);
  }

  if (check)
    return (
      <div className="goBack">
        <button onClick={checkAns} className="btn-sm">
          Check Answer
        </button>
        <button onClick={reFetch} className="btn-sm">
          New Quizzs
        </button>
      </div>
    );

  if (!check)
    return (
      <div className="goBack">
        <p>Your Score {score}/5</p>
        <button onClick={playAgain} className="btn-sm">
          {score == 5 ? "New Game" : "Play Again"}
        </button>
      </div>
    );
}

export default Btn;
