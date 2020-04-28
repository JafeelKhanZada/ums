import * as Action from "../action/";
const initState = {
  defaultValue: {},
  PROGRAM: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_PROGRAM: {
      return {
        ...state,
        PROGRAM: action.payload,
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
