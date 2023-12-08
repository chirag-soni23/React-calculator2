import React, { useState } from "react";
import styles from "../src/App.module.css";
import Display from "./Components/Display";
import Buttoncontainer from "./Components/Buttoncontainer";

function App() {
  const [Calval, setcalval] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setcalval("");
    } else if (buttonText === "=") {
      const result = eval(Calval);
      setcalval(result);
    } else {
      const newDisplayvalue = Calval + buttonText;
      setcalval(newDisplayvalue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={Calval} />
      <Buttoncontainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
