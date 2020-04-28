import * as Action from "../action";
const initState = {
  defaultValue: {},
  Program: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_PROGRAM: {
      return {
        ...state,
        Program: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default reducer;
