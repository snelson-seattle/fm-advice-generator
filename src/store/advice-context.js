import { createContext, useState } from "react";

const AdviceContext = createContext({
  adviceID: "",
  advice: "",
  getAdvice: async () => {},
});

export function AdviceContextProvider(props) {
  const [adviceID, setAdviceID] = useState("");
  const [advice, setAdvice] = useState("Loading...");

  async function getAdvice() {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdviceID(data.slip.id);
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  }

  const context = {
    adviceID: adviceID,
    advice: advice,
    getAdvice: getAdvice,
  };

  return (
    <AdviceContext.Provider value={context}>
      {props.children}
    </AdviceContext.Provider>
  );
}

export default AdviceContext;
