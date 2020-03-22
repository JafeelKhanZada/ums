import * as Action from "../constant";
const initState = {
  counter: 0
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.INCREMENT_ASYNC: {
      return {
        ...state,
        counter: ++state.counter
      };
    }
    case Action.DECREMENT: {
      return {
        ...state,
        counter: --state.counter
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
export default reducer;
