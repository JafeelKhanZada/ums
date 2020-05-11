import * as Action from "../action";
const initState = {
  defaultValue: {},
  table: [],
  size: 1,
  employee: [],
};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_TEACHERS: {
      return {
        ...state,
        table: action.payload.table,
        pageSize: action.payload.size,
      };
    }
    case Action.GET_EMPLOYEES: {
      return {
        ...state,
        employee: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
export default Reducer;
