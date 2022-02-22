import { useEffect, useContext } from "react";

import AdviceBox from "./components/AdviceBox";
import Advice from "./components/Advice";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";

import  AdviceContext from "./store/advice-context";

function App() {
  const context = useContext(AdviceContext);

  useEffect(() => {
    context.getAdvice();
  });

  return (
    <>
    <AdviceBox adviceID={context.adviceID} handleClick={context.getAdvice}>
      <Advice advice={context.advice} />
    </AdviceBox>
      <Footer>
        <Attribution />
      </Footer>
    </>
  );
}

export default App;
