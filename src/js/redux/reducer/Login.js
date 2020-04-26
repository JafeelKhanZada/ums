import * as Action from "../constant";
const initState = {
  auth: false,
  payload: null,
  role: "student",
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.LOGIN_IN: {
      return {
        ...state,
        auth: true,
        payload: action.payload,
      };
    }
    case Action.TOKEN_VERIFY: {
      return {
        ...state,
        auth: true,
        payload: action.payload,
      };
    }
    case Action.LOGOUT: {
      return {
        ...state,
        auth: false,
        payload: null,
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
