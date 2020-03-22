import React from "react";
import Reducer from "./store/reducer";
import * as Action from "./store/action/";
import { withReducer } from "../../redux/withReducer";
import { useSelector, useDispatch } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.Home.counter);
  const onClickIncrement = e => {
    e.preventDefault();
    dispatch(Action.handleIncrement());
  };
  const onClickDecrement = e => {
    e.preventDefault();
    dispatch(Action.handleDecrement());
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={onClickIncrement}>Increament</button>
      <button onClick={onClickDecrement}>Decreament</button>
    </div>
  );
}

export default withReducer("Home", Reducer)(Home);
