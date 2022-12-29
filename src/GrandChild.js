import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions/index";
function GrandChild() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();
  return (
    <div className="Child">
      <h1>I am grand child</h1>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      {isLogged ? <h1>Valuable info</h1> : <h1>You can't see</h1>}
    </div>
  );
}

export default GrandChild;
