import React from "react";
import styles from "../Components/Button.module.css";

function Buttoncontainer({onButtonClick}) {
  const buttonsNames = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttons}>
        {buttonsNames.map((buttons) => {
          return <button key={buttons} onClick={()=>{onButtonClick(buttons)}} className="btn btn-primary">{buttons}</button>;
        })}
      </div>
    </>
  );
}

export default Buttoncontainer;
