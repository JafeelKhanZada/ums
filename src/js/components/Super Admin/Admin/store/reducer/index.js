import * as Action from "../action";
const initState = {
  table: [],
  roles: [],
  employee: [],
  department: [],
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_ROLES: {
      return {
        ...state,
        roles: action.payload,
      };
    }
    case Action.GET_EMPLOYEE: {
      return {
        ...state,
        employee: action.payload,
      };
    }
    case Action.GET_DEPARTMENT: {
      return {
        ...state,
        department: action.payload,
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
