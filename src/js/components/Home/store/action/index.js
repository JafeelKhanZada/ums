import * as Action from "../constant";
export const handleIncrement = () => {
  return {
    type: Action.INCREMENT
  };
};
export const handleDecrement = () => {
  return {
    type: Action.DECREMENT
  };
};
