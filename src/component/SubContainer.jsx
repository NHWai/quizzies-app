import React from "react";

function SubContainer(props) {
  const arr = props.incorrectAns;
  const el = props.correctAns;
  const ran = Math.floor(Math.random() * 3);
  arr.splice(ran, 0, el);
  const arr2 = [...arr];

  function isSelected(event) {
    const nodeList = [...event.target.parentElement.childNodes];
    if (event.target.classList.contains("opt")) {
      nodeList.map((el) => el.classList.remove("select"));
      event.target.classList.add("select");
    }
  }

  return (
    <div className="subContainer">
      <p className="quiz-ques">{props.el.question}</p>
      <div onClick={isSelected} className="opts">
        {arr2.map((el, idx) => (
          <button key={idx} className="opt">
            {el}
          </button>
        ))}
      </div>
      <hr className="line"></hr>
    </div>
  );
}

export default SubContainer;
