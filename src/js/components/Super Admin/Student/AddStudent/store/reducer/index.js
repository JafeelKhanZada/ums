import * as Action from "../action/";
const initState = {
  defaultValue: {},
  Batch: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_BATCH: {
      return {
        ...state,
        Batch: action.payload,
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
