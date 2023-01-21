import React from "react";

export default function RollCount(props) {
  return (
    <div>
      <h3 className="roll-count">Times Rolled: {props.count}</h3>
    </div>
  );
}
