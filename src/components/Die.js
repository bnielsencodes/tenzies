import React from "react";

export default function Die(props) {
  return (
    <div className="die-face">
      <h2 className="die-num"></h2>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
