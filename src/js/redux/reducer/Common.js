import * as Action from "../constant";
const initState = {
  show: false,
  message: "",
  type: "",
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.ALERT_SUCCESS: {
      return {
        ...state,
        show: true,
        message: action.payload.message,
        type: "success",
      };
    }
    case Action.ALERT_ERROR: {
      return {
        ...state,
        show: true,
        message: action.payload.message,
        type: "error",
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
