import * as Action from "../action";
const initState = {
  data: null,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_DASHBOARD_DATA: {
      return {
        ...state,
        data: action.payload,
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
