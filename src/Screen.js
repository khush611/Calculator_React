import React from "react";
export default function Screen(props) {
  return (
    <div>
      <div className="row calculator-screen">{props.input}</div>
    </div>
  );
}
