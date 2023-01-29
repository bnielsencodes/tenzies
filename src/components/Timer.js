import { useEffect } from "react";

export default function Timer(props) {
  useEffect(() => {
    let interval;
    if (!props.tenzies && props.gameStarted) {
      interval = setInterval(() => {
        props.setTime((prevTime) => prevTime + 100);
      }, 100);
    } else if (props.tenzies) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props.holdDice, props]);

  return (
    <div className="timer-container">
      <p>Time:</p>
      <div className="timer">
        {/* <span>{("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:</span> */}
        <span>{("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((props.time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
}
