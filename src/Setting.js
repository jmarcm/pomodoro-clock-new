import React from "react";

function Setting(props) {
  const ref = props.settingName === "sessionLength" ? "Session" : "Break;";
  function increment() {
    if (props.timerRunning) return;
    props.increment(props.settingName);
  }

  function decrement() {
    if (props.timerRunning) return;
    props.decrement(props.settingName);
  }

  return (
    <div className="setting">
      <h2>{ref}</h2>
      <button onClick={increment}>+</button>
      {props.timeLength}
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Setting;
