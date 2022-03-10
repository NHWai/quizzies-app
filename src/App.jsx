import React from "react";
import WelcomePage from "./component/WelcomePage";
import Main from "./component/Main";
import { ContentProvider } from "./context/Content";

function App() {
  const [click, setClick] = React.useState(true);

  function startQuiz() {
    setClick(false);
  }

  return (
    <ContentProvider>
      <div>{click ? <WelcomePage startQuiz={startQuiz} /> : <Main />}</div>
    </ContentProvider>
  );
}

export default App;
