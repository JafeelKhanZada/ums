import * as Action from "../action";
const initState = {
  defaultValue: {},
  table: [],
  size: 1,
};
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_COURSE: {
      return {
        ...state,
        table: action.payload.table,
        pageSize: action.payload.size,
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
