import React from "react";
import SubContainer from "./SubContainer";
import Btn from "./Btn";

function Main(props) {
  const dataEl = props.datas;
  console.log(dataEl);
  const [check, setCheck] = React.useState(() => true);

  const correctAns = dataEl.map((el) => el.correct_answer);
  const inCorrectAns = dataEl.map((el) => el.incorrect_answers).flat();

  const data = dataEl.map((el, idx) => (
    <SubContainer
      key={idx}
      el={el}
      correctAns={el.correct_answer}
      incorrectAns={el.incorrect_answers}
    />
  ));

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
    arr.forEach((el) => el.classList.remove("select"));
  }

  function playAgain() {
    const opt = [...document.querySelectorAll(".opt")];
    opt.forEach((el) => el.classList.remove("ans"));
    opt.forEach((el) => el.classList.remove("wrong"));
  }

  return (
    <div className="main">
      <svg
        className="top"
        width="162"
        height="187"
        viewBox="0 0 162 187"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M99.4095 71.3947C71.1213 40.8508 33.3179 11.7816 37.1727 -29.6933C41.4394 -75.599 75.854 -115.359 118.419 -133.133C158.797 -149.994 206.035 -140.256 241.822 -115.149C271.947 -94.0141 272.823 -53.8756 282.141 -18.271C292.17 20.0508 318.521 60.8106 296.501 93.7792C273.538 128.159 224.991 133.432 183.931 128.768C148.318 124.723 123.751 97.6768 99.4095 71.3947Z"
          fill="#FFFAD1"
        />
      </svg>

      <svg
        className="bot"
        width="65"
        height="62"
        viewBox="0 0 65 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-38.919 2.96445C-10.8241 1.07254 20.4975 -5.87426 40.8434 11.5469C63.3629 30.8293 69.9281 62.0589 61.4141 88.8747C53.3376 114.313 28.2818 132.992 -0.0909882 140.475C-23.9759 146.775 -45.6063 132.093 -68.3914 123.11C-92.9153 113.441 -125.606 110.575 -133.794 87.7612C-142.333 63.9714 -124.677 39.0277 -104.912 21.3621C-87.7687 6.03978 -63.0936 4.59238 -38.919 2.96445Z"
          fill="#DEEBF8"
        />
      </svg>
      <div className="mainContainer">
        {data}
        {/* {check ? (
          <button onClick={checkAns} className="btn-sm">
            Check Answer
          </button>
        ) : (
          <div className="goBack">
            <p>Play Again</p>
            <button onClick={playAgain} className="btn-sm">
              Checked
            </button>
          </div>
        )} */}
        <Btn correctAns={correctAns} inCorrectAns={inCorrectAns} />
      </div>
    </div>
  );
}

export default Main;
