import * as Action from "../action";
const initState = {
  table: [],
  pageSize: 1,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case Action.GET_TABLE_DATA: {
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
export default reducer;
