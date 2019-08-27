import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Setting from "./Setting";
import Param from "./Param";

function App() {
  const [timerRunning, setTimerRunning] = React.useState(false);
  const [sessionLength, setSessionLength] = React.useState(1500);
  const [breakLength, setBreakLength] = React.useState(300);
  const step = 60;

  function increment(settingName) {
    const lengthMax = 3600;
    console.log(settingName);

    if (settingName === "sessionLength") {
      setSessionLength(
        sessionLength + step <= lengthMax ? sessionLength + step : lengthMax
      );
    } else {
      setBreakLength(
        breakLength + step <= lengthMax ? breakLength + step : lengthMax
      );
    }
  }

  function decrement(settingName) {
    const lengthMin = 0;

    if (settingName === "sessionLength") {
      setSessionLength(
        sessionLength - step >= lengthMin ? sessionLength - step : lengthMin
      );
    } else {
      setBreakLength(
        breakLength - step >= lengthMin ? breakLength - step : lengthMin
      );
    }
  }

  const settings = ["sessionLength", "breakLength"];

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="Settings">
        {settings.map((setting, index) => (
          <Setting
            index={index}
            settingName={setting}
            timerRunning={timerRunning}
            increment={increment}
            decrement={decrement}
            timeLength={
              setting === "sessionLength" ? sessionLength : breakLength
            }
          />
        ))}

        <Param>{sessionLength}</Param>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
