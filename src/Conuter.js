import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment } from "./Redux/CounterAction";
import { decrement, increment, selectCount } from "./Slices/rcount";

function Conut() {
  const dispatch = useDispatch();
  //const counter = useSelector((state) => state.counter);
  const counter = useSelector(selectCount);
  // console.log(counter);
  return (
    <div>
      <h1>counter function</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <span> {counter} </span>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Conut;
