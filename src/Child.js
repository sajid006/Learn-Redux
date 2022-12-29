import React from "react";
import GrandChild from "./GrandChild";
function Child() {

  return (
    <div className="Child">
      <h1>I am child</h1>
      <GrandChild/>
    </div>
  );
}

export default Child;
