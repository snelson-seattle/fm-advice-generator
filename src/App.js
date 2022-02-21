import { useEffect } from "react";

import AdviceBox from "./components/AdviceBox";
import Advice from "./components/Advice";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";

function App() {
  return (
    <>
    <AdviceBox>
      <Advice />
    </AdviceBox>
      <Footer>
        <Attribution />
      </Footer>
    </>
  );
}

export default App;
