import { useContext } from "react";
import SubContainer from "./SubContainer";
import Btn from "./Btn";
import Content from "../context/Content";
import Layout from "./Layout";
import loading from "../_imgs/Curve-Loading.gif";

function Main() {
  const { data, reFetch } = useContext(Content);
  console.log(reFetch);
  if (!data) {
    return (
      <Layout>
        <img src={loading} />
      </Layout>
    );
  }

  if (data) {
    const correctAns = data.map((el) => el.correct_answer);
    const inCorrectAns = data.map((el) => el.incorrect_answers).flat();

    const datas = data.map((el, idx) => (
      <SubContainer
        key={idx}
        el={el}
        correctAns={el.correct_answer}
        incorrectAns={el.incorrect_answers}
      />
    ));

    return (
      <Layout>
        {datas}
        <Btn correctAns={correctAns} inCorrectAns={inCorrectAns} />
      </Layout>
    );
  }
}

export default Main;
